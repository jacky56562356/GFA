import React, { useState } from 'react';
import { useLocale } from '../LocaleContext.tsx';
import { Locale } from '../types.ts';
import SEO from '../components/SEO.tsx';
import { 
  CreditCard, 
  Mail, 
  Handshake, 
  ShieldCheck, 
  FileText, 
  Check, 
  Lock,
  ChevronDown
} from 'lucide-react';

const Donate: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;

  const [amount, setAmount] = useState<string>('250');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('one-time');

  const handleDonateSubmit = () => {
    alert(isEn ? "Thank you for your support! Redirecting to secure payment..." : "感谢您的支持！我们将跳转到安全支付页面...");
  };

  const amounts = [
    {
      value: '25',
      enDesc: 'One day of camp for a youth filmmaker',
      zhDesc: '为一位孩子提供一天的营地体验'
    },
    {
      value: '50',
      enDesc: 'One mentorship session for a film graduate',
      zhDesc: '支付一位毕业生一次导师指导课'
    },
    {
      value: '100',
      enDesc: 'Equipment rental for one day of production',
      zhDesc: '为一部短片支付一天的设备租金'
    },
    {
      value: '250',
      enDesc: 'Full camp scholarship for a low-income youth',
      zhDesc: '资助一位低收入学生参加完整影视夏令营'
    },
    {
      value: '500',
      enDesc: 'One month mentorship for an emerging director',
      zhDesc: '为一位新晋导演提供一个月的导师计划'
    },
    {
      value: '1000',
      enDesc: 'Name an annual scholarship in your honor',
      zhDesc: '以你的名字命名一个年度奖学金名额'
    }
  ];

  return (
    <div className="font-sans">
      <SEO title="Donate | Global Film Alliance" />

      {/* 2. Hero情感区 */}
      <section className="bg-[#0D1B2A] text-white min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-24 md:pt-32 pb-20">
        <div className="container-gfa max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-[#C9A043]/10 border border-[#C9A043]/30 px-6 py-2 rounded-full mb-8">
            <span className="text-[#C9A043] font-bold text-xs uppercase tracking-widest">
              {isEn ? "MAKE A DIFFERENCE" : "MAKE A DIFFERENCE · 让改变发生"}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif leading-tight mb-8">
             {isEn ? (
                <>Your Gift Opens the Door<br/>for a Talented Filmmaker</>
             ) : (
                <>你的捐款<br/>帮一个有才华的人打开那扇门</>
             )}
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            {isEn 
              ? "Every dollar goes directly to helping film graduates break into the industry — and giving youth without resources a chance to discover their voice through film."
              : "每一分捐款，直接用于帮助电影专业毕业生突破行业壁垒，为没有资源的孩子提供影视教育机会。"}
          </p>
          
          <div className="flex flex-col gap-3 text-[#C9A043] justify-center items-center font-bold text-sm md:text-base tracking-wider">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5"/> {isEn ? "100% Tax-Deductible" : "100% Tax-Deductible · 捐款全额可抵税"}
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5"/> EIN: 33-4817276 · 501(c)(3) Certified
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* 3. 捐款理由区 */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0D1B2A] mb-12">
            {isEn ? "Why Your Gift Matters" : "为什么你的捐款很重要"}
          </h2>
          
          <blockquote className="text-2xl md:text-3xl font-serif text-[#0D1B2A] leading-relaxed max-w-4xl mx-auto mb-16 italic">
            "{isEn 
              ? "Some filmmakers have the talent to change the industry — but without a camera, without a mentor who knows them, their stories are never told. Your donation is the force that changes that outcome."
              : "有些电影人，才华足以改变这个行业，但因为没有一台摄影机，没有一个认识他们的导师，他们的故事永远没有被讲出来。你的捐款，就是改变这个结果的力量。"}"
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#0D1B2A] rounded-2xl p-8 transform transition-transform hover:-translate-y-2">
               <div className="text-5xl font-bold font-serif text-[#C9A043] mb-4">42,000</div>
               <p className="text-white text-sm md:text-base font-light">
                 {isEn ? "Film jobs lost in LA in 2 years" : "洛杉矶两年内流失的影视岗位"}
               </p>
            </div>
            <div className="bg-[#0D1B2A] rounded-2xl p-8 transform transition-transform hover:-translate-y-2">
               <div className="text-5xl font-bold font-serif text-[#C9A043] mb-4">5,000+</div>
               <p className="text-white text-sm md:text-base font-light">
                 {isEn ? "CA film graduates entering market yearly" : "每年涌入市场的加州影视毕业生"}
               </p>
            </div>
            <div className="bg-[#0D1B2A] rounded-2xl p-8 transform transition-transform hover:-translate-y-2">
               <div className="text-5xl font-bold font-serif text-[#C9A043] mb-4">10.9%</div>
               <p className="text-white text-sm md:text-base font-light">
                 {isEn ? "Film industry unemployment rate" : "影视行业失业率，全国均值2.5倍"}
               </p>
            </div>
          </div>
          
          <p className="text-[#C9A043] font-bold text-xl uppercase tracking-widest mt-10">
            {isEn ? "GFA is filling this gap" : "GFA正在填补这个空白"}
          </p>
        </div>
      </section>

      {/* 4. 捐款金额选择区（核心） */}
      <section className="py-20 md:py-28 bg-[#F5F2EE]" id="donate-action">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-[#0D1B2A] mb-4">
              {isEn ? "Choose Your Gift Amount" : "选择你的捐款金额"}
            </h2>
            <p className="text-gray-500 text-lg">
              {isEn ? "Every amount has a specific purpose" : "每一个金额，都有具体的用途"}
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-xl border border-gray-100">
            {/* Frequency Toggle */}
            <div className="flex flex-col items-center mb-10">
              <div className="bg-gray-100 p-1 rounded-full inline-flex mb-4 relative">
                <button 
                  onClick={() => setFrequency('one-time')}
                  className={`px-8 py-3 rounded-full font-bold text-sm transition-all z-10 ${frequency === 'one-time' ? 'bg-white text-[#0D1B2A] shadow-sm' : 'text-gray-500 hover:text-[#0D1B2A]'}`}
                >
                  {isEn ? "One-Time" : "一次性捐款"}
                </button>
                <button 
                  onClick={() => setFrequency('monthly')}
                  className={`px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 transition-all z-10 ${frequency === 'monthly' ? 'bg-[#0D1B2A] text-white shadow-sm' : 'text-gray-500 hover:text-[#0D1B2A]'}`}
                >
                  {isEn ? "Monthly" : "月度定期"}
                </button>
              </div>
              
              {frequency === 'monthly' && (
                <div className="text-center animate-fade-in">
                  <div className="inline-block bg-[#C9A043]/10 text-[#C9A043] font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-2 border border-[#C9A043]/20">
                    {isEn ? "12x the Impact" : "影响力×12"}
                  </div>
                  <p className="text-gray-600 text-sm max-w-md">
                    {isEn 
                      ? "Monthly giving allows GFA to provide consistent support, creating 12x the lasting impact."
                      : "月度捐款让GFA能够提供持续稳定的支持，影响力是一次性捐款的12倍。"}
                  </p>
                </div>
              )}
            </div>

            {/* Amounts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {amounts.map((item) => (
                <button
                  key={item.value}
                  onClick={() => { setAmount(item.value); setCustomAmount(''); }}
                  className={`p-6 rounded-2xl border-2 text-center transition-all duration-300 ${
                    amount === item.value && customAmount === ''
                      ? 'bg-[#C9A043] border-[#C9A043] text-white shadow-lg transform -translate-y-1'
                      : 'bg-white border-gray-200 text-[#0D1B2A] hover:border-[#C9A043] hover:bg-[#C9A043]/5 hover:-translate-y-1'
                  }`}
                >
                  <div className="text-3xl font-bold font-serif mb-2">${item.value}</div>
                  <div className={`text-sm leading-relaxed ${amount === item.value && customAmount === '' ? 'text-white/90' : 'text-gray-500'}`}>
                    {isEn ? item.enDesc : item.zhDesc}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-12">
              <label className="block text-sm font-bold text-[#0D1B2A] mb-2 pl-2">
                {isEn ? "Other Amount" : "Other Amount · 自定义金额"}
              </label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-xl">$</span>
                <input
                  type="number"
                  min="1"
                  placeholder={isEn ? "Enter your amount" : "输入金额"}
                  value={customAmount}
                  onClick={() => setAmount('custom')}
                  onChange={(e) => {
                    setAmount('custom');
                    setCustomAmount(e.target.value);
                  }}
                  className="w-full pl-12 pr-6 py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl text-xl font-bold text-[#0D1B2A] focus:outline-none focus:border-[#C9A043] focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleDonateSubmit}
              className="w-full bg-[#C9A043] hover:bg-[#b58f3c] text-white py-6 rounded-2xl font-bold text-lg md:text-xl transform transition-transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex flex-col items-center justify-center group"
            >
              <span className="uppercase tracking-widest mb-1">
                {isEn ? `Donate Now · Secure Payment` : `立即捐款 · 安全支付`}
                {amount !== 'custom' ? ` ($${amount})` : customAmount ? ` ($${customAmount})` : ''}
              </span>
            </button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 text-xs text-gray-500 font-medium">
               <div className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-[#C9A043]"/> {isEn ? "Secure & Encrypted" : "安全加密"}</div>
               <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#C9A043]"/> {isEn ? "You'll receive a tax receipt" : "将收到税务收据"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 捐款方式区 */}
      <section className="py-20 bg-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0D1B2A] text-center mb-16">
            {isEn ? "Ways to Give" : "捐款方式"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-100 rounded-3xl p-8 bg-gray-50">
               <div className="bg-[#0D1B2A] text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                 <CreditCard className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">
                 {isEn ? "Online" : "在线捐款 (Online)"}
               </h3>
               <p className="text-gray-600 text-sm leading-relaxed mb-4">
                 {isEn ? "Accepts: Visa / Mastercard / American Express / Discover" : "接受：Visa / Mastercard / American Express / Discover"}
               </p>
               <p className="text-gray-600 text-sm leading-relaxed mb-4">
                 PayPal / Venmo / Zelle
               </p>
               <p className="text-gray-600 text-sm leading-relaxed">
                 {isEn ? "Secure encrypted payment, instant processing. Receipt within 24 hours." : "安全加密支付，即时处理。捐款后24小时内收到电子收据。"}
               </p>
            </div>

            <div className="border border-gray-100 rounded-3xl p-8 bg-gray-50">
               <div className="bg-[#0D1B2A] text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                 <Mail className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">
                 {isEn ? "Check" : "支票捐款 (Check)"}
               </h3>
               <div className="text-gray-600 text-sm leading-relaxed">
                 <p className="mb-2 font-bold">{isEn ? "Payable to:" : "收款人请写："}</p>
                 <p className="mb-4 bg-white px-3 py-2 border rounded-lg">Global Film Alliance, Inc.</p>
                 
                 <p className="mb-2 font-bold">{isEn ? "Mailing Address:" : "邮寄地址："}</p>
                 <p className="mb-4 bg-white px-3 py-2 border rounded-lg whitespace-pre-wrap">
                   17800 Castleton St, Suite 173{"\n"}City of Industry, CA 91748
                 </p>
                 
                 <p className="italic text-xs mt-4">
                   {isEn ? "Memo: Donation for [Program]" : "请在备注栏注明：Donation for [项目名称]"}
                 </p>
               </div>
            </div>

            <div className="border border-gray-100 rounded-3xl p-8 bg-gray-50">
               <div className="bg-[#0D1B2A] text-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                 <Handshake className="w-7 h-7" />
               </div>
               <h3 className="text-xl font-bold text-[#0D1B2A] mb-4">
                 {isEn ? "Corporate Matching" : "企业匹配捐款 (Matching)"}
               </h3>
               <p className="text-gray-600 text-sm leading-relaxed mb-6">
                 {isEn 
                   ? "Many companies offer employee matching programs. Your donation could be doubled!" 
                   : "很多企业提供员工捐款匹配计划，你的捐款可能被翻倍！"}
               </p>
               <div className="bg-white px-4 py-3 border rounded-xl mb-6">
                 <p className="text-xs text-gray-500 mb-1">{isEn ? "Ask your HR:" : "请向你的HR询问："}</p>
                 <p className="text-[#0D1B2A] font-medium text-sm italic">"Does our company match charitable donations?"</p>
               </div>
               <p className="text-gray-600 text-sm leading-relaxed">
                 {isEn ? "For matching verification:" : "如需GFA的匹配捐款证明，请联系："}<br/>
                 <a href="mailto:jacky@gfafilm.org" className="text-[#C9A043] font-bold hover:underline mt-1 inline-block">jacky@gfafilm.org</a>
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 企业赞助区 */}
      <section className="py-20 md:py-28 bg-[#0D1B2A] text-white">
        <div className="container-gfa max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">
              {isEn ? "Corporate Partnership" : "企业赞助合作"}
            </h2>
            <p className="text-gray-400 text-lg">
              {isEn ? "Connect your brand with the next generation of Hollywood talent." : "将您的品牌与下一代好莱坞人才连接"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
            {/* Community Partner */}
            <div className="border border-white/10 rounded-3xl p-8 bg-white/5 hover:border-[#C9A043]/50 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white/10 text-white font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-6">Community Partner</div>
              <div className="text-4xl font-serif font-bold text-[#C9A043] mb-8 border-b border-white/10 pb-6">$1,000+</div>
              <ul className="space-y-4 mb-10 text-sm text-gray-300 font-light">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Website acknowledgment" : "官网致谢页 Logo 展示"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Social media shoutout (1x)" : "社交媒体感谢帖（1次）"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Annual report listing" : "年度报告致谢"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Digital certificate" : "电子感谢证书"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Priority event invites" : "GFA 活动优先邀请"}</li>
              </ul>
              <button className="w-full border border-white hover:bg-white hover:text-[#0D1B2A] py-3 rounded-full font-bold text-sm tracking-wide transition-colors">
                {isEn ? "Become Community Partner" : "成为社区合作伙伴"}
              </button>
            </div>

            {/* Silver Partner (Highlighted) */}
            <div className="border-2 border-gray-400 rounded-3xl p-10 bg-white/10 transform md:scale-105 hover:border-gray-300 hover:-translate-y-2 transition-all duration-300 relative z-10 shadow-2xl">
              <div className="bg-gradient-to-r from-gray-300 to-gray-500 text-[#0D1B2A] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-6">Silver Partner</div>
              <div className="text-5xl font-serif font-bold text-white mb-8 border-b border-white/20 pb-6">$5,000+</div>
              <ul className="space-y-4 mb-10 text-sm text-gray-200 font-light">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Logo on website" : "官网 Logo 展示"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Event brand integration" : "活动现场品牌展示"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Golden Feather Awards VIP seats (2)" : "Golden Feather Awards 颁奖礼席位（2位）"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Social media shoutouts (3x)" : "社交媒体感谢帖（3次）"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Annual report listing" : "年度报告致谢"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Digital certificate" : "电子感谢证书"}</li>
              </ul>
              <button className="w-full bg-gray-300 hover:bg-white text-[#0D1B2A] py-4 rounded-full font-bold text-sm tracking-wide transition-colors shadow-lg">
                {isEn ? "Become Silver Partner" : "成为银牌合作伙伴"}
              </button>
            </div>

            {/* Gold Partner */}
            <div className="border border-[#C9A043]/50 rounded-3xl p-8 bg-[#C9A043]/5 hover:border-[#C9A043] hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#C9A043] text-[#0D1B2A] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-6">Gold Partner</div>
              <div className="text-4xl font-serif font-bold text-[#C9A043] mb-8 border-b border-[#C9A043]/20 pb-6">$10,000+</div>
              <ul className="space-y-4 mb-10 text-sm text-gray-300 font-light">
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Premium logo placement" : "官网首页 Logo 展示"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "All events brand integration" : "所有活动现场品牌展示"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Golden Feather Awards VIP seats (4)" : "Golden Feather Awards 颁奖礼 VIP 席位（4位）"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Dolby Theatre finals exposure" : "Dolby Theatre 决赛品牌曝光"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Dedicated social feature" : "社交媒体专题感谢帖"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Annual report cover acknowledgment" : "年度报告封面致谢"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Joint press release" : "联合新闻稿发布"}</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-[#C9A043] shrink-0"/> {isEn ? "Exclusive content collabs" : "独家内容合作机会"}</li>
              </ul>
              <button className="w-full bg-[#C9A043] hover:bg-[#b08e3d] text-[#0D1B2A] py-3 rounded-full font-bold text-sm tracking-wide transition-colors">
                {isEn ? "Become Gold Partner" : "成为金牌合作伙伴"}
              </button>
            </div>
          </div>

          <div className="text-center text-gray-400 font-light text-sm bg-white/5 py-4 rounded-xl border border-white/10 max-w-2xl mx-auto">
             {isEn ? "For custom partnership packages, please contact:" : "如需定制赞助方案，请联系："} <br className="md:hidden" />
             <a href="mailto:jacky@gfafilm.org" className="text-[#C9A043] font-bold mx-2">jacky@gfafilm.org</a> | 
             <span className="text-white ml-2">626-677-8017</span>
          </div>
        </div>
      </section>

      {/* 7. 税务声明区 */}
      <section className="py-20 bg-[#F5F2EE]">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-12 text-center shadow-sm">
            <h2 className="text-2xl font-bold font-serif text-[#0D1B2A] mb-8">
              {isEn ? "Tax Deductibility" : "税务抵扣说明"}
            </h2>
            
            <div className="text-gray-600 font-light text-sm md:text-base max-w-2xl mx-auto space-y-6 mb-10 leading-relaxed">
              <p className="font-medium text-[#0D1B2A]">
                Global Film Alliance, Inc. is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent permitted by law. No goods or services were provided in exchange for this contribution. EIN: 33-4817276
              </p>
              {!isEn && (
                <p>
                  全球电影联盟（Global Film Alliance, Inc.）是美国国税局认证的501(c)(3)非营利组织。您的所有捐款均可在美国联邦税申报时全额抵扣，我们将在捐款后24小时内通过电子邮件发送官方捐款收据。
                </p>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck className="w-8 h-8 text-[#C9A043]" />
                <span className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider">501(c)(3) Certified</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FileText className="w-8 h-8 text-[#C9A043]" />
                <span className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider">EIN: 33-4817276</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-8 h-8 text-[#C9A043]" />
                <span className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider">Receipt within 24 hours</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Lock className="w-8 h-8 text-[#C9A043]" />
                <span className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider">Secure & Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 捐款人感谢区 */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container-gfa max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0D1B2A] mb-4">
              {isEn ? "Thank You to Our Supporters" : "感谢我们的支持者"}
            </h2>
            <p className="text-gray-500 text-lg italic">
              {isEn ? "Because of them, more doors are being opened." : "正是因为他们，更多电影人的门被打开了"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
             <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="font-bold text-[#0D1B2A] text-lg mb-1">Sarah M.</div>
                <div className="text-[#C9A043] font-bold mb-2">$500</div>
                <div className="text-xs text-gray-500 border-t pt-2 mt-2">Monthly Donor</div>
             </div>
             <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="font-bold text-[#0D1B2A] text-lg mb-1">The Chen Family</div>
                <div className="text-[#C9A043] font-bold mb-2">$1,000</div>
                <div className="text-xs text-gray-500 border-t pt-2 mt-2">Gold Supporter</div>
             </div>
             <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="font-bold text-gray-400 text-lg mb-1 italic">Anonymous</div>
                <div className="text-[#C9A043] font-bold mb-2">$250</div>
                <div className="text-xs text-gray-500 border-t pt-2 mt-2">Youth Scholarship Fund</div>
             </div>
             <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="font-bold text-[#0D1B2A] text-lg mb-1">David L.</div>
                <div className="text-[#C9A043] font-bold mb-2">$100</div>
                <div className="text-xs text-gray-500 border-t pt-2 mt-2">Equipment Fund</div>
             </div>
          </div>

          <p className="text-center text-sm text-gray-400 font-light">
            {isEn 
              ? "Your information will remain completely confidential if you choose to donate anonymously. If you prefer, your name will be displayed here."
              : "如需匿名，您的信息将完全保密。如愿意公开，您的名字将显示在此。"}
          </p>
        </div>
      </section>

      {/* 9. 最终CTA区 */}
      <section className="py-24 bg-[#0D1B2A] text-center border-t border-white/10">
        <div className="container-gfa max-w-4xl mx-auto px-4">
          <blockquote className="text-2xl md:text-4xl font-serif text-white leading-relaxed max-w-3xl mx-auto mb-12 italic">
            "{isEn 
              ? "A talented filmmaker shouldn't have to give up because they can't afford the gear."
              : "一个有才华的毕业生，不应该因为买不起摄影机而放弃成为导演的梦想。"}"
          </blockquote>

          <button 
            onClick={() => {
              const el = document.getElementById('donate-action');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full md:w-auto px-12 py-5 bg-[#C9A043] hover:bg-[#b08e3d] text-white rounded-full font-bold uppercase tracking-widest text-sm md:text-base transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-lg mb-6"
          >
            {isEn ? "Donate Now · Change Someone's Story" : "立即捐款 · 改变一个人的故事"}
          </button>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-light text-gray-400 tracking-wider uppercase">
             <span>100% Tax-Deductible</span>
             <span className="hidden sm:inline">•</span>
             <span>EIN: 33-4817276</span>
             <span className="hidden sm:inline">•</span>
             <span>Secure Payment</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Donate;

