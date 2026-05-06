import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { FileText, PlayCircle } from 'lucide-react';

const Impact: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans pb-24">
      <SEO title="Impact | Global Film Alliance" />

      {/* Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
            alt="Group of diverse children" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            {isEn ? "Real Change." : "真实的改变，"}<br/>
            <span className="text-[#C9A84C]">{isEn ? "Real People." : "真实的人。"}</span>
          </h1>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24 bg-white border-b border-gfa-border">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-4">
              {isEn ? "Our Footprint" : "我们的足迹"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "Measuring What Matters" : "我们如何衡量成功"}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-[#F5F2EE] p-8 rounded-3xl border border-gray-100">
              <div className="text-5xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-2">500<span className="text-[#C9A84C]">+</span></div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-2">{isEn ? "Child Performers" : "参演儿童"}</p>
              <p className="text-xs text-gfa-slate font-light">{isEn ? "Youth engaged in our programs." : "参与夏令营及电影项目"}</p>
            </div>
            <div className="text-center bg-[#F5F2EE] p-8 rounded-3xl border border-gray-100">
              <div className="text-5xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-2">18</div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-2">{isEn ? "Award Winners" : "好莱坞获奖"}</p>
              <p className="text-xs text-gfa-slate font-light">{isEn ? "Recognized at Golden Feather." : "被行业专业评审表彰"}</p>
            </div>
            <div className="text-center bg-[#F5F2EE] p-8 rounded-3xl border border-gray-100">
              <div className="text-5xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-2">3</div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-2">{isEn ? "Films Distributed" : "发行的影片"}</p>
              <p className="text-xs text-gfa-slate font-light">{isEn ? "Active on major streaming platforms." : "在主流流媒体平台上线"}</p>
            </div>
            <div className="text-center bg-[#F5F2EE] p-8 rounded-3xl border border-gray-100">
              <div className="text-5xl md:text-6xl font-bold font-serif text-gfa-inkBlack mb-2">10K<span className="text-[#C9A84C]">+</span></div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#C9A84C] mb-2">{isEn ? "Global Views" : "全球播放量"}</p>
              <p className="text-xs text-gfa-slate font-light">{isEn ? "Audience reach of youth films." : "覆盖全球数字平台观众"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-24 bg-gfa-inkBlack text-white relative">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-bold font-serif mb-16">
             {isEn ? "Financial Transparency" : "资金透明度声明"}
           </h2>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16">
              <div className="flex flex-col items-center">
                 <span className="text-5xl md:text-7xl font-bold font-serif text-[#C9A84C] mb-4">70%</span>
                 <span className="text-sm uppercase tracking-widest font-bold text-white/80">{isEn ? "Filmmaker Support & Youth Programs" : "电影人支持与青少年项目"}</span>
              </div>
              <div className="w-16 h-px bg-white/20 rotate-90 md:rotate-0"></div>
              <div className="flex flex-col items-center">
                 <span className="text-5xl md:text-7xl font-bold font-serif text-white mb-4">20%</span>
                 <span className="text-sm uppercase tracking-widest font-bold text-white/80">{isEn ? "Scholarships for Low-Income Families" : "奖学金与低收入家庭资助"}</span>
              </div>
              <div className="w-16 h-px bg-white/20 rotate-90 md:rotate-0"></div>
              <div className="flex flex-col items-center">
                 <span className="text-5xl md:text-7xl font-bold font-serif text-white/40 mb-4">10%</span>
                 <span className="text-sm uppercase tracking-widest font-bold text-white/40">{isEn ? "Admin & Operations" : "行政运营"}</span>
              </div>
           </div>
           
           <div className="bg-white/5 border border-white/10 p-8 rounded-2xl max-w-2xl mx-auto text-left">
              <div className="flex items-center gap-4 mb-4">
                <FileText className="text-[#C9A84C] w-6 h-6 shrink-0" />
                <h4 className="font-bold text-lg">{isEn ? "Our Promise to Donors" : "我们的承诺"}</h4>
              </div>
              <p className="text-white/70 font-light text-sm leading-relaxed mb-4">
                {isEn 
                  ? "As a 501(c)(3) nonprofit, accountability is our bedrock. We publish exhaustive annual financial reports detailing exactly where every dollar goes. Your support fuels art, not bureaucracy." 
                  : "作为注册的 501(c)(3) 非营利机构，公信力是我们的基石。我们每年发布详尽的财务报告，确保每一分钱都有明确的记录去向。你的捐赠直接驱动了艺术的发生。"}
              </p>
              <button className="underline text-[#C9A84C] text-sm hover:text-white transition-colors">{isEn ? "Download 2024 Annual Report (PDF)" : "下载 2024 年度报告 (PDF)"}</button>
           </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-24 bg-white border-b border-gfa-border">
         <div className="container-gfa max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">{isEn ? "The Faces of Change" : "每一个真实的故事"}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {/* Story 1 */}
               <div className="bg-[#F5F2EE] rounded-3xl overflow-hidden group">
                 <div className="h-48 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop" alt="Filmmaker" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                 </div>
                 <div className="p-8">
                   <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-2">{isEn ? "Career Support" : "就业扶持计划"}</div>
                   <h3 className="font-serif font-bold text-xl mb-4 text-gfa-inkBlack">Marcus T.</h3>
                   <p className="text-gfa-slate font-light text-sm italic">
                     "{isEn ? "I was working two retail jobs after film school just to survive. GFA connected me with my mentor, who got me my first PA gig on a real union set." : "电影学院毕业后为了生存我在做两份零售工作。是GFA给我匹配了导师，让我接到了真正的工会剧组的第一个PA职位。"}"
                   </p>
                 </div>
               </div>

               {/* Story 2 */}
               <div className="bg-[#F5F2EE] rounded-3xl overflow-hidden group">
                 <div className="h-48 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1543333995-a78aea2eee50?q=80&w=2070&auto=format&fit=crop" alt="Summer Camp" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                 </div>
                 <div className="p-8">
                   <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-2">{isEn ? "Youth Camp" : "影视夏令营"}</div>
                   <h3 className="font-serif font-bold text-xl mb-4 text-gfa-inkBlack">Sophia L. & Family</h3>
                   <p className="text-gfa-slate font-light text-sm italic">
                     "{isEn ? "The full scholarship changed everything. Watching Sophia direct her short film gave her a level of confidence we had never seen before." : "全额奖学金改变了一切。看着女儿在片场自信地当导演，那是我们在她身上从未见过的光芒。"}"
                   </p>
                 </div>
               </div>

               {/* Story 3 */}
               <div className="bg-[#F5F2EE] rounded-3xl overflow-hidden group">
                 <div className="h-48 overflow-hidden relative">
                   <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" alt="Awards" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                 </div>
                 <div className="p-8">
                   <div className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-2">{isEn ? "Golden Feather" : "金羽奖获奖者"}</div>
                   <h3 className="font-serif font-bold text-xl mb-4 text-gfa-inkBlack">Elena R.</h3>
                   <p className="text-gfa-slate font-light text-sm italic">
                     "{isEn ? "Winning Best Screenplay meant my voice actually mattered. It's the validation I carry into every single writing session now." : "赢得最佳剧本奖意味着我的声音是有人在乎的。这份肯定我现在写每一个剧本时都带在心中。"}"
                   </p>
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* Featured Films */}
      <section className="py-24 bg-[#F5F2EE]">
         <div className="container-gfa px-4 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">{isEn ? "Films Distributed" : "已发行的优秀影片"}</h2>
              <p className="text-gfa-slate font-light">{isEn ? "Available now on major streaming platforms." : "可以在流媒体平台上观看我们的作品。"}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-gfa-inkBlack rounded-3xl overflow-hidden text-white flex flex-col md:flex-row shadow-lg border border-gray-200 group">
                  <div className="md:w-1/2 h-64 md:h-auto relative">
                     <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop" alt="Garden Film" className="w-full h-full object-cover opacity-80" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform cursor-pointer" />
                     </div>
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                     <div className="text-[#C9A84C] text-[10px] uppercase tracking-widest font-bold mb-2">Short Film</div>
                     <h3 className="text-2xl font-bold font-serif mb-2">Garden <span className="font-sans font-light">/ 花园</span></h3>
                     <p className="text-sm font-light text-white/60 mb-6 italic">
                       {isEn ? "Winner: Best Family Film (Golden State Film Festival)" : "荣获 Golden State Film Festival 最佳家庭电影"}
                     </p>
                     <div className="flex gap-2 text-xs font-bold uppercase tracking-widest text-white/40">
                       <span className="border border-white/20 px-2 py-1 rounded">Amazon Prime</span>
                       <span className="border border-white/20 px-2 py-1 rounded">Tubi</span>
                     </div>
                  </div>
               </div>
               
               <div className="bg-gfa-inkBlack rounded-3xl overflow-hidden text-white flex flex-col md:flex-row shadow-lg border border-gray-200 group">
                  <div className="md:w-1/2 h-64 md:h-auto relative">
                     <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop" alt="Echoes Film" className="w-full h-full object-cover opacity-80" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-12 h-12 text-white/80 group-hover:scale-110 transition-transform cursor-pointer" />
                     </div>
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-center">
                     <div className="text-[#C9A84C] text-[10px] uppercase tracking-widest font-bold mb-2">Documentary</div>
                     <h3 className="text-2xl font-bold font-serif mb-2">Echoes</h3>
                     <p className="text-sm font-light text-white/60 mb-6 italic">
                       {isEn ? "Official Selection: Independent Youth Fest" : "官方入选：独立青年电影节"}
                     </p>
                     <div className="flex gap-2 text-xs font-bold uppercase tracking-widest text-white/40">
                       <span className="border border-white/20 px-2 py-1 rounded">YouTube</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Impact;
