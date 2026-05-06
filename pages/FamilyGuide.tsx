import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ChevronDown, Map, Compass, BookOpen, GraduationCap, PhoneCall } from 'lucide-react';

const FamilyGuide: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = isEn ? [
    { q: "My child loves film, but I'm not sure if it's a good career path?", a: "The entertainment industry is one of the largest export industries in the US, with a massive demand for diverse talent ranging from creative to technical and business roles. With proper planning, it offers highly viable and lucrative career paths." },
    { q: "Is studying film very expensive?", a: "It can be, but it doesn't have to be. GFA specifically mitigates these costs by providing free gear, mentorship, and extensive scholarship programs so talent matters more than money." },
    { q: "What should my child major in for college?", a: "It depends completely on their interest. They don't have to major in 'Film Production'. Many successful producers majored in Business; many great cinematographers studied Physics or Fine Arts. We offer consultations to help figure this out." },
    { q: "As a Chinese family, how can we help our child succeed in the US industry?", a: "By understanding the US system early. Hollywood relies entirely on union structures, verified credits, and professional networks. GFA acts as a bridge, giving Chinese families the exact roadmap required to build an authentic Hollywood career." },
    { q: "How much do GFA's programs cost? Is there financial aid?", a: "Cost varies by program, but as a nonprofit, profitability is not our goal. We offer robust scholarships—up to 100% coverage—for low and middle-income families." },
    { q: "My child has absolutely no experience. Can they start with GFA?", a: "Yes. Our 6-10 age programs assume zero prior experience. We focus purely on kindling their passion and creativity in a pressure-free environment." },
    { q: "Will the Global Talent Competition actually help my child's future?", a: "Absolutely. Competing at the Dolby Theatre, receiving verified credentials from a recognized US 501(c)(3), and performing for industry judges are massive resume builders for college applications and talent agents." },
    { q: "How do I schedule a 1-on-1 consultation with the GFA team?", a: "Simply click the 'Book Free Consultation' button at the bottom of this page. We'll find a time to discuss your child's specific situation." }
  ] : [
    { q: "孩子喜欢电影，但我不确定这是不是一条好的职业道路？", a: "影视娱乐业是美国最大的出口产业之一，对从创作、技术到商业的各个领域都有巨大的人才需求。只要规划得当，这是一条极为可行且前景广阔的职业道路。" },
    { q: "学影视需要很多钱吗？", a: "可能需要，但并非必须。GFA的存在正是为了抵消这些成本。我们提供免费的设备借用、导师指导和丰厚的奖学金，确保才华比财富更重要。" },
    { q: "孩子应该读什么专业？", a: "这完全取决于他们的具体兴趣。他们不一定非要学“电影制作”。许多顶尖制片人学的是商科；优秀的摄影师可能学的是物理或美术。我们提供一对一咨询帮助您理清这一点。" },
    { q: "来自中国的家庭，如何帮助孩子在美国影视圈发展？", a: "尽早理解美国的行业体系非常重要。好莱坞完全依赖工会结构、被验证的履历网络。GFA作为桥梁，为中国家庭提供建立真正好莱坞事业所需的精确路线图。" },
    { q: "GFA的项目费用是多少？有没有资助？", a: "各项目费用不同，但作为非营利组织，盈利不是我们的目的。我们为中低收入家庭提供高达100%费用的奖学金。" },
    { q: "孩子没有任何基础，可以从GFA的项目开始吗？", a: "完全可以。我们6-10岁的项目无需任何基础。我们在无压力的环境中，纯粹专注于点燃他们的热情和创造力。" },
    { q: "全球才艺大赛对孩子的未来有帮助吗？", a: "极其有帮助。在杜比剧院角逐、获得受认可的美国501(c)(3)机构背书、并在行业评委面前展示才华——这些对大学申请和吸引经纪人来说都是极具含金量的履历。" },
    { q: "如何预约和GFA团队的一对一咨询？", a: "只需点击页面底部的“预约免费咨询”按钮，我们团队会与您安排专门的时间深入探讨您孩子的具体情况。" }
  ];

  return (
    <div className="font-sans pb-24">
      <SEO title="Family Career Guide | Global Film Alliance" />

      {/* Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498228775437-1eeeaffec258?q=80&w=2070&auto=format&fit=crop" 
            alt="Family reviewing a script" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            {isEn ? "Your Child Dreams of Film." : "您的孩子想从事电影行业？"}<br/>
            <span className="text-[#C9A84C] mt-2 block">{isEn ? "Let's Build the Path Together." : "我们帮您规划这条路。"}</span>
          </h1>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-20 bg-white border-b border-gfa-border">
        <div className="container-gfa max-w-3xl mx-auto px-4">
           <p className="text-xl md:text-2xl font-light text-gfa-slate leading-relaxed font-serif">
             {isEn 
               ? "We understand the worries many parents face: The film industry is fiercely competitive—is it truly a viable career path? When should my child start preparing? How much is this going to cost us? What specific roles are actually out there? This page was designed precisely to answer your questions and replace uncertainty with a clear roadmap." 
               : "我们知道很多家长的担忧：影视行业竞争激烈，这条路真的可以走吗？孩子应该从什么时候开始准备？我们需要花多少钱？有什么具体的方向可以选择？这个页面，专门为您解答这些问题。"}
           </p>
        </div>
      </section>

      {/* Industry Paths */}
      <section className="py-24 bg-[#F5F2EE]">
        <div className="container-gfa px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-6">
              {isEn ? "Understanding Industry Roles" : "影视行业职业路径说明"}
            </h2>
            <p className="text-gfa-slate font-light mb-8 max-w-2xl mx-auto">
              {isEn ? "It's not just 'being a director'. The industry offers a vast array of specialized, highly-skilled professions." : "不仅限于是制片人或者导演，影视行业拥有各种各样专业化、对技术要求极高的职业分支。"}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{isEn ? "Creative" : "创作类"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{isEn ? "Roles: " : "职位："}</strong>{isEn ? "Director, Screenwriter, Cinematographer" : "导演、编剧、摄影师"}<br/><br/>
                  {isEn ? "The visionaries who craft the emotional core and visual style of the story." : "塑造故事的情感核心和视觉风格的远见者。"}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{isEn ? "Production" : "制作类"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{isEn ? "Roles: " : "职位："}</strong>{isEn ? "Producer, Production Designer, Editor" : "制片人、美术指导、剪辑师"}<br/><br/>
                  {isEn ? "The master organizers and builders who bring the script from paper to reality." : "将剧本从纸面转化为现实的组织者和执行领袖。"}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{isEn ? "Technical" : "技术类"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{isEn ? "Roles: " : "职位："}</strong>{isEn ? "VFX Artist, Sound Designer, Colorist" : "特效师、声音设计、调色师"}<br/><br/>
                  {isEn ? "The highly specialized experts who perfect the immersive experience." : "完善沉浸式视听体验的高精尖技术专家。"}
                </p>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{isEn ? "Emerging (Tech)" : "新兴类"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{isEn ? "Roles: " : "职位："}</strong>{isEn ? "AI Filmmaker, Interactive Content Dir." : "AI影视创作者、内容总监"}<br/><br/>
                  {isEn ? "The pioneers utilizing artificial intelligence to revolutionize pipelines." : "利用人工智能重塑工作流的科技前沿开拓者。"}
                </p>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold font-serif text-xl border-b-2 border-[#C9A84C] pb-2 inline-block mb-4 text-gfa-inkBlack">{isEn ? "Business" : "商业类"}</h3>
                <p className="text-sm text-gfa-slate font-light leading-relaxed mb-4">
                  <strong className="text-gfa-inkBlack font-bold">{isEn ? "Roles: " : "职位："}</strong>{isEn ? "Distribution, Marketing, IP Law" : "发行、营销、版权律师"}<br/><br/>
                  {isEn ? "The strategists who ensure the art makes money and reaches the audience." : "确保作品能够盈利并触达观众的商业策略师。"}
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Age Timeline */}
      <section className="py-24 bg-white border-y border-gfa-border">
         <div className="container-gfa max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold font-serif text-gfa-inkBlack">
                {isEn ? "Development Strategy by Age" : "按年龄的培养建议"}
              </h2>
            </div>

            <div className="space-y-12">
               {/* 6-10 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">6-10</div>
                  <h3 className="text-2xl font-bold font-serif mb-6 text-gfa-inkBlack flex items-center gap-3">
                    <Map className="text-[#C9A84C] w-6 h-6"/> {isEn ? "Exploration Phase" : "探索期"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "Goal:" : "培养目标："}</strong>
                      {isEn ? "Love for cinema, keen observation, boundless creativity." : "爱上电影、培养观察力与无边的创造力"}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{isEn ? "GFA Provides:" : "GFA提供："}</strong>
                      {isEn ? "Summer Camps (Foundational), Community Screenings." : "夏令营（基础班）、社区电影放映"}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "What Parents Can Do:" : "家长可以做："}</strong>
                      {isEn ? "Take them to diverse films, encourage them to tell bedtime stories, give them a simple camera to play with." : "多带孩子看不同类型的电影，鼓励他们讲故事，给他们一个简单的相机玩耍。"}
                    </div>
                  </div>
               </div>

               {/* 11-14 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">11-14</div>
                  <h3 className="text-2xl font-bold font-serif mb-6 text-gfa-inkBlack flex items-center gap-3">
                    <Compass className="text-[#C9A84C] w-6 h-6"/> {isEn ? "Development Phase" : "发展期"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "Goal:" : "培养目标："}</strong>
                      {isEn ? "Master basic narrative creation; successfully complete their first real project." : "学会基本叙事创作，成功完成第一个真正的作品。"}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{isEn ? "GFA Provides:" : "GFA提供："}</strong>
                      {isEn ? "Summer Camps (Advanced), Children's Film Project, Talent Competitions." : "夏令营（进阶班）、儿童梦想电影项目、才艺大赛。"}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "What Parents Can Do:" : "家长可以做："}</strong>
                      {isEn ? "Support them shooting videos on a smartphone, encourage entering local contests, validate their artistic attempts." : "支持孩子用手机拍短视频，鼓励参加比赛，肯定他们的艺术尝试。"}
                    </div>
                  </div>
               </div>

               {/* 15-18 */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-[#C9A84C] text-black font-bold font-serif text-2xl px-6 py-2 rounded-bl-3xl rounded-tr-3xl">15-18</div>
                  <h3 className="text-2xl font-bold font-serif mb-6 text-gfa-inkBlack flex items-center gap-3">
                    <BookOpen className="text-[#C9A84C] w-6 h-6"/> {isEn ? "Specialization Phase" : "定向期"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "Goal:" : "培养目标："}</strong>
                      {isEn ? "Build a robust college portfolio, narrow down a specific career track." : "建立有竞争力的大学申请作品集，确定具体的职业方向。"}
                    </div>
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{isEn ? "GFA Provides:" : "GFA提供："}</strong>
                      {isEn ? "Hollywood Career Training, AI Filmmaking Courses, Golden Feather Awards submissions." : "好莱坞职业培训、AI影视课程、申请金羽奖评选。"}
                    </div>
                    <div>
                      <strong className="font-bold text-gfa-inkBlack block mb-1">{isEn ? "What Parents Can Do:" : "家长可以做："}</strong>
                      {isEn ? "Support their choice of a related college major, help them start networking, trust their focus." : "支持孩子选择相关的大学专业，帮助他们建立初步的行业联系，信任他们的专注。"}
                    </div>
                  </div>
               </div>

               {/* College / Grad */}
               <div className="bg-[#F5F2EE] rounded-3xl p-8 md:p-12 border border-[#C9A84C]/20 relative">
                  <div className="absolute top-0 right-0 bg-gfa-inkBlack text-white font-bold font-serif text-sm tracking-widest uppercase px-6 py-3 rounded-bl-3xl rounded-tr-3xl">Grad</div>
                  <h3 className="text-2xl font-bold font-serif mb-6 text-gfa-inkBlack flex items-center gap-3">
                    <GraduationCap className="text-gfa-inkBlack w-6 h-6"/> {isEn ? "Professional Launcher" : "大学 / 毕业阶段"}
                  </h3>
                  <div className="space-y-4 text-sm font-light text-gfa-slate">
                    <div>
                      <strong className="font-bold text-[#C9A84C] block mb-1">{isEn ? "GFA Provides:" : "GFA提供："}</strong>
                      {isEn ? "Filmmaker Career Support, industry mentorship network, free professional gear rentals." : "新晋电影人就业扶持、行业导师网络推荐、免费专业设备借用。"}
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gfa-inkBlack text-white">
        <div className="container-gfa max-w-4xl mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold font-serif text-[#C9A84C]">{isEn ? "Frequently Asked Questions" : "家长常见问题 (FAQ)"}</h2>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, idx) => (
                 <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300">
                    <button 
                      className="w-full px-6 py-5 text-left font-bold flex justify-between items-center focus:outline-none hover:bg-white/10 transition-colors"
                      onClick={() => toggleFaq(idx)}
                    >
                       <span className="pr-8">{faq.q}</span>
                       <ChevronDown className={`w-5 h-5 text-[#C9A84C] shrink-0 transform transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`px-6 text-white/70 font-light text-sm overflow-hidden transition-all duration-300 ${openFaq === idx ? 'pb-6 max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                       <div className="pt-2 border-t border-white/10 mt-2">{faq.a}</div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
         <div className="container-gfa px-4">
           <div className="w-20 h-20 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mx-auto mb-8 text-[#C9A84C]">
             <PhoneCall className="w-8 h-8" />
           </div>
           <h2 className="text-3xl md:text-5xl font-bold font-serif text-gfa-inkBlack mb-6">
             {isEn ? "Not Sure Where to Start?" : "不确定从哪里开始？"}<br/>
             <span className="text-[#C9A84C]">{isEn ? "Talk to us." : "和我们聊聊。"}</span>
           </h2>
           <p className="text-lg text-gfa-slate font-light max-w-2xl mx-auto mb-10">
             {isEn ? "The GFA team offers free, one-on-one parent consultations to help you understand the most suitable path for your talented child." : "GFA团队提供免费的一对一家长咨询，帮助您了解最适合孩子的艺术成长路径。"}
           </p>
           <button className="bg-gfa-inkBlack hover:bg-[#C9A84C] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors shadow-xl">
             {isEn ? "Book Free Consultation" : "预约免费咨询"}
           </button>
         </div>
      </section>

    </div>
  );
};

export default FamilyGuide;
