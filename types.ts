
export enum Locale {
  EN = 'en',
  ZH = 'zh',
  ES = 'es',
  FR = 'fr',
  IT = 'it',
  KO = 'ko',
  JA = 'ja',
  DE = 'de'
}

export type OrgStatus = 'Active' | 'Suspended' | 'Expired' | 'Pending';

export interface TransparencyIndicators {
  documentationVerified: boolean;
  feeTransparency: boolean;
  contractClarity: boolean;
  safeguardingPolicy: boolean;
  complaintRatioLow: boolean;
}

export interface Organization {
  id: string;
  name: string;
  logo: string;
  category: string;
  country: string;
  city: string;
  certificationLevel: 'Verified' | 'Certified' | 'Accredited';
  status: OrgStatus;
  trustScore: number; // 0-100
  trustGrade: 'A+' | 'A' | 'B' | 'C' | 'N/A';
  validUntil: string;
  indicators: TransparencyIndicators;
  publicDisclosures: string[];
}

export interface Certification {
  id: string;
  type: string;
  title: string;
  description: string;
}

export interface SupportProgram {
  id: string;
  category: string;
  title: string;
  features: string[];
  description: string;
}

export interface MemberTier {
  id: string;
  name: string;
  price: string;
  benefits: string[];
  recommended?: boolean;
}

export interface Merchant {
  id: string;
  name: string;
  category: string;
  address: string;
  benefit: string;
  eligibility: string;
  country: string;
  state: string;
  city: string;
  logo: string;
}

export interface GFAEvent {
  id: string;
  title: string;
  date: string;
  type: string;
  image: string;
  description: string;
}

export interface Translation {
  meta: { siteName: string; tagline: string };
  nav: {
    home: string;
    certification: string;
    childSafety: string;
    graduateSupport: string;
    registry: string;
    complaints: string;
    about: string;
    memberPortal: string;
    admin: string;
    login: string;
    join: string;
    contact: string;
  };
  disclaimer: {
    title: string;
    statutory: string;
    legal: string;
    heroWarning: string;
  };
  home: {
    hero: any;
    trust: any;
    searchRegistry: any;
    whatWeDo: any;
    globalPresence: any;
    safeguardingSection: {
      title: string;
      subtitle: string;
      cards: { title: string; text: string }[];
      whyExists: { title: string; p1: string; p2: string };
      howHelps: { title: string; list: string[] };
      requirements: { title: string; list: { l: string; t: string }[] };
      benefits: { title: string; list: string[] };
    };
  };
  registry: {
    title: string;
    subtitle: string;
    registryCount: string;
    viewDetails: string;
    reportConcern: string;
    trustScore: string;
    tableHeaders: string[];
    disclaimerBody: string;
    ui: {
      portalLabel: string;
      active: string;
      pending: string;
      revoked: string;
      noResults: string;
    };
  };
  certification: any;
  certificationDetails: {
    levels: { t: string; d: string }[];
    protocols: { t: string; d: string }[];
    cycle: { s: string; d: string }[];
    cta: { title: string; body: string; inquire: string; download: string };
    ui: {
      mainTitle: string;
      protocolsTitle: string;
      cycleTitle: string;
      levelPrefix: string;
    };
  };
  safeguarding: {
    title: string;
    subtitle: string;
    intro: string;
    policyLink: string;
    verificationTool: any;
    categories: any;
    redFlags: any;
    reportingCta: string;
    ui: {
      oversightBadge: string;
      reportingTitle: string;
      reportingBody: string;
      audit: { valid: string; invalid: string; validDesc: string; invalidDesc: string };
      ethicsBtn: string;
      standardsActive: string;
    }
  };
  about: {
    hero: any;
    mission: any;
    vision: any;
    whoWeAre: any;
    whatWeDo: any;
    certification: any;
    youthProtection: any;
    support: any;
    collaboration: any;
    resourceExchange: any;
    network: any;
    governance: any;
    impact: any;
    cta: any;
    ui: {
      mapPlaceholder: string;
      buttons: {
        viewStandards: string;
        readPolicy: string;
        explore: string;
        readCharter: string;
        apply: string;
        readMission: string;
      };
      kickers: {
        profile: string;
        zeroTolerance: string;
      };
      badges: {
        certified: string;
        standard: string;
      };
    };
  };
  complaints: any;
  careerAccess: any;
  graduatePathways: { id: string; t: string; d: string }[];
  membership: {
    title: string;
    intro: string;
    talentTitle: string;
    orgTitle: string;
    entTitle: string;
    entDesc: string;
    entCta: string;
    talentTiers: MemberTier[];
    orgTiers: MemberTier[];
    ui: {
      networkBadge: string;
      orgSubtitle: string;
      joinAs: string;
      select: string;
    };
  };
  partners: any;
  partnersList: Merchant[];
  events: any;
  eventsList: GFAEvent[];
  contact: {
    title: string;
    intro: string;
    labels: any;
    form: any;
    dropdowns: any;
    ui: {
      secretariatBadge: string;
      alertMessage: string;
    };
  };
  transparency: any;
  youthSafetyPolicy: any;
  footer: any;
  common: any;
  support: any;
  supportPrograms: SupportProgram[];
  adminDashboard: any;
  memberPortal: any;
  policies: any;
  casting: any;
  standards: any;
  protection: any;
  directory: any;
  verify: any;
}
