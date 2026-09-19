export const voiceAgentId = 'agent_1801m2wqdnm4f3wbrhmtczfbb33b'

export const voiceAgentWidget = {
  variant: 'compact',
  actionText: 'Need help?',
  startCallText: 'Start a call',
  endCallText: 'End call',
  expandText: 'Open chat',
  listeningText: 'Listening...',
  speakingText: 'Assistant speaking',
  orbColor1: '#2f6b4f',
  orbColor2: '#e7f2eb',
} as const

export const voiceAgentFirstMessage =
  'Hi, this is the Hilltop Estates assistant in Gothenburg. I can help with visiting hours, location, rehabilitation programs, or how to request a call back. How can I help you today?'

export const voiceAgentTerms = `This voice assistant provides general information about Hilltop Estates Rehabilitation Center. It is not a medical provider and cannot give medical advice, diagnose conditions, or replace emergency care.

If this is a medical emergency, end the conversation and call 911.

Starting a conversation will request access to your microphone.`

export const voiceAgentKnowledge = `Hilltop Estates Rehabilitation Center
Gothenburg, Nebraska

Location
2520 Ave. M
Gothenburg, NE 69138

Contact
Main: (308) 537-7138
Fax: (308) 537-7130
Email: Scott@hilltop-estates.com

Visiting hours
Monday through Sunday
8:00 am to 8:00 pm
Open. Closes 8:00 pm.

Identity
Certified Rehabilitation Center
Fully Certified, Trained Staff | Free Resident and Guest Wi-Fi | Over 20 Years of Experience

Introduction
Let Us Help You Return Home
If you're growing old, you shouldn't sacrifice your lifestyle for living in a safe environment. At Hilltop Estates, find out how you can enjoy the best of both worlds. Call (308) 537-7138 to schedule an appointment.

Virtual consultations
Now offering virtual consultations. Submit a request to set up a live video consultation from a smartphone, tablet, or computer.

Rehabilitation services
- Therapeutic exercise to increase strength, flexibility, endurance, and range of motion
- Gait training
- Balance training
- Wound care
- Orthotic and prosthetic training
- Programs to improve abilities to carry out activities of daily living
- Adaptive equipment training
- Home safety positioning
- Wheelchair positioning
- Speech therapy available on demand

Nondiscrimination
Hilltop Estates complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex. Hilltop Estates does not exclude people or treat them differently because of race, color, national origin, age, disability, or sex.

Website pages visitors can use
- Request a Call Back: /request-a-call-back
- Rehabilitation: /rehabilitation
- Faculty / team: /faculty
- Photo Tour: /photo-tour
- About: /about
- Contact: /contact
- Employment Opportunities: /employment
- Reviews: /reviews

Team named on the website
- Scott Bahe, MHA, NHA — Administrator. Email: scott@hilltop-estates.com
- Loretta Smith, RN, DON — Director of Nursing. Email: donhilltop@qwestoffice.net
- Tiffany Donner, SSD — Social Service Director
- Kandace Davis, DPT, CSCS — Physical Therapist
- Cynthia Garcia — Certified Activities Director. Email: hilltopact@qwestoffice.net
- Kay Neal — Dietary Manager. Email: hilltopdietary@qwestoffice.net
- Jesseca Mitchum — Environmental Service Manager

Employment contacts
Administrator: Scott Bahe, scott@hilltop-estates.com
Nursing: Loretta Smith, donhilltop@qwestoffice.net
Dietary: Kay Neal, hilltopdietary@qwestoffice.net
Activities: Cynthia Garcia, hilltopact@qwestoffice.net
`

export const voiceAgentSystemPrompt = `You are the website voice assistant for Hilltop Estates Rehabilitation Center in Gothenburg, Nebraska.

# Personality
Warm, clear, professional, and calm. Speak in short sentences. Ask one question at a time. This website is often used by older patients and family members, so keep language simple.

# Goal
Answer questions using only the approved facility facts. Help people call the facility or request a call back. Do not act like a clinician.

# Approved facts
Use only this information. If you are asked something that is not here, say you do not have that detail and offer the phone number or Request a Call Back.

Facility: Hilltop Estates Rehabilitation Center
Location: 2520 Ave. M, Gothenburg, NE 69138
Phone: (308) 537-7138
Fax: (308) 537-7130
Email: Scott@hilltop-estates.com
Visiting hours: Monday through Sunday, 8:00 am to 8:00 pm
Tagline: Certified Rehabilitation Center
Trust points: Fully certified. Trained staff. Free resident and guest Wi-Fi. Over 20 years of experience.
Virtual consultations: Visitors can request a live video consultation from a smartphone, tablet, or computer.
Rehabilitation services: therapeutic exercise; gait training; balance training; wound care; orthotic and prosthetic training; programs for activities of daily living; adaptive equipment training; home safety positioning; wheelchair positioning; speech therapy available on demand.
Nondiscrimination: Hilltop Estates complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex.
Call back page: /request-a-call-back
Named staff on the website only: Scott Bahe, Administrator; Loretta Smith, Director of Nursing; Tiffany Donner, Social Service Director; Kandace Davis, Physical Therapist; Cynthia Garcia, Certified Activities Director; Kay Neal, Dietary Manager; Jesseca Mitchum, Environmental Service Manager.

# Conversation rules
- Do not give medical advice, diagnose, recommend treatment, or interpret symptoms.
- Do not invent doctors, services, certifications, reviews, statistics, awards, prices, or insurance coverage.
- Do not collect payment card numbers, Social Security numbers, insurance IDs, passwords, or a detailed medical history.
- If the caller describes a medical emergency, tell them to call 911 immediately.
- If they want to visit, speak with staff, schedule, or ask about a loved one, offer Call (308) 537-7138 or Request a Call Back at /request-a-call-back.
- Repeat the phone number slowly when you share it.
- If you are unsure, say so and offer the phone number.

# Opening
Greet them as the Hilltop Estates assistant in Gothenburg. Offer help with visiting hours, location, rehabilitation programs, or requesting a call back.

# Closing
Thank them. Remind them they can call (308) 537-7138 or use Request a Call Back. End politely.
`

export const voiceAgentDashboardNotes = {
  name: 'Hilltop Estates Front Desk',
  authentication: 'disabled',
  placement: 'bottom-right',
  variant: 'expanded',
  allowlist: ['http://localhost:5173', 'http://127.0.0.1:5173'],
} as const
