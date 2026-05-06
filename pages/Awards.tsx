import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Trophy, Star, Medal, ArrowRight, Heart } from 'lucide-react';

const Awards: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans pb-24">
      <SEO title="Golden Feather Awards | Global Film Alliance" />

      {/* Banner */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" 
            alt="Awards Ceremony" 
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/30 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            {isEn ? "Hollywood's Premier" : "好莱坞最受期待的"}<br/>
            <span className="text-[#C9A84C]">{isEn ? "Youth Film Awards" : "青年电影人颁奖礼"}</span>
          </h1>
        </div>
      </section>

      {/* The Soulful Intro */}
      <section className="py-24 bg-white border-b border-gfa-border">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl md:text-3xl font-light text-gfa-inkBlack leading-relaxed font-serif italic mb-10">
            {isEn 
              ? "It's the moment they call your name. You walk up the steps of that Hollywood stage. The lights are blinding, but when you look down, you see your parents in the front row, tears in their eyes. In that exact second, all those late nights editing, all the doubts, all the times you carried heavy gear in the rain... it becomes real. You are a filmmaker." 
              : "当名字被念出的那一刻，你走上好莱坞那座熠熠生辉的颁奖台。聚光灯很刺眼，但当你低下头，正好看到前排父母眼中闪烁的泪光。就在那一秒，所有熬夜剪辑的疲惫、所有自我怀疑的瞬间、所有在雨中扛着沉重设备的日夜……全部化为真实。这一刻你确信：你是一名电影人。"}
          </p>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-10"></div>
          <div className="text-gfa-slate font-light leading-relaxed space-y-4">
             <p>{isEn ? "The Golden Feather Awards is not a youth talent show. It is a serious, rigorous industry commendation." : "金羽奖不是一个简单的儿童才艺比赛。它是一个极其严肃的专业表彰活动。"}</p>
             <p>{isEn ? "Judged by a panel of active Hollywood professionals, we host a formal gala in the heart of Los Angeles to recognize the exceptional artistic vision and unyielding dedication of emerging young creatives." : "由好莱坞仍在活跃的专业人士组成评审委员会，并在好莱坞的核心地带举办正式的高规格颁奖典礼，隆重表彰在电影艺术领域展现卓越才华和不懈努力的青年创作者。"}</p>
          </div>
        </div>
      </section>

      {/* 2025 Recap */}
      <section className="py-24 bg-gfa-inkBlack text-white">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#C9A84C]">
               {isEn ? "2025 Ceremony Recap" : "2025 年度回顾"}
             </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center border-r border-white/10 last:border-0 p-4">
                 <div className="text-5xl font-bold font-serif mb-2 text-white">18</div>
                 <div className="text-sm text-[#C9A84C] font-bold uppercase tracking-widest">{isEn ? "Youth Winners" : "位青年电影人获奖"}</div>
              </div>
              <div className="text-center border-r border-white/10 last:border-0 p-4">
                 <div className="text-5xl font-bold font-serif mb-2 text-white">100%</div>
                 <div className="text-sm text-[#C9A84C] font-bold uppercase tracking-widest">{isEn ? "Industry Judging" : "好莱坞工业评审"}</div>
              </div>
              <div className="text-center p-4">
                 <div className="text-5xl font-bold font-serif mb-2 text-white">LA</div>
                 <div className="text-sm text-[#C9A84C] font-bold uppercase tracking-widest">{isEn ? "Red Carpet Gala" : "正式红毯大典"}</div>
              </div>
           </div>

           <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl relative">
              <Trophy className="absolute top-6 right-6 w-16 h-16 text-white/5" />
              <h3 className="text-xl font-bold font-serif mb-4 text-[#C9A84C]">{isEn ? "Winner Spotlight" : "获奖者感言"}</h3>
              <p className="text-lg md:text-xl font-light text-white/80 italic mb-6">
                "{isEn ? "I shot my short film on my phone with my friends from school. Standing here tonight holding this trophy, surrounded by real directors... it changes everything. It tells me I actually belong here." : "我的短片是我和同学用手机拍的。今晚能站在这里拿着这座奖杯，周围全都是真正的导演……这改变了一切。它告诉我，我是属于这里的。"}"
              </p>
              <div className="text-sm font-bold uppercase tracking-widest text-white/50">- {isEn ? "Best Director (High School Category)" : "最佳青年导演（高中组）"}</div>
           </div>
        </div>
      </section>

      {/* Categories & Judging */}
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             
             {/* Categories */}
             <div>
               <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-8">
                 {isEn ? "Award Categories" : "奖项类别设置"}
               </h2>
               <div className="space-y-4">
                 {[
                   { en: "Best Young Director", zh: "最佳青年导演", icon: <Star className="w-5 h-5"/> },
                   { en: "Best Performance", zh: "最佳表演", icon: <Star className="w-5 h-5"/> },
                   { en: "Best Short Film", zh: "最佳短片", icon: <Star className="w-5 h-5"/> },
                   { en: "Best Screenplay", zh: "最佳剧本", icon: <Star className="w-5 h-5"/> },
                   { en: "Best Cinematography", zh: "最佳摄影", icon: <Star className="w-5 h-5"/> },
                   { en: "Emerging Star Award", zh: "最具潜力新星奖", icon: <Medal className="w-5 h-5"/> },
                   { en: "Special Jury Prize", zh: "评审特别奖", icon: <Trophy className="w-5 h-5"/> },
                 ].map((cat, i) => (
                   <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                     <div className="text-[#C9A84C]">{cat.icon}</div>
                     <span className="font-bold text-gfa-inkBlack">{isEn ? cat.en : cat.zh}</span>
                   </div>
                 ))}
               </div>
             </div>

             {/* Judging */}
             <div>
               <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-8">
                 {isEn ? "Judging Mechanism" : "公正的评审机制"}
               </h2>
               <p className="text-gfa-slate font-light leading-relaxed mb-6">
                 {isEn 
                   ? "To guarantee the prestige of the Golden Feather Awards, our jury matrix is composed exclusively of working professionals: current DGA directors, PGA producers, festival programmers, and seasoned entertainment educators." 
                   : "为了保证金羽奖的权威性与荣誉感，我们的评审委员会完全由在一线活跃的行业专家组成：包括美国导演工会(DGA)导演、美国制片人工会(PGA)制片人、电影节选片人以及资深的影视教育专家。"}
               </p>
               <p className="text-gfa-slate font-light leading-relaxed mb-8">
                 {isEn 
                   ? "We utilize a blind-review system for initial technical categories to ensure absolute fairness, evaluating the raw emotional impact and technical competency of the art uninfluenced by background." 
                   : "我们对初审阶段的技术类奖项采用盲审制度以确保绝对的公正性，纯粹评估作品传达的原始情感冲击力与技术成熟度，不受背景因素干扰。"}
               </p>
               
               <div className="bg-gfa-inkBlack text-white p-8 rounded-3xl mt-8">
                 <h4 className="font-bold font-serif text-[#C9A84C] text-xl mb-4">{isEn ? "2026 Awards Preview" : "2026年金羽奖预告"}</h4>
                 <p className="font-light text-white/80 mb-6 text-sm">
                   {isEn ? "The next ceremony will be bigger, bringing together more global voices. Date to be announced." : "下一届颁奖礼将规模更大，汇聚更多全球优秀的青年声音。具体时间即将揭晓，敬请期待。"}
                 </p>
                 <button className="bg-[#C9A84C] hover:bg-white text-black font-bold uppercase tracking-widest text-[10px] px-6 py-3 rounded-full transition-colors">
                   {isEn ? "Join Notification List" : "加入通知名单"}
                 </button>
               </div>
             </div>

           </div>
        </div>
      </section>

      {/* Media & Support */}
      <section className="py-24 bg-white text-center">
        <div className="container-gfa px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
             <div className="border border-gray-200 p-10 rounded-3xl">
               <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{isEn ? "Press & Media" : "媒体与报道"}</h4>
               <p className="text-sm font-light text-gfa-slate mb-8">{isEn ? "Cover the brightest young talents on their big night." : "为这些在闪耀之夜的才华青年进行报道与传播。"}</p>
               <button className="border-2 border-gfa-inkBlack text-gfa-inkBlack font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full hover:bg-gfa-inkBlack hover:text-white transition-colors">
                 {isEn ? "Request Press Pass" : "申请媒体证件"}
               </button>
             </div>
             
             <div className="border border-gray-200 p-10 rounded-3xl bg-gray-50">
               <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{isEn ? "Corporate Sponsors" : "企业赞助"}</h4>
               <p className="text-sm font-light text-gfa-slate mb-8">{isEn ? "Align your brand with the future stars of Hollywood." : "将您的品牌与好莱坞未来的璀璨新星联系在一起。"}</p>
               <button className="border-2 border-gfa-inkBlack text-gfa-inkBlack font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full hover:bg-gfa-inkBlack hover:text-white transition-colors">
                 {isEn ? "Sponsorship Inquiry" : "颁奖礼赞助咨询"}
               </button>
             </div>
          </div>

          <div className="bg-[#111111] text-white p-12 rounded-3xl relative overflow-hidden">
             <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 text-white/5 pointer-events-none" />
             <h3 className="relative z-10 text-2xl md:text-3xl font-bold font-serif mb-4">
               {isEn ? "Fund a Dream" : "资助一个梦想之夜"}
             </h3>
             <p className="relative z-10 text-white/80 font-light mb-8 max-w-2xl mx-auto">
               {isEn 
                 ? "Our awards ceremony is entirely non-profit. Your donation ensures we can fly in low-income nominees and host an event they will remember for the rest of their lives." 
                 : "我们的颁奖礼是完全非营利的。您的捐款将直接用于支持低收入家庭的提名者来到洛杉矶现场，为他们举办一场终生难忘的荣誉盛典。"}
             </p>
             <button className="relative z-10 bg-[#C9A84C] hover:bg-[#b09241] text-black font-bold uppercase tracking-widest text-sm px-10 py-4 rounded-full transition-colors flex items-center justify-center gap-2 mx-auto shadow-lg">
               <Heart className="w-4 h-4 fill-current"/> {isEn ? "Donate to the Awards" : "为金羽奖捐款"}
             </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Awards;
