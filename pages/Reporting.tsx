import React from 'react';
import { useLocale } from '../LocaleContext.tsx';

const Reporting: React.FC = () => {
  const { t } = useLocale();
  const r = t.reporting;

  return (
    <div className="bg-gfa-warmWhite pt-40 pb-16 px-6 min-h-screen">
      <div className="container-gfa">
        <header className="mb-12 text-center max-w-4xl mx-auto">
          <span className="gold-badge mb-8">Statutory Ethics Channel</span>
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-10 leading-tight">
            {r.title}
          </h1>
          <p className="text-lg text-gfa-slate leading-loose font-medium opacity-80 border-y border-gfa-border py-12 italic">
            {r.subtitle}
          </p>
          <div className="mt-12 bg-gfa-gold/10 border border-gfa-gold/20 p-6 rounded-sm text-gfa-inkBlack font-bold text-sm tracking-wide">
             🛡️ {r.commitment}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <form 
              className="bg-white p-12 border border-gfa-border shadow-sm rounded-card space-y-8" 
              onSubmit={(e) => { e.preventDefault(); alert('Report received. Administrative case number assigned. Check email for response.'); }}
              aria-labelledby="form-header"
            >
              <h3 id="form-header" className="text-2xl font-bold mb-8 font-serif text-gfa-inkBlack border-b border-gfa-border pb-6">{r.formTitle}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="report-type" className="text-[11px] text-gfa-gold uppercase font-black tracking-widest">{r.formLabels.type}</label>
                  <select id="report-type" required className="w-full bg-gfa-warmWhite border border-gfa-border p-4 text-gfa-inkBlack focus:outline-none focus:border-gfa-gold font-bold uppercase text-[12px] tracking-widest rounded-btn cursor-pointer">
                    {r.reportTypes.map((type: string) => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-3">
                  <label htmlFor="org-name" className="text-[11px] text-gfa-gold uppercase font-black tracking-widest">{r.formLabels.org}</label>
                  <input id="org-name" required type="text" className="w-full bg-gfa-warmWhite border border-gfa-border p-4 text-gfa-inkBlack focus:outline-none focus:border-gfa-gold text-sm font-bold rounded-btn" placeholder="Entity Name" />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="report-desc" className="text-[11px] text-gfa-gold uppercase font-black tracking-widest">{r.formLabels.desc}</label>
                <textarea id="report-desc" required rows={8} className="w-full bg-gfa-warmWhite border border-gfa-border p-4 text-gfa-inkBlack focus:outline-none focus:border-gfa-gold text-sm leading-relaxed rounded-btn" placeholder="Please provide specific details regarding dates, locations, and observed behaviors..."></textarea>
              </div>

              <div className="space-y-3">
                <label htmlFor="reporter-email" className="text-[11px] text-gfa-gold uppercase font-black tracking-widest">{r.formLabels.email}</label>
                <input id="reporter-email" required type="email" className="w-full bg-gfa-warmWhite border border-gfa-border p-4 text-gfa-inkBlack focus:outline-none focus:border-gfa-gold text-sm font-bold rounded-btn" placeholder="For administrative response" />
              </div>

              <button type="submit" className="btn-primary w-full shadow-lg">
                {r.formLabels.submit}
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h4 className="text-[12px] text-gfa-inkBlack font-bold uppercase tracking-widest mb-8 border-l-4 border-gfa-gold pl-4">{r.processTitle}</h4>
              <div className="space-y-8">
                {r.process.map((step: any, i: number) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="w-8 h-8 rounded-full bg-gfa-gold/10 text-gfa-gold font-black text-xs flex items-center justify-center border border-gfa-gold/20 shrink-0">{i+1}</span>
                    <div>
                      <h5 className="text-[11px] font-black uppercase text-gfa-inkBlack mb-1 tracking-widest">{step.s}</h5>
                      <p className="text-[12px] text-gfa-slate font-medium leading-relaxed uppercase tracking-wider opacity-80">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 bg-white border border-gfa-border rounded-card">
              <h4 className="text-[12px] text-gfa-inkBlack font-bold uppercase tracking-widest mb-6 font-serif">Possible Administrative Actions</h4>
              <ul className="text-[12px] text-gfa-slate font-bold space-y-4 uppercase tracking-widest opacity-70">
                {r.outcomes.map((outcome: string) => (
                  <li key={outcome} className="flex items-center gap-3">
                    <span className="text-red-500">⚠</span> {outcome}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-8 bg-gfa-inkBlack text-white rounded-card">
               <h4 className="text-[12px] text-gfa-gold font-bold uppercase tracking-widest mb-4">Official Protection</h4>
               <p className="text-[11px] leading-relaxed italic opacity-60">GFA adheres to strict data protection and anonymity protocols. Your identification remains confidential unless explicit legal authorization is provided.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reporting;