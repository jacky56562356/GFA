
import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Link } from 'react-router-dom';
import { 
  Building, 
  User, 
  FileText, 
  RefreshCw, 
  Activity, 
  AlertTriangle, 
  ShieldCheck, 
  CreditCard, 
  Calendar, 
  Download, 
  Award, 
  FileCheck,
  LogOut,
  LifeBuoy,
  ChevronRight
} from 'lucide-react';

const MemberPortal = () => {
  const { t } = useLocale();
  const mp = t.memberPortal;

  return (
    <div className="bg-gfa-warmWhite pt-32 pb-16 px-6 min-h-screen font-sans">
      <div className="container-gfa max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-gfa-border pb-8">
          <div>
            <span className="text-gfa-gold font-bold uppercase tracking-[0.2em] text-xs mb-3 block">{mp.header.subtitle}</span>
            <h1 className="text-gfa-inkBlack text-4xl md:text-5xl font-serif font-bold leading-tight">{mp.header.title}</h1>
          </div>
          <div className="flex gap-3">
            <button className="btn-secondary flex items-center gap-2">
              <LifeBuoy className="w-4 h-4" />
              {mp.header.support}
            </button>
            <Link to="/" className="btn-primary flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              {mp.header.logout}
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          
          {/* Sidebar */}
          <aside className="space-y-6">
             <div className="bg-white border border-gfa-border p-6 rounded-xl shadow-sm">
                <div className="text-center pb-6 border-b border-gfa-border mb-6">
                   <div className="w-20 h-20 bg-gfa-warmWhite border border-gfa-border rounded-full mx-auto mb-4 flex items-center justify-center text-gfa-inkBlack shadow-inner">
                     <Building className="w-8 h-8" />
                   </div>
                   <h4 className="text-sm font-bold uppercase tracking-wide text-gfa-inkBlack">{mp.sidebar.academy}</h4>
                   <p className="text-xs text-gfa-gold font-bold uppercase tracking-widest mt-2">{mp.sidebar.tier}</p>
                </div>
                <nav className="space-y-2">
                   <button className="w-full text-left px-4 py-3 bg-gfa-gold text-gfa-inkBlack text-xs font-bold uppercase tracking-widest rounded-lg shadow-sm flex items-center justify-between group">
                     <span className="flex items-center gap-3">
                       <User className="w-4 h-4" />
                       {mp.sidebar.profile}
                     </span>
                     <ChevronRight className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" />
                   </button>
                   <button className="w-full text-left px-4 py-3 text-gfa-slate text-xs font-bold uppercase tracking-widest hover:text-gfa-inkBlack hover:bg-gfa-warmWhite rounded-lg transition-all flex items-center gap-3">
                     <FileText className="w-4 h-4" />
                     {mp.sidebar.docs}
                   </button>
                   <button className="w-full text-left px-4 py-3 text-gfa-slate text-xs font-bold uppercase tracking-widest hover:text-gfa-inkBlack hover:bg-gfa-warmWhite rounded-lg transition-all flex items-center gap-3">
                     <RefreshCw className="w-4 h-4" />
                     {mp.sidebar.renewal}
                   </button>
                   <button className="w-full text-left px-4 py-3 text-gfa-slate text-xs font-bold uppercase tracking-widest hover:text-gfa-inkBlack hover:bg-gfa-warmWhite rounded-lg transition-all flex items-center gap-3">
                     <Activity className="w-4 h-4" />
                     {mp.sidebar.scores}
                   </button>
                </nav>
             </div>
             
             <div className="bg-red-50 border border-red-100 p-6 rounded-xl flex items-start gap-4">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-red-600 mb-2">{mp.sidebar.alerts}</h5>
                  <p className="text-[11px] text-red-800/70 leading-relaxed font-medium">{mp.sidebar.alertsBody}</p>
                </div>
             </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-8">
             
             {/* Stats Grid */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border border-gfa-border p-6 rounded-xl shadow-sm hover:border-gfa-gold/30 transition-colors group">
                   <div className="flex justify-between items-start mb-4">
                     <h5 className="text-xs font-bold uppercase tracking-widest text-gfa-gold">{mp.stats.trust}</h5>
                     <ShieldCheck className="w-5 h-5 text-gfa-slate/30 group-hover:text-gfa-gold transition-colors" />
                   </div>
                   <div className="text-4xl font-bold text-gfa-inkBlack font-serif mb-2">98<span className="text-sm font-sans font-normal text-gfa-slate ml-1">/100</span></div>
                   <div className="inline-flex items-center px-2 py-1 rounded bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wide">
                     {mp.stats.grade}: A+
                   </div>
                </div>
                
                <div className="bg-white border border-gfa-border p-6 rounded-xl shadow-sm hover:border-gfa-gold/30 transition-colors group">
                   <div className="flex justify-between items-start mb-4">
                     <h5 className="text-xs font-bold uppercase tracking-widest text-gfa-gold">{mp.stats.certId}</h5>
                     <CreditCard className="w-5 h-5 text-gfa-slate/30 group-hover:text-gfa-gold transition-colors" />
                   </div>
                   <div className="text-xl font-bold text-gfa-inkBlack font-mono mb-2">GFA-AUTH-00101</div>
                   <div className="inline-flex items-center px-2 py-1 rounded bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wide">
                     {mp.stats.status}
                   </div>
                </div>
                
                <div className="bg-white border border-gfa-border p-6 rounded-xl shadow-sm hover:border-gfa-gold/30 transition-colors group">
                   <div className="flex justify-between items-start mb-4">
                     <h5 className="text-xs font-bold uppercase tracking-widest text-gfa-gold">{mp.stats.expiry}</h5>
                     <Calendar className="w-5 h-5 text-gfa-slate/30 group-hover:text-gfa-gold transition-colors" />
                   </div>
                   <div className="text-2xl font-bold text-gfa-inkBlack mb-2">31 DEC 2026</div>
                   <p className="text-[10px] text-gfa-slate uppercase font-bold tracking-wide">{mp.stats.remaining}</p>
                </div>
             </div>

             {/* Documents Section */}
             <div className="bg-white border border-gfa-border p-8 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-8 border-b border-gfa-border pb-4">
                  <h3 className="text-lg font-bold uppercase tracking-widest text-gfa-inkBlack font-serif">{mp.docs.title}</h3>
                  <button className="text-xs font-bold text-gfa-gold uppercase tracking-widest hover:text-gfa-inkBlack transition-colors">View All</button>
                </div>
                
                <div className="space-y-3">
                   {[
                     { title: "Minor Safeguarding Policy", date: "12 Jan 2024" },
                     { title: "Fee Structure Disclosure", date: "14 Feb 2024" },
                     { title: "Operational Lease Audit", date: "10 Jan 2024" }
                   ].map((doc, i) => (
                     <div key={i} className="flex justify-between items-center p-4 bg-gfa-warmWhite border border-gfa-border rounded-lg group hover:border-gfa-gold/50 hover:bg-white transition-all">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 rounded bg-white border border-gfa-border flex items-center justify-center text-gfa-slate group-hover:text-gfa-gold group-hover:border-gfa-gold transition-colors">
                             <FileText className="w-5 h-5" />
                           </div>
                           <div>
                             <h5 className="text-sm font-bold text-gfa-inkBlack">{doc.title}</h5>
                             <p className="text-[10px] text-gfa-slate uppercase font-bold tracking-wide mt-0.5">Uploaded: {doc.date} • PDF</p>
                           </div>
                        </div>
                        <button className="p-2 text-gfa-slate hover:text-gfa-gold transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                     </div>
                   ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gfa-border flex justify-center">
                   <button className="btn-primary !text-xs !px-8 !py-3">
                     {mp.docs.addBtn}
                   </button>
                </div>
             </div>

             {/* Assets Section */}
             <div className="bg-gfa-inkBlack text-white p-8 md:p-10 rounded-xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gfa-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold uppercase tracking-widest text-gfa-gold mb-8 border-b border-white/10 pb-4 font-serif">{mp.assets.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="p-6 border border-white/10 bg-white/5 rounded-lg text-center group cursor-pointer hover:bg-white/10 hover:border-gfa-gold/30 transition-all">
                        <Award className="w-12 h-12 mx-auto mb-4 text-gfa-slate group-hover:text-gfa-gold transition-colors" />
                        <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-2">{mp.assets.badge}</h4>
                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Accredited Member SVG/PNG</p>
                     </div>
                     <div className="p-6 border border-white/10 bg-white/5 rounded-lg text-center group cursor-pointer hover:bg-white/10 hover:border-gfa-gold/30 transition-all">
                        <FileCheck className="w-12 h-12 mx-auto mb-4 text-gfa-slate group-hover:text-gfa-gold transition-colors" />
                        <h4 className="text-sm font-bold uppercase tracking-wide text-white mb-2">{mp.assets.cert}</h4>
                        <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Official 2024 Document</p>
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

export default MemberPortal;
