
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';

const Governance: React.FC = () => {
  const { t } = useLocale();
  const gov = t.governance;

  return (
    <div className="bg-gfa-warmWhite pt-32 pb-16 px-6 min-h-screen relative overflow-hidden">
      <SEO 
        title={gov.title || "Governance Charter"} 
        description={gov.subtitle || "Guided by a multi-national board dedicated to cinematic ethics."} 
      />

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gfa-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

      <div className="container-gfa relative z-10">
        {/* Header */}
        <header className="mb-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="gold-badge mb-10 animate-fade-up">Institutional Transparency</div>
          <h1 className="text-5xl md:text-8xl font-bold font-serif text-gfa-inkBlack mb-12 leading-tight drop-shadow-sm">
            {gov.title}
          </h1>
          <p className="text-xl md:text-2xl text-gfa-slate leading-relaxed font-light italic font-serif opacity-90 border-y border-gfa-border/50 py-16">
            {gov.subtitle}
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <aside className="lg:col-span-4 space-y-12">
            <div className="sticky top-32 bg-white p-12 rounded-[40px] shadow-2xl border border-gfa-border animate-fade-up">
              <h3 className="text-xl font-bold font-serif mb-10 border-b border-gfa-border pb-6 text-gfa-inkBlack">Official Documents</h3>
              <div className="space-y-6">
                <button className="w-full h-16 flex items-center justify-center gap-3 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-sm font-bold hover:bg-gfa-gold hover:text-white transition-all group">
                   <span className="text-lg">📄</span> {gov.downloads.charter}
                </button>
                <button className="w-full h-16 flex items-center justify-center gap-3 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-sm font-bold hover:bg-gfa-gold hover:text-white transition-all group">
                   <span className="text-lg">📜</span> {gov.downloads.bylaws}
                </button>
              </div>
              <div className="mt-12 pt-10 border-t border-gfa-border">
                <ul className="space-y-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-slate">
                  <li className="flex justify-between items-center">
                    <span className="opacity-50">Registry Version:</span> 
                    <span className="text-gfa-inkBlack bg-gfa-warmWhite px-3 py-1 rounded-full border border-gfa-border">2025.1.4</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="opacity-50">Audit Cycle:</span> 
                    <span className="text-gfa-gold">Quarterly</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="opacity-50">Next Review:</span> 
                    <span className="text-gfa-inkBlack">APR 2025</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-8 space-y-16">
            {/* Charter Summary */}
            <section className="animate-fade-up">
              <h2 className="text-4xl font-bold font-serif mb-12 text-gfa-inkBlack leading-tight">{gov.summaryTitle}</h2>
              <div className="bg-white border border-gfa-border p-16 rounded-[40px] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-3 h-full bg-gfa-gold transition-all group-hover:w-4"></div>
                <p className="text-2xl text-gfa-slate leading-relaxed font-light italic font-serif opacity-90">
                  "{gov.summaryBody}"
                </p>
              </div>
            </section>

            {/* Board Structure */}
            <section className="animate-fade-up delay-200">
              <h2 className="text-4xl font-bold font-serif mb-12 text-gfa-inkBlack leading-tight">{gov.roleTitle}</h2>
              <p className="text-xl text-gfa-slate mb-10 leading-relaxed font-light font-serif italic opacity-80">
                {gov.roleBody}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {gov.board.map((member: any, i: number) => (
                  <div key={i} className="bg-white p-10 rounded-[32px] border border-gfa-border shadow-xl hover:shadow-2xl hover:border-gfa-gold transition-all group">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-gold mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{member.role}</h4>
                    <p className="text-2xl font-bold font-serif text-gfa-inkBlack leading-tight">{member.title}</p>
                    <div className="mt-8 h-1 w-16 bg-gfa-border group-hover:w-full transition-all duration-1000"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Statutory Adherence Callout */}
            <section className="bg-gfa-inkBlack text-white p-16 md:p-24 rounded-[48px] relative overflow-hidden shadow-2xl animate-fade-up delay-300">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gfa-gold/10 blur-[100px] -mr-48 -mt-48"></div>
              <h2 className="text-4xl font-bold font-serif mb-12 text-gfa-gold leading-tight">Supportive Framework</h2>
              <p className="text-xl leading-relaxed mb-10 opacity-70 font-light italic font-serif">
                The GFA Charter is a voluntary commitment. Participation signals an organization's dedication to professional safety and structural transparency without replacing statutory legal obligations.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <Link to="/certification" className="btn-primary h-16 px-10 text-sm">Apply for Recognition</Link>
                <Link to="/about" className="h-16 px-10 flex items-center justify-center border border-white/20 rounded-full text-sm font-bold hover:bg-white/10 transition-all">Read Mission Statement</Link>
              </div>
            </section>
          </main>
        </div>

        <footer className="mt-40 pt-20 border-t border-gfa-border text-center">
          <p className="text-[10px] text-gfa-slate font-bold uppercase tracking-[0.6em] opacity-30 italic">
            Institutional Governance Document • Transparency Disclosure Cycle 2025
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Governance;
