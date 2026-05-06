
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';
import { Users, CheckCircle, Globe, ShieldCheck, FileText, Share2, Printer, Download, Info, Star, Briefcase, GraduationCap } from 'lucide-react';

const Membership: React.FC = () => {
  const { t } = useLocale();
  const m = t.membership || {};

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans pt-[80px] pb-16 relative">
      <SEO title={m.title || "Membership Structure"} description={m.subtitle} />

      {/* Global Background Image */}
      <div className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt="Global Cinematic Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Document Header */}
      <div className="relative bg-gfa-inkBlack py-16 mb-12 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale">
          <img 
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
            alt="Header Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gfa-inkBlack/60 via-gfa-inkBlack/80 to-gfa-inkBlack"></div>
        
        <div className="container-gfa relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="gold-badge mb-8 animate-fade-up">
              Institutional Network
            </div>
            <h1 className="text-5xl md:text-8xl font-bold font-serif text-white mb-8 leading-tight drop-shadow-2xl">
              {m.title}
            </h1>
            <p className="text-xl md:text-2xl text-gfa-gold font-light leading-relaxed max-w-2xl mx-auto italic font-serif animate-fade-up delay-200">
              {m.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container-gfa relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-white p-8 rounded-[32px] shadow-xl border border-gfa-border">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-gfa-slate mb-8 border-b border-gfa-border pb-4">Document Sections</h3>
                <nav className="space-y-4">
                  <a href="#structure" className="flex items-center gap-3 text-sm font-bold text-gfa-slate hover:text-gfa-gold transition-all group">
                    <div className="w-2 h-2 bg-gfa-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Membership Structure
                  </a>
                  <a href="#benefits" className="flex items-center gap-3 text-sm font-bold text-gfa-slate hover:text-gfa-gold transition-all group">
                    <div className="w-2 h-2 bg-gfa-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    Member Benefits
                  </a>
                </nav>
              </div>

              <div className="p-10 bg-gfa-inkBlack text-white rounded-[32px] shadow-2xl border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-20 group-hover:scale-110 transition-transform duration-1000">
                  <img src="https://images.unsplash.com/photo-1521791136364-798a730bb361?q=80&w=2070&auto=format&fit=crop" alt="Network" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="relative z-10">
                  <ShieldCheck className="w-10 h-10 text-gfa-gold mb-6" />
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Institutional Note</h4>
                  <p className="text-sm text-white/70 leading-relaxed italic font-serif">
                    Membership in the GFA is a commitment to professional excellence and uncompromising industry integrity.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Document Content */}
          <main className="lg:col-span-9">
            <div className="bg-white border border-gfa-border rounded-[40px] shadow-2xl overflow-hidden">
              
              {/* Document Metadata Strip */}
              <div className="bg-gfa-warmWhite border-b border-gfa-border px-10 py-6 flex flex-wrap gap-12 text-[10px] font-bold uppercase tracking-widest text-gfa-slate">
                <div className="flex items-center gap-2">
                  <span className="opacity-50">Document Type:</span>
                  <span className="text-gfa-inkBlack">Membership Framework</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-50">Status:</span>
                  <span className="text-emerald-600 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Active
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="opacity-50">Access:</span>
                  <span className="text-gfa-inkBlack">Public / Institutional</span>
                </div>
              </div>

              <div className="p-8 md:p-12 space-y-16">
                {/* Structure */}
                <section id="structure" className="scroll-mt-24">
                  <div className="flex items-start gap-8 mb-10">
                    <div className="w-16 h-16 bg-gfa-warmWhite border border-gfa-border rounded-2xl flex items-center justify-center text-2xl font-serif text-gfa-gold shrink-0 shadow-inner">
                      01
                    </div>
                    <div className="pt-2">
                      <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                        {m.structureTitle}
                      </h2>
                      <div className="h-1 w-24 bg-gfa-gold rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-12">
                    {(m.tiers || []).map((tier: any, i: number) => (
                      <div key={i} className="flex flex-col md:flex-row gap-0 items-stretch bg-gfa-warmWhite rounded-[32px] border border-gfa-border hover:border-gfa-gold/30 hover:shadow-2xl transition-all duration-500 group overflow-hidden">
                        <div className="md:w-1/3 relative overflow-hidden min-h-[250px]">
                          <img 
                            src={
                              i === 0 ? "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop" :
                              i === 1 ? "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" :
                              "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop"
                            }
                            alt={tier.name}
                            className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gfa-inkBlack/40 group-hover:bg-gfa-inkBlack/10 transition-colors duration-500"></div>
                          <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30 shadow-lg">
                            {i === 0 ? <Briefcase className="w-8 h-8" /> : i === 1 ? <GraduationCap className="w-8 h-8" /> : <Star className="w-8 h-8" />}
                          </div>
                        </div>
                        <div className="md:w-2/3 p-10 md:p-12 flex flex-col justify-center bg-white relative">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gfa-gold/5 rounded-bl-full -mr-16 -mt-10 transition-all group-hover:bg-gfa-gold/10 pointer-events-none"></div>
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <div>
                              <h3 className="text-3xl font-bold text-gfa-inkBlack font-serif leading-tight">{tier.name}</h3>
                              <div className="text-[10px] font-bold text-gfa-gold uppercase tracking-[0.3em] mt-2">Institutional Tier Level {i + 1}</div>
                            </div>
                            <button className="btn-primary h-12 px-8 text-xs shrink-0">
                              Apply for Tier
                            </button>
                          </div>
                          
                          <p className="text-lg text-gfa-slate leading-relaxed font-light mb-10 opacity-90">
                            {tier.desc}
                          </p>

                          {tier.detailedBenefits && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {tier.detailedBenefits.map((benefit: string, j: number) => (
                                <div key={j} className="flex items-start gap-4 text-sm text-gfa-inkBlack font-medium group/benefit">
                                  <div className="w-6 h-6 bg-gfa-gold/10 text-gfa-gold rounded-full flex items-center justify-center shrink-0 group-hover/benefit:bg-gfa-gold group-hover/benefit:text-white transition-colors">
                                    <CheckCircle className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="font-serif italic">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Benefits */}
                <section id="benefits" className="scroll-mt-24">
                  <div className="flex items-start gap-8 mb-10">
                    <div className="w-16 h-16 bg-gfa-warmWhite border border-gfa-border rounded-2xl flex items-center justify-center text-2xl font-serif text-gfa-gold shrink-0 shadow-inner">
                      02
                    </div>
                    <div className="pt-2">
                      <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                        {m.benefitsTitle}
                      </h2>
                      <div className="h-1 w-24 bg-gfa-gold rounded-full"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(m.benefits || []).map((item: string, i: number) => (
                      <div key={i} className="flex flex-col gap-6 p-10 bg-white border border-gfa-border rounded-[32px] shadow-sm hover:border-gfa-gold/30 transition-all group">
                        <div className="w-12 h-12 bg-gfa-warmWhite rounded-2xl flex items-center justify-center text-gfa-gold group-hover:bg-gfa-gold group-hover:text-white transition-all duration-500">
                          <CheckCircle className="w-6 h-6" />
                        </div>
                        <span className="text-lg font-bold text-gfa-inkBlack leading-tight font-serif italic">{item}</span>
                        <p className="text-xs text-gfa-slate font-light leading-relaxed opacity-70">Standard institutional benefit included for all active GFA members in good standing.</p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>

              {/* Document Footer */}
              <div className="bg-gfa-warmWhite border-t border-gfa-border p-16 text-center">
                <p className="text-[10px] text-gfa-slate font-bold uppercase tracking-[0.4em] mb-10 opacity-50">
                  Official GFA Membership Framework
                </p>
                <div className="flex justify-center gap-8">
                  <button className="btn-primary h-16 px-16 text-lg">
                    Apply for Membership
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Membership;
