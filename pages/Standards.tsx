
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
// Fix: Import useLocale from LocaleContext.tsx instead of App.tsx
import { useLocale } from '../LocaleContext.tsx';

const Standards: React.FC = () => {
  const { t } = useLocale();
  const s = t.standards;

  const categories = [s.catA, s.catB, s.catC, s.catD, s.catE];

  return (
    <div className="py-grid-16 max-w-6xl mx-auto px-4">
      <SectionHeading title={s.title} subtitle={s.subtitle} />

      <div className="space-y-grid-10">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-gfa-darkGray border border-white/5 overflow-hidden shadow-2xl rounded-lg animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="bg-gfa-gold/10 px-grid-6 py-grid-4 border-b border-gfa-gold/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-black uppercase tracking-widest text-gfa-gold font-montserrat">{cat.title}</h3>
                <p className="micro-text text-gfa-gray uppercase tracking-[0.2em] font-bold mt-1 opacity-60">
                   {cat.scope}
                </p>
              </div>
              <span className="micro-text font-black uppercase bg-gfa-gold text-gfa-black px-4 py-1 rounded-sm">{cat.tag}</span>
            </div>

            <div className="p-grid-6 grid grid-cols-1 lg:grid-cols-2 gap-grid-12">
              <div>
                <h4 className="small-text text-white font-black uppercase tracking-widest mb-grid-4 border-l-2 border-gfa-gold pl-3">Standardization Elements</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                   {[
                     { label: 'Scope', val: 'Professional Industry Standard' },
                     { label: 'Process', val: 'Vetting & Site Audit' },
                     { label: 'Fees', val: 'Transparency Mandate' },
                     { label: 'Oversight', val: 'Quarterly Reviews' },
                     { label: 'Compliance', val: 'Mandatory Bond Proof' },
                     { label: 'Appeal', val: 'Arbitration Rights' }
                   ].map(el => (
                     <div key={el.label}>
                        <div className="micro-text text-gfa-gold font-black uppercase tracking-widest mb-1">{el.label}</div>
                        <div className="micro-text text-white font-bold uppercase tracking-widest opacity-60">{el.val}</div>
                     </div>
                   ))}
                </div>
                <div className="mt-8">
                  <h4 className="small-text text-white font-black uppercase tracking-widest mb-4 border-l-2 border-gfa-gold pl-3">{cat.docsTitle}</h4>
                  <ul className="space-y-3 micro-text text-gfa-gray font-bold uppercase tracking-widest opacity-80">
                    {cat.docs.map((d: string, i: number) => (
                      <li key={i} className="flex gap-4">
                        <span className="text-gfa-gold">✓</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col">
                <h4 className="small-text text-white font-black uppercase tracking-widest mb-grid-4 border-l-2 border-gfa-gold pl-3">Assessment Protocol</h4>
                <p className="micro-text text-gfa-gray leading-loose mb-grid-6 font-medium uppercase tracking-widest bg-white/5 p-grid-4 border border-white/5 rounded">
                  {cat.matrixBody}
                </p>
                <div className="mt-auto p-grid-4 bg-white/5 border border-white/10 micro-text font-black text-white/60 uppercase tracking-widest leading-relaxed rounded">
                  <span className="text-white block mb-2 opacity-80">⚠ REVOCATION GROUNDS</span>
                  {cat.disqual}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-grid-20 text-center border-t border-white/10 pt-grid-12">
        <p className="text-gfa-gray micro-text font-black uppercase tracking-[0.4em] opacity-40 max-w-3xl mx-auto leading-loose italic">
          Transparency builds trust. Every certified organization adheres to these technical standards.
        </p>
      </div>
    </div>
  );
};

export default Standards;
