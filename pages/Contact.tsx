
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import SEO from '../components/SEO.tsx';

const Contact: React.FC = () => {
  const { t } = useLocale();
  const contact = t.contact || {};
  const labels = contact.labels || {};
  const form = contact.form || {};
  const dropdowns = contact.dropdowns || {};
  const ui = contact.ui || { secretariatBadge: "Secretariat", alertMessage: "Application submitted to GFA Registry." };

  const [formType, setFormType] = useState<'Individual' | 'Organization' | 'Merchant'>('Individual');

  const types = [
    { id: 'Individual', label: labels.individual || 'Individual' },
    { id: 'Organization', label: labels.organization || 'Organization' },
    { id: 'Merchant', label: labels.merchant || 'Merchant' }
  ];

  const merchantCats = dropdowns.merchantCats || ['Legal', 'Insurance', 'Dining', 'Retail', 'Travel', 'Production Services'];
  const orgTypes = dropdowns.orgTypes || ['Production Agency', 'Film School / Institution', 'Festival / Event Body', 'Government / NGO'];

  return (
    <div className="bg-gfa-warmWhite min-h-screen relative overflow-hidden">
      <SEO 
        title={contact.title || "Contact Us"} 
        description={contact.intro || "Get in touch with the Global Film Alliance secretariat for inquiries, press, and institutional support."} 
      />

      {/* Map Background */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center grayscale pointer-events-none"></div>
      
      {/* Cinematic Header Background */}
      <div className="absolute top-0 left-0 w-full h-[500px] z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gfa-inkBlack/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
          alt="Office Background" 
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gfa-warmWhite z-20"></div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gfa-gold/5 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none z-0"></div>

      <div className="pt-32 pb-16 px-6 container-gfa relative z-10">
        <header className="mb-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="gold-badge mb-10 animate-fade-up">{ui.secretariatBadge}</div>
          <h1 className="text-5xl md:text-8xl font-bold font-serif text-white mb-12 leading-tight drop-shadow-2xl">
            {contact.title}
          </h1>
          <p className="text-xl md:text-2xl text-gfa-slate leading-relaxed font-light italic font-serif opacity-90 border-y border-gfa-border/50 py-16">
            {contact.intro}
          </p>
        </header>
      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-12">
            <div className="flex flex-col gap-6 animate-fade-up">
              {types.map((type) => (
                <button 
                  key={type.id}
                  onClick={() => setFormType(type.id as any)}
                  className={`text-left p-8 rounded-3xl border transition-all uppercase text-[10px] font-bold tracking-[0.3em] shadow-xl ${formType === type.id ? 'bg-gfa-inkBlack border-gfa-gold text-white translate-x-4' : 'bg-white border-gfa-border text-gfa-slate hover:border-gfa-gold hover:text-gfa-gold'}`}
                >
                  {type.label} {labels.join}
                </button>
              ))}
            </div>
            
            <div className="pt-16 border-t border-gfa-border space-y-10 bg-white/50 p-10 rounded-[40px] backdrop-blur-xl shadow-2xl animate-fade-up delay-200">
              <div>
                <h4 className="text-gfa-slate font-bold uppercase text-[10px] tracking-[0.4em] mb-4 opacity-50">{labels.inquiries}</h4>
                <p className="text-gfa-inkBlack font-bold text-lg font-serif italic">general@gfa-alliance.org</p>
              </div>
              <div>
                <h4 className="text-gfa-slate font-bold uppercase text-[10px] tracking-[0.4em] mb-4 opacity-50">{labels.press}</h4>
                <p className="text-gfa-inkBlack font-bold text-lg font-serif italic">media@gfa-alliance.org</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[48px] border border-gfa-border shadow-2xl relative overflow-hidden animate-fade-up delay-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gfa-gold/5 rounded-bl-full pointer-events-none"></div>
            
            <h3 className="text-3xl font-bold mb-10 font-serif text-gfa-inkBlack relative z-10 leading-tight">
              {(form.header || "Contact Form: {type}").replace('{type}', types.find(it => it.id === formType)?.label || '')}
            </h3>
            
            <form action="https://formsubmit.co/jacky@gfafilm.org" method="POST" className="space-y-10 relative z-10">
              {/* Optional: Add hidden fields for formsubmit.co configuration */}
              <input type="hidden" name="_subject" value="New Contact Form Request from GFA Website!" />
              <input type="hidden" name="_next" value="https://gfaalliance.org/contact" />
              <input type="hidden" name="FormType" value={formType} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] text-gfa-slate uppercase font-bold tracking-[0.3em] opacity-60">{form.name || "Name"}</label>
                  <input required type="text" name="name" className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-base font-serif italic focus:border-gfa-gold focus:ring-4 focus:ring-gfa-gold/5 transition-all outline-none" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] text-gfa-slate uppercase font-bold tracking-[0.3em] opacity-60">{form.email || "Email"}</label>
                  <input required type="email" name="_replyto" className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-base font-serif italic focus:border-gfa-gold focus:ring-4 focus:ring-gfa-gold/5 transition-all outline-none" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[10px] text-gfa-slate uppercase font-bold tracking-[0.3em] opacity-60">{form.location || "Location"}</label>
                  <input required type="text" name="location" className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-base font-serif italic focus:border-gfa-gold focus:ring-4 focus:ring-gfa-gold/5 transition-all outline-none" />
                </div>
                {formType === 'Merchant' && (
                  <div className="space-y-4">
                    <label className="text-[10px] text-gfa-slate uppercase font-bold tracking-[0.3em] opacity-60">{form.cat || "Category"}</label>
                    <select name="category" className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-sm font-bold appearance-none focus:border-gfa-gold transition-all outline-none cursor-pointer">
                      {merchantCats.map((c: string) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                )}
                {formType === 'Organization' && (
                  <div className="space-y-4">
                    <label className="text-[10px] text-gfa-slate uppercase font-bold tracking-[0.3em] opacity-60">{form.orgType || "Organization Type"}</label>
                    <select name="orgType" className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-sm font-bold appearance-none focus:border-gfa-gold transition-all outline-none cursor-pointer">
                      {orgTypes.map((o: string) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <label className="text-[10px] text-gfa-slate uppercase font-bold tracking-[0.3em] opacity-60">{form.message || "Message"}</label>
                <textarea required name="message" rows={6} className="w-full p-6 bg-gfa-warmWhite border border-gfa-border rounded-2xl text-base font-serif italic focus:border-gfa-gold focus:ring-4 focus:ring-gfa-gold/5 transition-all outline-none resize-none"></textarea>
              </div>

              <div className="flex items-start gap-6 py-6">
                <div className="relative flex items-center">
                  <input required type="checkbox" name="consent" value="given" className="w-6 h-6 rounded-lg border-gfa-border text-gfa-gold focus:ring-gfa-gold/20 cursor-pointer" />
                </div>
                <p className="text-[10px] text-gfa-slate uppercase tracking-[0.2em] font-bold leading-relaxed opacity-60">
                  {form.consent || "I agree to the terms and privacy policy."}
                </p>
              </div>

              <button type="submit" className="w-full h-20 bg-gfa-inkBlack text-white font-bold uppercase text-xs tracking-[0.4em] rounded-2xl hover:bg-slate-800 shadow-2xl transition-all active:scale-[0.98]">
                {form.submit || "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
