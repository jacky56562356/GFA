
import { MOCK_USER, MOCK_PROJECTS, MOCK_MERCHANTS, MOCK_TALENTS, MOCK_CERTS } from '../constants';
import { User, Project, Merchant, TalentProfile, Submission, Certification, UserRole, CertType, CertStatus, MembershipTier, Deal } from '../types';

class ApiService {
  private _user: User | null = MOCK_USER;
  private _projects: Project[] = [...MOCK_PROJECTS];
  private _submissions: Submission[] = [];
  private _merchants: Merchant[] = [...MOCK_MERCHANTS];
  private _talents: TalentProfile[] = [...MOCK_TALENTS];
  private _certs: Certification[] = [...MOCK_CERTS];

  async getCurrentUser(): Promise<User | null> {
    return this._user;
  }

  async login(email: string, role: UserRole): Promise<User> {
    this._user = {
      ...MOCK_USER,
      email,
      role,
      id: role === UserRole.MERCHANT ? 'u-merchant' : role === UserRole.PRODUCTION ? 'prod-1' : 'u-1'
    };
    return this._user;
  }

  async logout(): Promise<void> {
    this._user = null;
  }

  // Talent DB
  async getTalents(): Promise<TalentProfile[]> {
    return this._talents;
  }

  async getTalentById(id: string): Promise<TalentProfile | undefined> {
    return this._talents.find(t => t.userId === id || t.id === id);
  }

  async updateTalentProfile(userId: string, updates: Partial<TalentProfile>): Promise<TalentProfile> {
    const index = this._talents.findIndex(t => t.userId === userId);
    if (index === -1) throw new Error("Talent profile not found");
    
    this._talents[index] = { ...this._talents[index], ...updates };
    return this._talents[index];
  }

  // Projects / Auditions
  async getProjects(): Promise<Project[]> {
    return this._projects;
  }

  async getProjectsByProduction(prodId: string): Promise<Project[]> {
    return this._projects.filter(p => p.productionId === prodId);
  }

  async createProject(projectData: Partial<Project>): Promise<Project> {
    const newProject: Project = {
      id: `p-${Date.now()}`,
      productionId: this._user?.id || 'anon',
      title: projectData.title || 'Untitled',
      description: projectData.description || '',
      location: projectData.location || '',
      status: 'OPEN',
      roles: projectData.roles || [],
      createdAt: new Date().toISOString()
    };
    this._projects.push(newProject);
    return newProject;
  }

  async submitAudition(roleId: string, talentId: string, extra?: { tapeUrl?: string, consent?: boolean }): Promise<Submission> {
    const sub: Submission = {
      id: `s-${Date.now()}`,
      roleId,
      talentId,
      status: 'PENDING',
      appliedAt: new Date().toISOString(),
      selfTapeUrl: extra?.tapeUrl,
      parentConsent: extra?.consent
    };
    this._submissions.push(sub);
    return sub;
  }

  async getSubmissionsForUser(userId: string): Promise<Submission[]> {
    return this._submissions.filter(s => s.talentId === userId);
  }

  async getSubmissionsByRole(roleId: string): Promise<Submission[]> {
    return this._submissions.filter(s => s.roleId === roleId);
  }

  async reviewSubmission(id: string, updates: Partial<Submission>): Promise<void> {
    const sub = this._submissions.find(s => s.id === id);
    if (sub) Object.assign(sub, updates);
  }

  // Merchants & Deals
  async getMerchants(): Promise<Merchant[]> {
    return this._merchants;
  }

  async getMerchantByUserId(userId: string): Promise<Merchant | undefined> {
    return this._merchants.find(m => m.userId === userId);
  }

  async createDeal(merchantId: string, deal: Partial<Deal>): Promise<void> {
    const m = this._merchants.find(m => m.id === merchantId);
    if (m) {
      const newDeal: Deal = {
        id: `d-${Date.now()}`,
        merchantId,
        title: deal.title || 'Special Offer',
        description: deal.description || '',
        tierRequired: deal.tierRequired || MembershipTier.FREE,
        expiresAt: deal.expiresAt || new Date(Date.now() + 2592000000).toISOString(),
        code: deal.code || `GFA${Math.floor(Math.random()*1000)}`
      };
      m.deals.push(newDeal);
    }
  }

  // Certifications
  async getCertifications(userId: string): Promise<Certification[]> {
    return this._certs.filter(c => c.ownerId === userId);
  }

  async applyForCert(type: CertType): Promise<Certification> {
    const cert: Certification = {
      id: `c-${Date.now()}`,
      type,
      ownerId: this._user?.id || 'anon',
      status: CertStatus.PENDING,
      certNo: 'PENDING',
      issuedAt: '',
      expiresAt: '',
      qrUrl: '',
      verificationSlug: `verify-${Date.now()}`
    };
    this._certs.push(cert);
    return cert;
  }

  // Admin Actions
  async getAllSubmissions(): Promise<Submission[]> { return this._submissions; }
  async getAllCerts(): Promise<Certification[]> { return this._certs; }
  async approveCert(certId: string): Promise<void> {
    const cert = this._certs.find(c => c.id === certId);
    if (cert) {
      cert.status = CertStatus.APPROVED;
      cert.certNo = `GFA-${Math.floor(Math.random() * 100000)}`;
      cert.issuedAt = new Date().toISOString();
      cert.expiresAt = new Date(Date.now() + 31536000000).toISOString();
      cert.qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${cert.certNo}`;
    }
  }
}

export const api = new ApiService();
