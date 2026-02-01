import { UserRole, MembershipTier, CertType, CertStatus } from './types';

export const MOCK_USER: any = {
  id: 'u-1',
  email: 'talent@gfa.com',
  name: 'Alex Chen',
  role: UserRole.TALENT,
  membership: MembershipTier.PRO,
  avatar: 'https://i.pravatar.cc/150?u=alex',
  location: 'Los Angeles'
};

export const SUGGESTED_SKILLS = [
  'Acting', 'Singing', 'Dancing', 'Martial Arts', 'Piano', 'Guitar', 'Violin',
  'Horse Riding', 'Swimming', 'Stage Combat', 'Voice Acting', 'Improvisation',
  'Ballet', 'Jazz Dance', 'Contemporary Dance', 'Hip Hop', 'Tap Dance',
  'Fencing', 'Archery', 'Driving (Manual)', 'Driving (Automatic)', 'Motorcycling',
  'Fluent Mandarin', 'Fluent Cantonese', 'Fluent Spanish', 'Fluent French',
  'British Accent', 'American Accent', 'Southern Accent', 'Acrobatics', 'Gymnastics',
  'Surfing', 'Skateboarding', 'Rock Climbing', 'Yoga', 'Parkour', 'Stunt Work'
];

export const MOCK_TALENTS: any[] = [
  {
    id: 't-1',
    userId: 'u-1',
    nameZh: '陈艾利',
    nameEn: 'Alex Chen',
    gender: 'Male',
    birthDate: '1998-05-15',
    height: 182,
    weight: 75,
    languages: ['English', 'Mandarin'],
    skills: ['Martial Arts', 'Piano', 'Singing'],
    location: 'Los Angeles',
    photos: ['https://picsum.photos/seed/a1/300/400'],
    videos: [],
    isMinor: false,
    isVerified: true,
    certId: 'cert-1'
  },
  {
    id: 't-2',
    userId: 'u-2',
    nameZh: '张小美',
    nameEn: 'Lily Zhang',
    gender: 'Female',
    birthDate: '2012-03-20',
    height: 145,
    weight: 35,
    languages: ['English'],
    skills: ['Ballet', 'Gymnastics'],
    location: 'New York',
    photos: ['https://picsum.photos/seed/b1/300/400'],
    videos: [],
    isMinor: true,
    guardianId: 'u-3',
    isVerified: true,
    certId: 'cert-2'
  }
];

export const MOCK_PROJECTS: any[] = [
  {
    id: 'p-1',
    productionId: 'prod-1',
    title: 'Neon Dreams: 2049',
    description: 'A cyberpunk thriller set in Neo-Tokyo. High energy, visual focus.',
    location: 'Los Angeles, CA',
    status: 'OPEN',
    createdAt: '2024-01-01',
    roles: [
      { id: 'r-1', name: 'Cyber Runner', ageRange: '18-25', gender: 'Any', requirements: 'Action/Combat skills required.', deadline: '2024-12-30' },
      { id: 'r-2', name: 'Memory Hacker', ageRange: '30-45', gender: 'Female', requirements: 'Subtle acting, tech-savvy look.', deadline: '2024-12-25' }
    ]
  }
];

export const MOCK_MERCHANTS: any[] = [
  {
    id: 'm-1',
    userId: 'u-merchant',
    name: 'The Spotlight Cafe',
    logo: 'https://logo.clearbit.com/starbucks.com',
    category: 'Dining',
    description: 'The preferred hangout for the GFA community in Hollywood.',
    address: '123 Hollywood Blvd',
    city: 'Los Angeles',
    isVerified: true,
    partnershipLevel: 'PREMIUM',
    deals: [
      { id: 'd-1', merchantId: 'm-1', title: 'Actor Fuel: 20% Off', description: 'Show your Pro membership at checkout.', tierRequired: MembershipTier.PRO, expiresAt: '2025-12-31', code: 'GFAPRO20' }
    ]
  }
];

export const MOCK_CERTS: any[] = [
  {
    id: 'cert-1',
    type: CertType.TALENT_CERT,
    ownerId: 'u-1',
    status: CertStatus.APPROVED,
    certNo: 'GFA-T-2024-001',
    issuedAt: '2024-01-15',
    expiresAt: '2025-01-15',
    qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=GFA-T-2024-001',
    verificationSlug: 'alex-chen-verified'
  }
];