
import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Merchant } from '../types.ts';
import SEO from '../components/SEO.tsx';

const Partners: React.FC = () => {
  const { t } = useLocale();
  const [filter, setFilter] = useState({ category: 'All', country: 'All' });
  const partnersList: Merchant[] = t.partnersList || [];
  const p = t.partners || {};

  const filterOpts = p.filterOptions || {
    categories: ['All', 'Legal', 'Production', 'Travel', 'Insurance', 'Dining', 'Retail'],
    countries: ['All', 'USA', 'China', 'UK', 'France', 'Australia', 'Italy']
  };

  const categories = filterOpts.categories;
  const countries = filterOpts.countries;

  // Since we are now using localized data, we can filter directly against the localized strings
  // However, for 'All', we need to check index 0.
  
  const filtered = partnersList.filter(m => {
    const catMatch = filter.category === categories[0] || m.category === filter.category;
    // Basic fuzzy match for country if data might have slight variations, but strictly == is better if data is consistent
    const countryMatch = filter.country === countries[0] || m.country === filter.country;
    return catMatch && countryMatch;
  });

  return (
    <div className="bg-gfa-warmWhite pt-32 pb-16 px-6 min-h-screen relative overflow-hidden">
      <SEO 
        title={p.title || "Partners"} 
        description={p.intro || "Find verified service providers including legal, insurance, and production vendors for your film projects."} 
      />

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gfa-gold/5 rounded-full blur-[120px] -ml-64 -mt-64 pointer-events-none"></div>

      <div className="container-gfa relative z-10">
        {/* Header */}
        <header className="mb-10 text-center max-w-4xl mx-auto animate-fade-in">
          <div className="gold-badge mb-10 animate-fade-up">Verified Service Providers</div>
          <h1 className="text-5xl md:text-8xl font-bold font-serif text-gfa-inkBlack mb-12 leading-tight drop-shadow-sm">
            {p.title}
          </h1>
          <p className="text-xl md:text-2xl text-gfa-slate leading-relaxed font-light italic font-serif opacity-90 border-y border-gfa-border/50 py-16">
            {p.intro}
          </p>
        </header>

        {/* Filters */}
        <div className="bg-white p-8 md:p-12 mb-10 flex flex-wrap gap-12 border border-gfa-border items-end rounded-[40px] shadow-2xl animate-fade-up">
          <div className="flex-grow min-w-[240px]">
            <label className="block text-[10px] text-gfa-slate font-bold uppercase tracking-[0.3em] mb-6 opacity-60">{p.catLabel}</label>
            <select 
              onChange={e => setFilter({ ...filter, category: e.target.value })}
              className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border text-gfa-inkBlack text-sm font-bold appearance-none focus:border-gfa-gold rounded-2xl transition-all outline-none"
            >
              {categories.map((c: string) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex-grow min-w-[240px]">
            <label className="block text-[10px] text-gfa-slate font-bold uppercase tracking-[0.3em] mb-6 opacity-60">{p.countryLabel}</label>
            <select 
              onChange={e => setFilter({ ...filter, country: e.target.value })}
              className="w-full h-16 px-6 bg-gfa-warmWhite border border-gfa-border text-gfa-inkBlack text-sm font-bold appearance-none focus:border-gfa-gold rounded-2xl transition-all outline-none"
            >
              {countries.map((c: string) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="ml-auto text-xs text-gfa-gold font-black uppercase tracking-[0.4em] self-center pt-8">
            {p.found?.replace('{n}', filtered.length.toString())}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filtered.map(m => (
            <div key={m.id} className="bg-white p-12 rounded-[40px] border border-gfa-border shadow-xl hover:shadow-2xl transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gfa-gold/5 rounded-bl-full -mr-16 -mt-10 transition-all group-hover:bg-gfa-gold/10"></div>
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="w-20 h-20 bg-gfa-warmWhite rounded-2xl flex items-center justify-center border border-gfa-border group-hover:border-gfa-gold/30 transition-all duration-500 shadow-inner">
                  <img src={m.logo} alt={m.name} className="w-12 h-12 object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gfa-gold bg-gfa-gold/10 px-4 py-1.5 rounded-full border border-gfa-gold/20">
                   {m.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gfa-inkBlack font-serif leading-tight group-hover:text-gfa-gold transition-colors">{m.name}</h3>
              <p className="text-gfa-gold font-bold text-sm mb-8 font-serif italic">{m.benefit}</p>
              
              <p className="text-gfa-slate text-sm mb-10 font-light italic opacity-80">
                {m.city}, {m.country}
              </p>
              
              <div className="pt-8 border-t border-gfa-border/50 text-[10px] font-bold uppercase tracking-[0.3em] text-gfa-slate/40">
                {p.card?.eligibility}: <span className="text-gfa-inkBlack opacity-100">{m.eligibility}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
