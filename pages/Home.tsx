import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { PlayCircle, ArrowRight, Heart, Star, Film, Award, MapPin, PenTool, MonitorPlay, Video, Users, UsersRound, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans">
      <SEO title="Home | Global Film Alliance" />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] max-h-[900px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack group">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop" 
            alt="Film set in Hollywood" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity transform group-hover:scale-105 transition-transform duration-[20s]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/60 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 mt-20">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl max-w-5xl mx-auto">
            {isEn ? "Empowering Film Grads" : "影视行业毕业生就业支持"}<br/>
            <span className="text-[#C9A84C]">{isEn ? "To Break the Barriers" : "全球公益扶持平台"}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            {isEn 
              ? "A nonprofit removing the barriers between talented graduates and the careers they've earned. Equipment, mentors, distribution, and funding—we solve the hardest step." 
              : "作为一家非营利机构，GFA的存在只有一个意义：帮助有才华的电影毕业生跨越行业壁垒。设备、导师、发行、资金——我们为你解决入行最难的一步。"}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/filmmaker-support" className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 shadow-[0_0_20px_rgba(201,168,76,0.3)] text-center inline-flex justify-center items-center gap-2">
              {isEn ? "Apply for Support" : "申请就业支持"}
            </Link>
            <Link to="/donate" className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#0D1B2A] border-2 border-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 text-center inline-flex justify-center items-center gap-2">
              <Heart className="w-4 h-4 text-[#C9A84C]" /> {isEn ? "Donate Now" : "立即捐款"}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/50 z-20 cursor-pointer hover:text-white transition-colors" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <ChevronDown className="w-10 h-10" />
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#111111] border-b border-gfa-border/10 py-5 overflow-hidden relative z-20">
         <div className="container-gfa flex flex-wrap justify-center md:justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/60 gap-8">
            <span>501(c)(3) Certified Nonprofit</span>
            <span>Blackmagic Design Partner</span>
            <span>Amazon Prime · Tubi · YouTube</span>
            <span className="hidden md:inline">Golden State Film Festival Winner</span>
            <span>Dolby Theatre 2026</span>
            <span className="hidden lg:inline">City of Pomona Partner</span>
         </div>
      </div>

      {/* Crisis Data Section */}
      <section className="py-16 md:py-20 bg-[#F9F7F4] border-b border-gfa-border">
        <div className="container-gfa max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack leading-tight mb-4">
              {isEn ? "California Film Industry Crisis: 2024-2026" : "加州影视就业危机 — 2024-2026现状"}
            </h2>
            <p className="text-gfa-slate text-base md:text-lg font-light max-w-4xl mx-auto leading-relaxed">
              {isEn 
                ? "This is the primary reason for GFA's existence: The industry is undergoing its most severe employment crisis in recent years, with new graduates facing unprecedented challenges." 
                : "这是GFA存在最重要的理由：行业正在经历近年来最严重的就业危机，新毕业生面临前所未有的困境。"}
            </p>
          </div>

          {/* Macro Data Map */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gfa-border text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif text-[#8B0000] mb-2">42K</div>
              <p className="text-[10px] md:text-xs font-bold text-gfa-inkBlack uppercase tracking-wider mb-1">{isEn ? "Lost Jobs in LA" : "洛杉矶流失岗位"}</p>
              <p className="text-[9px] md:text-[10px] font-bold text-gfa-slate uppercase tracking-[0.2em] opacity-60">2022 - 2024</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gfa-border text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif text-[#8B0000] mb-2">10.9%</div>
              <p className="text-[10px] md:text-xs font-bold text-gfa-inkBlack uppercase tracking-wider mb-1">{isEn ? "Unemployment Rate" : "影视行业失业率"}</p>
              <p className="text-[9px] md:text-[10px] font-bold text-gfa-slate uppercase tracking-[0.2em] opacity-60">{isEn ? "2.5x National Avg" : "全国平均的2.5倍"}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gfa-border text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif text-[#8B0000] mb-2">-22%</div>
              <p className="text-[10px] md:text-xs font-bold text-gfa-inkBlack uppercase tracking-wider mb-1">{isEn ? "On-Location Shoots" : "洛杉矶实地拍摄天数"}</p>
              <p className="text-[9px] md:text-[10px] font-bold text-gfa-slate uppercase tracking-[0.2em] opacity-60">{isEn ? "Q1 2025" : "2025年 Q1"}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gfa-border text-center">
              <div className="text-3xl md:text-4xl font-bold font-serif text-[#8B0000] mb-2">-25%</div>
              <p className="text-[10px] md:text-xs font-bold text-gfa-inkBlack uppercase tracking-wider mb-1">{isEn ? "Industry Emp Rate" : "全行业总体就业率"}</p>
              <p className="text-[9px] md:text-[10px] font-bold text-gfa-slate uppercase tracking-[0.2em] opacity-60">{isEn ? "Below 2022 Peak" : "低于2022年峰值"}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Graduates Data */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gfa-border h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-2xl font-bold font-serif text-gfa-inkBlack mb-2 border-b border-gfa-border pb-4">
                  {isEn ? "Annual Graduates Output" : "加州主要电影学院毕业生数量 (每年)"}
                </h3>
                
                <div className="divide-y divide-gray-100">
                  <div className="py-4 flex justify-between items-center group">
                     <div>
                       <h4 className="text-sm font-bold text-gfa-inkBlack uppercase tracking-widest mb-1">USC SCA</h4>
                       <p className="text-xs text-gfa-slate">{isEn ? "Global Top Film School" : "全球顶尖电影学院"}</p>
                     </div>
                     <div className="text-xl font-serif text-gfa-inkBlack font-bold bg-gray-50 px-3 py-1 rounded-lg">~426</div>
                  </div>
                  
                  <div className="py-4 flex justify-between items-center group">
                     <div>
                       <h4 className="text-sm font-bold text-gfa-inkBlack uppercase tracking-widest mb-1">UCLA TFT</h4>
                       <p className="text-xs text-gfa-slate">{isEn ? "Top Public Institution" : "公立顶尖院校"}</p>
                     </div>
                     <div className="text-xl font-serif text-gfa-inkBlack font-bold bg-gray-50 px-3 py-1 rounded-lg">~200+</div>
                  </div>

                  <div className="py-4 flex justify-between items-center group">
                     <div>
                       <h4 className="text-sm font-bold text-gfa-inkBlack uppercase tracking-widest mb-1">LMU / Chapman</h4>
                       <p className="text-xs text-gfa-slate">{isEn ? "LA Region Programs" : "洛杉矶地区两校合计"}</p>
                     </div>
                     <div className="text-xl font-serif text-gfa-inkBlack font-bold bg-gray-50 px-3 py-1 rounded-lg">~300+</div>
                  </div>

                  <div className="py-4 flex justify-between items-center group">
                     <div>
                       <h4 className="text-sm font-bold text-gfa-inkBlack uppercase tracking-widest mb-1">Cal State System</h4>
                       <p className="text-xs text-gfa-slate">{isEn ? "All CSU Film Programs" : "全加州CSU院校影视相关专业"}</p>
                     </div>
                     <div className="text-xl font-serif text-gfa-inkBlack font-bold bg-gray-50 px-3 py-1 rounded-lg">~1,000+</div>
                  </div>

                  <div className="py-4 flex justify-between items-center group flex-grow">
                     <div>
                       <h4 className="text-sm font-bold text-gfa-inkBlack uppercase tracking-widest mb-1">Community Colleges</h4>
                       <p className="text-xs text-gfa-slate">{isEn ? "Mt.SAC & other film grads" : "Mt.SAC等项目每年结业学生"}</p>
                     </div>
                     <div className="text-xl font-serif text-gfa-inkBlack font-bold bg-gray-50 px-3 py-1 rounded-lg">~2,000+</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gfa-inkBlack text-white p-6 rounded-2xl text-center shadow-lg">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-1 text-[#C9A84C]">{isEn ? "California Annual Total" : "加州全州合计每年进入市场的影视毕业生"}</p>
                <div className="text-4xl md:text-5xl font-bold font-serif text-white">5,000<span className="text-[#C9A84C]">+</span></div>
              </div>
            </div>

            {/* Pain Points */}
            <div className="flex flex-col gap-4 h-full">
              <div className="bg-white p-5 md:p-6 rounded-2xl border-l-4 border-l-[#8B0000] shadow-sm flex-1 flex flex-col justify-center">
                <h4 className="text-base font-bold font-serif text-gfa-inkBlack mb-1">{isEn ? "Drastically Reduced Jobs" : "行业岗位大幅减少"}</h4>
                <p className="text-xs md:text-sm font-light text-gfa-slate leading-relaxed">
                  {isEn 
                    ? "In 2024, Los Angeles only had 7,716 on-location shoot days left, plummeting 58% from the 2021 peak. Newcomers have almost zero opportunities." 
                    : "2024年洛杉矶仅剩7,716个实地拍摄天数，较2021年峰值暴跌58%。每个岗位竞争者激增，新人几乎没有机会。"}
                </p>
              </div>

              <div className="bg-white p-5 md:p-6 rounded-2xl border-l-4 border-l-gfa-inkBlack shadow-sm flex-1 flex flex-col justify-center">
                <h4 className="text-base font-bold font-serif text-gfa-inkBlack mb-1">{isEn ? "No Professional Gear" : "没有专业设备"}</h4>
                <p className="text-xs md:text-sm font-light text-gfa-slate leading-relaxed">
                  {isEn 
                    ? "Professional camera packages rent for hundreds daily. No gear means no portfolio, and no portfolio means no job—a deadly cycle for grads." 
                    : "专业摄影机日租金数百美元，刚毕业的学生根本负担不起。没有作品就没有工作，没有设备就没有作品——死循环。"}
                </p>
              </div>

              <div className="bg-white p-5 md:p-6 rounded-2xl border-l-4 border-l-gfa-inkBlack shadow-sm flex-1 flex flex-col justify-center">
                <h4 className="text-base font-bold font-serif text-gfa-inkBlack mb-1">{isEn ? "No Industry Network" : "没有行业人脉"}</h4>
                <p className="text-xs md:text-sm font-light text-gfa-slate leading-relaxed">
                  {isEn 
                    ? "Hollywood heavily relies on referrals. Outsiders, immigrants, and low-income grads have almost zero channels to enter." 
                    : "好莱坞高度依赖人脉推荐。外人、移民、低收入背景的毕业生，几乎没有进入这个圈子的渠道。"}
                </p>
              </div>

              <div className="bg-white p-5 md:p-6 rounded-2xl border-l-4 border-l-gfa-inkBlack shadow-sm flex-1 flex flex-col justify-center">
                <h4 className="text-base font-bold font-serif text-gfa-inkBlack mb-1">{isEn ? "Low Salary & High Debt" : "薪资极低与高负债"}</h4>
                <p className="text-xs md:text-sm font-light text-gfa-slate leading-relaxed">
                  {isEn 
                    ? "Average starting salaries range from $33,993 to $37,671, while tuitions hit $50K-$100K annually. Massive debt with no job prospects." 
                    : "初阶岗位起薪极低，而学费动辄$50K-$100K/年，债务沉重却找不到工作。"}
                </p>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-2xl border-l-4 border-l-[#C9A84C] shadow-sm flex-1 flex flex-col justify-center">
                <h4 className="text-base font-bold font-serif text-gfa-inkBlack mb-1">{isEn ? "Diversity Challenges" : "多元背景者进入劣势"}</h4>
                <p className="text-xs md:text-sm font-light text-gfa-slate leading-relaxed">
                  {isEn 
                    ? "Minority, immigrant, and low-income grads lack social capital and industry ties, putting them at an extreme disadvantage." 
                    : "少数族裔、移民、低收入家庭的毕业生缺乏社会资本和行业关系，在市场中处于极度劣势。"}
                </p>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="mt-12 bg-gfa-inkBlack p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A84C]/5 rounded-bl-[100px] pointer-events-none"></div>
            
            <h3 className="text-xl md:text-2xl font-bold font-serif text-[#C9A84C] mb-6">
              {isEn ? "What this means for GFA — The Massive Service Gap" : "这对GFA意味着什么 — 巨大的服务缺口"}
            </h3>
            
            <ul className="space-y-4 text-white/90 font-light text-sm leading-relaxed">
              <li className="flex gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0"></div>
                 <p>{isEn ? "5,000+ film grads flood the California market annually, while industry jobs drastically shrink." : "每年5,000+加州影视毕业生涌入市场，行业岗位却在持续减少。"}</p>
              </li>
              <li className="flex gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0"></div>
                 <p>{isEn ? "The 10.9% unemployment rate signals that employment aid is needed now more than ever." : "10.9%的行业失业率说明：需要就业扶持的人比任何时候都多。"}</p>
              </li>
              <li className="flex gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 shrink-0"></div>
                 <p>{isEn ? "Existing support orgs (like MPTF) primarily serve industry veterans, leaving fresh graduates absolutely no dedicated support pipeline." : "现有的支持机构（如MPTF等）主要服务老从业者，新毕业生几乎没有专属支持。"}</p>
              </li>
              <li className="flex gap-4 items-center pt-4 border-t border-white/10">
                 <div className="w-2 h-2 rounded-full bg-white mt-1 shrink-0"></div>
                 <p className="font-bold text-white text-sm md:text-base italic tracking-wide">{isEn ? "This is the core foundation for GFA's funding logic: Filling a real, data-verifiable void in the community." : "这是GFA最强的基金申请理由：填补一个真实存在、数据可证明的服务空白。"}</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions / Core Mission */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack leading-tight">
              {isEn ? "GFA's Concrete Solutions" : "GFA能解决的具体痛点"}
              <br/>
              <span className="text-[#C9A84C] text-2xl md:text-3xl">{isEn ? "Breaking the 4 Critical Industry Barriers" : "打破好莱坞四大核心壁垒"}</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gfa-border p-8 rounded-3xl relative shadow-sm hover:shadow-md hover:border-[#C9A84C] transition-all group">
               <div className="text-[#C9A84C] font-bold uppercase tracking-widest text-[10px] mb-3">Equipment Barrier</div>
               <h3 className="text-lg md:text-xl font-bold text-gfa-inkBlack font-serif mb-3 border-b border-gfa-border pb-3 group-hover:border-[#C9A84C] transition-colors">
                 {isEn ? "Equipment Access" : "设备壁垒"}
               </h3>
               <p className="text-gfa-slate font-light leading-relaxed text-sm">
                 {isEn 
                   ? "Blackmagic Design partnership grants access to professional camera packages. We provide 100% free rentals, allowing grads to complete their first industry-standard feature without crippling debt." 
                   : "基于Blackmagic Design等品牌的合作设备库，我们提供100%免费借用，让毕业生无需高昂负债即可利用专业级电影机完成第一部行业标准的独立长片。"}
               </p>
            </div>

            <div className="bg-white border border-gfa-border p-8 rounded-3xl relative shadow-sm hover:shadow-md hover:border-[#C9A84C] transition-all group">
               <div className="text-[#C9A84C] font-bold uppercase tracking-widest text-[10px] mb-3">Network Barrier</div>
               <h3 className="text-lg md:text-xl font-bold text-gfa-inkBlack font-serif mb-3 border-b border-gfa-border pb-3 group-hover:border-[#C9A84C] transition-colors">
                 {isEn ? "Industry Mentorship" : "人脉壁垒"}
               </h3>
               <p className="text-gfa-slate font-light leading-relaxed text-sm">
                 {isEn 
                   ? "Our robust 1-on-1 Hollywood mentor network matches newcomers with veteran filmmakers, granting outsiders physical and social access to elite industry circles." 
                   : "构建强大的好莱坞导师网络，实行一对一精准匹配。我们致力于帮助外来者和处于极度劣势地位的毕业生打破圈层，真正进入核心行业社交圈。"}
               </p>
            </div>

            <div className="bg-white border border-gfa-border p-8 rounded-3xl relative shadow-sm hover:shadow-md hover:border-[#C9A84C] transition-all group">
               <div className="text-[#C9A84C] font-bold uppercase tracking-widest text-[10px] mb-3">Distribution Barrier</div>
               <h3 className="text-lg md:text-xl font-bold text-gfa-inkBlack font-serif mb-3 border-b border-gfa-border pb-3 group-hover:border-[#C9A84C] transition-colors">
                 {isEn ? "Platform Distribution" : "发行壁垒"}
               </h3>
               <p className="text-gfa-slate font-light leading-relaxed text-sm">
                 {isEn 
                   ? "We actively establish visibility by helping youth and graduate projects secure distribution pipelines into massive global platforms like Amazon Prime, Tubi, and beyond." 
                   : "我们通过直接的发行管道，协助青年创作者的影视作品成功进入Amazon Prime、Tubi等全球性流媒体平台，在海量受众前建立作品可见度。"}
               </p>
            </div>

            <div className="bg-white border border-gfa-border p-8 rounded-3xl relative shadow-sm hover:shadow-md hover:border-[#C9A84C] transition-all group">
               <div className="text-[#C9A84C] font-bold uppercase tracking-widest text-[10px] mb-3">Funding Barrier</div>
               <h3 className="text-lg md:text-xl font-bold text-gfa-inkBlack font-serif mb-3 border-b border-gfa-border pb-3 group-hover:border-[#C9A84C] transition-colors">
                 {isEn ? "Grant Assistance" : "资金壁垒"}
               </h3>
               <p className="text-gfa-slate font-light leading-relaxed text-sm">
                 {isEn 
                   ? "Extensive 1-on-1 grant application coaching. We guide independent graduates to secure public arts funding from the NEA, California Arts Council, and private endowments." 
                   : "提供专业的基金申请辅导培训。我们帮助独立电影毕业生撰写标书，以获取NEA、加州艺术委员会及多项私人艺术基金会的资金支持。"}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-20 bg-[#F5F2EE]">
        <div className="container-gfa px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack leading-tight">
              {isEn ? "Our Support and Youth Training Programs" : "我们的扶持和青少年培养计划"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 - Core */}
            <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-[#C9A84C] relative transform md:-translate-y-4 transition-transform hover:-translate-y-6 duration-300">
              <div className="absolute top-0 right-0 bg-[#C9A84C] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl rounded-tr-3xl">
                CORE PROGRAM
              </div>
              <div className="w-14 h-14 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#C9A84C]">
                <Video className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Filmmaker Career Support" : "新电影人就业扶持"}</h3>
              <h4 className="text-sm font-bold text-[#C9A84C] uppercase tracking-wider mb-4">Filmmaker Support</h4>
              <p className="text-gfa-slate font-light mb-8 flex-grow">
                {isEn 
                  ? "Equipment rentals, mentor matching, film distribution, grant application guidance, and career networking." 
                  : "设备借用、导师对接、作品发行、基金申请辅导、就业推荐网络。"}
              </p>
              <Link to="/filmmaker-support" className="inline-flex items-center gap-2 text-gfa-inkBlack font-bold uppercase tracking-widest text-sm hover:text-[#C9A84C] transition-colors mt-auto">
                {isEn ? "Learn More" : "了解详情"} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gfa-inkBlack">
                <UsersRound className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Youth Film Program" : "儿童与青少年计划"}</h3>
              <h4 className="text-sm font-bold text-[#C9A84C] uppercase tracking-wider mb-4">Youth Programs</h4>
              <p className="text-gfa-slate font-light mb-8 flex-grow">
                {isEn 
                  ? "Summer camps for ages 6-17, comprehensive children's film production projects, and talent competitions." 
                  : "6-17岁影视夏令营、儿童电影制作项目、才艺大赛报名。"}
              </p>
              <Link to="/youth-programs" className="inline-flex items-center gap-2 text-gfa-inkBlack font-bold uppercase tracking-widest text-sm hover:text-[#C9A84C] transition-colors mt-auto">
                {isEn ? "Learn More" : "了解详情"} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gfa-inkBlack">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Family Career Guide" : "家长艺术规划指南"}</h3>
              <h4 className="text-sm font-bold text-[#C9A84C] uppercase tracking-wider mb-4">Family Guide</h4>
              <p className="text-gfa-slate font-light mb-8 flex-grow">
                {isEn 
                  ? "Helping parents navigate the film industry and building clear, actionable career paths for their children." 
                  : "帮助家长了解影视行业，为孩子规划清晰的艺术职业成长路径。"}
              </p>
              <Link to="/family-guide" className="inline-flex items-center gap-2 text-gfa-inkBlack font-bold uppercase tracking-widest text-sm hover:text-[#C9A84C] transition-colors mt-auto">
                {isEn ? "Learn More" : "了解详情"} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Path */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="container-gfa px-4">
          <div className="text-center mb-12">
            <h2 className="text-[10px] font-bold text-[#C9A84C] uppercase tracking-[0.3em] mb-2">
              From Dream to Career — GFA at Every Stage
            </h2>
            <h3 className="text-2xl md:text-4xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "From Dream to Career" : "从梦想到职业，GFA在每一步"}
            </h3>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-[#C9A84C] to-gray-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {/* Stage 1 */}
              <div className="bg-white border md:border-none md:bg-transparent rounded-2xl p-6 text-center shadow-sm lg:shadow-none relative group">
                <div className="w-12 h-12 bg-gray-50 border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-gfa-inkBlack font-bold group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C] group-hover:text-white transition-colors">1</div>
                <h4 className="font-bold text-lg mb-1">{isEn ? "Ages 6-10" : "6-10岁：发现电影"}</h4>
                <div className="text-sm text-[#C9A84C] font-bold mb-3">{isEn ? "Discover Film" : "夏令营 · 社区放映"}</div>
                <p className="text-xs text-gfa-slate leading-relaxed">
                  {isEn ? "Summer Camps • Community Screenings" : ""}
                </p>
              </div>
              
              {/* Stage 2 */}
              <div className="bg-white border md:border-none md:bg-transparent rounded-2xl p-6 text-center shadow-sm lg:shadow-none relative group">
                <div className="w-12 h-12 bg-gray-50 border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-gfa-inkBlack font-bold group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C] group-hover:text-white transition-colors">2</div>
                <h4 className="font-bold text-lg mb-1">{isEn ? "Ages 11-14" : "11-14岁：学习创作"}</h4>
                <div className="text-sm text-[#C9A84C] font-bold mb-3">{isEn ? "Learn Creation" : "短片制作 · 才艺大赛"}</div>
                <p className="text-xs text-gfa-slate leading-relaxed">
                  {isEn ? "Short Films • Talent Competitions" : ""}
                </p>
              </div>

              {/* Stage 3 */}
              <div className="bg-white border md:border-none md:bg-transparent rounded-2xl p-6 text-center shadow-sm lg:shadow-none relative group">
                <div className="w-12 h-12 bg-gray-50 border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-gfa-inkBlack font-bold group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C] group-hover:text-white transition-colors">3</div>
                <h4 className="font-bold text-lg mb-1">{isEn ? "Ages 15-18" : "15-18岁：专业训练"}</h4>
                <div className="text-sm text-[#C9A84C] font-bold mb-3">{isEn ? "Pro Training" : "好莱坞培训 · AI影视"}</div>
                <p className="text-xs text-gfa-slate leading-relaxed">
                  {isEn ? "Hollywood Training • AI Filmmaking" : ""}
                </p>
              </div>

              {/* Stage 4 */}
              <div className="bg-white border md:border-none md:bg-transparent rounded-2xl p-6 text-center shadow-sm lg:shadow-none relative group">
                <div className="w-12 h-12 bg-white border-2 border-[#C9A84C] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C9A84C] font-bold group-hover:bg-[#C9A84C] group-hover:text-white transition-colors">4</div>
                <h4 className="font-bold text-lg mb-1">{isEn ? "Graduation" : "毕业阶段：进入行业"}</h4>
                <div className="text-sm text-[#C9A84C] font-bold mb-3">{isEn ? "Break Into Industry" : "就业扶持 · 设备资源"}</div>
                <p className="text-xs text-gfa-slate leading-relaxed">
                  {isEn ? "Career Support • Gear Access" : ""}
                </p>
              </div>

              {/* Stage 5 */}
              <div className="bg-white border md:border-none md:bg-transparent rounded-2xl p-6 text-center shadow-sm lg:shadow-none relative group">
                <div className="w-12 h-12 bg-gray-50 border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-gfa-inkBlack font-bold group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C] group-hover:text-white transition-colors">5</div>
                <h4 className="font-bold text-lg mb-1">{isEn ? "Professional" : "职业阶段：反哺社区"}</h4>
                <div className="text-sm text-gfa-inkBlack font-bold mb-3">{isEn ? "Give Back" : "成为导师 · 支持下一代"}</div>
                <p className="text-xs text-gfa-slate leading-relaxed">
                  {isEn ? "Become a Mentor • Support Next Gen" : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Flagship Events */}
      <section className="py-16 md:py-20 bg-[#F5F2EE]">
        <div className="container-gfa px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack leading-tight">
              {isEn ? "Awards & Events" : "奖项与赛事"}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Awards */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl group border border-gray-100 flex flex-col h-full">
              <div className="h-72 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop" alt="Golden Feather Awards" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold font-serif text-white mb-2">{isEn ? "Golden Feather Awards" : "金羽奖"}</h3>
                  <p className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase">{isEn ? "Hollywood's Premier Youth Film Awards" : "好莱坞最受期待的青年电影人颁奖礼"}</p>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gfa-slate font-light leading-relaxed mb-8 flex-grow">
                  {isEn 
                    ? "Hosted annually in Hollywood, honoring young creators showing exceptional cinematic talent. In 2025, 18 remarkable youths received awards." 
                    : "每年在好莱坞举办，表彰在电影艺术领域展现卓越才华的青年创作者。2025年，18位青少年在此获奖。"}
                </p>
                <Link to="/awards" className="inline-flex items-center justify-center gap-2 border-2 border-gfa-inkBlack text-gfa-inkBlack hover:bg-gfa-inkBlack hover:text-white font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-colors w-full">
                  {isEn ? "About the Awards" : "了解金羽奖"}
                </Link>
              </div>
            </div>

            {/* Competition */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl group border border-gray-100 flex flex-col h-full">
              <div className="h-72 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop" alt="Dolby Theatre" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold font-serif text-white mb-2">{isEn ? "Global Youth Talent Competition" : "2026全球青少年才艺大赛"}</h3>
                  <p className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase">{isEn ? "2026 Grand Finale at Dolby Theatre" : "全球青少年才艺大赛"}</p>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-gfa-slate font-light leading-relaxed mb-8 flex-grow">
                  {isEn 
                    ? "The first simultaneous US-China youth film and talent competition. The 2026 Grand Finale will light up the iconic Dolby Theatre in Hollywood." 
                    : "首个中美同步举办的青少年影视才艺大赛，2026年决赛登陆好莱坞 Dolby Theatre。"}
                </p>
                <Link to="/competition" className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] text-gfa-inkBlack hover:bg-[#b09241] font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full transition-colors w-full">
                  {isEn ? "Register Now" : "立即报名"}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 md:py-20 bg-[#EAE2D6] relative overflow-hidden" id="donate-section">
         <div className="container-gfa max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-10 italic max-w-4xl mx-auto leading-relaxed">
               {isEn 
                 ? `"A talented filmmaker shouldn't have to give up because they can't afford the gear."` 
                 : `"一个有才华的毕业生，不应该因为买不起摄影机而放弃成为导演的梦想。"`}
            </h2>
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-[#C9A84C]/20 text-left max-w-4xl mx-auto mb-16">
               <p className="text-lg md:text-xl text-gfa-inkBlack font-serif mb-6 text-center">
                 {isEn ? "Your donation directly supports:" : "你的捐款，直接支持："}
               </p>
               <ul className="text-gfa-slate font-light space-y-4 text-sm md:text-base max-w-3xl mx-auto">
                 <li className="flex items-start gap-4">
                   <Star className="w-6 h-6 text-[#C9A84C] shrink-0 mt-1" />
                   {isEn ? "Subsidizing professional cinema camera packages for independent debut features." : "全额资助青年导演首部独立长片的专业级电影机、灯光及录音设备支持计划"}
                 </li>
                 <li className="flex items-start gap-4">
                   <Star className="w-6 h-6 text-[#C9A84C] shrink-0 mt-1" />
                   {isEn ? "Funding specialized cinematic arts scholarships for underprivileged creative youth." : "设立面向全球低收入贫困家庭青少年群体的专项电影创作夏令营公益奖学金"}
                 </li>
                 <li className="flex items-start gap-4">
                   <Star className="w-6 h-6 text-[#C9A84C] shrink-0 mt-1" />
                   {isEn ? "Capitalizing final post-production finishing and global theatrical distribution pipelines." : "注资协助优秀毕业作品及青年独立电影的后期制作流完片，并打通全球院线与流媒体发行管道"}
                 </li>
               </ul>
            </div>
            
            <div className="max-w-xl mx-auto mt-12 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-[#C9A84C]/20 shadow-md">
               <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-4">
                 {isEn ? "Financial & Equipment Support" : "资金与设备捐赠"}
               </h3>
               <p className="text-sm text-gfa-slate mb-8">
                 {isEn 
                  ? "Help us fund scholarships, production grants, or gear." 
                  : "您的资金或设备将直接用于奖学金、青年项目资助及影展运营。"}
               </p>
               <Link 
                  to="/donate"
                  className="inline-flex justify-center items-center w-full bg-[#C9A84C] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#b08e3d] hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-200"
               >
                  {isEn ? "Go to Donation Page" : "前往捐赠页面"}
               </Link>
            </div>
         </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-white border-t border-gfa-border overflow-hidden">
         <div className="container-gfa text-center mb-10">
            <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2">
              {isEn ? "Our Global Partners & Sponsors" : "全球赞助与合作伙伴"}
            </h2>
         </div>
         <div className="relative w-full max-w-7xl mx-auto overflow-hidden flex items-center">
            {/* Left and Right Fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-marquee pause-animation items-center">
              {/* First Set of Logos */}
              <div className="flex items-center justify-around min-w-[100vw] shrink-0 gap-12 md:gap-24 px-4 md:px-8">
                 <div className="text-xl font-bold italic tracking-tighter shrink-0 text-gfa-inkBlack">Blackmagic Design</div>
                 <div className="text-2xl font-serif shrink-0 text-gfa-inkBlack">Harmony Gold</div>
                 <div className="text-xl font-bold uppercase tracking-widest text-center shrink-0 text-gfa-inkBlack">City of<br/>Pomona</div>
                 <img src="https://i.ibb.co/4RNsSNYg/AI-8707697f3ab3980df8ccc03824c49fc3-3804x2800.png" alt="Sponsor 1" className="h-12 md:h-16 object-contain transition-all duration-300" />
                 <img src="https://i.ibb.co/Ldwg7vRN/4a2ec28a2689027a04641d8a150fda3f.png" alt="Sponsor 2" className="h-12 md:h-16 object-contain transition-all duration-300" />
                 <img src="https://i.ibb.co/XBZ4F7j/Alvantor-new-logo-2020-1.png" alt="Sponsor 3" className="h-12 md:h-16 object-contain transition-all duration-300" />
                 <img src="https://i.ibb.co/cSVbb7ZM/list-2.png" alt="Sponsor 4" className="h-12 md:h-16 object-contain transition-all duration-300" />
                 <img src="https://i.ibb.co/whJfbzKn/ALT-LOGO-2400x1800-2.jpg" alt="Sponsor 5" className="h-12 md:h-16 object-contain transition-all duration-300" />
              </div>
              
              {/* Second Set of Logos (Duplicate for infinite scroll) */}
              <div className="flex items-center justify-around min-w-[100vw] shrink-0 gap-12 md:gap-24 px-4 md:px-8">
                 <div className="text-xl font-bold italic tracking-tighter shrink-0 text-gfa-inkBlack">Blackmagic Design</div>
                 <div className="text-2xl font-serif shrink-0 text-gfa-inkBlack">Harmony Gold</div>
                 <div className="text-xl font-bold uppercase tracking-widest text-center shrink-0 text-gfa-inkBlack">City of<br/>Pomona</div>
                 <img src="https://i.ibb.co/4RNsSNYg/AI-8707697f3ab3980df8ccc03824c49fc3-3804x2800.png" alt="Sponsor 1" className="h-12 md:h-16 object-contain transition-all duration-300" />
                 <img src="https://i.ibb.co/Ldwg7vRN/4a2ec28a2689027a04641d8a150fda3f.png" alt="Sponsor 2" className="h-12 md:h-16 object-contain transition-all duration-300" />
                 <img src="https://i.ibb.co/XBZ4F7j/Alvantor-new-logo-2020-1.png" alt="Sponsor 3" className="h-12 md:h-16 object-contain transition-all duration-300" />
                 <img src="https://i.ibb.co/cSVbb7ZM/list-2.png" alt="Sponsor 4" className="h-12 md:h-16 object-contain transition-all duration-300" />
                 <img src="https://i.ibb.co/whJfbzKn/ALT-LOGO-2400x1800-2.jpg" alt="Sponsor 5" className="h-12 md:h-16 object-contain transition-all duration-300" />
              </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Home;
