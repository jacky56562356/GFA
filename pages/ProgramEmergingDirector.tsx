import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Play } from 'lucide-react';

const ProgramEmergingDirector: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="bg-gfa-warmWhite pt-[80px] font-sans pb-24">
      <SEO title="Children's Dream Film Project | GFA" />

      <div className="relative bg-[#1A2B4A] py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop" 
            alt="Dream Film Project" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A] via-[#1A2B4A]/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-lg">
            {isEn ? "Real Sets. Real Cameras. Real Stories." : "真实的片场。真实的摄像机。真实的故事。"}
          </h1>
        </div>
      </div>

      <div className="container-gfa max-w-5xl mx-auto space-y-20">
        <section className="text-center max-w-3xl mx-auto bg-white p-12 rounded-[40px] shadow-xl border border-gfa-border -mt-32 relative z-20">
          <p className="text-xl text-gfa-slate leading-relaxed font-light">
             {isEn 
               ? "Every quarter, GFA produces one professional short film — fully led by youth participants, from concept to camera. Children don't just watch movies. They make them." 
               : "每季度，GFA制作一部由青少年全面主导的专业短片——从概念构思到实际拍摄。孩子们不仅仅是看电影，他们正在创造电影。"}
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-12 text-center">
            {isEn ? "Released Projects" : "已发行影片"}
          </h2>
          <div className="space-y-16">
            
            <div className="flex flex-col md:flex-row gap-10 bg-white p-6 md:p-10 rounded-[32px] border border-gfa-border shadow-lg items-center">
              <div className="md:w-1/3 shrink-0">
                <img src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop" alt="Garden Film Poster" className="w-full aspect-[2/3] object-cover rounded-2xl shadow-md" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-2">《花园 Garden》</h3>
                <p className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase mb-6">Best Family Film - Golden State Film Festival</p>
                <p className="text-gfa-slate font-light mb-8 max-w-xl">
                  {isEn ? "An enchanting story exploring childhood imagination and family bonds, produced entirely by our 2024 youth cohort." : "一个探索童年想象力和家庭纽带的迷人故事，由我们2024届青少年完全主导制作。"}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="inline-flex items-center gap-2 bg-[#00A8E1] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#0090C0] transition-colors">
                    <Play className="w-4 h-4 fill-current" /> Amazon Prime
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 bg-[#FF4500] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#E03C00] transition-colors">
                    <Play className="w-4 h-4 fill-current" /> Tubi
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-10 bg-white p-6 md:p-10 rounded-[32px] border border-gfa-border shadow-lg items-center">
              <div className="md:w-1/3 shrink-0">
                <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop" alt="Film 2 Poster" className="w-full aspect-[2/3] object-cover rounded-2xl shadow-md" />
              </div>
              <div className="md:w-2/3">
                 <h3 className="text-3xl font-bold font-serif text-gfa-inkBlack mb-2">Echoes</h3>
                 <p className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase mb-6">Official Selection - LA Youth Film Fest</p>
                 <p className="text-gfa-slate font-light mb-8 max-w-xl">
                   {isEn ? "A suspenseful drama created by teenagers investigating a local myth." : "一部由青少年创作的悬疑剧情片，调查一个当地的传说。"}
                 </p>
              </div>
            </div>

          </div>
        </section>

        <section className="bg-[#1A2B4A] rounded-[40px] p-12 text-center text-white relative overflow-hidden">
           <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 relative z-10">
             {isEn ? "Want to be part of the next film?" : "想参与下一部电影的制作吗？"}
           </h2>
           <p className="text-white/80 max-w-xl mx-auto mb-10 relative z-10">
             {isEn ? "If you or your child is interested in acting, directing, or crewing for our upcoming projects, let us know." : "如果您的孩子对表演、导演或参与我们未来项目的幕后工作感兴趣，请联系我们。"}
           </p>
           <button className="bg-[#C9A84C] hover:bg-white hover:text-[#1A2B4A] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-colors relative z-10">
             {isEn ? "Express Interest" : "填写意向"}
           </button>
        </section>

      </div>
    </div>
  );
};

export default ProgramEmergingDirector;
