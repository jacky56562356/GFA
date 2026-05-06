
import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
// Fix: Import useLocale from LocaleContext.tsx instead of App.tsx
import { useLocale } from '../LocaleContext.tsx';

const Transparency: React.FC = () => {
  const { t } = useLocale();
  const tr = t.transparency;

  const tableData = [
    { type: t.locale === 'zh' ? '会员注册' : 'Member Registration', fee: '$0.00 / ¥0', req: t.common.required, note: t.locale === 'zh' ? '基础身份核验' : 'Baseline identity verification.', ref: 'No' },
    { type: t.locale === 'zh' ? '试镜授权费' : 'Authorized Audition Fee', fee: 'Capped / 受限', req: t.common.optional, note: t.locale === 'zh' ? '受 GFA 标准约束' : 'Capped by GFA Standards.', ref: 'Yes' }
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <SectionHeading 
        title={tr.title} 
        subtitle={tr.subtitle} 
      />

      <div className="mb-12">
        <h3 className="text-2xl font-black mb-12 uppercase tracking-widest gold-gradient">{tr.tableTitle}</h3>
        <div className="overflow-x-auto border border-white/10 shadow-2xl">
          <table className="w-full text-left border-collapse bg-gfa-darkGray">
            <thead>
              <tr className="bg-gfa-gold text-gfa-black font-black uppercase text-[10px] tracking-widest">
                {tr.tableHeaders.map((header: string, i: number) => (
                  <th key={i} className="p-6 border-r border-gfa-black/10">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[10px] font-black uppercase tracking-widest text-gfa-gray">
              {tableData.map((row, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-6 text-white border-r border-white/5">{row.type}</td>
                  <td className="p-6 border-r border-white/5">{row.fee}</td>
                  <td className="p-6 border-r border-white/5">{row.req}</td>
                  <td className="p-6 border-r border-white/5">{row.note}</td>
                  <td className="p-6">{row.ref}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div className="bg-gfa-darkGray p-12 border border-white/5">
          <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-8 border-b border-gfa-gold/30 pb-4">{tr.rulesTitle}</h4>
          <ul className="space-y-6 text-xs text-gfa-gray font-bold uppercase tracking-wider">
            {tr.rules.map((rule: string, i: number) => (
              <li key={i} className="flex gap-4"><span>0{i+1}</span> {rule}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gfa-darkGray p-12 border border-white/5">
          <h4 className="text-sm font-black uppercase tracking-widest text-gfa-gold mb-8 border-b border-gfa-gold/30 pb-4">{tr.protectionTitle}</h4>
          <ul className="space-y-6 text-xs text-gfa-gray font-bold uppercase tracking-wider">
            {tr.protectionRules.map((pRule: string, i: number) => (
              <li key={i} className="flex gap-4"><span>🛡️</span> {pRule}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-12 bg-red-500/5 border border-red-500/20 text-center">
        <h4 className="text-xl font-black text-red-500 uppercase tracking-widest mb-6">{tr.enforcementTitle}</h4>
        <div className="flex flex-wrap justify-center gap-8">
          {tr.enforcementItems.map((v: string) => (
            <div key={v} className="text-[10px] font-black uppercase tracking-[0.2em] text-red-400 opacity-60">
              • {v}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transparency;
