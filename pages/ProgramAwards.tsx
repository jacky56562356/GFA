import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Award, Globe, Video, Handshake, Users, DollarSign, Send, Star, CheckCircle, Trophy, CalendarDays, Camera, Clapperboard, Sparkles, Mic, Lightbulb } from 'lucide-react';

const ProgramAwards: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="bg-[#F5F2EE] pt-[80px] font-sans pb-24">
      <SEO title="Golden Feather Film Awards | GFA" />

      {/* Banner */}
      <div className="relative bg-gfa-inkBlack py-28 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop" 
            alt="Golden Feather Awards" 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1 border border-[#C9A84C]/50 text-[#C9A84C] text-xs font-bold uppercase tracking-widest rounded-full mb-6 relative">
            {isEn ? "Annual Highlight" : "年度盛事"}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-xl">
            {isEn ? "Golden Feather Film Awards" : "金羽奖电影颁奖礼"}
          </h1>
          <p className="text-xl text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
             {isEn 
               ? "Honoring the visionary film talents of tomorrow, discovering cinematic pioneers, and providing an unparalleled global stage for young creators to shine." 
               : "致敬未来的电影视觉人才，发掘电影艺术先锋，为年轻创作者提供一个无与伦比的全球闪耀舞台。"}
          </p>
        </div>
      </div>

      <div className="container-gfa max-w-6xl mx-auto space-y-24 px-4">
        
        {/* About the Awards */}
        <section className="bg-white p-12 lg:p-16 rounded-[40px] shadow-xl border border-gray-100 flex flex-col md:flex-row gap-12 items-center -mt-32 relative z-20">
           <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-6">
                {isEn ? "About the Golden Feather Awards" : "关于金羽奖"}
              </h2>
              <p className="text-gfa-slate leading-relaxed font-light mb-6 text-lg">
                {isEn 
                  ? "The Golden Feather Film Awards is a premier international ceremony dedicated to discovering and empowering emerging voices in youth cinema. We go beyond simple recognition; we actively invest in your future." 
                  : "金羽奖电影颁奖礼是一项顶级的国际颁奖盛典，致力于发掘和赋能青年电影中的新兴声音。我们不只是提供认可，我们更是积极为您未来的电影事业进行投资。"}
              </p>
              <p className="text-gfa-slate leading-relaxed font-light text-lg">
                {isEn
                  ? "Our goal is to build a comprehensive global film creation platform that significantly lowers production costs, connects creators directly with industry investors, and builds a sustainable bridge between Hollywood and the Asian film market."
                  : "我们的目标是建立一个全面的全球电影创作平台，大幅降低拍摄成本，将创作者与行业投资人直接对接，并搭建好莱坞与亚洲电影市场之间的可持续合作桥梁。"}
              </p>
           </div>
           <div className="md:w-1/2 grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md" alt="Ceremony" />
               <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mt-8" alt="Trophy" />
           </div>
        </section>

        {/* Global Distribution & Platform Value */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4">
              {isEn ? "Opportunities & Industry Platform" : "机遇与产业平台整合"}
            </h2>
            <p className="text-gfa-slate max-w-2xl mx-auto text-lg">
               {isEn ? "Participants and winners access a comprehensive ecosystem designed to launch film careers." : "参赛者与获奖者将进入一个旨在正式开启其电影职业生涯的全面生态系统。"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-colors">
                  <Globe className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Global Distribution Network" : "全球发行平台"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "Selected films gain access to our extensive global distribution network, ensuring stories are seen by audiences worldwide across premier streaming platforms and cinemas." : "入围及获奖影片将获得我们广泛的全球发行网络支持，确保您的故事能够通过顶级流媒体和院线与全球观众见面。"}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-colors">
                  <Video className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Premier Screening Opportunities" : "国际展映平台"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "Showcase your work live at top-tier film festivals and exclusive Hollywood screenings, gathering immediate feedback from industry veterans." : "在顶级电影节和好莱坞专属放映会上面向公众及业内人士展示您的作品，并获得行业资深人士的直接反馈。"}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-colors">
                  <Handshake className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Expanding into the Asian Market" : "深度对接亚洲市场"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "We facilitate direct connections and partnerships within the rapidly growing Asian film market, opening doors for co-productions and cross-cultural releases." : "我们促进与快速增长的亚洲电影市场的直接对接与合作，为合拍片和跨文化电影发行敞开大门，建立坚实合作关系。"}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-colors">
                  <span className="text-[#C9A84C] group-hover:text-white font-serif italic text-2xl">🎬</span>
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Film Creation Ecosystem" : "建立电影创作平台"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "Our platform provides comprehensive resources, from script development to post-production, streamlining the entire creative process for young filmmakers." : "平台整合了从剧本开发到后期制作的综合资源，不断搭建与完善影视孵化平台，为年轻电影人简化创作流程。"}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-colors">
                  <DollarSign className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Lowering Production Costs" : "大幅降低拍摄成本"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "Through our vendor networks and equipment subsidies, we heavily reduce the financial burden of production, allowing talent to focus purely on storytelling." : "通过我们的设备补贴和供应商网络联盟，显著降低制作成本，让创作者可以全心投入讲好故事。"}
               </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
               <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C9A84C] transition-colors">
                  <Users className="w-7 h-7 text-[#C9A84C] group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-bold font-serif mb-4">{isEn ? "Investor Matchmaking" : "绑定行业投资人"}</h3>
               <p className="text-gfa-slate font-light leading-relaxed">
                 {isEn ? "Dedicated pitch sessions and networking events tie promising projects to established film funds and independent investors ready to greenlight new visions." : "专设的项目路演场次与社交活动，将极具潜力的作品直接与成熟的电影基金及独立投资人绑定。"}
               </p>
            </div>
          </div>
        </section>

        {/* Award Categories */}
        <section className="bg-gfa-inkBlack text-white rounded-[40px] p-12 lg:p-16 shadow-xl border border-gray-800">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold font-serif mb-4 flex justify-center items-center gap-4">
                <Trophy className="w-10 h-10 text-[#C9A84C]" />
                {isEn ? "Award Categories" : "奖项设置"}
             </h2>
             <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
                {isEn ? "Recognizing excellence across all disciplines of filmmaking." : "表彰电影制作各个领域的卓越成就，涵盖长短片及各项核心技术。"}
             </p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                  { icon: Clapperboard, en: "Best Picture", zh: "最佳影片大奖" },
                  { icon: Sparkles, en: "Best Director", zh: "最佳新晋导演" },
                  { icon: Star, en: "Best Youth Actor", zh: "最佳青年演员" },
                  { icon: Lightbulb, en: "Best Screenplay", zh: "最佳原创剧本" },
                  { icon: Camera, en: "Best Cinematography", zh: "最佳摄影指导" },
                  { icon: Mic, en: "Best Sound Design", zh: "最佳声音设计" },
                  { icon: Video, en: "Best Short Film", zh: "最佳单元短片" },
                  { icon: Globe, en: "Global Cultural Impact", zh: "全球文化影响力奖" },
              ].map((category, idx) => (
                 <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center hover:bg-white/10 transition-colors group">
                    <div className="w-12 h-12 bg-[#C9A84C]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A84C] transition-colors">
                       <category.icon className="w-6 h-6 text-[#C9A84C] group-hover:text-gfa-inkBlack" />
                    </div>
                    <h4 className="font-bold font-serif">{isEn ? category.en : category.zh}</h4>
                 </div>
              ))}
           </div>
        </section>

        {/* Ceremony Format & Timeline */}
        <section className="bg-white p-12 lg:p-16 rounded-[40px] shadow-xl border border-gray-100">
           <div className="text-center mb-16">
             <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-4 flex justify-center items-center gap-4">
                <Sparkles className="w-10 h-10 text-[#C9A84C]" />
                {isEn ? "Ceremony Format & Experience" : "颁奖礼形式与盛典全流程"}
             </h2>
             <p className="text-gfa-slate max-w-2xl mx-auto text-lg font-light">
                {isEn ? "An unforgettable Hollywood experience connecting rising stars with industry legends." : "一次难忘的好莱坞盛典体验，将冉冉升起的新星与行业传奇紧密相连。"}
             </p>
           </div>

           <div className="relative">
              {/* Vertical line connecting events */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#F5F2EE] transform -translate-x-1/2 rounded-full"></div>
              
              <div className="space-y-12">
                 {/* Step 1 */}
                 <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="md:w-5/12 mb-6 md:mb-0 text-center md:text-right">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? "The Red Carpet" : "星光红毯秀"}</h3>
                       <p className="text-gfa-slate font-light">{isEn ? "Walk the exclusive Hollywood red carpet with media coverage and celebrity guests." : "走上好莱坞专属红毯，接受全球媒体采访，与顶级明星嘉宾共襄盛举。"}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">01</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-left">
                       <img src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Red Carpet" />
                    </div>
                 </div>

                 {/* Step 2 */}
                 <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                    <div className="md:w-5/12 mb-6 md:mb-0 text-center md:text-left">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? "Nominee Showcase & Premiere" : "入围电影展映与首映礼"}</h3>
                       <p className="text-gfa-slate font-light">{isEn ? "Exclusive theater screenings of nominated films for distributors and international buyers." : "为发行商和国际买家专门安排的入围影片顶级影院级展映。"}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">02</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-right">
                       <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Premiere" />
                    </div>
                 </div>

                 {/* Step 3 */}
                 <div className="flex flex-col md:flex-row items-center justify-between w-full">
                    <div className="md:w-5/12 mb-6 md:mb-0 text-center md:text-right">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? "Gala & Awards Presentation" : "颁奖盛典与文艺汇演"}</h3>
                       <p className="text-gfa-slate font-light">{isEn ? "The grand ceremony featuring live performances, keynote speeches, and the Golden Feather presentations." : "隆重的盛典晚会，包括激燃的现场表演、行业领袖的主题演讲及金羽奖的正式颁发。"}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">03</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-left">
                       <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1974&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Presentation" />
                    </div>
                 </div>

                 {/* Step 4 */}
                 <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full">
                    <div className="md:w-5/12 mb-6 md:mb-0 text-center md:text-left">
                       <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? "Industry After Party" : "行业交流晚宴"}</h3>
                       <p className="text-gfa-slate font-light">{isEn ? "A dedicated networking event to connect winners with Hollywood producers and Asian market funds." : "颁奖礼后的专属晚宴，旨在将获奖者与好莱坞知名制片人及亚洲市场基金无缝对接。"}</p>
                    </div>
                    <div className="md:w-2/12 flex justify-center relative z-10">
                       <div className="w-16 h-16 bg-[#C9A84C] rounded-full flex items-center justify-center text-white font-bold font-serif text-xl border-4 border-white shadow-lg">04</div>
                    </div>
                    <div className="md:w-5/12 text-center md:text-right">
                       <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" className="rounded-3xl w-full h-48 object-cover shadow-md mx-auto" alt="Networking" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Judging & Selection Process */}
        <section className="bg-gfa-inkBlack text-white rounded-[40px] p-12 lg:p-16 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 opacity-10">
              <Award className="w-96 h-96" />
           </div>
           
           <div className="relative z-10">
              <h2 className="text-4xl font-bold font-serif mb-12">
                {isEn ? "Evaluation Criteria & Selection Model" : "评奖标准与评选模式"}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 <div>
                    <h3 className="text-2xl font-bold mb-6 text-[#C9A84C] flex items-center gap-3">
                       <CheckCircle className="w-6 h-6" />
                       {isEn ? "Evaluation Criteria" : "评奖标准"}
                    </h3>
                    <ul className="space-y-6">
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-2xl">01</div>
                          <div>
                             <h4 className="font-bold text-lg mb-1">{isEn ? "Originality & Vision" : "原创性与视野"}</h4>
                             <p className="text-white/70 font-light text-sm">{isEn ? "Unique perspective, innovative storytelling, and bold artistic choices." : "独特的视角、创新的叙事方式及大胆的艺术选择。"}</p>
                          </div>
                       </li>
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-2xl">02</div>
                          <div>
                             <h4 className="font-bold text-lg mb-1">{isEn ? "Technical Execution" : "技术执行力"}</h4>
                             <p className="text-white/70 font-light text-sm">{isEn ? "Proficiency in cinematography, editing, sound design, and overall production value." : "在摄影、剪辑、声音设计及整体制作水准上的专业表现。"}</p>
                          </div>
                       </li>
                       <li className="flex gap-4">
                          <div className="text-[#C9A84C] font-serif font-bold text-2xl">03</div>
                          <div>
                             <h4 className="font-bold text-lg mb-1">{isEn ? "Emotional Impact" : "情感共鸣"}</h4>
                             <p className="text-white/70 font-light text-sm">{isEn ? "The film's ability to engage audiences and evoke a meaningful emotional response." : "影片吸引观众并引发深层情感共鸣的能力。"}</p>
                          </div>
                       </li>
                    </ul>
                 </div>

                 <div>
                    <h3 className="text-2xl font-bold mb-6 text-[#C9A84C] flex items-center gap-3">
                       <Star className="w-6 h-6" />
                       {isEn ? "Selection Model" : "评选模式"}
                    </h3>
                    <div className="space-y-6">
                       <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                          <h4 className="font-bold text-lg mb-2">{isEn ? "Preliminary Round" : "初审阶段"}</h4>
                          <p className="text-white/70 font-light text-sm">
                             {isEn ? "Submissions are reviewed by an initial committee of festival programmers to ensure technical readiness and rule compliance." : "所有提交作品将由电影节选片委员会进行初步审核，确保技术达标及符合参赛规则。"}
                          </p>
                       </div>
                       <div className="bg-white/5 border border-white/10 p-6 rounded-2xl relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-2 h-full bg-[#C9A84C]"></div>
                          <h4 className="font-bold text-lg mb-2">{isEn ? "Industry Jury Panel" : "行业专家评委团终审"}</h4>
                          <p className="text-white/70 font-light text-sm">
                             {isEn ? "Shortlisted films are evaluated by a prestigious panel of Hollywood directors, Asian market distributors, and top-tier critics." : "入围影片将交由由好莱坞知名导演、亚洲市场发行商及顶级影评人组成的国际专家评审团进行最终评选。"}
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Submission & Eligibility Section */}
        <section className="bg-white border-2 border-[#C9A84C]/30 rounded-[40px] p-12 lg:p-16 text-left relative overflow-hidden shadow-2xl">
           <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none"></div>
           
           <div className="relative z-10">
              <div className="text-center mb-12">
                 <div className="w-20 h-20 bg-gfa-inkBlack rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Send className="w-8 h-8 text-[#C9A84C] ml-1" />
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4 leading-tight">
                    {isEn ? "Submission & Eligibility" : "报名指南与获奖资格"}
                 </h2>
                 <p className="text-gfa-slate text-lg font-light max-w-2xl mx-auto">
                    {isEn 
                      ? "Ready to present your work to exactly the audience you've been looking for?" 
                      : "准备好向世界展现您的杰作了吗？请仔细阅读下方的赛事资格及报名要求。"}
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                 <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-[#C9A84C]/20">
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-6 flex items-center gap-3">
                       <CheckCircle className="w-6 h-6 text-[#C9A84C]" />
                       {isEn ? "Eligibility Requirements" : "评选要求与获奖资格"}
                    </h3>
                    <ul className="space-y-4 text-gfa-slate font-light">
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {isEn ? "The primary creator (Director/Writer/Lead Actor) must be under 30 years old for youth categories." : "青年单元：主创人员（导演/编剧/主演）报名时年龄需在30周岁以下。"}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {isEn ? "Films must have been completed on or after January 1, 2024." : "影片制作完成时间必须为2024年1月1日之后。"}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {isEn ? "All non-English films MUST contain burned-in English subtitles." : "所有非英语对白影片【必须】嵌有英文字幕。"}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {isEn ? "Applicant must hold full distribution rights and necessary copyright clearances." : "报名者必须拥有该影片的完整发行权及音视频版权许可。"}
                       </li>
                       <li className="flex items-start gap-3">
                          <div className="min-w-2 mt-2 w-2 h-2 rounded-full bg-[#C9A84C]"></div> 
                          {isEn ? "Length: Short Films (under 40 mins), Feature Films (60+ mins)." : "时长要求：短片单元限40分钟以内，长片单元需在60分钟以上。"}
                       </li>
                    </ul>
                 </div>

                 <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-[#C9A84C]/20">
                    <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-6 flex items-center gap-3">
                       <CalendarDays className="w-6 h-6 text-[#C9A84C]" />
                       {isEn ? "Application Timeline" : "赛事报名流程及时间表"}
                    </h3>
                    <div className="space-y-6">
                       <div className="relative pl-6 border-l-2 border-[#C9A84C]/30 pb-4">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{isEn ? "Early Bird Submission" : "早鸟报名阶段"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "Opens June 1, 2025" : "2025年6月1日开启"}</p>
                       </div>
                       <div className="relative pl-6 border-l-2 border-[#C9A84C]/30 pb-4">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{isEn ? "Regular Deadline" : "常规报名截止"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "August 31, 2025" : "2025年8月31日"}</p>
                       </div>
                       <div className="relative pl-6 border-l-2 border-[#C9A84C]/30 pb-4">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{isEn ? "Shortlist Announcement" : "公布入围与获奖名单"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "November 15, 2025" : "2025年11月15日"}</p>
                       </div>
                       <div className="relative pl-6">
                          <div className="absolute w-3 h-3 bg-[#C9A84C] rounded-full -left-[7px] top-1 shadow-[0_0_10px_rgba(201,168,76,0.8)]"></div>
                          <h4 className="font-bold text-gfa-inkBlack">{isEn ? "Golden Feather Gala" : "金羽奖颁奖礼盛典"}</h4>
                          <p className="text-sm text-gfa-slate font-light mt-1">{isEn ? "March 2026 (Hollywood, CA)" : "2026年3月（美国好莱坞）"}</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="text-center bg-white p-8 rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
                 <h4 className="font-bold text-xl font-serif mb-4 text-gfa-inkBlack">
                   {isEn ? "Be the First to Know" : "抢先获取报名通道开启通知"}
                 </h4>
                 <form className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input 
                      type="email" 
                      placeholder={isEn ? "Enter your email address" : "输入邮箱地址..."} 
                      className="px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-[#C9A84C] flex-grow shadow-inner bg-gray-50"
                    />
                    <button type="button" className="bg-[#C9A84C] text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gfa-inkBlack hover:text-white transition-colors whitespace-nowrap shadow-md hover:shadow-xl">
                       {isEn ? "Notify Me" : "立即获取通知"}
                    </button>
                 </form>
              </div>
           </div>
        </section>

      </div>
    </div>
  );
};

export default ProgramAwards;
