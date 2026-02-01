
export enum UserRole {
  TALENT = 'TALENT',
  GUARDIAN = 'GUARDIAN',
  AGENCY = 'AGENCY',
  SCHOOL = 'SCHOOL',
  PRODUCTION = 'PRODUCTION',
  JUDGE = 'JUDGE',
  MERCHANT = 'MERCHANT',
  ADMIN = 'ADMIN'
}

export enum MembershipTier {
  FREE = 'FREE',
  SILVER = 'SILVER',
  PRO = 'PRO',
  GOLD = 'GOLD',
  STUDIO = 'STUDIO'
}

export enum CertType {
  TALENT_CERT = 'TALENT_CERT',
  AGENCY_CERT = 'AGENCY_CERT',
  SCHOOL_CERT = 'SCHOOL_CERT',
  EVENT_CERT = 'EVENT_CERT',
  AUDITION_CERT = 'AUDITION_CERT',
  PROJECT_CERT = 'PROJECT_CERT'
}

export enum CertStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  EXPIRED = 'EXPIRED'
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
  avatar?: string;
  membership: MembershipTier;
  location?: string;
}

export interface TalentProfile {
  id: string;
  userId: string;
  nameZh: string;
  nameEn: string;
  gender: string;
  birthDate: string;
  height: number;
  weight: number;
  languages: string[];
  skills: string[];
  location: string;
  photos: string[];
  videos: string[];
  bio?: string;
  isMinor: boolean;
  guardianId?: string;
  isVerified: boolean;
  certId?: string;
}

export interface Project {
  id: string;
  productionId: string;
  title: string;
  description: string;
  location: string;
  budget?: string;
  status: 'OPEN' | 'CLOSED' | 'ARCHIVED';
  roles: AuditionRole[];
  createdAt: string;
}

export interface AuditionRole {
  id: string;
  projectId: string;
  name: string;
  ageRange: string;
  gender: string;
  requirements: string;
  deadline: string;
}

export interface Submission {
  id: string;
  roleId: string;
  talentId: string;
  status: 'PENDING' | 'REVIEWING' | 'CALLBACK' | 'OFFER' | 'REJECTED';
  appliedAt: string;
  selfTapeUrl?: string;
  reviewScore?: number;
  reviewComment?: string;
  parentConsent?: boolean;
}

export interface Merchant {
  id: string;
  userId: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  address: string;
  city: string;
  isVerified: boolean;
  deals: Deal[];
  partnershipLevel: 'BASIC' | 'PREFERRED' | 'PREMIUM';
}

export interface Deal {
  id: string;
  merchantId: string;
  title: string;
  description: string;
  tierRequired: MembershipTier;
  expiresAt: string;
  code: string;
  usageLimit?: number;
}

export interface Certification {
  id: string;
  type: CertType;
  ownerId: string;
  status: CertStatus;
  certNo: string;
  issuedAt: string;
  expiresAt: string;
  qrUrl: string;
  verificationSlug: string;
}

export interface Redemption {
  id: string;
  dealId: string;
  userId: string;
  redeemedAt: string;
  status: 'USED' | 'EXPIRED';
}
