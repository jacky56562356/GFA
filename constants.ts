import { Locale, Certification, SupportProgram, MemberTier, Merchant, GFAEvent } from './types';

export const TRANSLATIONS = {
  [Locale.EN]: {
    nav: {
      about: 'About',
      certification: 'Certification',
      support: 'Support',
      casting: 'Casting',
      membership: 'Membership',
      partners: 'Partners',
      events: 'Events',
      contact: 'Contact'
    },
    hero: {
      title: 'GFA Global Film Alliance',
      subtitle: 'Certification • Talent • Support • Opportunity',
      btnCertify: 'Get Certified',
      btnJoin: 'Join Membership',
      btnProject: 'Submit Project'
    }
  },
  [Locale.ZH]: {
    nav: {
      about: '关于我们',
      certification: '行业认证',
      support: '扶持计划',
      casting: '人才与选角',
      membership: '会员权益',
      partners: '合作伙伴',
      events: '活动与奖项',
      contact: '联系我们'
    },
    hero: {
      title: 'GFA 全球电影联盟',
      subtitle: '权威认证 • 人才选拔 • 创作扶持 • 行业机遇',
      btnCertify: '申请认证',
      btnJoin: '加入会员',
      btnProject: '提交项目'
    }
  }
};

export const MOCK_CERTIFICATIONS: Certification[] = [
  { id: '1', type: 'Talent', title: 'Professional Actor Certification', description: 'Industry standard vetting for screen performers.' },
  { id: '2', type: 'Agency', title: 'Certified Production Agency', description: 'Verified compliance with GFA production standards.' },
  { id: '3', type: 'Project', title: 'GFA Official Seal of Quality', description: 'Approval for film projects seeking international distribution.' }
];

export const MOCK_PROGRAMS: SupportProgram[] = [
  {
    id: 'grad-1',
    category: 'Graduate',
    title: 'Graduate Film Support',
    features: ['Script mentorship', 'Production consulting', 'Festival submission guidance'],
    description: 'Providing guidance and mentorship for recent film graduates.'
  },
  {
    id: 'vfx-1',
    category: 'VFX',
    title: 'Post Production & VFX Support',
    features: ['Editing & Color Grading', 'High-end Compositing', 'Immersive Sound Design'],
    description: 'Specialized support for post-production workflows and visual effects.'
  },
  {
    id: 'studio-1',
    category: 'Studio',
    title: 'Studio & Equipment Support',
    features: ['Stage access', 'Lighting & Grip kits', 'Production Vehicles'],
    description: 'Facilitating access to physical production infrastructure.'
  }
];

export const MOCK_TIERS: MemberTier[] = [
  { id: 't1', name: 'Free', price: '$0', benefits: ['Public directory listing', 'Standard audition access', 'Limited merchant perks'] },
  { id: 't2', name: 'Pro', price: '$199/yr', benefits: ['Priority auditions', '20% Equipment discounts', 'VFX Support eligibility', 'Verified badge'], recommended: true },
  { id: 't3', name: 'Gold Agency', price: '$999/yr', benefits: ['Recruitment tools', 'GFA Partner Status', 'Featured placement', 'Legal consultation'] }
];

export const MOCK_MERCHANTS: Merchant[] = [
  {
    id: 'm1',
    name: 'Hollywood Lens Rental',
    category: 'Equipment',
    address: 'Sunset Blvd, CA',
    benefit: '15% Off All Rentals',
    eligibility: 'Pro & Gold Members',
    country: 'USA',
    state: 'CA',
    city: 'Los Angeles',
    logo: 'https://picsum.photos/seed/lens/100/100'
  }
];

export const MOCK_EVENTS: GFAEvent[] = [
  { id: 'e1', title: 'Global Debut Film Festival', date: 'Oct 2024', type: 'Screening', image: 'https://picsum.photos/seed/film1/600/400', description: 'Premiering debut features from global emerging creators.' },
  { id: 'e2', title: 'Cinematography Masterclass', date: 'Nov 2024', type: 'Workshop', image: 'https://picsum.photos/seed/film2/600/400', description: 'Intensive workshop led by industry-leading directors of photography.' }
];