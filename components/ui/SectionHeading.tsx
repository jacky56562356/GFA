import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<Props> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-grid-10 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="mb-grid-2 gold gold-shimmer uppercase leading-[1.2] font-serif tracking-[0.04em]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gfa-gray text-base max-w-3xl mx-auto uppercase tracking-[0.2em] font-medium opacity-60 leading-relaxed mt-grid-2">
          {subtitle}
        </p>
      )}
      <div className={`mt-grid-4 h-1 w-24 bg-gfa-gold/40 rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;