
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Card, Button, Badge, Input } from '../components/UI';
import { User, Certification, CertType, CertStatus } from '../types';

const CertificationCenter: React.FC<{ user: User }> = ({ user }) => {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getCertifications(user.id).then(data => {
      setCerts(data);
      setLoading(false);
    });
  }, [user.id]);

  const handleApply = async (type: CertType) => {
    await api.applyForCert(type);
    const updated = await api.getCertifications(user.id);
    setCerts(updated);
    alert("Application submitted! Our verification team will review your data within 48 hours.");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="text-center">
        <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">GFA <span className="text-gold">Certification</span></h1>
        <p className="text-zinc-500 max-w-lg mx-auto">Verify your skills, agency, or production to gain access to the global film industry's inner circle.</p>
      </header>

      {/* Active Certs */}
      <section className="space-y-6">
        <h2 className="text-xl font-black uppercase tracking-widest text-zinc-400">Your Documents</h2>
        {certs.length === 0 ? (
          <Card className="p-12 text-center border-dashed">
            <p className="text-zinc-500 mb-6">You have no active or pending certifications.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certs.map(cert => (
              <Card key={cert.id} className="p-6 relative overflow-hidden">
                <div className="flex justify-between mb-8">
                  <div>
                    <Badge color={cert.status === 'APPROVED' ? 'gold' : 'zinc'}>{cert.type}</Badge>
                    <h4 className="text-lg font-bold mt-2">{cert.certNo}</h4>
                    <p className="text-[10px] text-zinc-500 uppercase font-black">Issued: {cert.issuedAt || 'Pending'}</p>
                  </div>
                  <div className="w-16 h-16 bg-white p-1 rounded-lg">
                     {cert.qrUrl ? <img src={cert.qrUrl} className="w-full h-full" alt="QR" /> : <div className="w-full h-full bg-zinc-200 animate-pulse"></div>}
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <span className="text-xs font-bold uppercase tracking-widest">{cert.status}</span>
                  <Button variant="ghost" className="text-[10px]">Verification Link</Button>
                </div>
                {cert.status === 'APPROVED' && <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/5 blur-2xl"></div>}
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Applications */}
      <section className="space-y-6">
        <h2 className="text-xl font-black uppercase tracking-widest text-gold">Apply for New</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { type: CertType.TALENT_CERT, title: 'Professional Actor', desc: 'Required for lead roles in verified productions.' },
            { type: CertType.AGENCY_CERT, title: 'Talent Agency', desc: 'Accreditation for companies managing professional talent.' },
            { type: CertType.SCHOOL_CERT, title: 'Training School', desc: 'Certify your curriculum and faculty with GFA standards.' },
            { type: CertType.AUDITION_CERT, title: 'Certified Process', desc: 'Run your auditions through GFA’s ethical protocol.' }
          ].map(item => (
            <Card key={item.type} className="p-6 flex flex-col">
              <h3 className="font-black text-lg mb-1">{item.title}</h3>
              <p className="text-xs text-zinc-500 mb-6 flex-1">{item.desc}</p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => handleApply(item.type)}
                disabled={certs.some(c => c.type === item.type)}
              >
                {certs.some(c => c.type === item.type) ? 'Application Active' : 'Begin Application'}
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CertificationCenter;
