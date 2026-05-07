import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import { Heart } from 'lucide-react';

const Navbar: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: locale === Locale.EN ? 'About' : '关于', path: '/about' },
    { name: locale === Locale.EN ? 'Filmmakers' : '电影人', path: '/filmmaker-support' },
    { name: locale === Locale.EN ? 'Youth' : '青少年', path: '/youth-programs' },
    { name: locale === Locale.EN ? 'Guide' : '指南', path: '/family-guide' },
    { name: locale === Locale.EN ? 'Awards' : '金羽奖', path: '/awards' },
    { name: locale === Locale.EN ? 'Competition' : '大赛', path: '/competition' }
  ];

  const textColor = "text-gfa-inkBlack";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] h-[90px] md:h-[100px] flex items-center transition-all duration-300 border-t-4 border-t-gfa-gold ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gfa-border/50" : "bg-white border-b border-gfa-border"}`}>
        <div className="container-gfa flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity">
            <img src="https://i.ibb.co/mFgDBtBp/1.png" alt="GFA" className="h-12 md:h-16 w-auto" />
            <div className="hidden lg:flex flex-col">
              <span className={`text-3xl lg:text-4xl font-bold leading-none tracking-tighter font-serif ${textColor}`}>GFA</span>
              <span className="text-[7px] tracking-[0.2em] font-black mt-1 text-gfa-gold whitespace-nowrap">Global Film Alliance</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center justify-center gap-6 2xl:gap-8 flex-grow ml-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`nav-link text-[12px] 2xl:text-[13px] font-bold uppercase tracking-widest transition-all duration-300 hover:text-gfa-gold relative group whitespace-nowrap ${location.pathname.startsWith(link.path) ? "text-gfa-gold" : textColor}`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-gfa-gold transform origin-left transition-transform duration-300 ${location.pathname.startsWith(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
              </Link>
            ))}
          </div>

          <div className="hidden xl:flex items-center space-x-6 shrink-0">
            <div className="flex items-center space-x-2 text-[12px] font-bold tracking-widest">
              <button 
                onClick={() => setLocale(Locale.EN)}
                className={`transition-colors hover:text-gfa-gold ${locale === Locale.EN ? 'text-gfa-gold' : 'text-gfa-slate'}`}
              >
                EN
              </button>
              <span className="text-gfa-slate/30">|</span>
              <button 
                onClick={() => setLocale(Locale.ZH)}
                className={`transition-colors hover:text-gfa-gold ${locale === Locale.ZH ? 'text-gfa-gold' : 'text-gfa-slate'}`}
              >
                {locale === Locale.EN ? 'ZH' : '中文'}
              </button>
            </div>
            
            <Link to="/donate" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest shadow-lg hover:bg-[#b09241] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 uppercase">
              <Heart className="w-4 h-4 fill-current" />
              {locale === Locale.EN ? 'Donate' : '捐款'}
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden p-2 group" aria-label="Toggle Menu">
            <div className={`w-8 h-0.5 mb-2 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold`}></div>
            <div className={`w-8 h-0.5 mb-2 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold`}></div>
            <div className={`w-8 h-0.5 transition-colors bg-gfa-inkBlack group-hover:bg-gfa-gold`}></div>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-white z-[105] transition-transform duration-500 xl:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full pt-32 px-10">
          <button onClick={() => setMobileMenuOpen(false)} className="text-gfa-inkBlack text-5xl font-light self-end mb-12 hover:text-gfa-gold transition-colors" aria-label="Close Menu">×</button>
          
          <div className="flex items-center space-x-4 mb-12 border-b border-gfa-border pb-6">
             <button 
                onClick={() => { setLocale(Locale.EN); setMobileMenuOpen(false); }}
                className={`text-lg font-bold tracking-widest ${locale === Locale.EN ? 'text-gfa-gold' : 'text-gfa-slate'}`}
              >
                EN
              </button>
              <span className="text-gfa-slate/30">|</span>
              <button 
                onClick={() => { setLocale(Locale.ZH); setMobileMenuOpen(false); }}
                className={`text-lg font-bold tracking-widest ${locale === Locale.ZH ? 'text-gfa-gold' : 'text-gfa-slate'}`}
              >
                {locale === Locale.EN ? 'ZH' : '中文'}
              </button>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-2xl font-bold uppercase tracking-tight text-gfa-inkBlack mb-8 font-serif hover:text-gfa-gold transition-colors hover:translate-x-2 transform duration-300"
            >
              {link.name}
            </Link>
          ))}
          
          <div className="mt-auto mb-16">
            <Link to="/donate" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 bg-[#C9A84C] text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest shadow-lg uppercase w-full">
              <Heart className="w-5 h-5 fill-current" />
              {locale === Locale.EN ? 'Donate' : '捐款'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
