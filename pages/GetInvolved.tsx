import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Users, Presentation, Briefcase, ArrowRight } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="font-sans pb-24">
      <SEO title="Get Involved | Global Film Alliance" />

      {/* Hero */}
      <section className="bg-gfa-inkBlack text-white pt-32 pb-24 border-b border-white/10">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center">
           <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
             {isEn ? "Join the" : "加入"}<br/>
             <span className="text-[#C9A84C]">{isEn ? "Movement." : "这项目标。"}</span>
           </h1>
           <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl mx-auto italic font-serif">
             {isEn 
               ? "It takes a village to raise a filmmaker. Lend your time, your expertise, or your passion." 
               : "培养一名电影人需要整个社区的力量。贡献你的时间、你的专业技能、或是你的热情。"}
           </p>
        </div>
      </section>

      {/* Options */}
      <section className="py-24 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Volunteer */}
              <div className="bg-[#F5F2EE] rounded-3xl p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                 <Users className="w-10 h-10 text-[#C9A84C] mb-6" />
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{isEn ? "Volunteer" : "成为志愿者"}</h3>
                 <p className="text-gfa-slate font-light text-sm mb-8 leading-relaxed flex-grow">
                   {isEn 
                     ? "Help out at our summer camps, assist with the Golden Feather Awards, or support our community screenings. Perfect for college students looking for hours or community lovers." 
                     : "在我们的夏令营中提供帮助，协助举办金羽奖，或是在社区放映中提供支持。非常适合寻找社区服务小时数的高中大学生和热心人士。"}
                 </p>
                 <button className="text-gfa-inkBlack font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:text-[#C9A84C] transition-colors">
                   {isEn ? "Apply to Volunteer" : "申请成为志愿者"} <ArrowRight className="w-4 h-4"/>
                 </button>
              </div>

              {/* Mentor */}
              <div className="bg-[#F5F2EE] rounded-3xl p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                 <Presentation className="w-10 h-10 text-[#C9A84C] mb-6" />
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{isEn ? "Become a Mentor" : "成为导师"}</h3>
                 <p className="text-gfa-slate font-light text-sm mb-8 leading-relaxed flex-grow">
                   {isEn 
                     ? "Are you an established Hollywood professional? Give back by taking 1-2 emerging filmmakers under your wing. Review scripts, offer coffee chats, or let them shadow." 
                     : "您是已经在好莱坞立足的专业人士吗？请通过指导1-2名新晋电影人来回馈行业。审阅他们的剧本，一起喝杯咖啡，或是让他们在片场观摩。"}
                 </p>
                 <button className="text-gfa-inkBlack font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:text-[#C9A84C] transition-colors">
                   {isEn ? "Join Mentorship Matrix" : "加入导师网络"} <ArrowRight className="w-4 h-4"/>
                 </button>
              </div>

              {/* Careers */}
              <div className="bg-[#F5F2EE] rounded-3xl p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                 <Briefcase className="w-10 h-10 text-[#C9A84C] mb-6" />
                 <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">{isEn ? "Careers & Internships" : "工作与实习"}</h3>
                 <p className="text-gfa-slate font-light text-sm mb-8 leading-relaxed flex-grow">
                   {isEn 
                     ? "Join the GFA core team. We occasionally hire camp counselors, digital marketers, and program coordinators to keep our nonprofit running smoothly." 
                     : "加入GFA核心团队。我们不定期招聘夏令营辅导员、数字营销人员和项目协调员，以维持非营利组织的高效运转。"}
                 </p>
                 <button className="text-gfa-inkBlack font-bold uppercase tracking-widest text-xs flex items-center gap-2 group-hover:text-[#C9A84C] transition-colors">
                   {isEn ? "View Openings" : "查看开放职位"} <ArrowRight className="w-4 h-4"/>
                 </button>
              </div>

           </div>
        </div>
      </section>

    </div>
  );
};

export default GetInvolved;
