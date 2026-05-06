import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';

const YouthSafetyPolicy: React.FC = () => {
  const { t } = useLocale();
  const p = t.youthSafetyPolicy || { title: 'Youth Safety Act', subtitle: 'Safeguarding Framework', intro: 'GFA maintains zero tolerance for misconduct.', sections: {}, footer: 'GFA 2025' };

  return (
    <div className="bg-gfa-warmWhite pt-40 pb-16 px-6 min-h-screen">
      <div className="container-gfa">
        {/* Header */}
        <header className="mb-12 text-center max-w-4xl mx-auto">
          <span className="gold-badge mb-8">Statutory Safety Act</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-10 leading-tight">
            {p.title}
          </h1>
          <p className="text-lg text-gfa-gold font-bold uppercase tracking-[0.2em] mb-12 border-b border-gfa-border pb-8">
            {p.subtitle}
          </p>
          <p className="text-gfa-slate text-lg leading-loose italic opacity-80 font-medium">
            "{p.intro}"
          </p>
        </header>

        {/* Policy Sections */}
        <div className="space-y-16 max-w-4xl mx-auto">
          {Object.entries(p.sections).map(([key, section]: [string, any]) => (
            <section key={key} className="bg-white p-12 border border-gfa-border relative group hover:border-gfa-gold transition-all rounded-card shadow-sm">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gfa-gold/30 group-hover:bg-gfa-gold transition-all"></div>
              <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-6 group-hover:text-gfa-gold transition-colors">
                {section.title}
              </h3>
              <p className="text-gfa-slate text-[16px] leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {section.body}
              </p>
            </section>
          ))}
          
          {/* Dedicated Youth Privacy Section */}
          <section className="bg-gfa-inkBlack text-white p-8 md:p-12 rounded-card relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gfa-gold/10 blur-3xl"></div>
             <h3 className="text-2xl font-bold font-serif text-gfa-gold mb-8">Youth Privacy & Data Ethics</h3>
             <div className="space-y-6 text-sm leading-relaxed opacity-70 italic font-medium">
                <p>• Zero Storage Policy: GFA does not maintain permanent digital databases of minor identification. Verification is performed in real-time and purged within 24 hours of audit completion.</p>
                <p>• COPPA & GDPR-K Compliance: All participating agencies must adhere to the Children's Online Privacy Protection Act and equivalent global standards regarding digital signatures and consent.</p>
                <p>• Verified Guardian Access: Only documented legal guardians may initiate or review status inquiries regarding minor project participation.</p>
             </div>
          </section>
        </div>

        {/* Official Disclaimer Footer */}
        <div className="mt-24 pt-16 border-t border-gfa-border text-center max-w-4xl mx-auto">
          <div className="bg-white border border-gfa-border p-10 mb-12 text-left shadow-inner">
            <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-red-600 mb-6 border-b border-gfa-border pb-4">Mandatory Legal Notice</h4>
            <p className="text-[12px] text-gfa-slate leading-loose font-bold italic">
              {t.disclaimer.statutory}
            </p>
          </div>
          <p className="text-[10px] text-gfa-slate font-black uppercase tracking-[0.6em] opacity-40">
            {p.footer} • OFFICIAL DOCUMENT CODE: YSA-2025-V1
          </p>
        </div>
      </div>
    </div>
  );
};

export default YouthSafetyPolicy;