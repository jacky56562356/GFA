
import React from 'react';
import { useLocale } from '../LocaleContext';
import { Locale } from '../types';

interface Props {
  type: 'privacy' | 'terms' | 'consent' | 'content';
}

const PolicyPage: React.FC<Props> = ({ type }) => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;
  
  const getPolicyContent = () => {
    if (type === 'privacy') {
      return {
        title: isEn ? "Privacy Policy" : "隐私政策",
        summary: isEn 
          ? "This Privacy Policy describes how Global Film Alliance (\"GFA\", \"we\", \"us\", or \"our\") collects, uses, and shares your personal information. It also explains your rights regarding your data and how to contact us."
          : "本隐私政策说明了全球电影联盟 (“GFA”、“我们”或“我们的”) 如何收集、使用和分享您的个人信息，并解释了您对您的数据享有的权利以及如何联系我们。",
        sections: isEn ? {
          "1. Information We Collect": "We may collect personal information such as your name, email address, phone number, and any other details you provide when you interact with our programs, subscribe to our newsletter, or use our website. We also automatically collect certain device and usage information, including IP addresses, cookies, and browsing activity.",
          "2. How We Use Your Information": "We use the collected information to operate and improve our website, deliver our services, communicate with you, process donations, and personalize your experience. We may also use your data for marketing and targeted advertising.",
          "3. Cookies and Advertising (Google AdSense)": "We use cookies and similar technologies to enhance user experience and show relevant ads. Third party vendors, including Google, use cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our sites and/or other sites on the Internet. You may opt out of personalized advertising by visiting Google's Ads Settings.",
          "4. Third-Party Links and Vendors": "Our site may feature advertisements served by third-party vendors. You can opt out of some third-party vendor's uses of cookies for personalized advertising by visiting www.aboutads.info. Our website may also contain links to other sites. We are not responsible for the privacy practices of those other sites.",
          "5. Your Rights": "Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal data. To exercise these rights, please contact us at jacky@gfafilm.org.",
          "6. Changes to This Policy": "We may update this Privacy Policy from time to time. The updated version will be indicated by an updated \"Last Updated\" date and the updated version will be effective as soon as it is accessible."
        } : {
          "1. 我们收集的信息": "当您参与我们的项目、订阅新闻或访问我们的网站时，我们可能会收集您的姓名、电子邮件地址、电话号码及其他详细信息。我们还会自动收集特定的设备和使用信息，包括IP地址、Cookie和浏览活动。",
          "2. 我们如何使用您的信息": "我们使用收集的信息来运营和改善我们的网站、提供服务、与您沟通、处理捐款以及个性化您的体验。我们也可能将您的数据用于营销和定向广告。",
          "3. Cookie 和广告 (Google AdSense)": "我们使用 Cookie 及类似技术来增强用户体验并展示相关广告。包括 Google 在内的第三方供应商使用 Cookie 来根据您之前对我们网站或其他网站的访问投放广告。Google 及其合作伙伴使用广告 Cookie，使其能够根据您对我们网站和/或互联网上其他网站的访问向您提供广告。您可以访问 Google 广告设置 (Ads Settings) 选择停用个性化广告。",
          "4. 第三方链接及供应商": "我们的网站可能包含由第三方供应商提供的广告。您可以访问 www.aboutads.info 选择停用部分第三方供应商对个性化广告 Cookie 的使用。我们的网站也可能包含指向其他网站的链接。我们对这些其他网站的隐私惯例不承担责任。",
          "5. 您的权利": "根据您所在的地区，您可能有权访问、更正、删除或限制使用您的个人数据。如需行使这些权利，请联系 jacky@gfafilm.org。",
          "6. 政策变更": "我们可能会不时更新本隐私政策。更新后的版本将通过更新的“最后更新”日期注明，更新后的版本在访问时即刻生效。"
        }
      };
    } else if (type === 'terms') {
      return {
        title: isEn ? "Terms of Service" : "服务条款",
        summary: isEn 
          ? "Welcome to Global Film Alliance. By accessing our website, you agree to comply with and be bound by the following terms and conditions."
          : "欢迎访问全球电影联盟。访问本网站即表示您同意遵守以下条款和条件。",
        sections: isEn ? {
          "1. Acceptance of Terms": "By accessing or using our website, programs, or services, you agree to be legally bound by these Terms of Service. If you do not agree to these terms, please do not use our site.",
          "2. Use of Website": "You agree to use the site for lawful purposes only. You must not use the site in a way that infringes the rights of anyone else or restricts or inhibits anyone else's use and enjoyment of the website.",
          "3. Intellectual Property": "All content on this website, including texts, graphics, logos, images, and software, is the property of Global Film Alliance or its content suppliers and is protected by copyright and other intellectual property laws.",
          "4. Disclaimers and Limitations of Liability": "The website is provided on an \"as is\" and \"as available\" basis without any representations or warranties. Global Film Alliance will not be liable for any indirect, special, or consequential loss or damage arising out of or in connection with the use of the website.",
          "5. Links to Other Websites": "Our website may contain links to third-party web sites or services that are not owned or controlled by Global Film Alliance. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third party web sites or services.",
          "6. Governing Law": "These terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions."
        } : {
          "1. 接受条款": "通过访问或使用我们的网站、项目或服务，您同意受这些服务条款的法律约束。如果您不同意这些条款，请勿使用我们的网站。",
          "2. 网站使用": "您同意仅出于合法目的使用本网站。您不得以侵犯他人权利或限制、阻碍他人使用和享受本网站的方式使用本网站。",
          "3. 知识产权": "本网站上的所有内容，包括文本、图形、徽标、图像和软件，均为全球电影联盟或其内容供应商的财产，受版权和其他知识产权法律保护。",
          "4. 免责声明和责任限制": "本网站按“原样”和“可用”基础提供，无任何声明或保证。全球电影联盟对因使用本网站或与使用本网站相关的任何间接、特殊或结果性损失或损害概不负责。",
          "5. 其他网站链接": "我们的网站可能包含非由全球电影联盟所有或控制的第三方网站或服务的链接。我们对任何第三方网站或服务的内容、隐私政策或惯例无法控制，也不承担任何责任。",
          "6. 管辖法律": "本条款受美国加利福尼亚州法律管辖并据其解释，不考虑其冲突法条款。"
        }
      };
    }
    
    // Default fallback for consent / content paths 
    return {
      title: isEn ? "Policies" : "政策与规定",
      summary: isEn ? "Global Film Alliance policies and guidelines." : "全球电影联盟政策与指南。",
      sections: isEn ? {
        "General": "Please visit specific policy pages for more details."
      } : {
        "一般说明": "请访问具体的政策页面以获取更多详细信息。"
      }
    };
  };

  const currentPolicy = getPolicyContent();

  return (
    <div className="py-24 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-gfa-inkBlack">{currentPolicy.title}</h1>
      <p className="text-gfa-slate font-light text-lg mb-12 leading-relaxed">
        {currentPolicy.summary}
      </p>

      <div className="space-y-12">
        {Object.entries(currentPolicy.sections).map(([key, value]) => (
          <div key={key} className="bg-white p-10 border border-gfa-border rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold font-serif mb-6 text-gfa-inkBlack pb-4 border-b border-gfa-border">
              {key}
            </h3>
            <div className="text-gfa-slate font-light leading-relaxed text-sm md:text-base">
              {String(value)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-10 border-t border-white/5 text-center">
        <p className="text-gfa-gray text-xs font-bold uppercase tracking-widest">
          {isEn ? "Last Updated: May 2026 • Global Compliance Office" : "最后更新：2026年5月 • 全球合规办公室"}
        </p>
      </div>
    </div>
  );
};

export default PolicyPage;
