import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { 
  Shield, CheckCircle, AlertCircle, 
  Heart, Users, PhoneCall, BookOpen, Scale
} from 'lucide-react';

const Safeguarding: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="bg-gfa-warmWhite pt-[80px] font-sans pb-24">
      <SEO title="Safeguarding Youth | GFA" />

      {/* Hero */}
      <div className="relative bg-[#1A2B4A] py-20 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop" 
            alt="Protecting Youth" 
            className="w-full h-full object-cover opacity-25 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A] via-[#1A2B4A]/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-lg">
            {isEn ? "Creating Safe Spaces for Young Storytellers" : "为年轻讲述者创造安全的空间"}
          </h1>
          <p className="text-xl md:text-2xl text-[#C9A84C] font-light leading-relaxed italic font-serif">
             {isEn 
               ? "Because an environment of trust is the foundation of true creativity." 
               : "因为信任的环境是真正创造力的基础。"}
          </p>
        </div>
      </div>

      <div className="container-gfa max-w-6xl mx-auto space-y-16">
        
        {/* Intro */}
        <section className="bg-white p-12 md:p-16 rounded-[40px] shadow-xl border border-gfa-border relative overflow-hidden text-center max-w-4xl mx-auto -mt-32 z-20">
          <Heart className="w-16 h-16 text-[#C9A84C] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-6">
            {isEn ? "Our Commitment to Youth" : "我们对青少年的承诺"}
          </h2>
          <p className="text-xl text-gfa-slate leading-relaxed font-light">
             {isEn 
               ? "At the Global Film Alliance (GFA), we believe that the physical, emotional, and psychological well-being of the youth we serve comes before any production schedule or creative goal. As a non-profit organization advocating for youth in the film industry, setting the highest standard for child safeguarding is our fundamental duty." 
               : "在全球电影联盟 (GFA)，我们认为所服务青少年的身体、情感和心理健康先于任何制作计划或创作目标。作为一家倡导青少年参与影视行业的非营利组织，制定最高标准的儿童保护规范是我们的基本职责。"}
          </p>
        </section>

        {/* Photo Grid / Core Values */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div className="space-y-6">
                <h3 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-8">
                  {isEn ? "A Culture of Care on Every Set" : "每个片场都充满关爱的文化"}
                </h3>
                <p className="text-lg text-gfa-slate font-light leading-relaxed mb-6">
                  {isEn 
                    ? "The film industry can be demanding, but our programs are designed to be nurturing. We train all our mentors, directors, and crew members on strict child safeguarding protocols." 
                    : "电影行业可能会要求很高，但我们的项目旨在培养。我们对所有导师、导演和剧组成员进行严格的儿童保护协议培训。"}
                </p>
                <ul className="space-y-4 text-gfa-inkBlack font-medium">
                  <li className="flex items-center gap-3"><CheckCircle className="text-[#C9A84C] w-5 h-5"/> {isEn ? "Background checks for all adult staff" : "所有成年工作人员的背景调查"}</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-[#C9A84C] w-5 h-5"/> {isEn ? "Zero tolerance for harassment or bullying" : "对骚扰或欺凌零容忍"}</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-[#C9A84C] w-5 h-5"/> {isEn ? "Strict working hour limits for minors" : "严格限制未成年人的工作时间"}</li>
                  <li className="flex items-center gap-3"><CheckCircle className="text-[#C9A84C] w-5 h-5"/> {isEn ? "Dedicated onset Welfare Officers" : "设立专门的片场福利官"}</li>
                </ul>
             </div>
             
             {/* Photo Collage */}
             <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" alt="Youth reading" className="w-full h-64 object-cover rounded-[32px] shadow-lg" />
               <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" alt="Youth smiling" className="w-full h-48 object-cover rounded-[32px] shadow-lg mt-16" />
             </div>
          </div>
        </section>

        {/* Protection Framework */}
        <section className="bg-gfa-inkBlack text-white py-16 px-12 md:px-20 rounded-[40px] shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
           
           <div className="relative z-10 text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6">
                {isEn ? "Our Protection Framework" : "我们的保护框架"}
             </h2>
             <p className="max-w-2xl mx-auto text-white/80 font-light text-lg">
                {isEn ? "We uphold international standards to ensure that the vulnerability of youth is never exploited." : "我们秉持国际标准，确保青少年的脆弱性绝不被利用。"}
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[32px]">
                 <Shield className="w-12 h-12 text-[#C9A84C] mb-6" />
                 <h4 className="text-xl font-bold font-serif mb-4">{isEn ? "Physical Safety" : "物理环境安全"}</h4>
                 <p className="text-sm font-light text-white/70">
                   {isEn ? "Safe sets, appropriate lighting, hydration stations, and strictly enforced safety rules around equipment." : "安全的片场、合适的照明、饮水站以及设备周围严格执行的安全规章。"}
                 </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[32px]">
                 <Users className="w-12 h-12 text-[#C9A84C] mb-6" />
                 <h4 className="text-xl font-bold font-serif mb-4">{isEn ? "Emotional Well-being" : "情感健康"}</h4>
                 <p className="text-sm font-light text-white/70">
                   {isEn ? "Creating an inclusive, non-judgmental environment where mistakes are treated as learning opportunities." : "创造一个包容、不评判的环境，把犯错视为学习的机会。"}
                 </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[32px]">
                 <Scale className="w-12 h-12 text-[#C9A84C] mb-6" />
                 <h4 className="text-xl font-bold font-serif mb-4">{isEn ? "Digital Privacy" : "数字与隐私安全"}</h4>
                 <p className="text-sm font-light text-white/70">
                   {isEn ? "Strict consent protocols for publishing images or films featuring minors, protecting their digital footprint." : "严格的照片或影像发布许可协议，保护未成年人的数字足迹。"}
                 </p>
              </div>
           </div>
        </section>

        {/* More Images */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-gfa-border">
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop" alt="Mentorship" className="w-full h-full object-cover" />
           </div>
           <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-gfa-border">
              <img src="https://images.unsplash.com/photo-1604928141064-207cea6f5722?q=80&w=2070&auto=format&fit=crop" alt="Mentorship 2" className="w-full h-full object-cover" />
           </div>
           <div className="aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg border border-gfa-border">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Mentorship 3" className="w-full h-full object-cover" />
           </div>
        </section>

        {/* Reporting Contact */}
        <section className="bg-red-50 border border-red-100 p-12 md:p-16 rounded-[40px] shadow-sm flex flex-col md:flex-row items-center gap-12">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center text-red-500 shrink-0">
               <PhoneCall className="w-10 h-10" />
            </div>
            <div>
               <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-4">
                 {isEn ? "See something? Say something." : "看到异常？请发声。"}
               </h3>
               <p className="text-gfa-slate font-light leading-relaxed mb-6 max-w-2xl">
                 {isEn 
                   ? "If you have witnessed or experienced any violation of our youth protection standards, please contact us immediately. All reports are strictly confidential." 
                   : "如果您目睹或经历了任何违反我们青少年保护标准的行为，请立即与我们联系。所有报告均严格保密。"}
               </p>
               <a href="mailto:jacky@gfafilm.org" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-red-700 transition-colors">
                  <AlertCircle className="w-5 h-5" />
                  {isEn ? "Submit Confidential Report" : "提交保密报告"}
               </a>
            </div>
        </section>

      </div>
    </div>
  );
};

export default Safeguarding;
