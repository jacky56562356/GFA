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
            src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop" 
            alt="Founders and Team" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
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

      {/* Organization Introduction */}
      <section className="py-6 md:py-8 bg-white border-t border-gfa-border">
        <div className="container-gfa max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="space-y-4 text-sm md:text-base font-light text-gfa-slate leading-relaxed">
              <div>
                <h3 className="text-xl font-bold font-serif text-gfa-inkBlack mb-3">
                  {isEn ? "About Global Film Alliance" : "关于全球电影联盟"}
                </h3>
                <p>
                  {isEn 
                    ? "Global Film Alliance (GFA) is a 501(c)(3) nonprofit organization headquartered in Los Angeles, California. We believe that barriers to the film industry should be determined by nothing beyond talent — not family background, not personal connections, and not financial resources." 
                    : "全球电影联盟（Global Film Alliance，简称GFA）是一家总部位于加利福尼亚州洛杉矶的501(c)(3)认证非营利组织。我们相信，电影行业的壁垒不应该由才华之外的任何因素决定——不是家庭背景，不是人脉关系，也不是资金多寡。"}
                </p>
                <p className="mt-6">
                  {isEn
                    ? "Our work spans two core directions: providing systematic career support for film graduates and emerging directors, and nurturing the next generation of creators through youth film education."
                    : "我们的工作覆盖两个核心方向：为电影专业毕业生和新晋导演提供系统性的就业扶持，以及通过青少年影视教育为下一代创作者播下梦想的种子。"}
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gfa-border w-1/2">
                 <img 
                   src="https://i.ibb.co/prw8Q6Rh/converted-image.jpg" 
                   alt="GFA Mission" 
                   className="w-full h-auto object-cover" 
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-6 md:py-8 bg-[#F5F2EE]">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
            {isEn ? "Our Mission" : "我们的使命"}
          </h2>
          <p className="text-sm md:text-base text-gfa-slate font-light leading-relaxed mx-auto">
            {isEn
              ? "Global Film Alliance is dedicated to dismantling the systemic barriers that prevent talented individuals from building careers in film. We provide film graduates and emerging directors with the equipment, mentorship, distribution access, and funding support they need to enter the professional industry. In parallel, our youth education programs create a structured pathway into film for young people from all backgrounds."
              : "全球电影联盟致力于消除电影行业中系统性的就业壁垒，为电影专业毕业生和新晋导演提供进入好莱坞职业体系所需的设备、导师网络、发行渠道和资金支持。与此同时，我们通过系统性的青少年影视教育项目，为来自多元背景的年轻人开辟一条通往电影行业的成长路径。"}
          </p>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-6 md:py-8 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold font-serif text-gfa-inkBlack">
              {isEn ? "Who We Serve" : "我们服务的人群"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#C9A84C]/30 transition-colors">
              <h3 className="text-base md:text-lg font-bold font-serif text-gfa-inkBlack mb-2">
                {isEn ? "Film School Graduates" : "电影专业毕业生"}
              </h3>
              <p className="text-sm text-gfa-slate font-light">
                {isEn
                  ? "Recent graduates seeking their first break in the industry, receiving equipment, mentorship, and career support."
                  : "寻求进入行业第一步的毕业生，我们提供设备、导师和就业支持。"}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#C9A84C]/30 transition-colors">
              <h3 className="text-base md:text-lg font-bold font-serif text-gfa-inkBlack mb-2">
                {isEn ? "Emerging Independent Directors" : "新晋独立导演"}
              </h3>
              <p className="text-sm text-gfa-slate font-light">
                {isEn
                  ? "Independent creators with projects who lack distribution channels and industry resources."
                  : "有作品但缺乏发行渠道和行业资源的独立创作者。"}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#C9A84C]/30 transition-colors">
              <h3 className="text-base md:text-lg font-bold font-serif text-gfa-inkBlack mb-2">
                {isEn ? "Youth Ages 6–17" : "儿童与青少年"}
              </h3>
              <p className="text-sm text-gfa-slate font-light">
                {isEn
                  ? "Young people exploring their creative potential through summer camps and production projects."
                  : "通过影视夏令营和制作项目探索创作潜能的年轻人。"}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#C9A84C]/30 transition-colors">
              <h3 className="text-base md:text-lg font-bold font-serif text-gfa-inkBlack mb-2">
                {isEn ? "Special Needs Youth" : "特殊需求儿童"}
              </h3>
              <p className="text-sm text-gfa-slate font-light">
                {isEn
                  ? "Children and youth with special needs, like autism or depression, finding healing through cinematic arts therapy."
                  : "自闭症、抑郁症等特殊需求儿童，通过电影创作进行艺术疗愈。"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-6 md:py-8 bg-gfa-inkBlack text-white">
        <div className="container-gfa px-4">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold font-serif mb-2 text-[#C9A84C]">
              {isEn ? "Our Core Values" : "核心价值观"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Value 1 */}
            <div className="text-center border border-white/10 p-5 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#C9A84C]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif mb-1 uppercase tracking-wider">{isEn ? "Access" : "可及性"}</h3>
              <h4 className="text-sm font-medium text-[#C9A84C] mb-3">{isEn ? "Open Every Door" : "打开每一扇门"}</h4>
              <p className="text-sm text-white/70 font-light leading-relaxed mx-auto">
                {isEn 
                  ? "Talent should never be constrained by resources. Every creator with a dream deserves access to the support they need, regardless of background or income." 
                  : "我们相信，才华不应该受到资源的限制。无论背景、收入或人脉，每一位有梦想的创作者都应该获得他们需要的支持。"}
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center border border-white/10 p-5 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#C9A84C]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif mb-1 uppercase tracking-wider">{isEn ? "Community" : "社区根基"}</h3>
              <h4 className="text-sm font-medium text-[#C9A84C] mb-3">{isEn ? "Rooted & Diverse" : "扎根社区，服务多元"}</h4>
              <p className="text-sm text-white/70 font-light leading-relaxed mx-auto">
                {isEn 
                  ? "Rooted in Los Angeles, we serve filmmakers and families from diverse cultural backgrounds, using film as a language that bridges communities." 
                  : "我们深植于洛杉矶社区，服务来自多元文化背景的电影人和家庭。电影是连接不同文化的语言，我们用它来构建更紧密的社区纽带。"}
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center border border-white/10 p-5 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 bg-[#C9A84C]/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-[#C9A84C]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif mb-1 uppercase tracking-wider">{isEn ? "Impact" : "真实影响"}</h3>
              <h4 className="text-sm font-medium text-[#C9A84C] mb-3">{isEn ? "Measuring Real Success" : "以结果衡量成功"}</h4>
              <p className="text-sm text-white/70 font-light leading-relaxed mx-auto">
                {isEn 
                  ? "We measure our success not by events hosted, but by careers launched, barriers broken, and lives genuinely changed." 
                  : "我们不以举办了多少活动来衡量成功，而是以真正帮助了多少人进入行业、改变了多少孩子的生命轨迹来衡量。"}
              </p>
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
