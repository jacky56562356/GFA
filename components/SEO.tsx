
import React, { useEffect } from 'react';
import { useLocale } from '../LocaleContext.tsx';

interface Props {
  title: string;
  description?: string;
}

const SEO: React.FC<Props> = ({ title, description }) => {
  const { t } = useLocale();

  useEffect(() => {
    // Append site name to title
    const siteName = t.meta?.siteName || "Global Film Alliance";
    document.title = `${title} | ${siteName}`;
    
    // Update meta description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description, t]);

  return null;
};

export default SEO;
