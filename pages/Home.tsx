import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import NumberCounter from '../components/NumberCounter.tsx';
import { PlayCircle, ArrowRight, Heart, Star, Film, Award, MapPin, PenTool, MonitorPlay, Video, Users, UsersRound, ChevronDown } from 'lucide-react';

const Home: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans">
      <SEO title="Home | Global Film Alliance" />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] max-h-[900px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack group">
        <div className="absolute inset-0 z-0 bg-black">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity transform group-hover:scale-105 transition-transform duration-[20s]"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-young-filmmaker-setting-up-a-camera-while-directing-a-scene-42999-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/70 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            <Link to="/filmmaker-support" className="group w-full sm:w-auto bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 shadow-[0_4px_20px_rgba(201,168,76,0.4)] text-center inline-flex justify-center items-center gap-3">
              {isEn ? "Apply for Support" : "申请就业支持"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/donate" className="w-full sm:w-auto bg-transparent hover:bg-white text-white hover:text-black border-2 border-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 text-center inline-flex justify-center items-center gap-3">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" /> {isEn ? "Donate Now" : "立即捐款"}
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
      <section className="py-16 md:py-24 relative overflow-hidden bg-gfa-inkBlack border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/bgKF8pwy/Gemini-Generated-Image-jtsengjtsengjtse.png" 
            alt="Film reel background" 
            className="w-full h-full object-cover opacity-10 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gfa-inkBlack/50 via-gfa-inkBlack to-gfa-inkBlack"></div>
        </div>

        <div className="container-gfa relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight mb-4">
              {isEn ? "California Film Industry Crisis: 2024-2026" : "加州影视就业危机 — 2024-2026现状"}
            </h2>
            <p className="text-[#C9A84C] text-base md:text-xl font-light max-w-4xl mx-auto leading-relaxed">
              {isEn 
                ? "This is the primary reason for GFA's existence: The industry is undergoing its most severe employment crisis in recent years, with new graduates facing unprecedented challenges." 
                : "这是GFA存在最重要的理由：行业正在经历近年来最严重的就业危机，新毕业生面临前所未有的困境。"}
            </p>
          </div>

          {/* Macro Data Map */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#C9A84C] mb-3">
                <NumberCounter end={42} duration={2000} suffix="K" />
              </div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">{isEn ? "Lost Jobs in LA" : "洛杉矶流失岗位"}</p>
              <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">2022 - 2024</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#C9A84C] mb-3">
                <NumberCounter end={10.9} duration={2000} decimals={1} suffix="%" />
              </div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">{isEn ? "Unemployment Rate" : "影视行业失业率"}</p>
              <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">{isEn ? "2.5x National Avg" : "全国平均的2.5倍"}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#C9A84C] mb-3">
                <NumberCounter end={-22} duration={2000} suffix="%" />
              </div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">{isEn ? "On-Location Shoots" : "洛杉矶实地拍摄天数"}</p>
              <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">{isEn ? "Q1 2025" : "2025年 Q1"}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors">
              <div className="text-4xl md:text-5xl font-bold font-serif text-[#C9A84C] mb-3">
                <NumberCounter end={-25} duration={2000} suffix="%" />
              </div>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-1">{isEn ? "Industry Emp Rate" : "全行业总体就业率"}</p>
              <p className="text-[10px] font-bold text-white/50 uppercase tracking-[0.2em]">{isEn ? "Below 2022 Peak" : "低于2022年峰值"}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Graduates Data */}
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white/10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl md:text-3xl font-bold font-serif text-white mb-6">
                  {isEn ? "Annual Graduates Output" : "加州主要电影学院毕业生数量 (每年)"}
                </h3>
                
                <div className="divide-y divide-white/10 mt-6">
                  <div className="py-5 flex justify-between items-center group">
                     <div>
                       <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">USC SCA</h4>
                       <p className="text-xs text-white/60 font-light">{isEn ? "Global Top Film School" : "全球顶尖电影学院"}</p>
                     </div>
                     <div className="text-xl font-serif text-[#C9A84C] font-bold">
                       <NumberCounter end={426} duration={2000} prefix="~" />
                     </div>
                  </div>
                  
                  <div className="py-5 flex justify-between items-center group">
                     <div>
                       <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">UCLA TFT</h4>
                       <p className="text-xs text-white/60 font-light">{isEn ? "Top Public Institution" : "公立顶尖院校"}</p>
                     </div>
                     <div className="text-xl font-serif text-[#C9A84C] font-bold">
                       <NumberCounter end={200} duration={2000} prefix="~" suffix="+" />
                     </div>
                  </div>

                  <div className="py-5 flex justify-between items-center group">
                     <div>
                       <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">LMU / Chapman</h4>
                       <p className="text-xs text-white/60 font-light">{isEn ? "LA Region Programs" : "洛杉矶地区两校合计"}</p>
                     </div>
                     <div className="text-xl font-serif text-[#C9A84C] font-bold">
                       <NumberCounter end={300} duration={2000} prefix="~" suffix="+" />
                     </div>
                  </div>

                  <div className="py-5 flex justify-between items-center group">
                     <div>
                       <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Cal State System</h4>
                       <p className="text-xs text-white/60 font-light">{isEn ? "All CSU Film Programs" : "全加州CSU院校影视相关专业"}</p>
                     </div>
                     <div className="text-xl font-serif text-[#C9A84C] font-bold">
                       <NumberCounter end={1000} duration={2000} prefix="~" suffix="+" useCommas={true} />
                     </div>
                  </div>

                  <div className="py-5 flex justify-between items-center group flex-grow">
                     <div>
                       <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Community Colleges</h4>
                       <p className="text-xs text-white/60 font-light">{isEn ? "Mt.SAC & other film grads" : "Mt.SAC等项目每年结业学生"}</p>
                     </div>
                     <div className="text-xl font-serif text-[#C9A84C] font-bold">
                       <NumberCounter end={2000} duration={2000} prefix="~" suffix="+" useCommas={true} />
                     </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-black to-[#0D1B2A] p-6 rounded-2xl flex justify-between items-center border border-[#C9A84C]/30 shadow-[0_0_30px_rgba(201,168,76,0.1)]">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#C9A84C] leading-loose max-w-[60%]">{isEn ? "California Annual Total" : "加州全州合计每年进入市场的影视毕业生"}</p>
                <div className="text-4xl md:text-5xl font-bold font-serif text-white">
                  <NumberCounter end={5000} duration={2500} useCommas={true} />
                  <span className="text-[#C9A84C]">+</span>
                </div>
              </div>
            </div>

            {/* Pain Points */}
            <div className="flex flex-col gap-4 h-full">
              <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border-l-4 border-l-[#8B0000] border border-white/5 flex-1 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
                <h4 className="text-lg font-bold font-serif text-white mb-2">{isEn ? "Drastically Reduced Jobs" : "行业岗位大幅减少"}</h4>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  {isEn 
                    ? "In 2024, Los Angeles only had 7,716 on-location shoot days left, plummeting 58% from the 2021 peak. Newcomers have almost zero opportunities." 
                    : "2024年洛杉矶仅剩7,716个实地拍摄天数，较2021年峰值暴跌58%。每个岗位竞争者激增，新人几乎没有机会。"}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border-l-4 border-l-white/20 border border-white/5 flex-1 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
                <h4 className="text-lg font-bold font-serif text-white mb-2">{isEn ? "No Professional Gear" : "没有专业设备"}</h4>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  {isEn 
                    ? "Professional camera packages rent for hundreds daily. No gear means no portfolio, and no portfolio means no job—a deadly cycle for grads." 
                    : "专业摄影机日租金数百美元，刚毕业的学生根本负担不起。没有作品就没有工作，没有设备就没有作品——死循环。"}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border-l-4 border-l-white/20 border border-white/5 flex-1 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
                <h4 className="text-lg font-bold font-serif text-white mb-2">{isEn ? "No Industry Network" : "没有行业人脉"}</h4>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  {isEn 
                    ? "Hollywood heavily relies on referrals. Outsiders, immigrants, and low-income grads have almost zero channels to enter." 
                    : "好莱坞高度依赖人脉推荐。外人、移民、低收入背景的毕业生，几乎没有进入这个圈子的渠道。"}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] border-l-4 border-l-[#C9A84C] border border-white/5 flex-1 flex flex-col justify-center transition-transform hover:-translate-y-1 duration-300">
                <h4 className="text-lg font-bold font-serif text-white mb-2">{isEn ? "Diversity Challenges" : "多元背景者进入劣势"}</h4>
                <p className="text-sm font-light text-white/70 leading-relaxed">
                  {isEn 
                    ? "Minority, immigrant, and low-income grads lack social capital and industry ties, putting them at an extreme disadvantage." 
                    : "少数族裔、移民、低收入家庭的毕业生缺乏社会资本和行业关系，在市场中处于极度劣势。"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-[#C9A84C]/10 border border-[#C9A84C]/30 p-8 md:p-12 rounded-[2rem] text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-sm">
             <h3 className="text-2xl md:text-3xl font-bold font-serif text-[#C9A84C] mb-6">
                {isEn ? "What this means for GFA — The Massive Service Gap" : "这对GFA意味着什么 — 巨大的服务缺口"}
             </h3>
             <p className="text-white font-light leading-relaxed text-lg italic">
                {isEn ? "Existing support orgs primarily serve industry veterans, leaving fresh graduates without dedicated support. Filling this verifiable void is our mission." : "现有的支持机构主要服务老从业者，新毕业生几乎没有专属支持。我们填补了这一真实存在的服务空白。"}
             </p>
          </div>
        </div>
      </section>

      {/* Solutions / Core Mission */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="container-gfa max-w-6xl mx-auto px-4 relative z-10">
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

      {/* Core Data Area / Impact */}
      <section className="py-16 md:py-20 bg-gfa-inkBlack relative overflow-hidden border-t-4 border-[#C9A84C]">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A84C] via-transparent to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight">
              {isEn ? "Our Growing Impact" : "我们的核心数据与影响力"}
            </h2>
            <div className="w-24 h-1 bg-[#C9A84C] mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            <div className="p-6">
              <div className="text-5xl md:text-6xl font-bold font-serif text-[#C9A84C] mb-2 drop-shadow-lg">
                <NumberCounter end={25} duration={2500} suffix="+" />
              </div>
              <p className="text-sm font-bold text-white uppercase tracking-wider">{isEn ? "Partner Talent Agencies" : "合作经纪公司"}</p>
            </div>
            
            <div className="p-6">
              <div className="text-5xl md:text-6xl font-bold font-serif text-[#C9A84C] mb-2 drop-shadow-lg">
                <NumberCounter end={120} duration={3000} suffix="+" />
              </div>
              <p className="text-sm font-bold text-white uppercase tracking-wider">{isEn ? "Films Produced & Supported" : "制作及支持的影视作品"}</p>
            </div>
            
            <div className="p-6">
              <div className="text-5xl md:text-6xl font-bold font-serif text-[#C9A84C] mb-2 drop-shadow-lg">
                <NumberCounter end={50} duration={2000} prefix="$" suffix="M" decimals={1} />
              </div>
              <p className="text-sm font-bold text-white uppercase tracking-wider">{isEn ? "Funding Facilitated" : "协助获取的各类资金"}</p>
            </div>
            
            <div className="p-6">
              <div className="text-5xl md:text-6xl font-bold font-serif text-[#C9A84C] mb-2 drop-shadow-lg">
                <NumberCounter end={15} duration={1500} useCommas={true} />
              </div>
              <p className="text-sm font-bold text-white uppercase tracking-wider">{isEn ? "Global Film Festivals" : "全球合作电影节"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack leading-tight">
              {isEn ? "Our Support & Programs" : "我们的扶持和青少年培养计划"}
            </h2>
            <p className="mt-4 text-gfa-slate max-w-2xl mx-auto text-lg">
              {isEn ? "We believe in hands-on experience, real opportunities, and a supportive community for all ages." : "我们坚信实践出真知，为所有年龄段创作者提供真实的机会和互助的社区环境。"}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Core */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border-2 border-[#C9A84C] relative group flex flex-col transform md:-translate-y-4 transition-transform hover:-translate-y-6 duration-300 h-full">
              <div className="absolute top-4 right-4 bg-[#C9A84C] text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full z-10 shadow-md">
                CORE PROGRAM
              </div>
              <div className="h-64 overflow-hidden relative">
                <img src="https://i.ibb.co/qLynYLfw/Chat-GPT-Image-2026-5-6-18-06-52.png" alt="Youth collaborating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                   <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
                      <Video className="w-6 h-6" />
                   </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-serif mb-2 text-gfa-inkBlack">{isEn ? "Filmmaker Career Support" : "新电影人就业扶持"}</h3>
                <h4 className="text-sm font-bold text-[#C9A84C] uppercase tracking-wider mb-4">Filmmaker Support</h4>
                <p className="text-gfa-slate font-light leading-relaxed mb-8 flex-grow">
                  {isEn 
                    ? "Equipment rentals, mentor matching, film distribution, grant application guidance, and career networking." 
                    : "设备借用、导师对接、作品发行、基金申请辅导、就业推荐网络。"}
                </p>
                <Link to="/filmmaker-support" className="inline-flex items-center gap-2 text-gfa-inkBlack font-bold uppercase tracking-widest text-sm hover:text-[#C9A84C] transition-colors mt-auto group/link">
                  {isEn ? "Learn More" : "了解详情"} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#C9A84C]/50 transition-all duration-300 flex flex-col group h-full">
              <div className="h-64 overflow-hidden relative">
                <img src="https://i.ibb.co/xSc1fNkg/Chat-GPT-Image-2026-5-6-18-06-00.png" alt="Youth filming outdoors" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                   <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
                      <UsersRound className="w-6 h-6" />
                   </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-serif mb-2 text-gfa-inkBlack">{isEn ? "Youth Film Program" : "儿童与青少年计划"}</h3>
                <h4 className="text-sm font-bold text-[#C9A84C] uppercase tracking-wider mb-4">Youth Programs</h4>
                <p className="text-gfa-slate font-light leading-relaxed mb-8 flex-grow">
                  {isEn 
                    ? "Summer camps for ages 6-17, comprehensive children's film production projects, and talent competitions." 
                    : "6-17岁影视夏令营、儿童电影制作项目、才艺大赛报名。"}
                </p>
                <Link to="/youth-programs" className="inline-flex items-center gap-2 text-gfa-inkBlack font-bold uppercase tracking-widest text-sm hover:text-[#C9A84C] transition-colors mt-auto group/link">
                  {isEn ? "Learn More" : "了解详情"} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#C9A84C]/50 transition-all duration-300 flex flex-col group h-full">
              <div className="h-64 overflow-hidden relative">
                <img src="https://i.ibb.co/gZ1HJdtB/Chat-GPT-Image-2026-5-6-18-08-23.png" alt="Kids looking into camera lens" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-6">
                   <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white">
                      <Users className="w-6 h-6" />
                   </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-serif mb-2 text-gfa-inkBlack">{isEn ? "Family Career Guide" : "家长艺术规划指南"}</h3>
                <h4 className="text-sm font-bold text-[#C9A84C] uppercase tracking-wider mb-4">Family Guide</h4>
                <p className="text-gfa-slate font-light leading-relaxed mb-8 flex-grow">
                  {isEn 
                    ? "Helping parents navigate the film industry and building clear, actionable career paths for their children." 
                    : "帮助家长了解影视行业，为孩子规划清晰的艺术职业成长路径。"}
                </p>
                <Link to="/family-guide" className="inline-flex items-center gap-2 text-gfa-inkBlack font-bold uppercase tracking-widest text-sm hover:text-[#C9A84C] transition-colors mt-auto group/link">
                  {isEn ? "Learn More" : "了解详情"} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
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
                <img src="https://i.ibb.co/1Gj2K8CX/d92babf9ca9b15b9fe754beaa383a6cf.jpg" alt="Golden Feather Awards" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
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
                <img src="https://i.ibb.co/S4Mb6TcN/24480b00-65a2-4468-8dc6-50aae205d0fa.png" alt="Golden Feather Awards Stage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
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
      <section className="py-16 md:py-24 bg-[#EAE2D6] relative overflow-hidden" id="donate-section">
         <div className="container-gfa max-w-7xl mx-auto px-4 relative z-10">
            <h2 className="text-2xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-12 italic text-center max-w-5xl mx-auto leading-relaxed">
               {isEn 
                 ? `"A talented filmmaker shouldn't have to give up because they can't afford the gear."` 
                 : `"一个有才华的毕业生，不应该因为买不起摄影机而放弃成为导演的梦想。"`}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Side */}
              <div className="relative h-full min-h-[400px] lg:min-h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                 <img src="https://i.ibb.co/VYRv0gbg/Chat-GPT-Image-2026-5-6-18-12-27.png" alt="Children with a camera" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-transparent to-transparent"></div>
                 <div className="absolute bottom-8 left-8 text-white">
                    <p className="font-bold text-lg">{isEn ? "Empowering the Next Generation" : "赋能下一代创作者"}</p>
                 </div>
              </div>
              
              {/* Content Side */}
              <div className="flex flex-col justify-center">
                <div className="bg-white/80 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-[#C9A84C]/20 shadow-xl mb-8">
                   <p className="text-xl md:text-2xl text-gfa-inkBlack font-serif mb-8 border-b border-gray-200 pb-4">
                     {isEn ? "Your donation directly supports:" : "您的捐款将直接用于："}
                   </p>
                   <ul className="text-gfa-slate font-light space-y-6 text-sm md:text-base">
                     <li className="flex items-start gap-4">
                       <Star className="w-6 h-6 text-[#C9A84C] shrink-0 mt-1" />
                       <span className="leading-relaxed">{isEn ? "Subsidizing professional cinema camera packages for independent debut features." : "全额资助青年导演首部独立长片的专业级电影机、灯光及录音设备支持计划。"}</span>
                     </li>
                     <li className="flex items-start gap-4">
                       <Star className="w-6 h-6 text-[#C9A84C] shrink-0 mt-1" />
                       <span className="leading-relaxed">{isEn ? "Funding specialized cinematic arts scholarships for underprivileged creative youth." : "设立面向全球低收入贫困家庭青少年群体的专项电影创作夏令营公益奖学金。"}</span>
                     </li>
                     <li className="flex items-start gap-4">
                       <Star className="w-6 h-6 text-[#C9A84C] shrink-0 mt-1" />
                       <span className="leading-relaxed">{isEn ? "Capitalizing final post-production finishing and global theatrical distribution pipelines." : "注资协助优秀毕业作品及青年独立电影的后期制作流完片，并打通全球院线与流媒体发行。"}</span>
                     </li>
                   </ul>
                </div>
                
                <div className="bg-gfa-inkBlack rounded-[2rem] p-8 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                   <div className="text-left w-full sm:w-auto">
                     <h3 className="text-xl font-bold font-serif text-white mb-2">
                       {isEn ? "Financial & Equipment Support" : "资金与设备捐赠"}
                     </h3>
                     <p className="text-sm text-white/70">
                       {isEn ? "Help us fund scholarships, production grants, or gear." : "资金或设备将直接用于青年项目资助。"}
                     </p>
                   </div>
                   <Link 
                      to="/donate"
                      className="shrink-0 bg-[#C9A84C] text-black px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(201,168,76,0.6)] transition-all duration-300"
                   >
                      {isEn ? "Donate Now" : "立即捐赠"}
                   </Link>
                </div>
              </div>
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
