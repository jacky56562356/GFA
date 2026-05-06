import { Locale, Translation } from './types.ts';

export const DICTIONARIES: Record<Locale, Translation> = {
  [Locale.EN]: {
    meta: { siteName: "Global Film Alliance (GFA)", tagline: "Industry Support, Standards & Professional Network" },
    common: { loading: "Accessing Records...", filters: "Filters", reset: "Reset", category: "Category", level: "Level", status: "Status", required: "Required", optional: "Optional", searchPlaceholder: "Search by Name or ID", searchRegistry: "Search Registry", view: "View", region: "Region" },
    nav: { home: "Home", certification: "Certification", childSafety: "Youth Safeguarding", graduateSupport: "Programs", registry: "Registry", complaints: "Feedback", about: "About", governance: "Governance", membership: "Membership", partners: "Partners", contact: "Contact", login: "Login", join: "Become a Member", memberPortal: "Member Portal", admin: "Admin Console", awards: "Awards" },
    awardsPage: {
      hero: {
        title: "The Golden Feather Awards",
        subtitle: "Celebrating Excellence in Independent & Youth Cinema",
        trophyLabel: "The Golden Feather Trophy",
        festivalLabel: "Global Film Festival"
      },
      intro: {
        title: "Institutional Recognition",
        body: "The Golden Feather Awards (GFA) serve as the global benchmark for professional excellence in independent and youth cinema. Established under the Global Film Alliance regulatory framework, the awards recognize outstanding achievements in artistic vision, technical execution, and ethical production standards. Our rigorous selection process, overseen by a jury of international experts, ensures that every accolade is a true mark of cinematic excellence and professional integrity."
      },
      history: {
        title: "Legacy of Excellence",
        body: "Since its inception, the Golden Feather Awards have been dedicated to discovering and elevating voices that challenge conventions and push the boundaries of storytelling. The 'Golden Feather' symbolizes the lightness of inspiration combined with the enduring impact of a well-crafted narrative. It is a beacon for independent creators worldwide, signifying a commitment to artistic truth and technical mastery."
      },
      judgingCriteria: {
        title: "Rigorous Evaluation Standards",
        subtitle: "Our independent jury evaluates submissions based on a comprehensive matrix of artistic and technical criteria.",
        items: [
          { title: "Narrative Originality", desc: "The uniqueness of the story, the depth of character development, and the overall structural integrity of the screenplay." },
          { title: "Directorial Vision", desc: "The director's ability to translate the script into a compelling visual and auditory experience, demonstrating a distinct authorial voice." },
          { title: "Technical Execution", desc: "Excellence in cinematography, editing, sound design, and production design, ensuring the highest standards of craftsmanship." },
          { title: "Social Impact & Relevance", desc: "The film's ability to address contemporary issues, provoke thought, and resonate with a global audience, particularly in youth-focused categories." }
        ]
      },
      categoriesList: {
        title: "Award Categories",
        subtitle: "Recognizing excellence across all disciplines of filmmaking.",
        items: [
          { title: "Grand Jury Prize: Independent Feature", desc: "Awarded to the film that demonstrates the highest level of artistic achievement and technical innovation in independent production." },
          { title: "Best Youth Performance (Under 18)", desc: "Recognizing exceptional acting talent in performers under the age of 18, evaluated by a specialized panel with backgrounds in child psychology and performance arts." },
          { title: "Innovation in Animation", desc: "Honoring technical breakthroughs and narrative creativity in both feature-length and short independent animated films." },
          { title: "The Global Bridge Award", desc: "Celebrating co-productions that successfully bridge cultural and market divides, fostering international understanding through cinema." },
          { title: "Outstanding Emerging Director", desc: "Awarded to a first-time or second-time director whose work exhibits extraordinary promise and a unique cinematic perspective." },
          { title: "Excellence in Cinematography", desc: "Recognizing the visual artistry and technical proficiency of the Director of Photography in creating the film's visual language." }
        ]
      },
      winners2025: {
        title: "2025 Laureates",
        subtitle: "Recognizing the pioneers of the next cinematic era.",
        categories: [
          { category: "Best Feature Film", title: "Echoes of Silence", winner: "Director: Elena Rossi" },
          { category: "Best Youth Director", title: "Neon Dreams", winner: "Director: Liam Chen (Age 19)" },
          { category: "Artistic Innovation", title: "Digital Pulse", winner: "Studio: CyberArts London" },
          { category: "Social Impact Award", title: "The Last River", winner: "Director: Amara Okafor" }
        ]
      },
      gallery: {
        title: "Ceremony Gallery",
        subtitle: "Moments from the 2025 GFA Gala."
      }
    },
    disclaimer: { title: "Institutional & Legal Status", statutory: "GFA Certification is a voluntary professional recognition program developed by the Global Film Alliance to promote transparency, safety practices, and industry best standards. It does not replace any government license or legal authorization.", legal: "GFA certifications are voluntary professional recognitions and do not replace any government licenses, permits, or legal authorizations. The Global Film Alliance (GFA) is an independent non-profit service organization.", heroWarning: "Our certifications do not replace any government license or authorization." },
    home: {
      hero: {
        title: "Global Film Alliance",
        subtitle: "Independent Accreditation & Youth Protection Authority",
        subhead: "The Global Film Alliance (GFA) is the leading independent non-profit authority dedicated to establishing rigorous professional standards, comprehensive youth protection protocols, and transparent accreditation systems within the international cinematic landscape.",
        ctaPrimary: "Search Accredited Organizations",
        ctaSecondary: "Apply for Accreditation"
      },
      whoWeAre: {
        title: "Institutional Profile",
        p1: "The Global Film Alliance (GFA) serves as the industry's premier independent third-party accreditation body, bridging the gap between talent, institutions, and professional production standards.",
        p2: "We establish rigorous, evidence-based evaluation frameworks for film training institutions, talent representation agencies, and youth-focused production environments globally.",
        p3: "Our core mission is to catalyze a culture of transparency, accountability, and uncompromising ethical practices across the international cinematic ecosystem."
      },
      whyAccreditation: {
        title: "The Necessity of Standards",
        intro: "The modern film industry increasingly involves minors in complex training, high-stakes auditions, and global productions. Without a standardized oversight framework, families and young performers are exposed to significant risks:",
        risks: [
          "Non-transparent fee structures and hidden costs",
          "Unverified or exaggerated institutional training claims",
          "Unregulated and potentially exploitative audition practices",
          "Lack of mandatory financial safeguards and escrow systems",
          "Inconsistent or absent youth protection and safeguarding policies"
        ],
        conclusion: "GFA provides the necessary institutional framework to evaluate, certify, and monitor organizations that meet the highest global standards of professional conduct."
      },
      framework: {
        title: "Our Regulatory Framework",
        items: [
          { title: "Institutional Accreditation", desc: "A comprehensive evaluation of an organization's governance structure, operational transparency, and adherence to professional industry practices." },
          { title: "Youth Protection Standards", desc: "Mandatory compliance requirements and background vetting protocols for all organizations working with minors in cinematic environments." },
          { title: "Financial Safeguard Protocols", desc: "Rigorous verification of security bonds, insurance coverage, and financial assurance systems to protect the interests of families." },
          { title: "Public Verification System", desc: "A secure, searchable global registry providing real-time status verification and trust ratings for accredited institutions." }
        ]
      },
      howItWorks: {
        title: "How It Works",
        steps: [
          "Application Submission",
          "Documentation Review",
          "Compliance Assessment",
          "Accreditation Decision",
          "Public Listing & Ongoing Review"
        ]
      },
      search: {
        title: "Search Accredited Organizations",
        filters: {
          name: "Organization Name",
          region: "Region",
          status: "Accreditation Status",
          category: "Category (Training / Agency / Production / Competition)"
        }
      },
      governance: {
        title: "Governance & Transparency",
        p1: "GFA operates under a clearly defined governance structure, including:",
        list: [
          "Board of Directors Oversight",
          "Compliance Review Panel",
          "External Advisory Consultation",
          "Regular Policy Audits"
        ],
        p2: "We do not represent agencies, production companies, or commercial training entities. Our role is strictly independent evaluation and standard-setting."
      }
    },
    about: { 
      hero: { kicker: "Institutional Profile", title: "Global Film Alliance: Institutional Overview", subtitle: "The GFA serves as the primary international regulatory body for cinematic operational standards, financial transparency, and youth safeguarding protocols." }, 
      mission: { title: "Institutional Mission", body: "To implement a rigorous, data-driven framework for professional accreditation and minor protection, ensuring that every GFA-certified entity adheres to the highest global benchmarks of industry integrity and ethical conduct." }, 
      vision: { title: "Strategic Vision", body: "Establishing a unified global film ecosystem where institutional transparency and talent safety are verified through independent oversight, fostering a culture of professional excellence across all cinematic hubs." }, 
      whoWeAre: { 
        title: "Regulatory Oversight & Governance Structure", 
        body: "The Global Film Alliance (GFA) operates as an independent, non-governmental regulatory authority. Our governance model is designed to ensure absolute impartiality and institutional accountability through a multi-layered oversight structure:",
        pillars: [
          { title: "International Board of Directors", desc: "A 12-member body of global industry leaders responsible for strategic policy alignment and the maintenance of the GFA Global Charter." },
          { title: "Compliance & Audit Panel", desc: "Independent certified auditors who conduct mandatory biennial reviews of all accredited institutions to verify financial and operational compliance." },
          { title: "Ethics & Standards Committee", desc: "The primary adjudicatory body for resolving professional misconduct reports and enforcing the GFA Code of Conduct." },
          { title: "Strategic Advisory Council", desc: "A consultative group of experts in cinematic technology, legal frameworks, and child psychology providing continuous standard updates." }
        ]
      }, 
      whatWeDo: { 
        title: "Core Regulatory Services", 
        items: [
          { 
            icon: "⚖️", 
            title: "GFA Institutional Accreditation (GIA)", 
            desc: "The GIA framework evaluates organizations across 42 distinct compliance markers, including financial solvency, governance transparency, and professional track records. This multi-tier accreditation serves as the industry's most rigorous verification of institutional health.",
            details: "The process involves a comprehensive 90-day documentation audit, followed by mandatory on-site verification and continuous quarterly reporting requirements.",
            linkText: "View Accreditation Standards →"
          }, 
          { 
            icon: "🛡️", 
            title: "Youth Safeguarding & Compliance", 
            desc: "GFA operates the world's most comprehensive youth protection protocol for the film industry. We mandate professional background vetting, child protection officer (CPO) certification, and strict adherence to the GFA Youth Protection Act of 2024.",
            details: "Our authority includes unannounced set inspections, mandatory safeguarding training for all crew members, and the management of the Global Safeguarding Registry.",
            linkText: "Safeguarding Protocols →"
          }, 
          { 
            icon: "🎓", 
            title: "Professional Verification & Market Access", 
            desc: "We facilitate the secure transition of verified talent into the global market. Through the GFA Professional Registry, we provide institutional verification of credentials, connecting certified graduates with accredited productions and global agencies.",
            details: "Includes the GFA Mentorship Bridge, connecting emerging talent with established industry veterans under a structured, audited professional framework.",
            linkText: "Talent Registry Access →"
          }
        ] 
      }, 
      certification: { title: "Accreditation Framework (GIA)", body: "The GFA Institutional Accreditation (GIA) is a rigorous 42-point evaluation system covering financial solvency, operational transparency, and professional track records. Organizations are categorized into Standard, Professional, and Elite tiers based on verified compliance, ensuring a clear hierarchy of quality for the global film market." }, 
      youthProtection: { title: "Statutory Safeguarding Compliance", body: "Our framework mandates strict adherence to the GFA Youth Protection Act of 2024, including a 1:10 chaperone ratio, mandatory background vetting for all personnel, and certified medical staff. We conduct unannounced set inspections to ensure the highest safety standards for minors in cinematic environments." }, 
      support: { title: "Institutional Support Infrastructure", body: "GFA provides a comprehensive support ecosystem for accredited members, including access to the Global Legal Database, standardized international contract templates, and specialized co-production insurance pools. We help members mitigate cross-border risks and navigate complex international distribution." }, 
      network: { title: "Global Regulatory Presence", body: "With a strategic presence in Los Angeles, London, Beijing, and Paris, GFA maintains a continuous monitoring network ensuring localized practices align with international regulatory benchmarks. Our global reach facilitates seamless co-productions and talent exchange across major hubs." }, 
      governance: { title: "Institutional Accountability", body: "GFA's governance is built on absolute transparency and ethical conduct. We publish annual audit summaries and compliance reports for all accredited entities. Our multi-layered oversight structure, including an independent Compliance Panel, ensures the integrity of the Global Registry." }, 
      impact: { title: "Institutional Metrics", stats: [{ value: "1,200+", label: "Audited Entities" }, { value: "32", label: "Member Nations" }, { value: "98.4%", label: "Compliance Index" }, { value: "15k+", label: "Verified Talents" }] }, 
      framework: { title: "The GFA Regulatory Framework", subtitle: "Our operational model is built on five core pillars of institutional integrity and global compliance." },
      coreMissions: {
        title: "About Global Film Alliance",
        intro: "The Global Film Alliance (GFA) is a non-profit film and television alliance registered in Los Angeles, USA. GFA integrates Hollywood professional production teams, international film festival resources, and the global film industry network to establish a complete operational system from talent discovery, professional training, and production to international distribution.",
        subtitle: "GFA's core mission covers five levels:",
        items: [
          {
            title: "Promote Youth Participation in Film",
            desc: "The Global Film Alliance actively goes deep into cities and communities to promote the widespread participation of young people in film shooting and creation. We believe that film is one of the most influential forms of artistic expression today, and every child has the right to understand the world and express themselves through film. Through systematic project design, GFA brings professional Hollywood film production resources directly into communities, making film creation no longer a privilege for the few, but a growth path that every young person with a dream can truly touch. In this process, children not only learn film skills but also build confidence, stimulate potential, and gain the courage to face the future through creation."
          },
          {
            title: "Support Children from Low-Income Families to Enter the Film Industry",
            desc: "GFA firmly believes that a child's artistic future should not be determined by their family's economic conditions. The film industry has long suffered from unequal opportunities, and children from low-income families are often excluded from the industry due to a lack of resources. GFA provides real opportunities for children from economically disadvantaged families to participate in film production by establishing special scholarship programs and public welfare support projects. We not only provide tuition waivers but also establish professional industry identity certification for these children—including official IMDb profile pages and real work credits, helping them stand on the starting line of the film industry on an equal footing."
          },
          {
            title: "Support Graduates to Complete Their First Commercial Work",
            desc: "From the academy to the industry is a crucial threshold that every young filmmaker must cross. Many talented film graduates are unable to complete their first commercially valuable work after leaving campus due to a lack of production funds, industry resources, and professional guidance. GFA has established a systematic support mechanism specifically for this group, providing production funding support, professional team allocation, equipment and venue resources, and full guidance from senior Hollywood practitioners, helping graduates transform the creative concepts accumulated in the academy into truly market-oriented commercial works with distribution potential, achieving the critical leap from student to professional filmmaker."
          },
          {
            title: "Support Emerging Filmmakers Towards Professionalism",
            desc: "Completing the first work is just the starting point. GFA knows that the challenges young filmmakers face in their career development go far beyond creation itself. By establishing a talent delivery mechanism, connecting with international production companies and distribution platforms, and organizing industry exchanges and film festival exhibition activities, GFA provides continuous career development support for potential new directors, screenwriters, and producers, helping them establish a stable professional position and long-term career trajectory in the international film industry."
          },
          {
            title: "Promote Employment in the Film Industry and Help Graduates Land Jobs",
            desc: "Employment is the ultimate test of the talent training system. GFA actively establishes deep cooperative relationships with production companies, film production agencies, talent agencies, and related industries to build a truly effective film industry employment docking platform. We provide graduates with opportunities for direct contact with the industry, including internship recommendations, project cooperation docking, industry mentorship systems, and career planning guidance, truly realizing a complete closed loop from training to employment."
          }
        ]
      },
      awards: { 
        title: "The Golden Feather Awards (GFA)", 
        subtitle: "The Global Benchmark for Independent & Youth Cinema", 
        body: "The Golden Feather Awards serves as the Alliance's primary vehicle for recognizing cinematic innovation that operates outside the traditional studio system. The selection process is governed by an independent jury of 50 international experts, evaluating works based on artistic merit, technical execution, and ethical production standards.",
        focus: "A significant portion of the competition is dedicated to the 'Youth Vision' category, prioritizing films that feature authentic youth performances and narratives that address the complexities of the next generation's experience.",
        categories: [
          { title: "Grand Jury Prize: Independent Feature", desc: "Awarded to the film demonstrating the highest level of artistic and technical innovation in independent production." },
          { title: "Best Youth Performance (U-18)", desc: "Recognizing exceptional acting talent in performers under the age of 18, evaluated by a specialized youth-psychology informed panel." },
          { title: "Innovation in Animation", desc: "Honoring technical breakthroughs and narrative creativity in independent animated features and shorts." },
          { title: "Global Bridge Award", desc: "Recognizing co-productions that successfully bridge cultural and market gaps between Asia and the West." }
        ]
      },
      distribution: { 
        title: "Market Expansion & Distribution Infrastructure", 
        body: "GFA provides the institutional infrastructure necessary for independent films to navigate the complexities of global distribution. Our strategic focus is on facilitating high-barrier market entry and ensuring long-term commercial viability for certified productions.",
        features: [
          { title: "China & Asia Market Access", desc: "GFA provides regulatory navigation, censorship advisory, and local distribution partnership vetting for the Chinese and broader Asian theatrical markets." },
          { title: "Trans-Pacific Co-production Bridge", desc: "A structured framework for Asia-US co-productions, providing standardized legal templates, tax incentive advisory, and verified investment matching." },
          { title: "Institutional Film Investment", desc: "Access to the GFA Private Equity Network, connecting certified independent projects with institutional investors focused on sustainable cinematic growth." },
          { title: "GFA Global Streaming Platform", desc: "A curated VOD platform dedicated to GFA-certified independent works, providing direct-to-consumer access with transparent royalty reporting." }
        ]
      },
      cta: { title: "Apply for Institutional Accreditation", body: "Begin the 90-day verification process to align your organization with global professional standards and gain access to the GFA ecosystem.", button: "Initiate Audit Process" } 
    },
    careerAccess: {
      title: "Professional Industry Program",
      subtitle: "Supporting the next generation of film professionals through mentorship, funding, and project matchmaking.",
      intro: "GFA is committed to bridging the gap between academic training and professional success. We provide tangible support for emerging filmmakers, ensuring that talent, not financial background, determines industry access.",
      pillars: {
        mentorship: { title: "Industry Mentorship", body: "Direct guidance from established Hollywood professionals and certified GFA members." },
        funding: { title: "Production Funding", body: "Financial grants specifically designed to support first-time commercial projects and youth-led productions." },
        placement: { title: "Career Placement", body: "Direct matchmaking with GFA-certified studios, agencies, and production companies." }
      },
      inquiryTitle: "Submit an Inquiry",
      cta: "Submit Request",
      inquiryNote: "All applications are reviewed by the GFA Professional Development Committee."
    },
    graduatePathways: [
      { id: "01", t: "Youth Film Participation", d: "Community-based programs bringing professional Hollywood resources to young creators." },
      { id: "02", t: "Low-Income Scholarship", d: "Tuition waivers and IMDb verification for children from economically disadvantaged families." },
      { id: "03", t: "First Commercial Work", d: "Funding, equipment, and mentorship for graduates completing their debut commercial project." },
      { id: "04", t: "Emerging Filmmaker Support", d: "Career development, festival exhibition, and distribution support for new directors and writers." },
      { id: "05", t: "Employment Docking", d: "Internship recommendations and direct job placement with GFA-certified industry partners." }
    ],
    safeguarding: {
      title: "Youth Protection Framework",
      kicker: "GFA Regulatory Standard",
      subtitle: "GFA establishes minimum compliance standards for organizations working with minors in the film industry.",
      commitment: {
        title: "Our Commitment to Youth",
        desc: "The Global Film Alliance is fundamentally dedicated to ensuring that every young person entering the film industry does so in a safe, nurturing, and highly regulated environment. We believe that artistic expression should never come at the cost of a child's well-being or financial exploitation."
      },
      principles: {
        title: "Core Principles",
        items: [
          { title: "Prevention", desc: "Proactive screening and strict compliance standards for all certified partners." },
          { title: "Education", desc: "Empowering parents and youth with industry knowledge and legal rights." },
          { title: "Accountability", desc: "Immediate investigation and revocation of certification for any violations." }
        ]
      },
      reporting: {
        title: "Report a Concern",
        desc: "If you have witnessed or experienced a violation of our youth protection standards by any GFA-certified entity, please contact our compliance team immediately. All reports are strictly confidential.",
        button: "Submit Confidential Report"
      },
      sections: [
        {
          title: "1. Audition Transparency Requirements",
          items: [
            "Clear disclosure of audition purpose",
            "No undisclosed fees",
            "Written parental consent",
            "No coercive participation"
          ]
        },
        {
          title: "2. Training Fee Disclosure",
          items: [
            "Published pricing structure",
            "Refund policy transparency",
            "No misleading career guarantees"
          ]
        },
        {
          title: "3. Competition & Event Safeguards",
          items: [
            "Transparent judging criteria",
            "No pay-to-win mechanisms",
            "Financial disclosure of participation fees"
          ]
        },
        {
          title: "4. Financial Protection Options",
          intro: "Organizations may voluntarily provide:",
          items: [
            "Security bond documentation",
            "Escrow account system",
            "Insurance verification"
          ]
        },
        {
          title: "5. On-Set Minor Protection Guidelines",
          items: [
            "Supervised working hours",
            "Guardian presence requirements",
            "Age-appropriate content compliance",
            "Safety protocol documentation"
          ]
        }
      ],
      footer: "Compliance with these standards is mandatory for all GFA-accredited organizations involving minors."
    },
    registry: { title: "Search GFA Verified Organizations", subtitle: "Find agencies, studios, and partners recognized under GFA’s voluntary certification standards.", registryCount: "Institutional Records", viewDetails: "View Details", reportConcern: "Report Concern", trustScore: "Confidence Index", tableHeaders: ["Organization / ID", "Validity Period", "Category", "Status", "Trust Score"], disclaimerBody: "Registry data is updated every 48 hours following internal audit. Status reflects voluntary certification and does not replace statutory licensing.", ui: { portalLabel: "Official Certification Portal", active: "INSTITUTIONAL ACTIVE", pending: "PENDING / UNDER REVIEW", revoked: "REVOKED / SUSPENDED", noResults: "No institutional records match your criteria." } },
    certification: {
      title: "Accreditation Framework",
      subtitle: "GFA provides a structured evaluation system for industry organizations to demonstrate compliance with global professional standards.",
      categoriesTitle: "Accreditation Categories",
      categories: [
        {
          title: "Accredited Institution",
          desc: "Meets governance, transparency, and operational compliance standards."
        },
        {
          title: "Youth-Compliant Organization",
          desc: "Verified compliance with youth protection framework."
        },
        {
          title: "Financially Safeguarded Organization",
          desc: "Verified financial protection documentation."
        }
      ],
      criteriaTitle: "Evaluation Criteria",
      criteria: [
        "Legal registration documentation",
        "Organizational structure review",
        "Financial disclosure (basic compliance level)",
        "Youth policy documentation",
        "Complaint handling procedures"
      ],
      validityTitle: "Accreditation Validity",
      validityDesc: "Accreditation is valid for 12–24 months and subject to renewal review."
    },
    membership: {
      title: "Membership Structure",
      subtitle: "Professional and institutional membership tiers within the Global Film Alliance.",
      structureTitle: "Membership Structure",
      tiers: [
        {
          name: "Institutional Membership",
          desc: "For training institutions, agencies, and production companies. Includes full accreditation eligibility, priority listing in the GFA registry, and institutional voting rights on industry standards.",
          detailedBenefits: [
            "Full Institutional Accreditation Eligibility",
            "Priority Listing in Global Registry",
            "Institutional Voting Rights",
            "Standardized Policy Templates",
            "Quarterly Compliance Audits"
          ]
        },
        {
          name: "Professional Membership",
          desc: "For filmmakers, educators, and industry consultants. Provides access to professional networking, career support resources, and individual certification pathways.",
          detailedBenefits: [
            "Individual Certification Pathway",
            "Access to Professional Job Board",
            "Career Mentorship Program",
            "Industry Event Invitations",
            "Resource Library Access"
          ]
        },
        {
          name: "Advisory Membership",
          desc: "For policy advisors and industry experts. Focuses on standards development and strategic industry consultation.",
          detailedBenefits: [
            "Standards Development Participation",
            "Strategic Consultation Access",
            "Policy Review Invitations",
            "Expert Network Listing"
          ]
        }
      ],
      benefitsTitle: "Exclusive Member Benefits",
      benefits: [
        "Listing in global directory",
        "Accreditation eligibility",
        "Policy update access",
        "Industry networking channels",
        "Standard documentation templates",
        "Exclusive vendor discounts",
        "Legal & compliance support"
      ]
    },
    partners: {
      title: "Verified Service Partners",
      intro: "Connect with GFA-verified vendors offering specialized services for the film industry.",
      catLabel: "Category",
      countryLabel: "Country",
      found: "{n} Partners Found",
      card: { eligibility: "Eligibility" },
      filterOptions: {
        categories: ["All", "Restaurants", "Equipment", "Lighting", "Vehicles", "Post-Production", "Insurance"],
        countries: ["All", "USA", "China", "UK", "France", "Australia", "Italy"]
      }
    },
    partnersList: [
      { id: "p1", name: "CineRentals Global", category: "Equipment", city: "London", country: "UK", benefit: "20% Off All Rentals", eligibility: "Professional & Elite", logo: "https://picsum.photos/seed/p1/100/100" },
      { id: "p2", name: "The Film Bistro", category: "Restaurants", city: "Los Angeles", country: "USA", benefit: "15% Discount on Catering", eligibility: "All Members", logo: "https://picsum.photos/seed/p2/100/100" },
      { id: "p3", name: "Lux Lighting Solutions", category: "Lighting", city: "Beijing", country: "China", benefit: "Free Delivery & Setup", eligibility: "Elite Members", logo: "https://picsum.photos/seed/p3/100/100" },
      { id: "p4", name: "Production Wheels", category: "Vehicles", city: "Paris", country: "France", benefit: "10% Off Fleet Bookings", eligibility: "All Members", logo: "https://picsum.photos/seed/p4/100/100" },
      { id: "p5", name: "SafeSet Insurance", category: "Insurance", city: "New York", country: "USA", benefit: "Waived Admin Fees", eligibility: "Professional & Elite", logo: "https://picsum.photos/seed/p5/100/100" },
      { id: "p6", name: "PixelPerfect Post", category: "Post-Production", city: "Seoul", country: "Korea", benefit: "5% Off Color Grading", eligibility: "Elite Members", logo: "https://picsum.photos/seed/p6/100/100" }
    ],
    footer: { desc: "Independent non-profit industry support organization. Facilitating professional standards in the global film industry.", copyright: "© {year} Global Film Alliance. Supporting Industry Excellence." }
  } as any,
  [Locale.ZH]: {
    meta: { siteName: "Global Film Alliance (GFA)", tagline: "Industry Support, Standards & Professional Network" },
    common: { loading: "正在访问记录...", filters: "筛选", reset: "重置", category: "类别", level: "等级", status: "状态", required: "必填", optional: "可选", searchPlaceholder: "按名称或 ID 搜索", searchRegistry: "搜索名录", view: "查看", region: "地区" },
    nav: { home: "首页", certification: "行业认证", childSafety: "青少年保护", graduateSupport: "扶持计划", registry: "认证名录", complaints: "反馈渠道", about: "关于我们", governance: "治理准则", membership: "会员权益", partners: "合作伙伴", contact: "联系我们", login: "登录", join: "加入会员", memberPortal: "会员门户", admin: "管理后台", awards: "金羽奖" },
    awardsPage: {
      hero: {
        title: "金羽奖 (GFA)",
        subtitle: "表彰独立与青少年电影领域的卓越成就",
        trophyLabel: "金羽奖杯",
        festivalLabel: "全球电影节"
      },
      intro: {
        title: "机构认可与行业基准",
        body: "金羽奖 (Golden Feather Awards) 是全球独立电影和青少年电影专业卓越程度的基准。该奖项在全球电影联盟 (GFA) 监管框架下设立，旨在表彰在艺术远见、技术执行和道德生产标准方面取得杰出成就的作品。我们严格的评选过程由国际专家组成的评审团监督，确保每一项荣誉都是电影卓越和专业诚信的真正标志。"
      },
      history: {
        title: "卓越的传承",
        body: "自成立以来，金羽奖一直致力于发现和提升那些挑战常规、突破叙事边界的声音。“金羽”象征着灵感的轻盈与精心打磨的叙事所带来的持久影响力的结合。它是全球独立创作者的灯塔，标志着对艺术真实性和技术精湛的承诺。"
      },
      judgingCriteria: {
        title: "严格的评估标准",
        subtitle: "我们的独立评审团根据艺术和技术标准的综合矩阵对提交的作品进行评估。",
        items: [
          { title: "叙事原创性", desc: "故事的独特性、角色发展的深度以及剧本整体结构的完整性。" },
          { title: "导演视野", desc: "导演将剧本转化为引人入胜的视听体验的能力，展现出独特的作者声音。" },
          { title: "技术执行", desc: "在摄影、剪辑、声音设计和制作设计方面的卓越表现，确保最高标准的工艺水平。" },
          { title: "社会影响与相关性", desc: "电影探讨当代问题、引发思考并与全球观众产生共鸣的能力，特别是在以青少年为重点的类别中。" }
        ]
      },
      categoriesList: {
        title: "奖项类别",
        subtitle: "表彰电影制作各个领域的卓越表现。",
        items: [
          { title: "评审团大奖：独立长片", desc: "授予在独立制作中展现出最高水平艺术和技术创新的电影。" },
          { title: "最佳青少年表演 (18岁以下)", desc: "表彰 18 岁以下演员的卓越表演才华，由专门的儿童心理学和表演艺术背景小组进行评估。" },
          { title: "动画创新奖", desc: "表彰独立动画长片和短片中的技术突破和叙事创意。" },
          { title: "全球桥梁奖", desc: "表彰成功弥合文化和市场鸿沟的合拍片，通过电影促进国际理解。" },
          { title: "杰出新锐导演", desc: "授予首次或第二次执导的导演，其作品展现出非凡的潜力和独特的电影视角。" },
          { title: "卓越摄影奖", desc: "表彰摄影指导在创造电影视觉语言方面的视觉艺术性和技术熟练度。" }
        ]
      },
      winners2025: {
        title: "2025年度获奖名单",
        subtitle: "表彰下一电影时代的先锋力量。",
        categories: [
          { category: "最佳长片", title: "《寂静回响》", winner: "导演：Elena Rossi" },
          { category: "最佳青年导演", title: "《霓虹之梦》", winner: "导演：Liam Chen (19岁)" },
          { category: "艺术创新奖", title: "《数字脉冲》", winner: "工作室：CyberArts London" },
          { category: "社会影响奖", title: "《最后的河流》", winner: "导演：Amara Okafor" }
        ]
      },
      gallery: {
        title: "颁奖典礼图集",
        subtitle: "2025年金羽奖盛典精彩瞬间。"
      }
    },
    disclaimer: { title: "Institutional & Legal Status", statutory: "GFA Certification is a voluntary professional recognition program developed by the Global Film Alliance to promote transparency, safety practices, and industry best standards. It does not replace any government license or legal authorization.", legal: "GFA certifications are voluntary professional recognitions and do not replace any government licenses, permits, or legal authorizations. The Global Film Alliance (GFA) is an independent non-profit service organization.", heroWarning: "Our certifications do not replace any government license or authorization." },
    home: {
      hero: {
        title: "全球电影联盟 (GFA)",
        subtitle: "独立认证与青少年保护权威机构",
        subhead: "一家独立的非营利组织，致力于在全球电影行业内建立专业标准、青少年保护协议和透明的认证体系。",
        ctaPrimary: "搜索已认证机构",
        ctaSecondary: "申请认证"
      },
      whoWeAre: {
        title: "我们是谁",
        p1: "全球电影联盟 (GFA) 作为一个独立的第三方认证机构运营。",
        p2: "我们为电影培训机构、人才代理机构、青少年制作项目和行业组织建立结构化的评估标准。",
        p3: "我们的使命是提高整个电影生态系统的透明度、问责制和道德规范。"
      },
      whyAccreditation: {
        title: "为什么认证至关重要",
        intro: "电影行业越来越多地涉及未成年人的培训、试镜、制作和比赛。如果没有明确的标准，家庭和年轻表演者可能会面临：",
        risks: [
          "不透明的费用",
          "未经核实的培训声明",
          "不受监管的试镜行为",
          "缺乏财务保障措施",
          "青少年保护政策不一致"
        ],
        conclusion: "GFA 提供了一个结构化的框架，用于评估和认证符合既定标准的组织。"
      },
      framework: {
        title: "我们的核心框架",
        items: [
          { title: "机构认证", desc: "评估治理结构、运营透明度和专业实践。" },
          { title: "青少年保护标准", desc: "针对与未成年人合作的组织的强制性合规要求。" },
          { title: "财务保障要求", desc: "可选的保证金或财务担保验证，以保护家庭。" },
          { title: "公共验证与评级", desc: "可搜索的列表和状态验证系统。" }
        ]
      },
      howItWorks: {
        title: "运作流程",
        steps: [
          "提交申请",
          "文件审查",
          "合规评估",
          "认证决定",
          "公开列名与持续审查"
        ]
      },
      search: {
        title: "搜索已认证机构",
        filters: {
          name: "机构名称",
          region: "地区",
          status: "认证状态",
          category: "类别 (培训 / 代理 / 制作 / 比赛)"
        }
      },
      governance: {
        title: "治理与透明度",
        p1: "GFA 在明确的治理结构下运营，包括：",
        list: [
          "董事会监督",
          "合规审查小组",
          "外部顾问咨询",
          "定期政策审查"
        ],
        p2: "我们不代表代理机构、制作方或商业培训机构。我们的角色是独立的评估和标准制定。"
      }
    },
    about: { 
      hero: { kicker: "机构概况", title: "全球电影联盟：机构综述", subtitle: "GFA 是电影行业运营标准、财务透明度和青少年保护协议的主要国际监管机构。" }, 
      mission: { title: "机构使命", body: "实施严格的、数据驱动的专业认证和未成年人保护框架，确保每个 GFA 认证实体都遵守行业诚信和道德行为的最高全球基准。" }, 
      vision: { title: "战略愿景", body: "建立一个统一的全球电影生态系统，通过独立监督验证机构透明度和人才安全，在所有电影中心培养专业卓越的文化。" }, 
      whoWeAre: { 
        title: "监管监督与治理结构", 
        body: "全球电影联盟 (GFA) 作为一个独立的非政府监管机构运营。我们的治理模式旨在通过多层监督结构确保绝对的公正性和机构问责制：",
        pillars: [
          { title: "国际董事会", desc: "由 12 名全球行业领袖组成，负责战略政策调整和维护《GFA 全球章程》。" },
          { title: "合规与审计小组", desc: "独立认证审计师，对所有认证机构进行每两年一次的强制性审查，以验证财务和运营合规性。" },
          { title: "道德与标准委员会", desc: "负责解决职业失范报告和执行《GFA 行为准则》的主要裁决机构。" },
          { title: "战略顾问委员会", desc: "由电影技术、法律框架和儿童心理学专家组成的咨询小组，提供持续的标准更新。" }
        ]
      }, 
      whatWeDo: { 
        title: "核心监管服务", 
        items: [
          { 
            icon: "⚖️", 
            title: "GFA 机构认证 (GIA)", 
            desc: "GIA 框架通过 42 个不同的合规指标评估组织，包括财务偿付能力、治理透明度和专业往绩。这种多级认证是行业对机构健康状况最严格的验证。",
            details: "该过程包括为期 90 天的全面文件审计，随后是强制性的现场验证和持续的季度报告要求。",
            linkText: "查看认证标准 →"
          }, 
          { 
            icon: "🛡️", 
            title: "青少年保护与合规", 
            desc: "GFA 运营着全球电影行业最全面的青少年保护协议。我们强制执行专业背景审查、儿童保护官 (CPO) 认证，并严格遵守《2024 年 GFA 青少年保护法案》。",
            details: "我们的职权包括不定期现场检查、对所有剧组人员进行强制性保护培训，以及管理全球保护登记库。",
            linkText: "保护协议详情 →"
          }, 
          { 
            icon: "🎓", 
            title: "专业验证与市场准入", 
            desc: "我们促进经过验证的人才安全进入全球市场。通过 GFA 专业登记库，我们提供凭证的机构验证，将认证毕业生与认证制作方和全球代理机构联系起来。",
            details: "包括 GFA 导师桥梁计划，在结构化、经过审计的专业框架下，将新兴人才与资深行业人士联系起来。",
            linkText: "人才登记库访问 →"
          }
        ] 
      }, 
      certification: { title: "GFA 机构认证框架 (GIA)", body: "GFA 机构认证 (GIA) 是一个严谨的 42 项评估体系，涵盖了财务偿付能力、运营透明度和专业往绩。组织根据其经过验证的合规水平被分为标准级、专业级和精英级，确保为全球电影市场提供清晰的质量等级划分和行业信用背书。" }, 
      youthProtection: { title: "法定青少年保护合规", body: "我们的保护框架强制要求严格遵守《2024 年 GFA 青少年保护法案》。这包括 1:10 的监护比例、对所有人员进行强制性背景审查以及配备认证医疗人员。我们进行不定期现场检查，确保电影环境中未成年人的最高安全标准和心理健康。" }, 
      support: { title: "机构支持基础设施", body: "GFA 为认证会员提供全面的支持生态系统。这包括访问全球法律数据库、标准化国际合同模板以及专门的合拍片保险池。我们帮助会员降低跨境运营风险，并应对复杂的国际发行环境，提供从法律到财务的全方位保障。" }, 
      network: { title: "全球监管机构分布", body: "GFA 在洛杉矶、伦敦、北京和巴黎设有战略办事处，维持着持续的监测网络。我们确保本地行业实践与国际监管基准保持一致。我们的全球影响力促进了主要电影中心之间无缝的合拍、技术共享和人才交流。" }, 
      governance: { title: "机构问责与透明度", body: "GFA 的治理建立在绝对透明和道德行为的基础之上。我们每年发布所有认证实体的审计摘要和合规报告。我们的多层监督结构（包括独立的合规小组和外部审计专家）确保了全球登记库的诚信和公众信任。" }, 
      impact: { title: "机构指标", stats: [{ value: "1,200+", label: "审计实体" }, { value: "32", label: "成员国" }, { value: "98.4%", label: "合规指数" }, { value: "15k+", label: "验证人才" }] }, 
      framework: { title: "GFA 监管框架", subtitle: "我们的运营模式建立在机构诚信和全球合规的五个核心支柱之上。" },
      coreMissions: {
        title: "关于全球电影联盟",
        intro: "全球电影联盟（Global Film Alliance，简称GFA）是一家在美国洛杉矶注册的非盈利影视联盟机构。GFA整合好莱坞专业制作团队、国际电影节资源与全球影视产业网络，建立了一套从人才发现、专业培训、作品制作到国际发行的完整运营体系。",
        subtitle: "GFA的核心使命涵盖五个层面：",
        items: [
          {
            title: "第一，推动青少年电影参与。",
            desc: "全球电影联盟积极深入各城市与社区，推动青少年广泛参与电影拍摄与创作。我们相信，电影是当代最具影响力的艺术表达形式之一，每一个孩子都有权利通过电影认识世界、表达自我。GFA通过系统化的项目设计，将专业的好莱坞电影制作资源直接带入社区，让电影创作不再是少数人的特权，而是每一个有梦想的青少年都能真实触及的成长路径。在这个过程中，孩子们不仅学习电影技艺，更在创作中建立自信、激发潜能、收获面对未来的勇气。"
          },
          {
            title: "第二，扶持低收入家庭儿童进入影视行业。",
            desc: "GFA坚定相信，一个孩子的艺术未来不应由其家庭的经济条件来决定。影视行业长期存在机会不均等的问题，来自低收入家庭的儿童往往因缺乏资源而与这一行业无缘。GFA通过设立专项奖学金计划与公益扶持项目，为经济困难家庭的儿童提供真实的电影制作参与机会。我们不仅提供学费减免，更为这些孩子建立专业的行业身份认证——包括国际电影数据库（IMDb）官方个人资料页面与真实的作品署名，帮助他们以平等的姿态站在影视行业的起跑线上。"
          },
          {
            title: "第三，扶持院校毕业生完成第一部商业作品。",
            desc: "从学院到行业，是每一位青年电影人必须跨越的关键门槛。许多有才华的电影专业毕业生在走出校园后，因缺乏制作资金、行业资源与专业指导而无法完成第一部具有商业价值的作品。GFA专门为这一群体建立了系统化的扶持机制，提供制作资金支持、专业团队配置、设备与场地资源，以及来自好莱坞资深从业者的全程指导，帮助毕业生将学院积累的创作理念转化为真正面向市场、具备发行潜力的商业作品，实现从学生到职业电影人的关键跨越。"
          },
          {
            title: "第四，扶持新兴电影人走向专业化道路。",
            desc: "完成第一部作品只是起点。GFA深知，青年电影人在职业发展过程中面临的挑战远不止于创作本身。GFA通过建立人才输送机制、对接国际制片公司与发行平台、组织行业交流与电影节参展活动，为有潜力的新导演、编剧与制片人提供持续性的职业发展支持，帮助他们在国际影视产业中建立稳定的专业位置与长远的职业轨迹。"
          },
          {
            title: "第五，推动影视行业就业，帮助毕业生实现职业落地。",
            desc: "就业是人才培养体系的最终检验。GFA积极与制片公司、影视制作机构、经纪公司及相关产业建立深度合作关系，构建真实有效的影视行业就业对接平台。我们为院校毕业生提供与行业直接接触的机会，包括实习岗位推荐、项目合作对接、行业导师制度与职业规划指导，真正实现从培训到就业的完整闭环。"
          }
        ]
      },
      awards: { 
        title: "金羽奖 (The Golden Feather Awards)", 
        subtitle: "独立与青少年电影的全球基准", 
        body: "金羽奖是联盟表彰在传统制片厂系统之外运作的电影创新的主要工具。评选过程由 50 名国际专家组成的独立评审团管理，根据艺术价值、技术执行和道德制作标准评估作品。",
        focus: "竞赛的很大一部分致力于“青少年愿景”类别，优先考虑具有真实青少年表演和解决下一代复杂体验叙事的电影。",
        categories: [
          { title: "评审团大奖：独立长片", desc: "授予在独立制作中展现出最高水平艺术和技术创新的电影。" },
          { title: "最佳青少年表演 (18岁以下)", desc: "表彰 18 岁以下演员的卓越表演才华，由专门的儿童心理学背景小组进行评估。" },
          { title: "动画创新奖", desc: "表彰独立动画长片和短片中的技术突破和叙事创意。" },
          { title: "全球桥梁奖", desc: "表彰成功弥合亚洲与西方文化和市场鸿沟的合拍片。" }
        ]
      },
      distribution: { 
        title: "市场拓展与发行基础设施", 
        body: "GFA 为独立电影应对全球发行的复杂性提供必要的机构基础设施。我们的战略重点是促进高门槛市场准入，并确保认证制作方的长期商业可行性。",
        features: [
          { title: "中国与亚洲市场准入", desc: "GFA 为中国及更广泛的亚洲院线市场提供监管导航、审查咨询和当地发行合作伙伴审核。" },
          { title: "跨太平洋合拍桥梁", desc: "亚美合拍片的结构化框架，提供标准化法律模板、税务激励咨询和经过验证的投资匹配。" },
          { title: "机构电影投资", desc: "访问 GFA 私募股权网络，将经过认证的独立项目与专注于可持续电影增长的机构投资者联系起来。" },
          { title: "GFA 全球流媒体平台", desc: "一个致力于 GFA 认证独立作品的精选 VOD 平台，提供具有透明版税报告的直接面向消费者的访问。" }
        ]
      },
      cta: { title: "申请机构认证", body: "开始为期 90 天的验证过程，使您的组织与全球专业标准保持一致，并获得 GFA 生态系统的访问权限。", button: "启动审计流程" } 
    },
    careerAccess: {
      title: "行业专业扶持计划",
      subtitle: "通过导师指导、资金支持和项目对接，扶持下一代电影专业人才。",
      intro: "GFA 致力于弥合学院培训与职业成功之间的鸿沟。我们为新兴电影人提供切实的行业支持，确保决定行业准入的是才华，而不是经济背景。",
      pillars: {
        mentorship: { title: "行业导师制度", body: "由资深好莱坞专业人士和 GFA 认证会员提供直接的职业指导。" },
        funding: { title: "制作资金支持", body: "专门为支持首次商业项目和青少年主导的制作而设立的资金补助。" },
        placement: { title: "职业安置与对接", body: "与 GFA 认证的制片厂、经纪公司和制作公司进行直接的就业对接。" }
      },
      inquiryTitle: "提交申请意向",
      cta: "提交申请",
      inquiryNote: "所有申请均由 GFA 职业发展委员会进行审核。"
    },
    graduatePathways: [
      { id: "01", t: "青少年电影参与", d: "深入社区的项目，将专业的好莱坞资源带给年轻创作者。" },
      { id: "02", t: "低收入家庭奖学金", d: "为经济困难家庭的儿童提供学费减免和官方 IMDb 身份认证。" },
      { id: "03", t: "首部商业作品扶持", d: "为毕业生完成首部商业作品提供资金、设备和导师支持。" },
      { id: "04", t: "新兴电影人发展", d: "为新锐导演和编剧提供职业发展、电影节参展和发行支持。" },
      { id: "05", t: "行业就业对接", d: "提供实习推荐，并与 GFA 认证的行业合作伙伴进行直接的职位对接。" }
    ],
    safeguarding: {
      title: "青少年保护框架 (Youth Protection Framework)",
      kicker: "GFA 合规标准",
      subtitle: "GFA 为电影行业中涉及未成年人的组织制定了最低合规标准。",
      commitment: {
        title: "我们对青少年的承诺",
        desc: "全球电影联盟 (GFA) 的根本宗旨是确保每一位进入电影行业的年轻人都处于一个安全、充满关爱且受到严格监管的环境中。我们坚信，艺术表达绝不能以牺牲儿童的福祉或进行财务剥削为代价。"
      },
      principles: {
        title: "核心原则",
        items: [
          { title: "预防为主", desc: "对所有认证合作伙伴进行主动筛查和严格的合规标准约束。" },
          { title: "教育赋能", desc: "向家长和青少年普及行业知识和合法权益。" },
          { title: "问责机制", desc: "对任何违规行为进行立即调查，并撤销其认证资格。" }
        ]
      },
      reporting: {
        title: "报告违规行为",
        desc: "如果您目睹或经历了任何 GFA 认证实体违反我们青少年保护标准的行为，请立即联系我们的合规团队。所有报告都将严格保密。",
        button: "提交保密报告"
      },
      sections: [
        {
          title: "1. 试镜透明度要求",
          items: [
            "明确披露试镜目的",
            "严禁任何未披露的费用",
            "必须获得家长的书面同意",
            "严禁强制性参与"
          ]
        },
        {
          title: "2. 培训费用披露",
          items: [
            "公布定价结构",
            "退款政策透明化",
            "严禁误导性的职业承诺"
          ]
        },
        {
          title: "3. 比赛与活动保障",
          items: [
            "透明的评审标准",
            "严禁“付费获胜”机制",
            "参与费用的财务披露"
          ]
        },
        {
          title: "4. 财务保护选项",
          intro: "组织可自愿提供：",
          items: [
            "保证金文件",
            "托管账户系统",
            "保险验证"
          ]
        },
        {
          title: "5. 片场未成年人保护指南",
          items: [
            "受监督的工作时间",
            "监护人陪同要求",
            "符合年龄的内容合规性",
            "安全协议文件化"
          ]
        }
      ],
      footer: "所有涉及未成年人的 GFA 认证机构必须强制遵守这些标准。"
    },
    registry: { title: "Search GFA Verified Organizations", subtitle: "Find agencies, studios, and partners recognized under GFA’s voluntary certification standards.", registryCount: "Institutional Records", viewDetails: "View Details", reportConcern: "Report Concern", trustScore: "Confidence Index", tableHeaders: ["Organization / ID", "Validity Period", "Category", "Status", "Trust Score"], disclaimerBody: "Registry data is updated every 48 hours following internal audit. Status reflects voluntary certification and does not replace statutory licensing.", ui: { portalLabel: "Official Certification Portal", active: "INSTITUTIONAL ACTIVE", pending: "PENDING / UNDER REVIEW", revoked: "REVOKED / SUSPENDED", noResults: "No institutional records match your criteria." } },
    certification: {
      title: "认证框架 (Accreditation Framework)",
      subtitle: "GFA 为行业组织提供结构化的评估体系，以证明其符合全球专业标准。",
      categoriesTitle: "认证类别 (Accreditation Categories)",
      categories: [
        {
          title: "认证机构 (Accredited Institution)",
          desc: "符合治理、透明度和运营合规标准。"
        },
        {
          title: "青少年合规组织 (Youth-Compliant Organization)",
          desc: "经过验证符合青少年保护框架。"
        },
        {
          title: "财务保障组织 (Financially Safeguarded Organization)",
          desc: "经过验证的财务保护文件。"
        }
      ],
      criteriaTitle: "评估标准 (Evaluation Criteria)",
      criteria: [
        "法律注册文件",
        "组织结构审查",
        "财务披露（基础合规级别）",
        "青少年政策文件",
        "投诉处理程序"
      ],
      validityTitle: "认证有效期 (Accreditation Validity)",
      validityDesc: "认证有效期为 12-24 个月，并需接受续期审查。"
    },
    membership: {
      title: "会员结构 (Membership Structure)",
      subtitle: "全球电影联盟内的专业和机构会员等级。",
      structureTitle: "会员结构",
      tiers: [
        {
          name: "机构会员 (Institutional Membership)",
          desc: "适用于培训机构、代理机构和制作公司。包括完整的认证资格、GFA 注册名录的优先列名权以及行业标准的机构投票权。",
          detailedBenefits: [
            "完整的机构认证资格",
            "全球名录优先列名",
            "机构投票权",
            "标准化政策模板",
            "季度合规审计"
          ]
        },
        {
          name: "专业会员 (Professional Membership)",
          desc: "适用于电影制作人、教育工作者和行业顾问。提供专业社交网络、职业支持资源和个人认证途径。",
          detailedBenefits: [
            "个人认证途径",
            "专业工作板访问权限",
            "职业导师计划",
            "行业活动邀请",
            "资源库访问权限"
          ]
        },
        {
          name: "顾问会员 (Advisory Membership)",
          desc: "适用于政策顾问和行业专家。专注于标准制定和战略行业咨询。",
          detailedBenefits: [
            "参与标准制定",
            "战略咨询权限",
            "政策审查邀请",
            "专家网络列名"
          ]
        }
      ],
      benefitsTitle: "独家会员福利 (Exclusive Member Benefits)",
      benefits: [
        "列入全球名录",
        "认证资格",
        "政策更新访问权限",
        "行业社交渠道",
        "标准文件模板",
        "独家供应商折扣",
        "法律与合规支持"
      ]
    },
    partners: {
      title: "认证服务合作伙伴",
      intro: "联系 GFA 认证的供应商，为电影行业提供专业服务。",
      catLabel: "类别",
      countryLabel: "国家",
      found: "找到 {n} 个合作伙伴",
      card: { eligibility: "准入要求" },
      filterOptions: {
        categories: ["全部", "餐厅", "设备", "灯光", "车辆", "后期制作", "保险"],
        countries: ["全部", "美国", "中国", "英国", "法国", "澳大利亚", "意大利"]
      }
    },
    partnersList: [
      { id: "p1", name: "CineRentals Global", category: "设备", city: "伦敦", country: "英国", benefit: "所有租赁 8 折", eligibility: "专业与精英会员", logo: "https://picsum.photos/seed/p1/100/100" },
      { id: "p2", name: "电影小馆", category: "餐厅", city: "洛杉矶", country: "美国", benefit: "餐饮 85 折", eligibility: "所有会员", logo: "https://picsum.photos/seed/p2/100/100" },
      { id: "p3", name: "Lux 灯光解决方案", category: "灯光", city: "北京", country: "中国", benefit: "免费送货与安装", eligibility: "精英会员", logo: "https://picsum.photos/seed/p3/100/100" },
      { id: "p4", name: "制片车队", category: "车辆", city: "巴黎", country: "法国", benefit: "车队预订 9 折", eligibility: "所有会员", logo: "https://picsum.photos/seed/p4/100/100" },
      { id: "p5", name: "SafeSet 保险", category: "保险", city: "纽约", country: "美国", benefit: "免除管理费", eligibility: "专业与精英会员", logo: "https://picsum.photos/seed/p5/100/100" },
      { id: "p6", name: "PixelPerfect 后期", category: "后期制作", city: "首尔", country: "韩国", benefit: "调色 95 折", eligibility: "精英会员", logo: "https://picsum.photos/seed/p6/100/100" }
    ],
    footer: { desc: "独立的非营利行业支持组织。促进全球电影行业的专业标准。", copyright: "© {year} 全球电影联盟 (GFA)。支持行业卓越。" }
  } as any,
  [Locale.ES]: {} as any, [Locale.FR]: {} as any, [Locale.IT]: {} as any, [Locale.KO]: {} as any, [Locale.JA]: {} as any, [Locale.DE]: {} as any
};
