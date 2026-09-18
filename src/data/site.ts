export const site = {
  name: 'Hilltop Estates Rehabilitation Center',
  shortName: 'Hilltop Estates',
  tagline: 'Certified Rehabilitation Center',
  supportingLine:
    'Fully Certified, Trained Staff | Free Resident and Guest Wi-Fi | Over 20 Years of Experience',
  city: 'Gothenburg, Nebraska',
  addressLines: ['2520 Ave. M', 'Gothenburg, NE 69138'],
  addressQuery: '2520 Ave. M, Gothenburg, NE 69138',
  phoneDisplay: '(308) 537-7138',
  phoneTel: '+13085377138',
  faxDisplay: '(308) 537-7130',
  email: 'Scott@hilltop-estates.com',
  hoursLabel: 'Open • Closes 8:00 pm',
  visitingHours: {
    days: 'Mon - Sun',
    time: '8:00 am - 8:00 pm',
  },
  copyright:
    '© 2026 The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=2520+Ave.+M%2C+Gothenburg%2C+NE+69138',
} as const

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Faculty', to: '/faculty' },
  { label: 'Rehabilitation', to: '/rehabilitation' },
  { label: 'Employment Opportunities', to: '/employment' },
  { label: 'Photo Tour', to: '/photo-tour' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

export const trustHighlights = [
  {
    title: 'Fully Certified',
    description: 'Fully certified care for residents and rehabilitation patients.',
    icon: 'BadgeCheck',
  },
  {
    title: 'Trained Staff',
    description: 'A trained team ready to provide friendly medical attention.',
    icon: 'Users',
  },
  {
    title: 'Free Resident and Guest Wi-Fi',
    description: 'Complimentary Wi-Fi for residents and their guests.',
    icon: 'Wifi',
  },
  {
    title: 'Over 20 Years of Experience',
    description: 'More than two decades of care in Gothenburg, Nebraska.',
    icon: 'HeartHandshake',
  },
] as const

export const intro = {
  heading: 'Let Us Help You Return Home',
  body: "If you're growing old, you shouldn't sacrifice your lifestyle for living in a safe environment. At Hilltop Estates, find out how you can enjoy the best of both worlds. Call us at (308) 537-7138 today to schedule an appointment.",
}

export const rehabQuote = [
  'Let us help you return home.',
  'It takes time to get better.',
  'We are here to help, each step of the way.',
  'Regain your full potential after illness or injury.',
  'Trust us to make rehabilitation easy and comfortable.',
] as const

export const virtualConsult = {
  eyebrow: 'Now Offering',
  heading: 'Virtual Consultations',
  body: 'Submit your request today to set up a live video consultation with Hilltop Estates from your smartphone, tablet, or computer!',
}

export const homeCards = [
  {
    title: 'Nondiscrimination Statement',
    body: 'Hilltop Estates complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex. Hilltop Estates does not exclude people or treat them differently because of race, color, national origin, age, disability, or sex. Take a look at our Notice of Nondiscrimination Statement.',
    cta: 'Learn More',
    to: '/nondiscrimination',
    imageKey: 'cardA' as const,
  },
  {
    title: 'Premium Therapies',
    body: 'We can provide you with a variety of treatments and services, such as balance training, orthotic training, and prosthetic training to name a few. We can also provide speech therapy on demand. Schedule an appointment today to enroll in the programs at our rehabilitation center and improve your abilities to carry out daily activities. Contact us today!',
    cta: 'Learn More',
    to: '/rehabilitation',
    imageKey: 'therapy' as const,
  },
  {
    title: 'Friendly Medical Attention',
    body: 'When you find it difficult to take care of a loved one, turn to the professional team at Hilltop Estates Rehabilitation Center. Our friendly team members will go out of their way to help you in every way they can. You can also send letters to our residents or messages to our e-mail. Our nursing facility will take care of your loved one like family. Get in touch with us to learn more.',
    cta: 'Learn More',
    to: '/contact',
    imageKey: 'care' as const,
  },
]

export const rehabServices = [
  {
    title: 'Therapeutic exercise',
    description:
      'Therapeutic exercise to increase strength, flexibility, endurance, and range of motion.',
    icon: 'Dumbbell',
  },
  {
    title: 'Gait training',
    description: 'Gait training to support safe, confident mobility.',
    icon: 'Footprints',
  },
  {
    title: 'Balance training',
    description: 'Balance training as part of individualized rehabilitation.',
    icon: 'Scale',
  },
  {
    title: 'Wound care',
    description: 'Wound care provided as part of our treatment services.',
    icon: 'HeartPulse',
  },
  {
    title: 'Orthotic and prosthetic training',
    description: 'Orthotic and prosthetic training to support daily function.',
    icon: 'Activity',
  },
  {
    title: 'Activities of daily living',
    description: 'Programs to improve abilities to carry out activities of daily living.',
    icon: 'House',
  },
  {
    title: 'Adaptive equipment training',
    description: 'Adaptive equipment training tailored after an initial evaluation.',
    icon: 'Accessibility',
  },
  {
    title: 'Home safety positioning',
    description: 'Home safety positioning to support a safer return home.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Wheelchair positioning',
    description: 'Wheelchair positioning as part of rehabilitation care.',
    icon: 'Armchair',
  },
  {
    title: 'Speech therapy',
    description: 'Speech therapy available on demand.',
    icon: 'MessageCircle',
  },
] as const

export const testimonials = [
  {
    quote:
      "We couldn't have asked for a better facility and staff to take care of our mother. They are outstanding.",
    name: 'Rollie Williams',
  },
]

export const teamMembers = [
  {
    name: 'Kandace Davis, DPT, CSCS',
    role: 'Physical Therapist',
    photo: 'staffDavis' as const,
    bio: [
      'Kandace is originally from Crawford, NE, and attended Hastings College. She received a BS in Health Promotion and Management and Psychology. She attended Des Moines University, receiving her master\'s degree and later returning for her doctorate.',
      'Her personal interests include spending time with her two kids, following them in their chosen activities, as well as reading, traveling, and exercising.',
      'She moved to this area after graduating from DMU and has enjoyed practicing PT in various settings to include: outpatient orthopedics, aquatics, home health, pediatrics, and geriatrics.',
      'Her professional interests include geriatrics and pediatrics, restoring patients to their highest functional level.',
    ],
    email: null,
  },
  {
    name: 'Cynthia Garcia',
    role: 'Certified Activities Director',
    photo: 'staffGarcia' as const,
    bio: [
      'Cynthia moved from South Texas 6 years ago and moved to Nebraska. She has been working at Hilltop Estates for the past 6 years. In her first two and a half years here, she was the activities assistant, and she is now our director of activities.',
    ],
    email: 'hilltopact@qwestoffice.net',
  },
  {
    name: 'Scott Bahe, MHA, NHA',
    role: 'Administrator',
    photo: 'staffBahe' as const,
    bio: [
      'Scott has been the administrator of Hilltop Estates for over 20 years. Mr. Bahe has a master\'s degree in healthcare administration from Bellevue University. His wife Linda and he have raised a family of three sons and currently has four grandchildren.',
    ],
    email: 'scott@hilltop-estates.com',
  },
  {
    name: 'Tiffany Donner, SSD',
    role: 'Social Service Director',
    photo: 'staffDonner' as const,
    bio: [
      'Tiffany has been working at Hilltop Estates for two years now. She was a CNA/MA prior to accepting the SSD position in July 2018. Prior to Hilltop Estates, Tiffany worked for four years at Gothenburg Health as a CNA on Acute. She loves to take care of others, and it is her passion to meet everyone\'s needs.',
    ],
    email: null,
  },
  {
    name: 'Kay Neal',
    role: 'Dietary Manager',
    photo: null,
    bio: ['Kay remains committed to making mealtime a great experience for our residents.'],
    email: 'hilltopdietary@qwestoffice.net',
  },
  {
    name: 'Loretta Smith, RN, DON',
    role: 'Director of Nursing',
    photo: null,
    bio: [
      'Loretta is a mother of three and has been a nurse for over 20 years. She has a passion for the elderly and long-term care.',
    ],
    email: 'donhilltop@qwestoffice.net',
  },
  {
    name: 'Jesseca Mitchum',
    role: 'Environmental Service Manager',
    photo: null,
    bio: [],
    email: null,
  },
]

export const employmentContacts = [
  {
    title: 'Administrator',
    name: 'Scott Bahe, MHA, NHA',
    email: 'scott@hilltop-estates.com',
  },
  {
    title: 'Nursing',
    name: 'Loretta Smith, RN DON',
    email: 'donhilltop@qwestoffice.net',
  },
  {
    title: 'Dietary',
    name: 'Kay Neal, CDM',
    email: 'hilltopdietary@qwestoffice.net',
  },
  {
    title: 'Activities',
    name: 'Cynthia Garcia, CAD',
    email: 'hilltopact@qwestoffice.net',
  },
]

export const callbackNotes = [
  'For all virtual consultations, we will contact you to schedule a day and time.',
  'For Zoom, any smartphone or computer is able to join a Zoom call, and you do NOT need to have a Zoom account to join your virtual meeting. If you are going to use your phone or tablet, you will need to download the Zoom Cloud Meetings app to join the meeting.',
  'For FaceTime, please make sure you have an iPhone or iPad that can receive calls, and the number provided above is your mobile number.',
]

export const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Do Not Share My Information', to: '/do-not-share' },
  { label: 'Conditions of Use', to: '/conditions-of-use' },
  { label: 'Notice and Take Down Policy', to: '/notice-and-take-down' },
  { label: 'Website Accessibility Policy', to: '/accessibility' },
] as const
