import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Quote, Heart, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans pb-16">
      <SEO title="About | Global Film Alliance" />

      {/* Banner */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-gfa-inkBlack mt-[90px] md:mt-[100px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/jZ8b7DQD/IMG-3304.jpg" 
            alt="Founders and Team" 
            className="w-full h-full object-cover opacity-50 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gfa-inkBlack via-gfa-inkBlack/50 to-transparent"></div>
        </div>

        <div className="container-gfa relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-2xl">
            {isEn ? "Who We Are &" : "我们是谁，"}<br/>
            <span className="text-[#C9A84C]">{isEn ? "Why We Exist" : "我们为什么存在"}</span>
          </h1>
        </div>
      </section>

      {/* Founder's Statement */}
      <section className="py-6 md:py-8 bg-white relative">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <div className="relative bg-[#F5F2EE] rounded-2xl p-5 md:p-6 shadow-sm border border-[#C9A84C]/20">
            <Quote className="absolute top-4 left-4 w-8 h-8 text-[#C9A84C]/20 -rotate-6" />
            <div className="relative z-10">
              <h2 className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-4 border-b border-[#C9A84C]/20 pb-2 inline-block">
                {isEn ? "A Message From Our Founder" : "创始人致辞"}
              </h2>
              
              <div className="space-y-4 text-lg md:text-xl font-serif text-gfa-inkBlack leading-relaxed italic mb-8">
                {isEn ? (
                  <>
                    <p>"Working in the film industry for years, I've seen too many talented filmmakers leave because of invisible barriers—not because they weren't good enough, but because they didn't have a camera, didn't have someone to open that door, didn't have a platform willing to believe in them."</p>
                    <p>"GFA was born from a simple belief: talent is everywhere, but opportunity has never been equally distributed. We do not believe a closed door should be the end of anyone's cinematic dream. We want to be the place that helps them push that door open—providing the equipment, mentors, and resources they need to truly enter this industry."</p>
                    <p>"Real change takes time, and it needs to start from the source. That is why we are simultaneously doing another thing: from the moment a child first picks up a camera, we are by their side. We accompany them through the entire journey—from the classroom to the set, from a dream to a career."</p>
                  </>
                ) : (
                  <>
                    <p>“在影视行业工作多年，我目睹了太多有才华的电影人因为一道道看不见的门槛而离开这个行业——不是因为他们不够好，而是因为他们没有一台摄影机，没有一个能推开那扇门的人，没有一个愿意相信他们的平台。”</p>
                    <p>“GFA的诞生，源于一个简单的信念：才华无处不在，但机会从来不是均等分配的。我们不相信一扇关闭的门应该成为任何人电影梦的终点。我们要成为那个帮他们推开门的地方——提供他们需要的设备、导师和资源，让他们真正走进这个行业。”</p>
                    <p>“真正的改变需要时间，也需要从源头开始。所以我们同时在做另一件事：从孩子第一次拿起摄影机的那一刻，我们就在他们身边。我们陪伴他们走过整个旅程——从教室到片场，从梦想到职业。”</p>
                  </>
                )}
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 overflow-hidden border-2 border-[#C9A84C]">
                  {/* Image placeholder for Jack Liu */}
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop" alt="Jack Liu" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-serif text-gfa-inkBlack">Jack Liu</h3>
                  <p className="text-sm text-gfa-slate font-bold uppercase tracking-widest">{isEn ? "Founder & Program Director" : "创始人 & 项目总监"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Content Section */}
      <section className="py-12 md:py-16 bg-white border-t border-gfa-border">
        <div className="container-gfa max-w-5xl mx-auto px-4">
          
          {/* Organization Introduction */}
          <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-6">
                {isEn ? "About Global Film Alliance" : "机构简介"}
              </h3>
              <p className="text-base md:text-lg font-light text-gfa-slate leading-relaxed">
                {isEn 
                  ? "Global Film Alliance (GFA) is a 501(c)(3) certified nonprofit organization headquartered in Los Angeles, California. Through our commitment to film education, industry support, and international cooperation, we break down industry barriers and create equitable opportunities for everyone passionate about film." 
                  : "全球电影联盟（Global Film Alliance，简称GFA）是总部位于加利福尼亚州洛杉矶的501(c)(3)认证非营利组织。我们通过致力于影视教育、产业支撑与国际合作，为所有热爱电影的人打破行业壁垒，创造公平的机会。"}
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img src="https://i.ibb.co/nNQnFsHd/t.png" alt="GFA Certification" className="h-16 w-auto object-contain" />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
               <img src="https://i.ibb.co/5W4kfjsB/intro-photo.jpg" alt="About GFA" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Mission and Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#F5F2EE] p-8 rounded-2xl border border-[#C9A84C]/20">
              <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-4 flex items-center gap-2">
                 <Target className="w-5 h-5 text-[#C9A84C]" />
                {isEn ? "Our Mission" : "使命"}
              </h3>
              <p className="text-gfa-slate font-light leading-relaxed">
                {isEn
                  ? "Transform the next generation through film education; empower every filmmaker through industry support."
                  : "通过电影教育改变下一代，通过产业支持成就每一位电影人。"}
              </p>
            </div>
            <div className="bg-gfa-inkBlack text-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold font-serif text-[#C9A84C] mb-4 flex items-center gap-2">
                 <Target className="w-5 h-5" />
                {isEn ? "Our Vision" : "愿景"}
              </h3>
              <p className="text-white/80 font-light leading-relaxed">
                {isEn
                  ? "To become a leading global film education and industry support platform, building an international film ecosystem that integrates education, creation, distribution, and industry resources."
                  : "成为全球领先的电影教育与产业支撑平台，构建融合教育、创作、发行与产业资源的国际影视生态系统。"}
              </p>
            </div>
          </div>

          {/* Four Core Truths */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-gfa-inkBlack">
                {isEn ? "Four Core Truths" : "四大真理"}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Truth 1 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#C9A84C]/50 transition-colors shadow-sm">
                <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4 text-[#C9A84C] font-bold text-lg">1</div>
                <h4 className="text-lg font-bold font-serif text-gfa-inkBlack mb-3">
                  {isEn ? "Nurture Youth Film Talent" : "培养青少年电影人才"}
                </h4>
                <p className="text-sm font-light text-gfa-slate leading-relaxed">
                  {isEn
                    ? "Provide systematic film education for children and youth, including professional training in acting, directing, filming, and screenwriting, fostering artistic literacy and creativity."
                    : "为儿童及青少年提供系统化影视教育，包括表演、导演、拍摄、编剧等专业训练，有利于建立艺术素养与创造力。"}
                </p>
              </div>

              {/* Truth 2 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#C9A84C]/50 transition-colors shadow-sm">
                <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4 text-[#C9A84C] font-bold text-lg">2</div>
                <h4 className="text-lg font-bold font-serif text-gfa-inkBlack mb-3">
                  {isEn ? "Promote Equitable Film Opportunities" : "推动公平的电影机会"}
                </h4>
                <p className="text-sm font-light text-gfa-slate leading-relaxed">
                  {isEn
                    ? "Provide opportunities for seniors from diverse backgrounds to enter the film industry, raising industry standards and promoting confidence and caring development."
                    : "为不同背景的老年人提供进入影视行业的机会，提高行业水平，促进信心与关怀性发展。"}
                </p>
              </div>

              {/* Truth 3 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#C9A84C]/50 transition-colors shadow-sm">
                <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4 text-[#C9A84C] font-bold text-lg">3</div>
                <h4 className="text-lg font-bold font-serif text-gfa-inkBlack mb-3">
                  {isEn ? "Support Independent Filmmakers & Emerging Directors" : "支持独立电影人与新晋导演"}
                </h4>
                <p className="text-sm font-light text-gfa-slate leading-relaxed">
                  {isEn
                    ? "Provide emerging filmmakers with equipment, mentorship networks, distribution channels, and funding support to help them complete the full cycle from creation to distribution."
                    : "为新兴电影人提供设备、导师网络、发行渠道和资金支持，帮助完成从创作到发行的全程闭环。"}
                </p>
              </div>

              {/* Truth 4 */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#C9A84C]/50 transition-colors shadow-sm">
                <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-full flex items-center justify-center mb-4 text-[#C9A84C] font-bold text-lg">4</div>
                <h4 className="text-lg font-bold font-serif text-gfa-inkBlack mb-3">
                  {isEn ? "Build a Film Ecosystem" : "打造电影生态"}
                </h4>
                <p className="text-sm font-light text-gfa-slate leading-relaxed">
                  {isEn
                    ? "Advance high-quality, socially valuable film and television content, and utilize the Golden Feather Awards system to honor outstanding emerging directors and distinguished filmmakers."
                    : "推进高质量、有社会价值的影视制作内容，并通过金羽毛奖（Golden Feather Awards）体系表彰优秀的新晋导演与杰出电影人。"}
                </p>
              </div>
            </div>
          </div>

          {/* Core Business */}
          <div>
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-gfa-inkBlack">
                {isEn ? "Core Business" : "核心业务"}
              </h3>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F5F2EE] border-b border-gray-200">
                    <th className="py-4 px-6 font-bold text-gfa-inkBlack w-1/3 border-r border-gray-200">
                      {isEn ? "Sector" : "板块"}
                    </th>
                    <th className="py-4 px-6 font-bold text-gfa-inkBlack">
                      {isEn ? "Content" : "内容"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold font-serif text-gfa-inkBlack border-r border-gray-200">
                      {isEn ? "Youth Education" : "青少年教育"}
                    </td>
                    <td className="py-5 px-6 text-sm text-gfa-slate font-light leading-relaxed">
                      {isEn 
                        ? "Film acting, directing, screenwriting, cinematography courses; film summer camps; practical shooting" 
                        : "影视表演、导演、编剧、摄影课程；电影夏令营；实战拍摄"}
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold font-serif text-gfa-inkBlack border-r border-gray-200">
                      {isEn ? "Film Production Support" : "电影制作支持"}
                    </td>
                    <td className="py-5 px-6 text-sm text-gfa-slate font-light leading-relaxed">
                      {isEn 
                        ? "Original film production; short films; film festival projects" 
                        : "原创电影制作；短片；电影节参赛项目"}
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold font-serif text-gfa-inkBlack border-r border-gray-200">
                      {isEn ? "Emerging Filmmaker Support" : "新晋电影人支持"}
                    </td>
                    <td className="py-5 px-6 text-sm text-gfa-slate font-light leading-relaxed">
                      {isEn 
                        ? "Funding support; equipment resources; mentorship network; talent events & film companies" 
                        : "资金支持；设备资源；导师网络；人才活动影视公司"}
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-bold font-serif text-gfa-inkBlack border-r border-gray-200">
                      {isEn ? "Honorary Awards" : "荣誉奖项"}
                    </td>
                    <td className="py-5 px-6 text-sm text-gfa-slate font-light leading-relaxed">
                      {isEn 
                        ? "Golden Feather Awards — for emerging directors and all outstanding filmmakers" 
                        : "金羽毛奖 — 面向新晋导演与所有优秀电影人"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="container-gfa px-4 max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xs font-bold text-[#C9A84C] uppercase tracking-widest mb-2">
              {isEn ? "Partners" : "我们的合作伙伴"}
            </h2>
            <h3 className="text-xl md:text-2xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "United by a Common Goal" : "为共同目标而联合"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:shadow-sm transition-shadow">
              <div className="h-10 flex items-center justify-center mb-3">
                 <div className="text-xl md:text-2xl font-bold italic tracking-tighter text-gfa-inkBlack">Blackmagic Design</div>
              </div>
              <p className="text-xs md:text-sm font-light text-gfa-slate leading-relaxed mx-auto">
                {isEn ? "Professional equipment partner, providing pro-level camera gear support for GFA projects." : "专业设备合作伙伴，为GFA项目提供专业级摄影器材支持"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:shadow-sm transition-shadow">
              <div className="h-10 flex items-center justify-center mb-3">
                 <div className="text-xl md:text-2xl font-serif text-gfa-inkBlack">Harmony Gold</div>
              </div>
              <p className="text-xs md:text-sm font-light text-gfa-slate leading-relaxed mx-auto">
                {isEn ? "Content partner collaborating on distribution and youth production." : "内容合作伙伴，参与项目发行及合作体验。"}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:shadow-sm transition-shadow">
              <div className="h-10 flex items-center justify-center mb-3">
                 <div className="text-base md:text-lg font-bold uppercase tracking-widest text-gfa-inkBlack">City of Pomona</div>
              </div>
              <p className="text-xs md:text-sm font-light text-gfa-slate leading-relaxed mx-auto">
                {isEn ? "Government partner, proudly supporting GFA's local community outreach and youth initiatives." : "政府合作伙伴，支持GFA的社区服务项目"}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
