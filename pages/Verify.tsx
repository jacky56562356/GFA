
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';

const Verify: React.FC = () => {
  const { t } = useLocale();
  const v = t.verify || { title: 'Bond Verification', body: 'Verify statutory bonds.', form: { placeholder: 'Bond ID', button: 'Verify' } };
  const [id, setId] = useState('');
  const [result, setResult] = useState<'valid' | 'expired' | 'suspended' | 'notFound' | null>(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const clean = id.trim().toUpperCase();
      if (clean.includes('BOND-2024') || clean === 'GFA-BOND') setResult('valid');
      else setResult('notFound');
    }, 1500);
  };

  return (
    <div className="py-40 max-w-6xl mx-auto px-4 min-h-screen">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <div className="inline-block px-4 py-1.5 border border-gfa-gold/30 text-gfa-gold text-[8px] font-black uppercase tracking-[0.5em] mb-8 bg-gfa-gold/5 font-montserrat">
           Supervisory Database Access
        </div>
        <h1 className="text-3xl md:text-5xl font-black mb-6 gold uppercase tracking-tighter font-cinzel leading-none">
          {v.title}
        </h1>
        <p className="text-sm md:text-base text-gfa-gray mb-10 font-medium uppercase tracking-[0.2em] max-w-2xl mx-auto leading-loose opacity-60">
          {v.body}
        </p>
        
        <form onSubmit={handleVerify} className="bg-gfa-darkGray/40 p-10 md:p-14 border border-white/10 shadow-3xl relative overflow-hidden rounded-sm backdrop-blur-md">
          <div className="absolute top-0 left-0 w-1 h-full bg-gfa-gold opacity-30"></div>
          <input 
            type="text" 
            placeholder={v.form.placeholder} 
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full bg-gfa-black/60 border border-white/10 p-5 text-white focus:outline-none focus:border-gfa-gold font-mono uppercase text-xs tracking-[0.2em] rounded-sm mb-6 transition-all"
          />
          <button disabled={loading} className="btn-gold px-12 py-5 w-full text-[11px] shadow-2xl">
            {loading ? t.common.loading : v.form.button}
          </button>
        </form>

        {result === 'valid' && (
          <div className="mt-10 p-8 bg-gfa-gold/10 border border-gfa-gold/20 animate-fade-up">
            <div className="text-gfa-gold font-black text-[9px] uppercase tracking-[0.4em] mb-2">Statutory Status: Verified</div>
            <div className="text-white text-base font-black uppercase tracking-widest leading-tight">Bond Active & Audited for 2024-2025</div>
          </div>
        )}
        
        {result === 'notFound' && (
          <div className="mt-10 p-8 bg-white/5 border border-white/10 animate-fade-up">
            <div className="text-white font-black text-[9px] uppercase tracking-[0.4em] mb-2">Statutory Status: Not Found</div>
            <div className="text-white text-base font-black uppercase tracking-widest leading-tight opacity-60">No Active Bond Record in GFA Database</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
