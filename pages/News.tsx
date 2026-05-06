import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ArrowRight } from 'lucide-react';

const News: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans pb-24">
      <SEO title="News & Media | Global Film Alliance" />

      {/* Hero */}
      <section className="bg-gfa-inkBlack text-white pt-32 pb-24 border-b border-white/10">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
           <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
             {isEn ? "News &" : "新闻与"}<br/>
             <span className="text-[#C9A84C]">{isEn ? "Media" : "媒体"}</span>
           </h1>
        </div>
      </section>

      {/* Press Releases & News */}
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container-gfa max-w-4xl mx-auto px-4">
           
           <div className="space-y-8">
              {/* News Item 1 */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow">
                 <div className="md:w-1/3 shrink-0">
                    <div className="h-48 md:h-full bg-gray-200 rounded-xl overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="News Image 1" className="w-full h-full object-cover" />
                    </div>
                 </div>
                 <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-2">March 2025</div>
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
                      {isEn ? "Global Youth Talent Competition 2026 Officially Announced" : "2026全球青少年才艺大赛正式启动"}
                    </h3>
                    <p className="text-gfa-slate font-light text-sm mb-6">
                      {isEn ? "GFA announces its flagship event to be held at the Dolby Theatre, uniting young talents from the US and China on a single stage." : "GFA宣布将于好莱坞杜比剧院举办核心赛事，首次将中美两地的才华青少年汇聚于同一舞台。"}
                    </p>
                    <button className="text-gfa-inkBlack font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:text-[#C9A84C] transition-colors w-fit">
                      {isEn ? "Read Full Release" : "阅读完整新闻稿"} <ArrowRight className="w-4 h-4"/>
                    </button>
                 </div>
              </div>

              {/* News Item 2 */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow">
                 <div className="md:w-1/3 shrink-0">
                    <div className="h-48 md:h-full bg-gray-200 rounded-xl overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop" alt="News Image 2" className="w-full h-full object-cover" />
                    </div>
                 </div>
                 <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-2">January 2025</div>
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
                      {isEn ? "Student Short Film 'Garden' Picked Up by Amazon Prime" : "学生短片《花园》成功上线 Amazon Prime"}
                    </h3>
                    <p className="text-gfa-slate font-light text-sm mb-6">
                      {isEn ? "Produced entirely by our Youth Film Campers, the award-winning short film secures major streaming distribution." : "完全由 GFA 夏令营学员制作的获奖短片获得主流流媒体平台发行支持。"}
                    </p>
                    <button className="text-gfa-inkBlack font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:text-[#C9A84C] transition-colors w-fit">
                      {isEn ? "Read Full Release" : "阅读完整新闻稿"} <ArrowRight className="w-4 h-4"/>
                    </button>
                 </div>
              </div>

              {/* News Item 3 */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col md:flex-row gap-8 hover:shadow-md transition-shadow">
                 <div className="md:w-1/3 shrink-0">
                    <div className="h-48 md:h-full bg-gray-200 rounded-xl overflow-hidden bg-[url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center"></div>
                 </div>
                 <div className="md:w-2/3 flex flex-col justify-center">
                    <div className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-2">October 2024</div>
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
                      {isEn ? "Golden Feather Awards Recognizes 18 Emerging Creators" : "金羽奖表彰了18位杰出青年创作者"}
                    </h3>
                    <p className="text-gfa-slate font-light text-sm mb-6">
                      {isEn ? "An unforgettable night in Hollywood celebrating the visionaries of tomorrow." : "一个在好莱坞庆祝明日远见者的难忘之夜。"}
                    </p>
                    <button className="text-gfa-inkBlack font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:text-[#C9A84C] transition-colors w-fit">
                      {isEn ? "Read Full Release" : "阅读完整新闻稿"} <ArrowRight className="w-4 h-4"/>
                    </button>
                 </div>
              </div>

           </div>
           
           <div className="text-center mt-16">
              <button className="border border-gfa-inkBlack text-gfa-inkBlack px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-gfa-inkBlack hover:text-white transition-colors">
                {isEn ? "Load More News" : "加载更多新闻"}
              </button>
           </div>
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="py-20 bg-gfa-inkBlack text-white">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold font-serif mb-6">{isEn ? "Media Assets & Press Kit" : "媒体素材与资料包"}</h2>
           <p className="text-white/70 font-light max-w-2xl mx-auto mb-8">
             {isEn 
               ? "Members of the press can download high-resolution logos, B-roll footage, and organization bios here." 
               : "媒体人员可在此下载高清Logo、新闻素材视频(B-roll)以及机构背景介绍资料。"}
           </p>
           <button className="bg-[#C9A84C] hover:bg-white text-black font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-colors inline-block w-auto">
             {isEn ? "Download Press Kit (.ZIP)" : "下载媒体资料包 (.ZIP)"}
           </button>
        </div>
      </section>

    </div>
  );
};

export default News;
