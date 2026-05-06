import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';

const ProgramPlatformAlliance: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="bg-gfa-warmWhite pt-[80px] font-sans pb-24">
      <SEO title="Hollywood Career Training | GFA" />

      <div className="relative bg-[#1A2B4A] py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" 
            alt="Hollywood Career" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A] via-[#1A2B4A]/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-lg">
            {isEn ? "Your Hollywood Journey Starts Here" : "你的好莱坞之旅从这里开始"}
          </h1>
        </div>
      </div>

      <div className="container-gfa max-w-5xl mx-auto space-y-20">
         <section className="text-center max-w-3xl mx-auto bg-white p-12 rounded-[40px] shadow-xl border border-gfa-border -mt-32 relative z-20">
          <p className="text-xl text-gfa-slate leading-relaxed font-light">
             {isEn 
               ? "Geared toward recent graduates and emerging filmmakers, providing professional training and practical opportunities within the Hollywood industrial system to bridge the gap between academic learning and professional reality." 
               : "面向应届毕业生和新兴电影人，提供好莱坞工业体系内的专业培训和实践机会，弥合学术学习与职业现实之间的差距。"}
          </p>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white rounded-[32px] overflow-hidden shadow-md border border-gfa-border group">
               <div className="h-48 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" alt="Mentorship" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">
                   {isEn ? "Industry Mentorship" : "行业导师指导"}
                 </h3>
                 <p className="text-gfa-slate font-light">
                   {isEn ? "One-on-one guidance from established Hollywood professionals, producers, and directors." : "由资深好莱坞专业人士、制片人和导演提供一对一指导。"}
                 </p>
               </div>
            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-md border border-gfa-border group">
               <div className="h-48 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop" alt="On set" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">
                   {isEn ? "On-Set Professional Training" : "片场专业实训"}
                 </h3>
                 <p className="text-gfa-slate font-light">
                   {isEn ? "Shadowing and hands-on roles on real commercial and independent film sets." : "在真实商业广告和独立电影片场进行观摩学习和实操演练。"}
                 </p>
               </div>
            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-md border border-gfa-border group">
               <div className="h-48 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop" alt="Portfolio" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">
                   {isEn ? "Portfolio & Reel Development" : "作品集与样片开发"}
                 </h3>
                 <p className="text-gfa-slate font-light">
                   {isEn ? "Expert review and refinement of your showreel, script portfolio, or DP reel." : "专家评审并完善您的样片、剧本作品集或摄影样片。"}
                 </p>
               </div>
            </div>

            <div className="bg-white rounded-[32px] overflow-hidden shadow-md border border-gfa-border group">
               <div className="h-48 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Festivals" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-3">
                   {isEn ? "Film Festival Strategy" : "电影节战略规划"}
                 </h3>
                 <p className="text-gfa-slate font-light">
                   {isEn ? "Learn how to navigate submissions, networking, and distribution at tier-1 festivals." : "学习如何在一线电影节上进行申请、拓展人脉和发行。"}
                 </p>
               </div>
            </div>
          </div>
        </section>

        <section className="text-center py-12">
          <button className="bg-[#1A2B4A] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#C9A84C] transition-colors shadow-2xl">
            {isEn ? "Apply Now" : "立即申请"}
          </button>
        </section>

      </div>
    </div>
  );
};

export default ProgramPlatformAlliance;
