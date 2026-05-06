import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Camera, Users, PlaySquare, FileText, Clapperboard, CheckCircle2, ArrowRight } from 'lucide-react';

const FilmmakerSupport: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans pb-24">
      <SEO title="Filmmaker Support | Global Film Alliance" />

      {/* Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2071&auto=format&fit=crop" 
            alt="Filmmaker on set" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            {isEn ? "You Have the Talent." : "你有才华，"}<br/>
            <span className="text-[#C9A84C]">{isEn ? "We'll Help You Get Through the Door." : "我们帮你打开那扇门。"}</span>
          </h1>
        </div>
      </section>

      {/* Intro Context */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-3xl mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl font-light text-gfa-slate leading-relaxed font-serif">
            {isEn 
              ? "Imagine a recent film school graduate. Their portfolio is flawless. They have straight A's. But they have zero industry connections, cannot afford camera rentals, and have no idea how to actually break into the business. That person's exact struggle—that invisible wall—is why GFA exists." 
              : "想象一个刚从电影学院毕业的人，作品集拿了满分。但他没有人脉，租不起昂贵的设备，甚至不知道该如何接到第一份工作。这个人的处境，以及横在他面前的那堵无形的墙，正是GFA存在的原因。"}
          </p>
        </div>
      </section>

      {/* Core Support Areas */}
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "How We Help You Break In" : "我们帮你解决什么"}
            </h2>
          </div>

          <div className="space-y-12">
            {/* Support 1 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 shrink-0">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#C9A84C]">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Free Pro Gear Access" : "专业设备免费借用"}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-4 rounded-xl text-sm font-light border border-red-100">
                  <strong className="font-bold">{isEn ? "The Barrier: " : "障碍："}</strong>
                  {isEn ? "Professional cinema cameras cost hundreds of dollars a day to rent. Recent grads simply can't afford it." : "专业摄影机一天租金数百美元，刚毕业的电影人根本负担不起。"}
                </div>
                <div className="bg-green-50 text-green-800 p-4 rounded-xl text-sm font-light border border-green-100">
                  <strong className="font-bold">{isEn ? "GFA Solution: " : "GFA方案："}</strong>
                  {isEn ? "Through our Blackmagic Design partnership, we offer pro-level cameras, lighting, and audio gear for free or at radically reduced costs." : "通过 Blackmagic Design 合作，提供专业级摄影机、灯光、收音设备免费或低价借用。"}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2">
                  {isEn ? "Details: Apply with your project plan. Upon approval, you can borrow gear for 2-4 weeks." : "具体说明：按项目申请，需提交作品计划，审核通过后可借用2-4周。"}
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{isEn ? "Apply for Gear" : "申请设备借用"}</button>
                </div>
              </div>
            </div>

            {/* Support 2 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 shrink-0">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#C9A84C]">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "1-on-1 Hollywood Mentorship" : "好莱坞导师一对一指导"}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-4 rounded-xl text-sm font-light border border-red-100">
                  <strong className="font-bold">{isEn ? "The Barrier: " : "障碍："}</strong>
                  {isEn ? "Hollywood runs on relationships. It is incredibly difficult for outsiders to penetrate the inner circle." : "好莱坞靠关系，外人很难进入核心圈子。"}
                </div>
                <div className="bg-green-50 text-green-800 p-4 rounded-xl text-sm font-light border border-green-100">
                  <strong className="font-bold">{isEn ? "GFA Solution: " : "GFA方案："}</strong>
                  {isEn ? "We match each applicant with an active industry mentor who provides one-on-one career guidance." : "为每位申请者匹配有好莱坞工业背景的导师，提供一对一职业指导。"}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2">
                  {isEn ? "Details: Mentors hail from studios, networks, and independent prod-cos. Expect at least 2 sessions per month." : "具体说明：导师来自制片公司、电视网、独立电影行业，每月至少2次指导。"}
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{isEn ? "Apply for Mentorship" : "申请导师匹配"}</button>
                </div>
              </div>
            </div>

            {/* Support 3 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 shrink-0">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#C9A84C]">
                  <PlaySquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Distribution & Festivals" : "作品发行与电影节申报"}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-4 rounded-xl text-sm font-light border border-red-100">
                  <strong className="font-bold">{isEn ? "The Barrier: " : "障碍："}</strong>
                  {isEn ? "You made a great film, but have no idea how to get the world to actually see it." : "有好作品，但不知道如何让世界看到。"}
                </div>
                <div className="bg-green-50 text-green-800 p-4 rounded-xl text-sm font-light border border-green-100">
                  <strong className="font-bold">{isEn ? "GFA Solution: " : "GFA方案："}</strong>
                  {isEn ? "We help place your work on streaming platforms and guide your festival submission strategy." : "协助作品进入流媒体平台发行，指导电影节申报策略。"}
                </div>
                <p className="text-sm text-gfa-slate font-light pt-2">
                  {isEn ? "Details: We've helped films onto Amazon Prime, Tubi, and YouTube, alongside submissions to Sundance, SXSW, and AFI." : "具体说明：GFA已有作品在Amazon Prime、Tubi、YouTube发行，协助申报 Sundance、SXSW、AFI 等主要电影节。"}
                </p>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{isEn ? "Apply for Distribution" : "申请发行支持"}</button>
                </div>
              </div>
            </div>

            {/* Support 4 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 shrink-0">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#C9A84C]">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Grant Application Coaching" : "电影基金申请辅导"}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-4 rounded-xl text-sm font-light border border-red-100">
                  <strong className="font-bold">{isEn ? "The Barrier: " : "障碍："}</strong>
                  {isEn ? "You don't know where the funding is, or how to write the complicated paperwork to get it." : "不知道哪里有基金，申请文件复杂不知道怎么写。"}
                </div>
                <div className="bg-green-50 text-green-800 p-4 rounded-xl text-sm font-light border border-green-100">
                  <strong className="font-bold">{isEn ? "GFA Solution: " : "GFA方案："}</strong>
                  {isEn ? "We provide a database of film grants, review your application materials, and share proven winning strategies." : "提供电影基金信息库，协助撰写和审阅申请文件，分享成功申请经验。"}
                </div>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{isEn ? "Book Consultation" : "预约基金咨询"}</button>
                </div>
              </div>
            </div>

            {/* Support 5 */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 shrink-0">
                <div className="w-16 h-16 bg-[#C9A84C]/10 rounded-2xl flex items-center justify-center mb-6 text-[#C9A84C]">
                  <Clapperboard className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">{isEn ? "Real On-Set Experience" : "真实片场实战机会"}</h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center space-y-4">
                <div className="bg-red-50 text-red-800 p-4 rounded-xl text-sm font-light border border-red-100">
                  <strong className="font-bold">{isEn ? "The Barrier: " : "障碍："}</strong>
                  {isEn ? "A blank resume. Without actual set experience, professional teams won't hire you." : "简历空白，没有真实片场经验无法进入专业团队。"}
                </div>
                <div className="bg-green-50 text-green-800 p-4 rounded-xl text-sm font-light border border-green-100">
                  <strong className="font-bold">{isEn ? "GFA Solution: " : "GFA方案："}</strong>
                  {isEn ? "Work in genuine professional roles on GFA's own productions to build a resume that gets you hired." : "在GFA自己的制作项目中担任真实的专业岗位，积累可写进简历的经验。"}
                </div>
                <div className="pt-2">
                  <button className="text-xs font-bold uppercase tracking-widest bg-gfa-inkBlack text-white px-6 py-2 rounded-full hover:bg-[#C9A84C] hover:shadow-md hover:-translate-y-0.5 active:bg-[#a68636] active:scale-95 transition-all duration-200">{isEn ? "Apply for Crew" : "申请实战机会"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-white border-b border-gfa-border">
        <div className="container-gfa px-4 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-4">
              {isEn ? "How to Apply" : "申请流程"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">1</div>
              <h4 className="font-bold text-lg mb-2">{isEn ? "Submit Application" : "提交申请"}</h4>
              <p className="text-sm font-light text-gfa-slate">{isEn ? "Fill out the online form, attach your portfolio link and career goals." : "填写在线申请表，附上作品链接和职业目标"}</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">2</div>
              <h4 className="font-bold text-lg mb-2">{isEn ? "GFA Review" : "GFA团队审核"}</h4>
              <p className="text-sm font-light text-gfa-slate">{isEn ? "We will carefully review your materials (usually within 3-5 days)." : "通常3-5个工作日内回复"}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">3</div>
              <h4 className="font-bold text-lg mb-2">{isEn ? "1-on-1 Matching" : "一对一匹配"}</h4>
              <p className="text-sm font-light text-gfa-slate">{isEn ? "We assign the best support resources and mentors based on your goals." : "根据你的需求和目标匹配最适合的支持资源"}</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#C9A84C] text-white flex items-center justify-center mx-auto text-xl font-bold font-serif mb-4 shadow-lg border-4 border-white">4</div>
              <h4 className="font-bold text-lg mb-2">{isEn ? "Start Your Journey" : "开始你的旅程"}</h4>
              <p className="text-sm font-light text-gfa-slate">{isEn ? "Receive gear, meet mentors, and officially enter the GFA network." : "获得设备、导师、机会，正式进入GFA支持网络"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 bg-gfa-inkBlack text-white">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
           <h3 className="text-2xl font-bold font-serif text-[#C9A84C] mb-8">{isEn ? "Who Can Apply?" : "谁可以申请？"}</h3>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10">
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><CheckCircle2 className="text-green-400 w-5 h-5"/> {isEn ? "Eligible:" : "符合资格："}</h4>
                <ul className="space-y-3 text-sm font-light text-white/80">
                  <li>• {isEn ? "Film, TV, and Media graduates" : "电影、电视、传媒相关专业毕业生"}</li>
                  <li>• {isEn ? "Independent directors, DPs, and producers with a portfolio" : "有作品的独立导演、摄影师、制片人"}</li>
                  <li>• {isEn ? "Emerging filmmakers from multicultural backgrounds" : "多元文化背景的新兴电影人"}</li>
                  <li>• {isEn ? "Talented creators from low-income backgrounds" : "低收入背景的有才华创作者"}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-white/50">{isEn ? "Not Required:" : "不需要："}</h4>
                <ul className="space-y-3 text-sm font-light text-white/50">
                  <li>• {isEn ? "Ivy League or elite film school degrees" : "名校背景"}</li>
                  <li>• {isEn ? "Pre-existing industry connections" : "已有行业人脉"}</li>
                  <li>• {isEn ? "Expensive ownership of cinema gear" : "昂贵的设备"}</li>
                </ul>
              </div>
           </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-24 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "Success Stories" : "学员故事"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-gray-200">
               <h4 className="font-bold text-xl font-serif text-gfa-inkBlack mb-1">Alex</h4>
               <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">{isEn ? "Cinematography Grad" : "摄影系毕业生"}</p>
               <p className="text-sm font-light text-gfa-slate mb-6 flex-grow italic">
                 "{isEn ? "GFA lent me an entire Blackmagic camera package for my first short film. That short got into festivals, and directly led to my first paying gig." : "通过设备借用完成了第一部短片，入围电影节后获得工作机会。"}"
               </p>
             </div>

             <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-gray-200">
               <h4 className="font-bold text-xl font-serif text-gfa-inkBlack mb-1">Sarah</h4>
               <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">{isEn ? "Independent Director" : "独立导演"}</p>
               <p className="text-sm font-light text-gfa-slate mb-6 flex-grow italic">
                 "{isEn ? "My GFA mentor pulled my resume from the pile and got me a production company internship. Now I work there full-time." : "通过导师网络进入制片公司实习，现在已经全职工作。"}"
               </p>
             </div>

             <div className="bg-[#F5F2EE] p-8 rounded-3xl border border-gray-200">
               <h4 className="font-bold text-xl font-serif text-gfa-inkBlack mb-1">David</h4>
               <p className="text-xs uppercase tracking-widest text-[#C9A84C] font-bold mb-4">{isEn ? "Low-Income Creator" : "低收入创作者"}</p>
               <p className="text-sm font-light text-gfa-slate mb-6 flex-grow italic">
                 "{isEn ? "I had to shelve my passion project because I couldn't afford production. GFA's grant application coaching helped me secure the funding to finish it." : "通过基金辅导获得资助，完成了长期搁置的项目。"}"
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Large CTA */}
      <section className="py-24 bg-gfa-inkBlack text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#C9A84C] mix-blend-overlay opacity-10"></div>
        <div className="container-gfa relative z-10 px-4">
          <h2 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
            {isEn ? "You're One Step Away." : "你距离行业，只差一步"}
          </h2>
          <p className="text-xl md:text-2xl font-serif text-[#C9A84C] mb-12">
            {isEn ? "Let GFA help you take it." : "GFA帮你跨过那一步"}
          </p>
          <button className="bg-[#C9A84C] hover:bg-[#b09241] text-gfa-inkBlack px-12 py-5 rounded-full font-bold uppercase tracking-widest text-base hover:scale-105 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(201,168,76,0.4)] active:scale-95 active:shadow-[0_0_20px_rgba(201,168,76,0.2)] transition-all duration-200 shadow-[0_0_30px_rgba(201,168,76,0.3)] mb-4 inline-flex items-center gap-2">
            {isEn ? "Apply Now" : "立即申请支持"} <ArrowRight className="w-5 h-5"/>
          </button>
          <div className="text-sm font-light text-white/50 tracking-widest uppercase mt-4">
            {isEn ? "Free · Nonprofit · No Connections Required" : "免费 · 非营利 · 无需行业背景"}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FilmmakerSupport;
