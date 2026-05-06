
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';

const AdminDashboard = () => {
  const { t } = useLocale();
  const adm = t.adminDashboard;

  return (
    <div className="bg-gfa-warmWhite pt-40 pb-16 px-6 min-h-screen">
      <div className="container-gfa">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-end gap-10 border-b border-gfa-border pb-10">
          <div>
            <span className="text-gfa-gold font-black uppercase tracking-[0.5em] text-[10px] mb-4 block opacity-80 italic">{adm.header.subtitle}</span>
            <h1 className="text-gfa-inkBlack uppercase text-4xl md:text-5xl leading-tight tracking-tighter font-serif font-bold">{adm.header.title}</h1>
          </div>
          <div className="flex gap-4">
            <span className="bg-gfa-gold/10 border border-gfa-gold/20 text-[10px] font-black text-gfa-gold px-8 py-3 uppercase tracking-widest rounded-full">{adm.header.access}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <aside className="lg:col-span-1 space-y-4">
             <div className="bg-white border border-gfa-border p-6 space-y-4 rounded-card shadow-sm">
                <nav className="space-y-2">
                   <button className="w-full text-left p-4 bg-gfa-gold text-gfa-black text-[10px] font-black uppercase tracking-widest rounded-btn shadow-md">{adm.nav.audits}</button>
                   <button className="w-full text-left p-4 text-gfa-slate text-[10px] font-black uppercase tracking-widest hover:bg-gfa-warmWhite rounded-btn transition-all">{adm.nav.registry}</button>
                   <button className="w-full text-left p-4 text-gfa-slate text-[10px] font-black uppercase tracking-widest hover:bg-gfa-warmWhite rounded-btn transition-all">{adm.nav.intake}</button>
                   <button className="w-full text-left p-4 text-gfa-slate text-[10px] font-black uppercase tracking-widest hover:bg-gfa-warmWhite rounded-btn transition-all">{adm.nav.scoring}</button>
                   <button className="w-full text-left p-4 text-gfa-slate text-[10px] font-black uppercase tracking-widest hover:bg-gfa-warmWhite rounded-btn transition-all">{adm.nav.analytics}</button>
                </nav>
             </div>
          </aside>

          <main className="lg:col-span-3 space-y-12">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white border border-gfa-border p-8 rounded-card shadow-sm">
                   <h5 className="text-[10px] font-black uppercase tracking-widest text-gfa-gold mb-4">{adm.stats.total}</h5>
                   <div className="text-4xl font-black text-gfa-inkBlack font-serif">412</div>
                </div>
                <div className="bg-white border border-gfa-border p-8 rounded-card shadow-sm">
                   <h5 className="text-[10px] font-black uppercase tracking-widest text-gfa-gold mb-4">{adm.stats.accredited}</h5>
                   <div className="text-4xl font-black text-gfa-inkBlack font-serif">86</div>
                </div>
                <div className="bg-white border border-gfa-border p-8 rounded-card shadow-sm">
                   <h5 className="text-[10px] font-black uppercase tracking-widest text-gfa-slate mb-4">{adm.stats.suspended}</h5>
                   <div className="text-4xl font-black text-gfa-slate">14</div>
                </div>
                <div className="bg-white border border-gfa-border p-8 rounded-card shadow-sm">
                   <h5 className="text-[10px] font-black uppercase tracking-widest text-gfa-gold mb-4">{adm.stats.renewal}</h5>
                   <div className="text-4xl font-black text-gfa-inkBlack font-serif">31</div>
                </div>
             </div>

             <div className="bg-white border border-gfa-border p-12 rounded-card shadow-sm">
                <h3 className="text-xl font-bold uppercase tracking-widest text-gfa-inkBlack mb-10 border-b border-gfa-border pb-4 font-serif">{adm.queueTitle}</h3>
                <div className="space-y-6">
                   <div className="flex justify-between items-center p-8 bg-gfa-warmWhite border border-gfa-border rounded-btn hover:border-gfa-gold transition-all group">
                      <div className="flex gap-8 items-center">
                         <div className="w-12 h-12 bg-white border border-gfa-border rounded-full flex items-center justify-center text-xl shadow-sm">🏫</div>
                         <div>
                            <h5 className="text-[11px] font-black uppercase tracking-widest text-gfa-inkBlack">San Fran Film Collective</h5>
                            <p className="text-[9px] text-gfa-slate uppercase font-bold tracking-widest mt-1 opacity-60">Submitted: 20 Mar 2024 • Tier: Certified</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <button className="btn-secondary !h-10 !px-6 !text-[10px]">{adm.btns.open}</button>
                         <button className="text-gfa-slate text-[10px] font-black uppercase tracking-widest px-4 hover:text-red-500">{adm.btns.dismiss}</button>
                      </div>
                   </div>
                   <div className="flex justify-between items-center p-8 bg-gfa-warmWhite border border-gfa-border rounded-btn hover:border-gfa-gold transition-all group opacity-60">
                      <div className="flex gap-8 items-center">
                         <div className="w-12 h-12 bg-white border border-gfa-border rounded-full flex items-center justify-center text-xl shadow-sm">⭐</div>
                         <div>
                            <h5 className="text-[11px] font-black uppercase tracking-widest text-gfa-inkBlack">Tokyo Motion Lab</h5>
                            <p className="text-[9px] text-gfa-slate uppercase font-bold tracking-widest mt-1 opacity-60">Submitted: 18 Mar 2024 • Tier: Verified</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <button className="btn-secondary !h-10 !px-6 !text-[10px]">{adm.btns.open}</button>
                         <button className="text-gfa-slate text-[10px] font-black uppercase tracking-widest px-4">{adm.btns.dismiss}</button>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-gfa-inkBlack text-white p-12 rounded-card shadow-xl">
                <h3 className="text-xl font-bold uppercase tracking-widest text-gfa-gold mb-10 border-b border-white/10 pb-4 font-serif">{adm.intakeTitle}</h3>
                <div className="space-y-4">
                   <div className="bg-white/5 p-8 border border-white/10 rounded-sm flex flex-col gap-6">
                      <div className="flex justify-between items-start">
                         <h5 className="text-[11px] font-black uppercase tracking-widest text-white">{adm.intakeItem.title}</h5>
                         <span className="bg-gfa-gold/20 text-[9px] text-gfa-gold font-black tracking-widest px-3 py-1 rounded-sm">{adm.intakeItem.priority}</span>
                      </div>
                      <p className="text-[11px] text-white/60 uppercase tracking-widest leading-relaxed italic border-l-2 border-gfa-gold pl-4">"{adm.intakeItem.body}"</p>
                      <div className="flex gap-6 pt-4 border-t border-white/10">
                         <button className="text-[9px] font-black uppercase tracking-widest text-gfa-gold hover:underline">{adm.intakeItem.btn1}</button>
                         <button className="text-[9px] font-black uppercase tracking-widest text-white hover:underline">{adm.intakeItem.btn2}</button>
                      </div>
                   </div>
                </div>
             </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
