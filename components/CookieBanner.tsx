import React, { useState, useEffect } from "react";
import { useLocale } from "../LocaleContext";
import { Locale } from "../types";
import { Link } from "react-router-dom";

const CookieBanner: React.FC = () => {
  const { locale } = useLocale();
  const isEn = locale === Locale.EN;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gfa_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("gfa_cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gfa-inkBlack text-white p-4 md:p-6 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.2)]">
      <div className="container-gfa max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/80 leading-relaxed max-w-4xl">
          {isEn
            ? (
              <>
                We and our partners (including Google) use cookies to personalize content, show targeted ads, provide social media features, and analyze our traffic. 
                By clicking "Accept", you consent to our use of cookies as described in our{" "}
                <Link to="/policy/privacy" className="underline hover:text-[#C9A84C]">Privacy Policy</Link>.
              </>
            ) : (
              <>
                我们和我们的合作伙伴（包括Google）使用Cookie来提供个性化内容、展示定向广告、提供社交媒体功能并分析流量。
                点击“接受”即表示您同意我们按照{" "}
                <Link to="/policy/privacy" className="underline hover:text-[#C9A84C]">隐私政策</Link>{" "}
                中的说明使用Cookie。
              </>
            )}
        </div>
        <div className="flex gap-4 shrink-0 w-full md:w-auto">
          <button 
            onClick={acceptCookies}
            className="flex-1 md:flex-none bg-[#C9A84C] text-black px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors"
          >
            {isEn ? "Accept" : "接受"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
