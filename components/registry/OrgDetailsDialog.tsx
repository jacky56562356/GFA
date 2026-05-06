
import React from 'react';
import { RegistryOrg } from '../../lib/registry/types.ts';
import { useLocale } from '../../LocaleContext.tsx';
import { calculateTrustGrade } from '../../lib/registry/scoring.ts';

interface Props {
  org: RegistryOrg | null;
  onClose: () => void;
}

const OrgDetailsDialog: React.FC<Props> = ({ org, onClose }) => {
  const { t } = useLocale();

  if (!org) return null;

  const indicatorLabels: Record<keyof RegistryOrg['indicators'], string> = {
    documentationVerified: "Documentation Audit",
    feeTransparency: "Fee Disclosure",
    contractClarity: "Contractual Ethics",
    safeguardingPolicy: "Minor Safeguarding",
    complaintResponsiveness: "Public Accountability"
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 bg-gfa-black/95 backdrop-blur-3xl animate-fade-in">
      <div className="bg-gfa-darkGray border border-gfa-gold/20 w-full max-w-5xl max-h-[92vh] overflow-y-auto relative shadow-6xl rounded-sm">
        {/* Top Header Controls */}
        <div className="sticky top-0 right-0 p-8 flex justify-end z-20 pointer-events-none">
          <button 
            onClick={onClose}
            className="text-gfa-gray hover:text-white text-4xl transition-all duration-300 pointer-events-auto hover:rotate-90"
          >
            &times;
          </button>
        </div>

        <div className="p-8 md:p-20 pt-0">
          <header className="flex flex-col md:flex-row gap-12 items-center mb-20 border-b border-white/10 pb-16">
            <div className="w-40 h-40 grayscale group-hover:grayscale-0 rounded-sm border border-white/10 p-3 bg-gfa-black/60 shadow-inner flex items-center justify-center text-5xl gold font-black">
               {org.name.slice(0,1).toUpperCase()}
            </div>
            <div className="text-center md:text-left flex-grow">
              <div className="flex flex-wrap items-center gap-4 mb-6 justify-center md:justify-start">
                <span className={`px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] border shadow-lg ${org.certification.status === 'Active' ? 'bg-gfa-gold/10 border-gfa-gold text-gfa-gold' : 'bg-white/5 border-white/20 text-white/40'}`}>
                  {org.certification.status}
                </span>
                <span className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.3em] bg-gfa-gold text-gfa-black shadow-lg">
                  {org.certification.level}
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter gold mb-4 font-cinzel leading-none">{org.name}</h2>
              <p className="text-gfa-gray uppercase tracking-[0.4em] text-xs font-bold opacity-60">
                {org.city}, {org.country} • INSTITUTIONAL ID: {org.orgId}
              </p>
              {org.website && (
                <a href={org.website} target="_blank" rel="noreferrer" className="text-[10px] text-gfa-gold font-black uppercase tracking-[0.4em] hover:text-white mt-8 inline-block border-b border-gfa-gold/20 pb-1">
                  OFFICIAL PORTAL ↗
                </a>
              )}
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            {/* Left: Transparency Breakdown */}
            <div className="bg-white/5 p-12 border border-white/5 rounded-sm">
              <h3 className="text-2xl font-black uppercase tracking-[0.3em] text-white mb-10 border-l-3 border-gfa-gold pl-6 font-montserrat">Transparency Audit</h3>
              <div className="space-y-8">
                {Object.entries(org.indicators).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center border-b border-white/5 pb-5">
                    <span className="text-[12px] font-black uppercase tracking-[0.2em] text-gfa-gray/80">
                      {indicatorLabels[key as keyof RegistryOrg['indicators']]}
                    </span>
                    <span className={`text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-sm ${val ? 'text-gfa-gold bg-gfa-gold/5' : 'text-white/20 bg-white/5'}`}>
                      {val ? 'PASSED ✓' : 'UNVERIFIED'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Confidence Index & Audit Period */}
            <div className="flex flex-col gap-12">
              <div className="bg-gfa-black/60 p-12 border border-white/10 rounded-sm">
                <h3 className="text-2xl font-black uppercase tracking-[0.3em] text-gfa-gold mb-10 font-montserrat">Trust Confidence Index</h3>
                <div className="flex items-baseline gap-4 mb-4">
                   <div className="text-8xl font-black gold tracking-tighter font-cinzel leading-none">{org.trustScore}</div>
                   <div className="text-3xl font-serif text-white/20">/100</div>
                </div>
                <div className="text-[12px] text-gfa-gray uppercase font-black tracking-[0.4em] opacity-40">Grade Assigned: {calculateTrustGrade(org.trustScore)}</div>
              </div>

              <div className="bg-white/2 p-12 border border-white/5 rounded-sm">
                <h3 className="text-[11px] font-black uppercase tracking-[0.5em] text-gfa-gold/60 mb-8 font-montserrat">Certification Period</h3>
                <div className="grid grid-cols-2 gap-10 text-[11px] font-black uppercase tracking-[0.2em] font-montserrat">
                  <div className="space-y-2">
                    <span className="opacity-30 block">Valid From</span>
                    <span className="text-white">{org.certification.validFrom}</span>
                  </div>
                  <div className="space-y-2">
                    <span className="opacity-30 block">Valid To</span>
                    <span className="text-white">{org.certification.validTo}</span>
                  </div>
                  <div className="space-y-2">
                    <span className="opacity-30 block">Last Full Audit</span>
                    <span className="text-white">{org.certification.lastReviewedAt}</span>
                  </div>
                  <div className="space-y-2">
                    <span className="opacity-30 block text-gfa-gold/60">Next Scheduled</span>
                    <span className="text-gfa-gold">{org.certification.nextReviewAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-20">
            <div className="max-w-4xl">
              <h3 className="text-2xl font-black uppercase tracking-[0.3em] text-white mb-8 font-montserrat">Institutional Profile</h3>
              <p className="text-gfa-gray text-lg leading-loose uppercase tracking-widest opacity-80 font-medium">
                {org.description || "The full institutional description is currently being audited for international translation compliance."}
              </p>
            </div>
            
            {org.disclosures && org.disclosures.length > 0 && (
              <div>
                <h3 className="text-2xl font-black uppercase tracking-[0.3em] text-white mb-10 font-montserrat">Verified Disclosures</h3>
                <div className="flex flex-wrap gap-4">
                  {org.disclosures.map(d => (
                    <span key={d} className="bg-gfa-gold/5 px-6 py-3 border border-gfa-gold/20 text-[11px] font-black uppercase tracking-[0.3em] text-gfa-gold">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-32 pt-16 border-t border-white/10 text-center flex flex-col md:flex-row justify-center gap-8">
            <button className="bg-white/5 border border-white/20 text-white px-16 py-5 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-gfa-black transition-all duration-500 rounded-sm">
              Initiate Inquiry
            </button>
            <button 
              onClick={onClose}
              className="btn-gold px-16 py-5 text-[11px]"
            >
              Exit Institutional Profile
            </button>
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-[10px] text-gfa-gray/30 uppercase tracking-[0.5em] leading-loose max-w-3xl mx-auto italic font-bold">
              {t.registry.disclaimerBody}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgDetailsDialog;
