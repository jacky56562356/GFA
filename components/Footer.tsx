import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';

const Footer: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <footer className="bg-gfa-inkBlack text-white pt-16 pb-8 px-6 border-t-[6px] border-t-[#C9A84C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: "radial-gradient(circle at 50% 0%, #ffffff 0%, transparent 70%)"}}></div>
      <div className="container-gfa grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12 relative z-10">
        
        {/* Brand & Mission */}
        <div className="space-y-6 lg:border-r lg:border-white/10 lg:pr-8">
          <div className="flex items-center gap-4">
            <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="GFA Logo" className="h-20 w-auto" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold tracking-tighter font-serif leading-none">GFA</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A84C] font-bold mt-1">Global Film Alliance</span>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed font-light">
            {isEn 
              ? "Opening Doors for Filmmakers." 
              : "为每一位电影人打开那扇门。"}
          </p>
          <div className="flex gap-4">
            {/* Social Icons */}
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white transition-all cursor-pointer font-bold text-xs" aria-label="X (Twitter)">X</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white transition-all cursor-pointer font-bold text-xs" aria-label="LinkedIn">In</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C9A84C] hover:border-[#C9A84C] hover:text-white transition-all cursor-pointer font-bold text-xs" aria-label="Instagram">Ig</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#C9A84C] mb-8 flex items-center gap-3">
            <span className="w-1 h-1 bg-[#C9A84C] rounded-full"></span> {isEn ? "Quick Links" : "快捷链接"}
          </h4>
          <div className="space-y-4 text-sm text-white/70 font-light">
            <Link to="/about" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'About' : '关于我们'}</Link>
            <Link to="/filmmaker-support" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'Filmmaker Support' : '电影人支持'}</Link>
            <Link to="/youth-programs" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'Youth Programs' : '青少年计划'}</Link>
            <Link to="/family-guide" className="block hover:text-[#C9A84C] transition-colors hover:translate-x-1 duration-300">{isEn ? 'Family Guide' : '家长指南'}</Link>
            <Link to="/awards" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'Golden Feather Awards' : '金羽奖'}</Link>
            <Link to="/competition" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'Global Competition' : '全球才艺大赛'}</Link>
            <Link to="/impact" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'Impact' : '影响力'}</Link>
            <Link to="/news" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'News & Media' : '新闻与媒体'}</Link>
            <Link to="/get-involved" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'Get Involved' : '参与我们'}</Link>
            <Link to="/donate" className="block hover:text-white transition-colors hover:translate-x-1 duration-300">{isEn ? 'Donate' : '捐款'}</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[12px] font-bold uppercase tracking-widest text-[#C9A84C] mb-8 flex items-center gap-3">
            <span className="w-1 h-1 bg-[#C9A84C] rounded-full"></span> {isEn ? "Contact" : "联系我们"}
          </h4>
          <div className="space-y-4 text-sm text-white/70 font-light">
            <p className="flex flex-col gap-1">
              <span className="text-[#C9A84C]/50 text-xs font-bold uppercase tracking-wider">Email</span>
              <a href="mailto:jacky@gfafilm.org" className="hover:text-white transition-colors">jacky@gfafilm.org</a>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-[#C9A84C]/50 text-xs font-bold uppercase tracking-wider">Phone</span>
              <a href="tel:6266778017" className="hover:text-white transition-colors">626-677-8017</a>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-[#C9A84C]/50 text-xs font-bold uppercase tracking-wider">Address</span>
              <span>17800 Castleton St, Suite 173<br/>City of Industry, CA 91748</span>
            </p>
          </div>
        </div>

        {/* Legal & Nonprofit Status */}
        <div className="bg-white/5 p-8 border border-white/10 rounded-3xl text-sm text-white/70 font-light backdrop-blur-sm flex flex-col justify-center">
           <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="Nonprofit" className="h-12 w-auto mb-6 opacity-50 grayscale mix-blend-screen" />
           <p className="mb-4 text-white/90 font-medium">Global Film Alliance, Inc.</p>
           <p className="mb-2">A registered 501(c)(3) nonprofit organization in California.</p>
           <p className="font-mono text-xs bg-black/30 p-2 rounded text-center mb-0 mt-4 border border-white/5">EIN: 33-4817276</p>
        </div>
      </div>

      <div className="container-gfa pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40 font-light">
        <p>&copy; {new Date().getFullYear()} Global Film Alliance, Inc. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/youth-protection" className="hover:text-[#C9A84C] font-bold text-white/70 transition-colors uppercase tracking-widest">{isEn ? 'Youth Protection' : '青少年安全与保护'}</Link>
          <Link to="/policy/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/policy/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
