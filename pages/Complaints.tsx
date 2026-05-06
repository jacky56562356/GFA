
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';

const Complaints = () => {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const comp = t.complaints;

  return (
    <div className="bg-gfa-warmWhite pt-32 pb-16 px-6 min-h-screen relative overflow-hidden">
      <SEO 
        title={comp.title || "Feedback & Complaints"} 
        description="Official channel for reporting concerns or providing feedback regarding GFA-accredited organizations." 
      />

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px] -ml-64 -mt-64 pointer-events-none"></div>

      <div className="container-gfa relative z-10">
        <header className="mb-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="gold-badge mb-10 bg-red-500/10 text-red-600 border-red-500/20 animate-fade-up">Official Reporting Channel</div>
          <h1 className="text-5xl md:text-8xl font-bold font-serif text-gfa-inkBlack mb-12 leading-tight drop-shadow-sm">
            {comp.title}
          </h1>
          <p className="text-xl md:text-2xl text-gfa-slate leading-relaxed font-light italic font-serif opacity-90 border-y border-gfa-border/50 py-16">
            GFA maintains a rigorous oversight mechanism. Use this portal to lodge formal complaints or provide critical feedback regarding the conduct of accredited institutions.
          </p>
        </header>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-[48px] shadow-2xl border border-gfa-border relative overflow-hidden animate-fade-up">
            <div className="absolute top-0 left-0 w-full h-2 bg-red-600"></div>
            
            {submitted ? (
              <div className="text-center py-20 animate-fade-in">
                <div className="w-24 h-24 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-10">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-6">Report Received</h2>
                <p className="text-lg text-gfa-slate font-light italic font-serif">
                  Your submission has been logged with our Compliance Review Panel. We maintain strict confidentiality throughout the investigation process.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-12 text-sm font-bold uppercase tracking-widest text-gfa-gold border-b border-gfa-gold/30 hover:border-gfa-gold transition-all"
                >
                  Submit Another Report
                </button>
              </div>
            ) : (
              <form className="space-y-10" onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                <div className="space-y-4">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-slate opacity-60">Organization Name / GFA-ID</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-base font-serif italic focus:border-red-600 focus:ring-4 focus:ring-red-600/5 transition-all outline-none" 
                    placeholder="e.g. CineAcademy / GFA-12345" 
                  />
                </div>
                
                <div className="space-y-4">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-slate opacity-60">Nature of Concern</label>
                  <select className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-sm font-bold appearance-none focus:border-red-600 transition-all outline-none">
                    <option>Financial Transparency</option>
                    <option>Youth Safeguarding Breach</option>
                    <option>Professional Misconduct</option>
                    <option>Other Institutional Concern</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-slate opacity-60">Detailed Description</label>
                  <textarea 
                    required 
                    rows={6}
                    className="w-full p-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-base font-serif italic focus:border-red-600 focus:ring-4 focus:ring-red-600/5 transition-all outline-none resize-none" 
                    placeholder="Please provide specific details, dates, and any supporting evidence..."
                  ></textarea>
                </div>

                <div className="pt-6">
                  <button className="w-full h-20 bg-red-600 text-white font-bold uppercase text-xs tracking-[0.4em] rounded-2xl hover:bg-red-700 shadow-xl hover:shadow-red-600/20 transition-all active:scale-[0.98]">
                    {comp.form.submit}
                  </button>
                </div>
                
                <p className="text-[10px] text-gfa-slate text-center opacity-50 leading-relaxed">
                  By submitting this form, you acknowledge that the information provided is accurate to the best of your knowledge. GFA reserves the right to request additional documentation.
                </p>
              </form>
            )}
          </div>
        </div>

        <footer className="mt-40 pt-20 border-t border-gfa-border text-center">
          <p className="text-[10px] text-gfa-slate font-bold uppercase tracking-[0.6em] opacity-30 italic">
            Confidential Compliance Reporting Portal • Global Film Alliance
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Complaints;
