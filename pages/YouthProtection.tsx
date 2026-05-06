import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Shield, Eye, CheckCircle, Heart, Lock } from 'lucide-react';

const YouthProtection: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans">
      <SEO title="Youth Protection | Global Film Alliance" />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack group">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop" 
            alt="Youth Protection" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity transform group-hover:scale-105 transition-transform duration-[20s]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 mt-20 max-w-4xl mx-auto">
          <Shield className="w-16 h-16 text-[#C9A84C] mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            {isEn ? "Youth Protection & Safety" : "青少年安全与保护"}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-10 leading-relaxed italic">
            {isEn 
              ? "Because giving them a stage means nothing if they don't feel safe standing on it." 
              : "因为如果他们站在舞台上感到不安全，那么即使给他们舞台也毫无意义。"}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container-gfa max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">
              {isEn ? "Our Commitment" : "我们的承诺"}
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-8 leading-tight">
              {isEn ? "Safety is not an afterthought. It is our foundation." : "安全绝非后话。它是我们一切工作的基础。"}
            </h3>
            <p className="text-lg text-gfa-slate font-light leading-relaxed mb-12">
              {isEn 
                ? "At Global Film Alliance, we are absolutely committed to providing a safe, ethical, and supportive environment for every child. Whether on set, in a summer camp, or at our awards ceremony, the physical and emotional well-being of our young artists is our highest priority." 
                : "在全球电影联盟 (GFA)，我们绝对致力于为每个孩子提供一个安全、合乎道德和充满支持的环境。无论是在片场、夏令营，还是在颁奖典礼上，保护我们年轻艺术家的身心健康都是我们的最高优先事项。"}
            </p>

            <div className="flex flex-wrap justify-center gap-8 opacity-80">
               <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80" alt="Safe Set" className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-gfa-warmWhite" />
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" alt="Mentoring" className="w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-white -mt-8 relative z-10" />
               <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=400&q=80" alt="Event Safety" className="w-48 h-48 rounded-full object-cover shadow-xl border-4 border-gfa-warmWhite" />
            </div>
        </div>
      </section>

      {/* Core Policies */}
      <section className="py-16 bg-[#F5F2EE] border-t border-gfa-border">
        <div className="container-gfa max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="space-y-10">
                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 text-[#C9A84C]">
                      <Eye className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? "Two-Adult Rule (Always Visibile)" : "双成人监督准则"}</h4>
                      <p className="text-gfa-slate font-light leading-relaxed">
                        {isEn ? "No child is ever left alone with a single adult, mentor, or staff member. All interactions occur in open, observable environments with at least two background-checked adults present at all times." : "任何孩子都不会与单独的一名成年人、导师或工作人员独处。所有互动均在开放且可观察的环境中进行，并始终至少有两名经过背景调查的成年人在场。"}
                      </p>
                   </div>
                </div>

                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 text-[#C9A84C]">
                      <CheckCircle className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? "Rigorous Background Checks" : "严格的背景审查"}</h4>
                      <p className="text-gfa-slate font-light leading-relaxed">
                        {isEn ? "Every single staff member, mentor, instructor, and volunteer undergoes comprehensive national background and reference checks before they are allowed anywhere near our programs." : "每一位工作人员、导师、讲师和志愿者在获准参与我们的项目之前，都必须接受全面的国家级背景和背景调查。"}
                      </p>
                   </div>
                </div>

                <div className="flex gap-6 items-start">
                   <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 text-[#C9A84C]">
                      <Lock className="w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-2">{isEn ? "Data & Media Privacy" : "数据与媒体隐私"}</h4>
                      <p className="text-gfa-slate font-light leading-relaxed">
                        {isEn ? "We strictly protect the digital identity of our youth. Photos and footage of children are only used with explicit parental consent, and sensitive personal information is secured using industry-standard protocols." : "我们严格保护青少年的数字身份。儿童的影像仅在获得家长明确同意的情况下使用，敏感的个人信息采用行业标准协议进行保护。"}
                      </p>
                   </div>
                </div>
             </div>
             
             <div className="relative h-full flex flex-col justify-center">
                <div className="bg-[#1A2B4A] rounded-[40px] p-10 text-white shadow-2xl relative overflow-hidden">
                   <Heart className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5 opacity-50 pointer-events-none" />
                   <h4 className="text-2xl font-bold font-serif text-[#C9A84C] mb-4">
                     {isEn ? "The Hollywood Standard" : "好莱坞级别的保护标准"}
                   </h4>
                   <p className="text-white/80 font-light leading-relaxed mb-6">
                     {isEn 
                       ? "Because our students work on real film sets, we mandate strict adherence to California child labor laws and industry safety protocols. Working hours are carefully managed, and on-set welfare coordinators are appointed for all production programs." 
                       : "因为我们的学生在真实的电影片场工作，我们强制要求严格遵守加州童工法和行业安全协议。工作时间受到精心管理，并在所有制作项目中配备驻场福利协调员。"}
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Advancing Industry Integrity Section */}
      <section className="py-16 bg-white">
        <div className="container-gfa max-w-5xl mx-auto">
           <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <div className="rounded-[32px] overflow-hidden shadow-2xl border border-gfa-border bg-gfa-warmWhite p-2">
                   <img 
                     src="https://i.ibb.co/sp4fWHq3/Chat-GPT-Image-2026-3-23-12-23-22.png" 
                     alt="Advancing Industry Integrity" 
                     className="w-full h-auto rounded-[24px]"
                   />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-sm font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-4">
                  {isEn ? "Ethical Leadership" : "道德准则"}
                </h2>
                <h3 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-6 leading-tight">
                  {isEn ? "Advancing Industry Integrity" : "推进行业诚信与保护准则"}
                </h3>
                <p className="text-lg text-gfa-slate font-light leading-relaxed mb-6">
                  {isEn 
                    ? "GFA actively promotes a culture of integrity across all our partnerships. We collaborate with studios, theaters, and local governments to ensure that youth participation in media is not only creatively fulfilling, but ethically sound." 
                    : "GFA 积极在我们所有的合作伙伴中推广诚信文化。我们与制片厂、剧院和地方政府合作，以确保青少年参与媒体不仅在创意上令人满足，而且在道德上也是正确的。"}
                </p>
                <p className="text-lg text-gfa-slate font-light leading-relaxed">
                  {isEn 
                    ? "The inclusion of young voices in film must never come at the cost of their innocence or security. We are setting the standard for how non-profits interface with the entertainment industry." 
                    : "让年轻人的声音融入电影绝不能以牺牲他们的纯真或安全为代价。我们正在为非营利组织如何与娱乐业互动树立标准。"}
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Contact for Concerns */}
      <section className="py-16 bg-[#1A2B4A] text-center border-t border-[#C9A84C]/30">
        <div className="container-gfa max-w-3xl mx-auto">
           <h3 className="text-3xl font-bold font-serif text-white mb-6">
             {isEn ? "Report a Concern" : "报告安全问题"}
           </h3>
           <p className="text-white/80 font-light mb-8 max-w-xl mx-auto leading-relaxed">
             {isEn 
               ? "If you ever have a concern regarding the safety or well-being of a child at any GFA program, please contact us immediately. We have a zero-tolerance policy for misconduct." 
               : "如果您对 GFA 任何项目中的任何儿童的安全或福祉有任何疑虑，请立即与我们联系。我们对任何不当行为采取零容忍政策。"}
           </p>
           <a href="mailto:safety@gfafilm.org" className="inline-block bg-[#C9A84C] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-gfa-inkBlack transition-colors shadow-lg">
             {isEn ? "Contact Safety Team" : "联系安全团队"}
           </a>
        </div>
      </section>
    </div>
  );
};

export default YouthProtection;
