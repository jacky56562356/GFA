
import { Merchant, GFAEvent, SupportProgram } from './types.ts';

export const PARTNERS_DATA: Merchant[] = [
  { id: 'p1', name: 'Elite Legal Group', category: 'Legal', country: 'USA', state: 'California', city: 'Los Angeles', address: 'Wilshire Blvd', benefit: '20% off contract review', eligibility: 'Pro Members', logo: 'https://picsum.photos/seed/legal/100' },
  { id: 'p2', name: 'CineStay Suites', category: 'Travel', country: 'USA', state: 'New York', city: 'NYC', address: 'Broadway 42nd', benefit: '15% room discounts', eligibility: 'All Members', logo: 'https://picsum.photos/seed/travel/100' },
  { id: 'p3', name: 'Dragon VFX Studios', category: 'Production', country: 'China', state: 'Beijing', city: 'Beijing', address: 'Chaoyang Dist', benefit: 'Priority render access', eligibility: 'Silver & Up', logo: 'https://picsum.photos/seed/vfx/100' },
  { id: 'p4', name: 'EuroLens Rentals', category: 'Production', country: 'UK', state: 'London', city: 'London', address: 'Soho Square', benefit: '10% gear discount', eligibility: 'Pro Members', logo: 'https://picsum.photos/seed/gear/100' },
  { id: 'p5', name: 'Global Safety Insurance', category: 'Insurance', country: 'USA', state: 'Texas', city: 'Austin', address: 'Main St', benefit: 'Free set audit', eligibility: 'Gold Members', logo: 'https://picsum.photos/seed/ins/100' },
  { id: 'p6', name: 'Director\'s Bistro', category: 'Dining', country: 'France', state: 'Ile-de-France', city: 'Paris', address: 'Rue de Rivoli', benefit: 'Complimentary appetizer', eligibility: 'All Members', logo: 'https://picsum.photos/seed/dining/100' },
  { id: 'p7', name: 'Filmware Pro', category: 'Retail', country: 'USA', state: 'Washington', city: 'Seattle', address: 'Tech Plaza', benefit: 'Student bundle discounts', eligibility: 'Graduate Members', logo: 'https://picsum.photos/seed/retail/100' },
  { id: 'p8', name: 'Oceania Soundstages', category: 'Production', country: 'Australia', state: 'NSW', city: 'Sydney', address: 'Moore Park', benefit: 'Buy 2 days, get 1 free', eligibility: 'Gold Members', logo: 'https://picsum.photos/seed/sound/100' },
  { id: 'p9', name: 'Milano Wardrobe', category: 'Retail', country: 'Italy', state: 'Lombardy', city: 'Milan', address: 'Via Montenapoleone', benefit: '10% off set costumes', eligibility: 'Pro Members', logo: 'https://picsum.photos/seed/fashion/100' },
  { id: 'p10', name: 'Global Courier Film', category: 'Travel', country: 'UK', state: 'England', city: 'London', address: 'Heathrow Logistics', benefit: 'Expedited film shipping', eligibility: 'Pro & Gold', logo: 'https://picsum.photos/seed/shipping/100' },
];

export const EVENTS_DATA: GFAEvent[] = [
  { id: 'e1', title: 'Global Script Award 2024', date: 'Oct 15, 2024', type: 'Competition', image: 'https://picsum.photos/seed/event1/800/400', description: 'Rewarding the boldest voices in new screenwriting.' },
  { id: 'e2', title: 'VFX Innovation Summit', date: 'Nov 02, 2024', type: 'Workshop', image: 'https://picsum.photos/seed/event2/800/400', description: 'Learn the latest in AI-driven compositing.' },
  { id: 'e3', title: 'Beijing Debut Showcase', date: 'Dec 12, 2024', type: 'Showcase', image: 'https://picsum.photos/seed/event3/800/400', description: 'Screenings of certified graduate projects.' },
  { id: 'e4', title: 'Indie Producer Workshop', date: 'Jan 20, 2025', type: 'Workshop', image: 'https://picsum.photos/seed/event4/800/400', description: 'Mastering the business of independent film.' },
  { id: 'e5', title: 'Cannes Community Screening', date: 'May 14, 2025', type: 'Screening', image: 'https://picsum.photos/seed/event5/800/400', description: 'GFA member exclusive screening event.' },
  { id: 'e6', title: 'Talent Scout Expo', date: 'Mar 10, 2025', type: 'Showcase', image: 'https://picsum.photos/seed/event6/800/400', description: 'Connect with verified agencies and directors.' },
];

export const SUPPORT_PROGRAMS_DATA: SupportProgram[] = [
  { id: 's1', title: 'Graduate Film Support', category: 'Graduate', features: ['Script mentorship', 'Festival strategy', 'Grant eligibility'], description: 'Bridging the gap for new filmmakers.' },
  { id: 's2', title: 'Post & VFX Support', category: 'VFX', features: ['Color grading', 'Sound mixing', 'VFX finishing'], description: 'Professional tools for high-end results.' },
  { id: 's3', title: 'Studio & Gear Access', category: 'Studio', features: ['Studio stage booking', 'Camera packages', 'Vehicle logistics'], description: 'Removing hardware barriers.' },
];
