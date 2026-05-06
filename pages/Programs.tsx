import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { ArrowRight } from 'lucide-react';

const Programs: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  const title = isEn ? "Our Programs — Shaping Tomorrow's Storytellers" : "我们的项目 — 塑造未来的影像讲述者";
  const desc = isEn 
    ? "Empowering youth through professional training, real-world experience, and industry access." 
    : "通过专业培训、真实制作经验和行业资源连接，赋能青少年。";

  const programs = [
    {
      title: isEn ? "Film Awards Ceremony" : "电影颁奖礼",
      desc: isEn 
        ? "Celebrating young creatives and emerging directors on Hollywood's biggest stages." 
        : "在好莱坞最大的舞台上举办年度颁奖典礼，庆祝并表彰年轻的电影人才与新晋导演。",
      link: "/programs/awards",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: isEn ? "Emerging Director Support" : "新晋导演扶持",
      desc: isEn 
        ? "Providing mentorship, grants, and practical set resources to guide new directors in bringing their vision to life." 
        : "提供资金、导师指导和片场资源，帮助年轻的新晋导演完成他们的独立制片与长片及短片作品。",
      link: "/programs/emerging-director",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: isEn ? "Global Film Platform Alliance" : "全球电影平台联合",
      desc: isEn 
        ? "Partnering with major streaming networks, theaters, and global festivals to amplify young voices worldwide." 
        : "与全球知名流媒体网络、院线和国际电影节合作，建立宣发联盟，提升青少年与青年导演电影作品的全球影响力。",
      link: "/programs/platform-alliance",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: isEn ? "Diverse Ethnicity Film Support" : "全球各族裔电影扶持",
      desc: isEn 
        ? "Funding and spotlighting underrepresented cultural stories globally, ensuring every ethnicity has a voice in cinema." 
        : "注资并支持来自全球各族裔、多元文化背景的影视项目，确保少数族裔和代表性不足的文化能够在电影中发出他们的声音。",
      link: "/programs/diverse-ethnicity",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-gfa-warmWhite pt-[80px] font-sans pb-24">
      <SEO title={isEn ? "Programs | GFA" : "项目 | GFA"} description={desc} />

      {/* Banner */}
      <div className="relative bg-[#1A2B4A] py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1604928141064-207cea6f5722?q=80&w=2070&auto=format&fit=crop" 
            alt="Programs Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A] via-[#1A2B4A]/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-lg">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gfa-gold font-light leading-relaxed max-w-2xl italic font-serif">
               {desc}
            </p>
          </div>
        </div>
      </div>

      <div className="container-gfa max-w-6xl mx-auto space-y-16">
        {programs.map((program, idx) => (
          <div key={idx} className={`bg-white rounded-[32px] overflow-hidden shadow-xl border border-gfa-border flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} group hover:shadow-2xl transition-all duration-500`}>
            {/* Image */}
            <div className="md:w-1/2 relative overflow-hidden h-[300px] md:h-auto">
              <img 
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            
            {/* Content */}
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white relative">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:bg-[#C9A84C]/10 pointer-events-none"></div>
               <h2 className="text-3xl md:text-4xl font-bold font-serif text-gfa-inkBlack mb-6 leading-tight">{program.title}</h2>
               <p className="text-lg text-gfa-slate leading-relaxed font-light mb-10 opacity-90">
                 {program.desc}
               </p>
               <Link 
                 to={program.link} 
                 className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#C9A84C] hover:text-black transition-colors group/link w-fit"
               >
                 {isEn ? 'Learn More' : '了解更多'}
                 <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
               </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
