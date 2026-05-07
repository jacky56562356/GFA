import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ArrowRight, Trophy, Star, Medal, Clapperboard, Frame, PenTool, CheckCircle2, ChevronDown } from 'lucide-react';

const Competition: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = isEn ? [
    { q: "How do Chinese children participate?", a: "We have an official China division handling local registrations and preliminary rounds. Finalists will be invited to Los Angeles for the Grand Finale at the Dolby Theatre." },
    { q: "What language skills are required?", a: "Art transcends language. While basic English is helpful for the LA trip, performances and films can be in Chinese with English subtitles. We provide translation support during the finals." },
    { q: "Do we have to travel to Los Angeles for the finals?", a: "Yes, the Grand Finale is a live, in-person event at the Dolby Theatre. For finalists who cannot secure a visa, we offer live-streamed inclusion, but in-person attendance is strongly encouraged." },
    { q: "What are the entry fees? Are there scholarships?", a: "Entry fees cover administrative costs. Yes, GFA provides needs-based scholarships that can waive entry fees and even subsidize travel costs for extraordinary talents from low-income families." },
    { q: "Who are the judges and what is the criteria?", a: "Our jury consists of active Hollywood directors, casting agents, and educators. They judge based on originality, emotional resonance, technical execution (for film), and stage presence (for talent)." },
    { q: "How will we know if we made it to the finals?", a: "All participants will be notified via email on the scheduled 'Finalist Announcement' date. A public list will also be published on our website." }
  ] : [
    { q: "中国的孩子如何参赛？", a: "我们设有官方中国赛区，负责本地报名和初筛。成功晋级的选手将收到官方邀请函，前往洛杉矶主场地参加杜比剧院的总决赛。" },
    { q: "参赛需要什么语言能力？", a: "艺术超越语言。虽然基础英语对洛杉矶之旅有帮助，但表演和短片完全可以是中文（配备英文字幕）。我们在总决赛期间提供必要的语言协助。" },
    { q: "决赛是否需要亲自去洛杉矶？", a: "是的，总决赛是在杜比剧院举办的现场落地活动。如果您获得了决赛资格但因签证等不可抗力无法抵达，我们提供线上接入方案，但强烈建议亲自出席以获得完整体验。" },
    { q: "参赛费用是多少？有奖学金吗？", a: "报名费用于覆盖评审与行政成本。是的，GFA为来自低收入家庭的卓越才华选手提供按需分配的奖学金，包含报名费豁免，甚至是差旅补贴。" },
    { q: "评审是谁？标准是什么？", a: "我们的评审团由好莱坞活跃的导演、选角导演及资深教育专家组成。他们的评判标准基于：原创性、情感共鸣、技术执行力（针对短片组）和舞台表现力（针对才艺组）。" },
    { q: "如何知道是否入围决赛？", a: "所有参赛者将在预定的“入围名单公布日”通过电子邮件收到正式通知。同时，官方晋级名单也会在网站上公示。" }
  ];

  return (
    <div className="font-sans pb-24">
      <SEO title="Global Competition | Global Film Alliance" />

      {/* Hero */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack group pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/TqHKNcjx/1731693e1e0ea8102582bec61f0aed1d.jpg" 
            alt="Dolby Theatre style stage" 
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity transform group-hover:scale-105 transition-transform duration-[20s]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/40 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <img src="https://i.ibb.co/S4Mb6TcN/24480b00-65a2-4468-8dc6-50aae205d0fa.png" alt="Global Youth Talent Competition Logo" className="h-20 md:h-28 w-auto object-contain bg-white/90 rounded-2xl p-3 shadow-xl" />
            <img src="https://i.ibb.co/YB6gWM9L/20260326145435-449-10.jpg" alt="Competition Logo V2" className="h-20 md:h-28 w-auto object-contain rounded-2xl shadow-xl" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            {isEn ? "2026 GFA Global Youth" : "2026全球青少年"}<br/>
            <span className="text-[#C9A84C]">{isEn ? "Talent Competition" : "才艺大赛"}</span>
          </h1>
          <h2 className="text-xl md:text-3xl font-light text-white/90 tracking-widest uppercase mb-12">
            {isEn ? "Grand Finale at Dolby Theatre, Hollywood" : "决赛在好莱坞 Dolby Theatre"}
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-[0_0_30px_rgba(201,168,76,0.4)]">
              {isEn ? "Register — US" : "美国区报名"}
            </button>
            <button className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-gfa-inkBlack text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg">
              {isEn ? "Register — China" : "报名参赛 — 中国"}
            </button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container-gfa px-4 max-w-4xl mx-auto text-center space-y-10 text-lg md:text-xl font-light text-gfa-slate leading-relaxed">
           <p className="font-serif text-2xl text-gfa-inkBlack italic mb-12">
             {isEn 
               ? "The first simultaneous youth film and talent competition held across the US and China, bridging a massive cultural gap to unite the next generation of creators." 
               : "首个中美同步举办的青少年影视才艺大赛，以最高规格的艺术展示，填补了中美青少年深度文化交流的空白。"}
           </p>
           
           <p>
             {isEn 
               ? "Why the Dolby Theatre? We didn't choose it for its size or luxury. We chose it because it is the home of the Oscars. Every February, the absolute pinnacle of cinematic achievement is honored here. In 2026, we are giving that exact same stage to your children. We are telling them their art matters that much." 
               : "为什么是Dolby Theatre？我们不是为了强调场地的奢华。这里是奥斯卡的家。每年二月，世界最顶尖的电影人在这里接受表彰，书写历史。2026年，这个舞台属于你的孩子。我们要用这个舞台告诉他们，他们的才华值得被世界看见。"}
           </p>

           <p>
             {isEn 
               ? "There is profound meaning in this connection. Children from two vastly different countries, using the shared, universal language of film and performance, meeting on the very same stage to share their dreams." 
               : "这是文化连接的真正意义所在。两国的孩子，可能面临不同的成长环境，但能用电影与艺术这个共同的语言，在同一个舞台上相遇，相互启发。"}
           </p>
        </div>
      </section>

      {/* Categories & Age Groups */}
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gfa-inkBlack font-bold font-serif">{isEn ? "Competition Divisions" : "参赛组别"}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {/* Age Groups */}
             <div>
               <h3 className="text-lg font-bold text-[#C9A84C] uppercase tracking-widest mb-6 flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5"/> {isEn ? "By Age Group" : "按年龄划分"}
               </h3>
               <div className="space-y-4">
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6">
                   <div className="w-16 h-16 bg-[#111111] text-white rounded-full flex items-center justify-center font-bold font-serif text-xl">Mini</div>
                   <div>
                     <h4 className="font-bold text-lg text-gfa-inkBlack">Mini Stars</h4>
                     <p className="text-sm font-light text-gfa-slate">{isEn ? "Ages 6–10" : "6–10岁"}</p>
                   </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6">
                   <div className="w-16 h-16 bg-[#C9A84C] text-black rounded-full flex items-center justify-center font-bold font-serif text-xl">Rise</div>
                   <div>
                     <h4 className="font-bold text-lg text-gfa-inkBlack">Rising Stars</h4>
                     <p className="text-sm font-light text-gfa-slate">{isEn ? "Ages 11–14" : "11–14岁"}</p>
                   </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-6">
                   <div className="w-16 h-16 bg-white border-4 border-[#C9A84C] text-gfa-inkBlack rounded-full flex items-center justify-center font-bold font-serif text-xl">Next</div>
                   <div>
                     <h4 className="font-bold text-lg text-gfa-inkBlack">Next Gen</h4>
                     <p className="text-sm font-light text-gfa-slate">{isEn ? "Ages 15–18" : "15–18岁"}</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Categories */}
             <div>
               <h3 className="text-lg font-bold text-[#C9A84C] uppercase tracking-widest mb-6 flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5"/> {isEn ? "By Category" : "按专业类别划分"}
               </h3>
               <div className="grid grid-cols-2 gap-4">
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                   <Star className="w-8 h-8 text-[#C9A84C] mx-auto mb-3" />
                   <h4 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "Performance" : "表演类"}</h4>
                   <p className="text-xs text-gfa-slate">{isEn ? "(Solo / Ensemble)" : "个人 / 团体"}</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                   <Clapperboard className="w-8 h-8 text-[#C9A84C] mx-auto mb-3" />
                   <h4 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "Film Directing" : "短片导演类"}</h4>
                   <p className="text-xs text-gfa-slate">{isEn ? "Short films" : "剧情短片 / 纪录片"}</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                   <PenTool className="w-8 h-8 text-[#C9A84C] mx-auto mb-3" />
                   <h4 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "Screenwriting" : "剧本创作类"}</h4>
                   <p className="text-xs text-gfa-slate">{isEn ? "Original scripts" : "原创电影剧本"}</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                   <Frame className="w-8 h-8 text-[#C9A84C] mx-auto mb-3" />
                   <h4 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "Talent Showcase" : "才艺展示类"}</h4>
                   <p className="text-xs text-gfa-slate">{isEn ? "Dance, Music, etc." : "舞蹈 / 音乐等"}</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Target Audience Messages */}
      <section className="py-0 flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-gfa-inkBlack text-white p-16 md:p-24 flex flex-col justify-center">
           <h3 className="text-[#C9A84C] font-bold tracking-widest uppercase text-sm mb-4">To Chinese Families</h3>
           <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed italic">
             "这不是一个普通的才艺比赛。这是让你的孩子真正站上好莱坞最著名舞台的机会。Dolby Theatre，是每一个电影梦开始的地方。"
           </p>
        </div>
        <div className="md:w-1/2 bg-[#C9A84C] text-black p-16 md:p-24 flex flex-col justify-center">
           <h3 className="text-black/60 font-bold tracking-widest uppercase text-sm mb-4">To American Families</h3>
           <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed italic">
             "This is where East meets West on Hollywood's most iconic stage. Your child's story deserves to be told to the world."
           </p>
        </div>
      </section>

      {/* Process & Timeline */}
      <section className="py-24 bg-white border-b border-gfa-border">
        <div className="container-gfa px-4 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">{isEn ? "Process & Timeline" : "参赛流程与节点"}</h2>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-gray-200 ml-4 md:ml-0 md:border-none space-y-12 md:space-y-0 md:flex md:justify-between mb-16">
             <div className="md:hidden absolute top-0 bottom-0 left-[-1px] w-0.5 bg-gradient-to-b from-[#C9A84C] to-gray-200"></div>
             <div className="hidden md:block absolute top-[24px] left-8 right-8 h-0.5 bg-gradient-to-r from-[#C9A84C] to-gray-200"></div>

             {[
               { n: 1, zh: "在线报名", zhd: "填写基本信息和参赛类别", en: "Register Online", end: "Fill out info & categories" },
               { n: 2, zh: "提交作品", zhd: "上传视频或作品文件", en: "Submit Work", end: "Upload video or file" },
               { n: 3, zh: "评审入围", zhd: "专业评审委员会审核", en: "Jury Selection", end: "Industry panel review" },
               { n: 4, zh: "决赛舞台", zhd: "Dolby Theatre，好莱坞", en: "Grand Finale", end: "Dolby Theatre, LA" },
             ].map((step) => (
               <div key={step.n} className="relative z-10 pl-10 md:pl-0 md:text-center md:w-1/4">
                 <div className="absolute left-[-20px] top-0 md:relative md:left-auto flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-[#C9A84C] text-white font-bold mx-auto mb-4 shadow-sm">
                   {step.n}
                 </div>
                 <h4 className="font-bold text-gfa-inkBlack mb-1 text-lg">{isEn ? step.en : step.zh}</h4>
                 <p className="text-sm font-light text-gfa-slate">{isEn ? step.end : step.zhd}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Awards List */}
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-12">{isEn ? "Awards & Honors" : "最高荣誉奖项设置"}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             <div className="bg-white p-4 rounded-xl border border-[#C9A84C] shadow-md transform -translate-y-2">
               <Trophy className="w-8 h-8 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-gfa-inkBlack text-sm">{isEn ? "Grand Champion" : "总冠军"}</div>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-gfa-inkBlack text-sm">{isEn ? "Best Performance" : "最佳表演"}</div>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-gfa-inkBlack text-sm">{isEn ? "Best Film" : "最佳短片"}</div>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-gfa-inkBlack text-sm">{isEn ? "Best Screenplay" : "最佳剧本"}</div>
             </div>
             <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Star className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-gfa-inkBlack text-sm">{isEn ? "Best Talent" : "最佳才艺"}</div>
             </div>
             <div className="bg-gfa-inkBlack text-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Medal className="w-6 h-6 text-white mx-auto mb-2"/>
               <div className="font-bold text-sm tracking-wide">{isEn ? "Special Jury Award" : "评审特别奖"}</div>
             </div>
             <div className="bg-gfa-inkBlack text-white p-4 rounded-xl border border-gray-100 shadow-sm">
               <Medal className="w-6 h-6 text-[#C9A84C] mx-auto mb-2"/>
               <div className="font-bold text-[#C9A84C] text-sm tracking-wide">{isEn ? "Rising Star Award" : "最具潜力新星"}</div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container-gfa max-w-4xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">{isEn ? "FAQ" : "常见问题"}</h2>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                 <div key={idx} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
                    <button 
                      className="w-full px-6 py-5 text-left font-bold text-gfa-inkBlack flex justify-between items-center focus:outline-none hover:bg-gray-100 transition-colors"
                      onClick={() => toggleFaq(idx)}
                    >
                       <span className="pr-8">{faq.q}</span>
                       <ChevronDown className={`w-5 h-5 text-[#C9A84C] shrink-0 transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`px-6 text-gfa-slate font-light text-sm overflow-hidden transition-all duration-300 ${openFaq === idx ? 'pb-6 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                       <div className="pt-2 border-t border-gray-200 mt-2">{faq.a}</div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Sponsorship CTA */}
      <section className="py-16 bg-gfa-inkBlack text-center">
        <div className="container-gfa px-4">
           <h3 className="text-2xl font-serif text-white mb-6">
             {isEn ? "Become an Official Sponsor" : "成为大赛官方赞助商"}
           </h3>
           <p className="text-white/60 font-light max-w-2xl mx-auto mb-8">
             {isEn 
               ? "Gain brand exposure at the Dolby Theatre while supporting the next generation of global creators." 
               : "在杜比剧院获得极致的品牌曝光，同时支持下一代全球创作者群体的发展。"}
           </p>
           <button className="border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black uppercase tracking-widest text-xs font-bold px-8 py-3 rounded-full transition-colors">
             {isEn ? "Sponsorship Inquiry" : "赞助方案咨询"}
           </button>
        </div>
      </section>

    </div>
  );
};

export default Competition;
