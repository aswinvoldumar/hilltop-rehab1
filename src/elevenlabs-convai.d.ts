import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id'?: string
        dismissible?: string
        variant?: string
        'default-expanded'?: string
        'always-expanded'?: string
        'text-input'?: string
        'avatar-orb-color-1'?: string
        'avatar-orb-color-2'?: string
        'action-text'?: string
        'start-call-text'?: string
        'end-call-text'?: string
        'expand-text'?: string
        'listening-text'?: string
        'speaking-text'?: string
      }
    }
  }
}
