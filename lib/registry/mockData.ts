
import { RegistryOrg } from './types.ts';

export const MOCK_REGISTRY: RegistryOrg[] = [
  {
    orgId: "GFA-AUTH-00101",
    name: "Elite Academy of Film & Arts",
    logoUrl: "https://picsum.photos/seed/elite/200",
    categories: ["Training Provider"],
    country: "USA",
    city: "Los Angeles",
    website: "https://elitefilm.edu",
    description: "A leading institution for screen performance and cinematography studies with over 20 years of experience in talent development.",
    certification: {
      level: "Accredited",
      certificationId: "GFA-AUTH-00101",
      status: "Active",
      validFrom: "2024-01-01",
      validTo: "2026-12-31",
      lastReviewedAt: "2024-11-15",
      nextReviewAt: "2025-05-15"
    },
    trustScore: 98,
    indicators: {
      documentationVerified: true,
      feeTransparency: true,
      contractClarity: true,
      safeguardingPolicy: true,
      complaintResponsiveness: true
    },
    disclosures: ["Full Fee Schedule Public", "Minor Safeguarding Verified", "Physical Office Audit Passed"]
  },
  {
    orgId: "GFA-AUTH-00422",
    name: "Dragon VFX Studios",
    logoUrl: "https://picsum.photos/seed/dragon/200",
    categories: ["VFX Studio", "Post-Production"],
    country: "China",
    city: "Beijing",
    website: "https://dragonvfx.com",
    description: "Global leader in high-end CGI and immersive sound design, serving major blockbuster productions.",
    certification: {
      level: "Certified",
      certificationId: "GFA-AUTH-00422",
      status: "Active",
      validFrom: "2023-06-01",
      validTo: "2025-06-01",
      lastReviewedAt: "2024-05-10",
      nextReviewAt: "2024-11-10"
    },
    trustScore: 92,
    indicators: {
      documentationVerified: true,
      feeTransparency: true,
      contractClarity: true,
      safeguardingPolicy: false,
      complaintResponsiveness: true
    }
  },
  {
    orgId: "GFA-AUTH-00889",
    name: "NYC Digital Audition Hub",
    logoUrl: "https://picsum.photos/seed/nyc/200",
    categories: ["Casting / Auditions"],
    country: "USA",
    city: "New York",
    description: "A digital casting platform that failed multiple transparency audits regarding fee structures.",
    certification: {
      level: "Verified",
      certificationId: "GFA-AUTH-00889",
      status: "Revoked",
      validFrom: "2023-01-01",
      validTo: "2024-05-01",
      lastReviewedAt: "2024-04-30",
      nextReviewAt: "N/A"
    },
    trustScore: 12,
    indicators: {
      documentationVerified: true,
      feeTransparency: false,
      contractClarity: false,
      safeguardingPolicy: false,
      complaintResponsiveness: false
    },
    disclosures: ["Audit Failed: Fee Transparency", "Multiple Unresolved Complaints"]
  },
  {
    orgId: "GFA-AUTH-10222",
    name: "London Talent Collective",
    logoUrl: "https://picsum.photos/seed/london/200",
    categories: ["Talent Agency"],
    country: "UK",
    city: "London",
    website: "https://londontalent.uk",
    description: "Boutique talent representation focused on diverse voices in European cinema.",
    certification: {
      level: "Certified",
      certificationId: "GFA-AUTH-10222",
      status: "Active",
      validFrom: "2024-02-01",
      validTo: "2026-02-01",
      lastReviewedAt: "2024-02-15",
      nextReviewAt: "2025-02-15"
    },
    trustScore: 89,
    indicators: {
      documentationVerified: true,
      feeTransparency: true,
      contractClarity: true,
      safeguardingPolicy: true,
      complaintResponsiveness: true
    }
  }
];
