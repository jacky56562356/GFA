
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';
import { GraduationCap, Users, CheckCircle, Calendar, ArrowRight, Star, Briefcase, FileText, Network, Award } from 'lucide-react';

const GraduateSupport = () => {
  const { t } = useLocale();
  const cap = t.careerAccess || {};
  // Fallback content if translation is missing
  const pathways = t.graduatePathways || [
    { id: "01", t: "Director Support Fund", d: "Financial grants for emerging directors working on their first feature film." },
    { id: "02", t: "Project Matchmaking", d: "Connecting verified talent with certified productions looking for specific skills." },
    { id: "03", t: "IMDb Verification", d: "Assistance with verifying professional credits on industry databases." },
    { id: "04", t: "Network Access", d: "Exclusive invitations to industry networking events and workshops." }
  ];

  const pillarIcons = {
    mentorship: <Users className="w-10 h-10" />,
    funding: <Award className="w-10 h-10" />,
    placement: <Briefcase className="w-10 h-10" />
  };

  return (
    <div className="bg-gfa-warmWhite min-h-screen font-sans pt-[80px] pb-16 relative">
      <SEO 
        title={cap.title || "Career Access"} 
        description={cap.subtitle || "Supporting the next generation of film professionals through mentorship, funding, and project matchmaking."} 
      />

      {/* Global Background Image */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" 
          alt="Film Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Document Header */}
      <div className="relative bg-gfa-inkBlack py-16 mb-12 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale">
          <img 
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop" 
            alt="Header Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gfa-inkBlack/60 via-gfa-inkBlack/80 to-gfa-inkBlack"></div>
        
        <div className="container-gfa relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="gold-badge mb-8 animate-fade-up">
              Professional Industry Program
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-serif text-white mb-8 leading-tight drop-shadow-2xl">
              {cap.title}
            </h1>
            <p className="text-xl md:text-2xl text-gfa-gold font-light leading-relaxed max-w-2xl mx-auto italic font-serif animate-fade-up delay-200">
              {cap.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container-gfa max-w-7xl mx-auto relative z-10">
        {/* Intro Block */}
        <section className="mb-10 max-w-5xl mx-auto">
          <div className="bg-white border border-gfa-border p-8 md:p-12 rounded-[32px] shadow-xl relative overflow-hidden group hover:border-gfa-gold/30 transition-all duration-500">
            <div className="absolute top-0 left-0 w-2 h-full bg-gfa-inkBlack group-hover:bg-gfa-gold transition-colors duration-500"></div>
            <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Star className="w-64 h-64 text-gfa-inkBlack" />
            </div>
            <p className="text-2xl md:text-3xl text-gfa-inkBlack leading-relaxed font-serif italic relative z-10 text-center">
              "{cap.intro}"
            </p>
          </div>
        </section>

        {/* Program Pillars */}
        <section className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(cap.pillars || {}).map(([key, pillar]: [string, any], index) => (
              <div key={key} className="relative group rounded-[32px] overflow-hidden border border-gfa-border shadow-sm hover:shadow-2xl transition-all duration-500 h-[350px]">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={
                      index === 0 ? "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" :
                      index === 1 ? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop" :
                      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
                    }
                    alt={pillar.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/80 to-gfa-inkBlack/40 group-hover:from-gfa-inkBlack group-hover:via-gfa-inkBlack/60 group-hover:to-transparent transition-all duration-500"></div>
                </div>
                
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 group-hover:bg-gfa-gold group-hover:border-gfa-gold transition-all duration-500">
                    {index === 0 ? <Users className="w-6 h-6 text-white" /> : index === 1 ? <Award className="w-6 h-6 text-white" /> : <Briefcase className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-serif leading-tight">{pillar.title}</h3>
                  <p className="text-white/70 leading-relaxed font-light text-sm">{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section className="bg-white border border-gfa-border rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column: Pathways */}
            <div className="p-8 md:p-12 bg-gfa-inkBlack text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gfa-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold font-serif mb-12 flex items-center gap-3">
                  <span className="w-8 h-1 bg-gfa-gold rounded-full"></span>
                  Supported Pathways
                </h2>
                <div className="space-y-10">
                  {pathways.map((item: any) => (
                    <div key={item.id} className="group pl-6 border-l border-white/10 hover:border-gfa-gold transition-colors">
                      <span className="text-[10px] font-bold text-gfa-gold uppercase tracking-[0.2em] mb-2 block opacity-70">Step {item.id}</span>
                      <h4 className="text-lg font-bold text-white mb-2 font-serif group-hover:text-gfa-gold transition-colors">{item.t}</h4>
                      <p className="text-sm text-white/60 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="p-8 md:p-12 bg-white">
              <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-8">
                {cap.inquiryTitle}
              </h3>
              <form className="space-y-6" onSubmit={e => { e.preventDefault(); alert("Inquiry Received. Our team will support your request within 48 hours."); }}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gfa-slate block">Full Identity</label>
                  <div className="relative">
                    <input type="text" required className="w-full bg-gfa-warmWhite border border-gfa-border p-4 pl-12 rounded-lg text-sm font-medium focus:border-gfa-gold focus:bg-white outline-none transition-all" placeholder="Legal Name" />
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gfa-slate/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gfa-slate block">Institution</label>
                  <div className="relative">
                    <input type="text" required className="w-full bg-gfa-warmWhite border border-gfa-border p-4 pl-12 rounded-lg text-sm font-medium focus:border-gfa-gold focus:bg-white outline-none transition-all" placeholder="University or Organization" />
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gfa-slate/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gfa-slate block">Program Pathway</label>
                  <div className="relative">
                    <select className="w-full bg-gfa-warmWhite border border-gfa-border p-4 pl-12 rounded-lg text-sm font-medium focus:border-gfa-gold focus:bg-white outline-none transition-all cursor-pointer appearance-none">
                      <option>Director Support Fund</option>
                      <option>Project Matchmaking</option>
                      <option>IMDb Verification</option>
                      <option>Network Access</option>
                    </select>
                    <Network className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gfa-slate/50" />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <ArrowRight className="w-4 h-4 text-gfa-slate/50 rotate-90" />
                    </div>
                  </div>
                </div>
                <button className="btn-primary w-full !py-4 shadow-lg flex items-center justify-center gap-2 group">
                  {cap.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p className="mt-8 text-[10px] text-gfa-slate font-bold uppercase tracking-widest text-center opacity-50">
                {cap.inquiryNote}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-24 pt-12 border-t border-gfa-border text-center">
           <p className="text-[10px] text-gfa-slate uppercase tracking-[0.3em] font-bold opacity-40">
              Non-Profit Industry Service • Est. 2024 • Supportive Excellence
           </p>
        </div>
      </div>
    </div>
  );
};

// Helper component for the form icon
const Building = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
);

export default GraduateSupport;
