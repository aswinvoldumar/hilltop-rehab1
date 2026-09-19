import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ConversationProvider, useConversation } from '@elevenlabs/react'
import { MessageCircle, Phone, Send, X } from 'lucide-react'
import { ElevenLabsOrb } from './ElevenLabsOrb'
import { voiceAgentFirstMessage, voiceAgentId, voiceAgentWidget } from '../data/voiceAgent'

type ChatMessage = {
  id: string
  role: 'user' | 'agent'
  text: string
}

type IncomingMessage = {
  source?: string
  role?: string
  message?: string
  text?: string
  content?: string
}

function messageText(payload: IncomingMessage) {
  return payload.message || payload.text || payload.content || ''
}

function messageRole(payload: IncomingMessage): ChatMessage['role'] | null {
  const source = payload.source || payload.role
  if (source === 'debug') return null
  if (source === 'user') return 'user'
  if (source === 'ai' || source === 'agent' || source === 'assistant') return 'agent'
  return source ? 'agent' : null
}

function VoiceAgentPanel({ agentId }: { agentId: string }) {
  const [error, setError] = useState<string | null>(null)
  const [starting, setStarting] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const listRef = useRef<HTMLDivElement>(null)

  const conversation = useConversation({
    onMessage: (payload: IncomingMessage) => {
      const text = messageText(payload).trim()
      const role = messageRole(payload)
      if (!text || !role) return

      setMessages((current) => [...current, { id: crypto.randomUUID(), role, text }])
    },
    onError: () => {
      setStarting(false)
      setError('Could not start the chat. Please allow microphone access and try again.')
    },
    onDisconnect: () => {
      setStarting(false)
    },
  })

  const active = conversation.status === 'connected' || conversation.status === 'connecting'

  useEffect(() => {
    const list = listRef.current
    if (list) {
      list.scrollTop = list.scrollHeight
    }
  }, [messages, chatOpen])

  const openChat = async () => {
    setError(null)
    setChatOpen(true)
    setMessages((current) =>
      current.length
        ? current
        : [
            {
              id: 'welcome',
              role: 'agent',
              text: voiceAgentFirstMessage,
            },
          ],
    )

    if (active || starting) {
      return
    }

    setStarting(true)

    try {
      await navigator.mediaDevices.getUserMedia({ audio: true })
      await conversation.startSession({ agentId })
    } catch {
      try {
        await conversation.startSession({ agentId })
      } catch {
        setError('Could not start the chat. Please allow microphone access and try again.')
      }
    } finally {
      setStarting(false)
    }
  }

  const closeChat = async () => {
    setChatOpen(false)
    setDraft('')
    setError(null)
    if (active) {
      await conversation.endSession()
    }
  }

  const sendDraft = () => {
    const text = draft.trim()
    if (!text) return

    setMessages((current) => [...current, { id: crypto.randomUUID(), role: 'user', text }])
    setDraft('')
    conversation.sendUserMessage(text)
  }

  if (!chatOpen) {
    return (
      <div className="fixed bottom-5 right-5 z-[100] w-[min(22rem,calc(100vw-1.5rem))] rounded-[1.75rem] bg-white p-4 shadow-[0_18px_50px_rgba(26,46,34,0.16)]">
        <div className="mb-4 flex items-center gap-3">
          <ElevenLabsOrb size={40} speaking={starting} />
          <p className="text-lg font-semibold tracking-tight text-ink">{voiceAgentWidget.actionText}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openChat}
            disabled={starting}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-ink px-5 text-base font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-70"
          >
            <Phone className="h-4 w-4" />
            {starting ? 'Starting...' : voiceAgentWidget.startCallText}
          </button>
          <button
            type="button"
            onClick={openChat}
            disabled={starting}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-cream disabled:opacity-70"
            aria-label="Open chat"
          >
            <MessageCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    )
  }

  const statusLabel =
    conversation.status === 'connecting' || starting
      ? 'Connecting...'
      : conversation.isSpeaking
        ? voiceAgentWidget.speakingText
        : voiceAgentWidget.listeningText

  return (
    <div className="fixed bottom-5 right-5 z-[100] flex h-[min(34rem,calc(100vh-2.5rem))] w-[min(22.5rem,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_50px_rgba(26,46,34,0.16)]">
      <div className="flex items-center gap-3 border-b border-line px-4 py-3">
        <ElevenLabsOrb size={40} speaking={conversation.isSpeaking || starting} />
        <div className="min-w-0 flex-1">
          <p className="font-semibold tracking-tight text-ink">{voiceAgentWidget.actionText}</p>
          <p className="truncate text-sm text-muted">{statusLabel}</p>
        </div>
        <button
          type="button"
          onClick={closeChat}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink hover:bg-cream"
          aria-label="Close chat"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
        {messages.map((item) => (
          <div
            key={item.id}
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
              item.role === 'user' ? 'ml-auto bg-brand text-white' : 'bg-cream text-ink'
            }`}
          >
            {item.text}
          </div>
        ))}
      </div>

      {error ? <p className="px-4 pb-2 text-sm text-red-700">{error}</p> : null}

      <form
        className="border-t border-line p-3"
        onSubmit={(event) => {
          event.preventDefault()
          sendDraft()
        }}
      >
        <label className="sr-only" htmlFor="hilltop-voice-chat">
          Type a message
        </label>
        <div className="flex items-center gap-2">
          <input
            id="hilltop-voice-chat"
            value={draft}
            onChange={(event) => {
              setDraft(event.target.value)
              if (active) {
                conversation.sendUserActivity()
              }
            }}
            placeholder="Type a message..."
            className="min-h-11 flex-1 rounded-full border border-line bg-cream px-4 text-sm text-ink outline-none focus:border-brand"
          />
          <button
            type="submit"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white hover:bg-brand-dark"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  )
}

export function VoiceAgent() {
  const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID?.trim() || voiceAgentId

  if (!agentId) {
    return null
  }

  return createPortal(
    <ConversationProvider>
      <VoiceAgentPanel agentId={agentId} />
    </ConversationProvider>,
    document.body,
  )
}
