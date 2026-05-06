import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Tent, Film, HeartHandshake, Sparkles, Calendar, MapPin, Video, ArrowRight } from 'lucide-react';

const YouthPrograms: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans pb-24">
      <SEO title="Youth Programs | Global Film Alliance" />

      {/* Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&w=2070&auto=format&fit=crop" 
            alt="Youth holding a clapperboard" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            {isEn ? "Planting the Seed of a" : "为下一代电影人"}<br/>
            <span className="text-[#C9A84C]">{isEn ? "Filmmaker's Dream" : "种下梦想的种子"}</span>
          </h1>
        </div>
      </section>

      {/* Program 1: Summer Camp */}
      <section className="py-24 bg-white border-b border-gfa-border">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-widest mb-4 flex justify-center items-center gap-2">
              <Tent className="w-5 h-5"/> {isEn ? "Youth Film Summer Camp" : "影视夏令营"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-8">
              {isEn ? "From First Frame to Premiere" : "从最初的画面到最终的首映"}
            </h3>
            <p className="text-lg md:text-xl font-serif font-light text-gfa-slate leading-relaxed max-w-3xl mx-auto italic">
              {isEn 
                ? "Picture day one: A child holds a professional camera for the first time, nervous but fully mesmerized. Now picture the final day: Sitting in a real theater, watching the audience's reaction to a film they directed themselves. That transformation is our summer camp." 
                : "第一天：从未摸过摄影机，紧张又期待。最后一天：坐在观众席，看着自己导演的短片第一次公映，感受观众的掌声。这不仅仅是一个夏令营，这是一条清晰的职业成长路径的起点。"}
            </p>
          </div>

          <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 flex flex-col lg:flex-row gap-12 mb-16">
            <div className="lg:w-1/3">
              <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-6">{isEn ? "2026 Camp Details" : "2026年营地信息"}</h4>
              <ul className="space-y-6 text-sm font-light text-gfa-slate">
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">Session 1</strong>
                    June 15–27, 2026
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">Session 2</strong>
                    July 20–Aug 1, 2026
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 flex justify-center items-center text-[#C9A84C] font-bold shrink-0 mt-0.5">@</span>
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">{isEn ? "Ages" : "年龄"}</strong>
                    6–17 {isEn ? " years old" : "岁"}
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">{isEn ? "Location" : "地点"}</strong>
                    Greater Los Angeles Area
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-gfa-inkBlack mb-1">{isEn ? "Gear" : "使用设备"}</strong>
                    {isEn ? "Professional Blackmagic Design cameras used by Hollywood directors." : "使用Blackmagic Design专业设备（和好莱坞导演用同款）"}
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-2/3">
              <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-6">{isEn ? "Curriculum Modules" : "课程内容"}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "1. Screenwriting" : "1. 剧本创作"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Find the stories that only you can tell." : "找到只有你才能讲的故事"}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "2. Cinematography" : "2. 摄影技术"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Learn to express emotion through lenses and lighting." : "学会用光和镜头表达情感"}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "3. Acting" : "3. 表演指导"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Find your authentic self in front of the camera." : "在镜头前找到真实的自己"}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "4. Post-Production" : "4. 剪辑后期"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Transform scattered clips into a complete narrative." : "把零散的素材变成完整作品"}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "5. Directing" : "5. 导演技巧"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Learn how to lead a team to tell a unified story." : "学会带领团队讲述故事"}</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
                    <h5 className="font-bold text-gfa-inkBlack mb-1">{isEn ? "6. The Premiere" : "6. 作品展映"}</h5>
                    <p className="text-sm font-light text-gfa-slate">{isEn ? "Experience the thrill of a live audience watching your work." : "第一次看到观众看自己的作品"}</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Scholarship */}
          <div className="bg-gfa-inkBlack text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
             <div className="relative z-10 max-w-3xl mx-auto">
               <h4 className="text-2xl md:text-3xl font-bold font-serif mb-4 text-[#C9A84C]">
                 {isEn ? "Talent shouldn't be limited by family income." : "才华，不应该被家庭收入所限制"}
               </h4>
               <p className="text-white/80 font-light mb-8">
                 {isEn 
                   ? "We provide full and partial scholarships so that passionate children, regardless of their financial background, can experience the magic of our camps." 
                   : "我们为什么提供奖学金：为了确保所有对电影充满热情的孩子都有机会参与。我们为低收入家庭提供全额或部分费用减免。"}
               </p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button className="bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-colors">
                   {isEn ? "Register My Child" : "为我的孩子报名"}
                 </button>
                 <button className="border border-white hover:bg-white hover:text-gfa-inkBlack text-white font-bold uppercase tracking-widest text-xs px-8 py-4 rounded-full transition-colors">
                   {isEn ? "Sponsor a Child" : "资助一个孩子"}
                 </button>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Program 2 & 3 */}
      <section className="py-24 bg-[#F5F2EE] border-b border-gfa-border">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Program 2: Dream Film Project */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="h-64 bg-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1543333995-a78aea2eee50?q=80&w=2070&auto=format&fit=crop" alt="Children's Film Project" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                    <Film className="w-4 h-4"/> Children's Dream Film Project
                  </div>
                  <h3 className="text-2xl font-bold font-serif">{isEn ? "Children's Dream Film Project" : "儿童梦想电影项目"}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-gfa-slate font-light leading-relaxed mb-6 font-bold">
                  {isEn ? "We don't simulate—we actually produce and distribute. Every quarter, we produce a complete short film led entirely by youth." : "我们不模拟——我们真的制作，真的发行。每季度制作一部完整短片，全程由青少年主导。"}
                </p>
                <div className="bg-gray-50 border-l-4 border-[#C9A84C] p-6 rounded-r-xl mb-8 flex-grow">
                  <h4 className="font-bold text-gfa-inkBlack font-serif mb-2">{isEn ? "Case Study: 'Garden'" : "代表作：《花园 Garden》"}</h4>
                  <ul className="text-sm font-light text-gfa-slate space-y-2 mb-4">
                    <li>• {isEn ? "Winner: Best Family Film at Golden State Film Festival" : "Golden State Film Festival 最佳家庭电影"}</li>
                    <li>• {isEn ? "Distributed on Amazon Prime, YouTube, and Tubi" : "Amazon Prime / YouTube / Tubi 广泛发行"}</li>
                  </ul>
                  <p className="text-xs italic text-gfa-slate">"{isEn ? "Seeing my name in the credits on Amazon Prime made me realize I want to do this forever." : "在亚马逊上看到我的名字出现在片尾字幕时，我觉得我找到了我一生的热爱。"}"</p>
                </div>
                <div className="flex flex-col xl:flex-row gap-3">
                  <button className="bg-gfa-inkBlack hover:bg-black text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Enroll for Next Film" : "让我的孩子参与下一部"}
                  </button>
                  <button className="border border-gfa-border hover:bg-gray-50 text-gfa-inkBlack font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Co-Produce" : "联合出品"}
                  </button>
                </div>
              </div>
            </div>

            {/* Program 3: Special Needs */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="h-64 bg-gray-200 relative">
                <img src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=2070&auto=format&fit=crop" alt="Film Therapy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-2 mb-2 text-[#C9A84C] font-bold text-xs uppercase tracking-widest">
                    <HeartHandshake className="w-4 h-4"/> Film Therapy
                  </div>
                  <h3 className="text-2xl font-bold font-serif">{isEn ? "Film Therapy for Special Needs Youth" : "特殊需求儿童计划"}</h3>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <p className="text-gfa-slate font-light leading-relaxed mb-6 font-serif italic text-lg text-gfa-inkBlack">
                  {isEn ? "\"Film is just another language. For children with special needs, it might be their most powerful one.\"" : "“电影，是另一种语言。对于有特殊需求的孩子，它可能是最有力的语言。”"}
                </p>
                <ul className="text-sm font-light text-gfa-slate space-y-4 mb-8 flex-grow">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {isEn ? "Filmmaking therapy designed specifically for youth with autism, depression, and anxiety." : "专为自闭症、抑郁症、焦虑症儿童设计的影视创作疗愈课程"}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {isEn ? "Helping children find self-expression and connection through acting and camerawork." : "通过拍摄和表演帮助孩子表达自我"}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {isEn ? "Instructors with professional backgrounds in psychological counseling." : "有专业心理辅导背景的导师团队"}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0"></div>
                    {isEn ? "Small group settings ensuring a 1:3 teacher-to-student ratio." : "小班制，1:3师生比例"}
                  </li>
                </ul>
                <div className="flex flex-col xl:flex-row gap-3">
                  <button className="bg-gfa-inkBlack hover:bg-black text-white font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Learn More" : "了解详情"}
                  </button>
                  <button className="border border-gfa-border hover:bg-gray-50 text-gfa-inkBlack font-bold uppercase tracking-widest text-[10px] sm:text-xs px-6 py-3 rounded-full transition-colors flex-1">
                    {isEn ? "Book Consultation" : "预约咨询"}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Program 4: AI Filmmaking */}
      <section className="py-24 bg-white">
        <div className="container-gfa max-w-5xl mx-auto px-4 text-center">
           <div className="inline-block px-4 py-1 border border-gfa-border text-gfa-inkBlack text-xs font-bold uppercase tracking-widest rounded-full mb-6">
             {isEn ? "Innovation Track" : "前沿科技"}
           </div>
           <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-6">
             {isEn ? "AI Filmmaking Training" : "AI影视制作培训"}
           </h2>
           <p className="text-xl md:text-2xl font-light text-gfa-slate mb-16 font-serif italic max-w-3xl mx-auto">
             {isEn 
               ? "As AI revolutionizes the film industry, we ensure the next generation doesn't fall behind. They will lead the paradigm shift." 
               : "当AI正在改变整个影视工业，我们不让下一代落在时代后面。"}
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-16">
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{isEn ? "AI Screenwriting" : "AI剧本创作"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {isEn ? "Mastering narrative generation workflows using ChatGPT and Claude." : "（ChatGPT、Claude等工具的创作流程）"}
               </p>
             </div>
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{isEn ? "Visual Gen & VFX" : "AI视觉生成与特效"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {isEn ? "Creating mind-bending visuals with Midjourney, Runway, and Sora." : "（Midjourney、Runway、Sora等）"}
               </p>
             </div>
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{isEn ? "AI Editing" : "AI辅助剪辑"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {isEn ? "Speeding up post-production using Descript and Adobe AI." : "（Descript、Adobe AI等）"}
               </p>
             </div>
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
               <Sparkles className="w-8 h-8 text-[#C9A84C] mb-4"/>
               <h4 className="font-bold text-gfa-inkBlack font-serif text-lg mb-2">{isEn ? "AI Producing" : "AI制片与项目管理"}</h4>
               <p className="text-sm font-light text-gfa-slate leading-relaxed">
                 {isEn ? "Automating breakdowns and scheduling with intelligent production tools." : "自动化剧本拆解与拍摄计划制定"}
               </p>
             </div>
           </div>

           <button className="bg-gfa-inkBlack hover:bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-lg inline-flex items-center gap-2">
             {isEn ? "Join the Waitlist" : "加入等候名单"} <ArrowRight className="w-4 h-4"/>
           </button>
        </div>
      </section>

    </div>
  );
};

export default YouthPrograms;
