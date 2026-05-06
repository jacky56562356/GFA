import React from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { Cpu, Image as ImageIcon, Scissors, Palette } from 'lucide-react';

const ProgramDiverseEthnicity: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  return (
    <div className="bg-gfa-warmWhite pt-[80px] font-sans pb-24">
      <SEO title="AI Filmmaking Training | GFA" />

      <div className="relative bg-[#1A2B4A] py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
            alt="AI Filmmaking" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A2B4A] via-[#1A2B4A]/80 to-transparent"></div>
        </div>
        <div className="container-gfa relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-white mb-6 leading-tight drop-shadow-lg">
            {isEn ? "The Future of Film is Here — Are You Ready?" : "影视的未来已来——你准备好了吗？"}
          </h1>
        </div>
      </div>

      <div className="container-gfa max-w-5xl mx-auto space-y-20">
         <section className="text-center max-w-3xl mx-auto bg-white p-12 rounded-[40px] shadow-xl border border-gfa-border -mt-32 relative z-20">
          <p className="text-xl text-gfa-slate leading-relaxed font-light">
             {isEn 
               ? "Learn how AI tools are transforming scriptwriting, visual effects, editing, and production design. GFA's AI Filmmaking Training prepares the next generation for the industry of tomorrow." 
               : "了解AI工具如何改变剧本创作、视觉特效、剪辑和美术设计。GFA的AI影视制作培训为下一代电影人迎接未来的工业时代做好准备。"}
          </p>
        </section>

        <section>
           <h2 className="text-4xl font-bold font-serif text-gfa-inkBlack mb-12 text-center">
            {isEn ? "Curriculum Overview" : "课程内容"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-white p-10 rounded-[32px] border border-gfa-border hover:border-[#C9A84C]/50 transition-colors shadow-sm">
               <Cpu className="w-10 h-10 text-[#C9A84C] mb-6" />
               <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
                 {isEn ? "AI Scriptwriting Tools" : "AI剧本创作工具"}
               </h3>
               <p className="text-gfa-slate font-light">
                 {isEn ? "Leveraging LLMs for brainstorming, structuring narratives, and dialogue generation while maintaining human creativity." : "利用大语言模型进行头脑风暴、构建叙事结构和生成对话，同时保持人类的创造力。"}
               </p>
             </div>
             
             <div className="bg-white p-10 rounded-[32px] border border-gfa-border hover:border-[#C9A84C]/50 transition-colors shadow-sm">
               <ImageIcon className="w-10 h-10 text-[#C9A84C] mb-6" />
               <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
                 {isEn ? "AI Visual Effects & Image Generation" : "AI视觉特效与图像生成"}
               </h3>
               <p className="text-gfa-slate font-light">
                 {isEn ? "Creating storyboards and pre-viz using text-to-image models, and integrating AI into the VFX pipeline." : "使用文本生成图像模型创建分镜头脚本和视觉预览，并将AI集成到VFX流程中。"}
               </p>
             </div>

             <div className="bg-white p-10 rounded-[32px] border border-gfa-border hover:border-[#C9A84C]/50 transition-colors shadow-sm">
               <Scissors className="w-10 h-10 text-[#C9A84C] mb-6" />
               <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
                 {isEn ? "AI-Assisted Editing" : "AI辅助剪辑"}
               </h3>
               <p className="text-gfa-slate font-light">
                 {isEn ? "Automating rough cuts, audio sync, and color grading using intelligent editing software." : "使用智能剪辑软件实现粗剪、音频同步和色彩调级的自动化。"}
               </p>
             </div>

             <div className="bg-white p-10 rounded-[32px] border border-gfa-border hover:border-[#C9A84C]/50 transition-colors shadow-sm">
               <Palette className="w-10 h-10 text-[#C9A84C] mb-6" />
               <h3 className="text-2xl font-bold font-serif text-gfa-inkBlack mb-4">
                 {isEn ? "AI in Production Design" : "AI美术与场景设计"}
               </h3>
               <p className="text-gfa-slate font-light">
                 {isEn ? "Rapid iteration of set designs, lighting plans, and costume concepts using generative AI." : "利用生成式AI快速迭代布景设计、照明方案和服装概念。"}
               </p>
             </div>
          </div>
        </section>

        <section className="bg-gfa-inkBlack text-white p-12 rounded-[40px] text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover bg-center"></div>
          <div className="relative z-10">
             <h3 className="text-3xl font-bold font-serif mb-6 text-[#C9A84C]">
                {isEn ? "Who is this for?" : "适合人群"}
             </h3>
             <p className="text-lg font-light text-white/80 max-w-2xl mx-auto mb-10">
               {isEn 
                 ? "Designed for young filmmakers, tech-enthusiasts, and storytellers aged 14+. No prior coding experience required." 
                 : "专为14岁以上的年轻电影制作人、科技爱好者和故事创作者设计。无需任何编程经验。"}
             </p>
             <button className="bg-white text-gfa-inkBlack px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#C9A84C] hover:text-white transition-colors">
                {isEn ? "Join the Waitlist" : "加入候补名单"}
             </button>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProgramDiverseEthnicity;
