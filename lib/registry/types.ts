export type CertificationLevel = "Verified" | "Certified" | "Accredited";
export type CertificationStatus = "Active" | "Suspended" | "Expired" | "Revoked";

export type OrgCategory =
  | "Production Company"
  | "Animation Studio"
  | "Lighting & Grip"
  | "Equipment Rental"
  | "Talent Agency"
  | "Modeling Agency"
  | "Casting / Auditions"
  | "Training Provider"
  | "Post-Production"
  | "VFX Studio"
  | "Other";

export type TransparencyIndicators = {
  documentationVerified: boolean;
  feeTransparency: boolean;
  contractClarity: boolean;
  safeguardingPolicy: boolean;
  complaintResponsiveness: boolean;
};

export type CertificationInfo = {
  level: CertificationLevel;
  certificationId: string;
  status: CertificationStatus;
  validFrom: string;      // ISO date
  validTo: string;        // ISO date
  lastReviewedAt: string; // ISO date
  nextReviewAt: string;   // ISO date
};

export type RegistryOrg = {
  orgId: string;
  name: string;
  logoUrl?: string;
  categories: OrgCategory[];
  country: string;
  city: string;
  website?: string;
  description?: string;

  certification: CertificationInfo;
  trustScore: number; // 0-100
  indicators: TransparencyIndicators;
  disclosures?: string[];
};

export type RegistryQuery = {
  q?: string;
  category?: OrgCategory | "All";
  level?: CertificationLevel | "All";
  status?: CertificationStatus | "All";
  country?: string | "All";
  city?: string | "All";
  sort?: "score_desc" | "review_desc" | "name_asc";
};