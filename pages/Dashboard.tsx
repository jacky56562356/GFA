
import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { gemini } from '../services/gemini';
import { Card, Button, Badge } from '../components/UI';
import { User, Submission, Certification, TalentProfile, Merchant } from '../types';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard: React.FC<{ user: User }> = ({ user }) => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [certs, setCerts] = useState<Certification[]>([]);
  const [profile, setProfile] = useState<TalentProfile | null>(null);
  const [merchants, setMerchants] = useState<Merchant[]>([]);
  const [aiInsight, setAiInsight] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true);
      try {
        const [subs, currentCerts, talents, allMerchants] = await Promise.all([
          api.getSubmissionsForUser(user.id),
          api.getCertifications(user.id),
          api.getTalents(),
          api.getMerchants()
        ]);
        
        setSubmissions(subs);
        setCerts(currentCerts);
        setMerchants(allMerchants);
        
        const myProfile = talents.find(t => t.userId === user.id);
        if (myProfile) {
          setProfile(myProfile);
          const insight = await gemini.generateTalentSummary(myProfile);
          setAiInsight(insight);
        }
      } catch (error) {
        console.error("Dashboard data failed to sync:", error);
      } finally {
        setLoading(false);
      }
    };
    loadDashboardData();
  }, [user.id]);

  if (loading) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
      <div className="w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin"></div>
      <p className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.3em]">Syncing GFA Ecosystem...</p>
    </div>
  );

  return (
    <div className="space-y-12 pb-24">
      {/* 1. Hero Hub - Industry Portal */}
      <section className="relative h-[400px] md:h-[460px] rounded-[3rem] overflow-hidden border border-zinc-800 shadow-2xl group">
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          alt="Film Industry"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Badge color="gold" className="mb-4">Global Film & Acting Platform</Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none mb-4">
              Connect. <span className="text-gold">Verify.</span> Cast.
            </h1>
            <p className="text-zinc-300 text-lg font-medium max-w-lg mb-6 leading-relaxed">
              Welcome back, <span className="text-white font-black">{user.name}</span>. The industry's premier ecosystem for certified talent and productions.
            </p>
            <div className="flex gap-3">
              <Button onClick={() => navigate('/projects')} className="px-8 h-14 text-base">Explore Auditions</Button>
              <Button variant="outline" onClick={() => navigate('/talents')} className="px-8 h-14 text-base">Talent Database</Button>
            </div>
          </div>
          
          {/* AI Pulse Bubble */}
          <div className="hidden lg:block w-80 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-gold rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase text-gold tracking-widest">Industry Pulse</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed italic">
              {aiInsight || "Analyzing the current casting market... Talent with martial arts and dialect skills are currently in high demand for upcoming Neo-Tokyo projects."}
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Function Grid */}
      <section>
        <div className="flex items-center justify-between mb-8 px-2">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500">Master Operations</h2>
          <div className="h-px flex-1 bg-zinc-900 mx-6"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <QuickLink 
            title="Audition OS" 
            desc="Live casting calls" 
            icon="🎬" 
            path="/projects" 
          />
          <QuickLink 
            title="Talent DB" 
            desc="Network globally" 
            icon="🔍" 
            path="/talents" 
          />
          <QuickLink 
            title="Member Perks" 
            desc="Claim merchant deals" 
            icon="🎁" 
            path="/perks" 
            highlight
          />
          <QuickLink 
            title="Digital Vault" 
            desc="Portfolio & Media" 
            icon="📂" 
            path="/" 
          />
        </div>
      </section>

      {/* 3. Certification Authority Hub */}
      <section className="bg-zinc-950 border border-zinc-900 rounded-[3rem] p-10 md:p-14">
        <div className="max-w-xl mb-12">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Professional <span className="text-gold">Standards</span></h2>
          <p className="text-zinc-500 font-medium">Get GFA Certified to unlock pro features, gain trust, and appear first in production searches.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CertCard 
            title="Talent Actor" 
            desc="For professional performers seeking lead & supporting roles." 
            type="ACTOR"
            onApply={() => navigate('/certs')}
          />
          <CertCard 
            title="Minor/Child" 
            desc="Legal verification and guardian management for child actors." 
            type="CHILD"
            onApply={() => navigate('/certs')}
          />
          <CertCard 
            title="Agency Pro" 
            desc="Accreditation for talent agencies and management firms." 
            type="AGENCY"
            onApply={() => navigate('/certs')}
          />
          <CertCard 
            title="Education" 
            desc="Verification for acting schools and film institutions." 
            type="SCHOOL"
            onApply={() => navigate('/certs')}
          />
        </div>
      </section>

      {/* 4. Merchant Showcase (Featured Perks) */}
      <section className="space-y-8">
        <div className="flex items-center justify-between px-2">
          <div>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500 mb-2">Merchant Ecosystem</h2>
            <h3 className="text-3xl font-black uppercase italic tracking-tight">Curated <span className="text-gold">Deals</span></h3>
          </div>
          <Button variant="outline" onClick={() => navigate('/perks')} className="text-[10px] px-6">Explore All Merchants</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {merchants.slice(0, 3).map(merchant => (
            merchant.deals.map(deal => (
              <Card key={deal.id} className="group border-zinc-900 hover:border-gold/30 cursor-pointer overflow-hidden transition-all duration-500" onClick={() => navigate('/perks')}>
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img src={`https://picsum.photos/seed/${deal.id}/800/450`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge color="gold" className="backdrop-blur-md bg-black/40 border-gold/20">Featured Perk</Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <img src={merchant.logo} className="w-6 h-6 rounded-full grayscale group-hover:grayscale-0 transition-all" alt="" />
                    <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">{merchant.name}</span>
                  </div>
                  <h4 className="text-xl font-black group-hover:text-gold transition-colors mb-2 uppercase">{deal.title}</h4>
                  <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">{deal.description}</p>
                </div>
              </Card>
            ))
          ))}
        </div>
      </section>

      {/* 5. Quick Pipeline Glance */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
           <Card className="p-10 border-zinc-900 bg-zinc-950 h-full">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-600 mb-8">Submission Pipeline</h4>
              {submissions.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10 text-center opacity-50">
                  <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-4">🎬</div>
                  <p className="text-sm font-medium text-zinc-500">No active applications currently in the pipe.</p>
                  <Button variant="ghost" className="mt-4" onClick={() => navigate('/projects')}>Start Discovery</Button>
                </div>
              ) : (
                <div className="space-y-3">
                  {submissions.slice(0, 4).map(sub => (
                    <div key={sub.id} className="flex items-center justify-between p-4 bg-black rounded-2xl border border-zinc-900 hover:border-zinc-700 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold text-lg">🎭</div>
                        <div>
                          <p className="text-sm font-bold">Role {sub.roleId.slice(0, 4)}</p>
                          <p className="text-[10px] font-black text-zinc-600 uppercase">GFA-ID: {sub.id.slice(-8)}</p>
                        </div>
                      </div>
                      <Badge color={sub.status === 'PENDING' ? 'zinc' : 'blue'}>{sub.status}</Badge>
                    </div>
                  ))}
                </div>
              )}
           </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-10 border-gold/20 bg-gradient-to-br from-zinc-900 to-black h-full flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-gold mb-8">Passport Status</h4>
              {certs.length > 0 ? (
                <div className="text-center py-4">
                  <div className="bg-white p-3 rounded-2xl w-40 h-40 mx-auto mb-6 shadow-2xl">
                    <img src={certs[0].qrUrl} className="w-full h-full" alt="Passport" />
                  </div>
                  <p className="text-2xl font-black italic text-white uppercase tracking-tighter">{certs[0].certNo}</p>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1 tracking-widest">{certs[0].status}</p>
                </div>
              ) : (
                <div className="text-center py-6">
                   <p className="text-sm text-zinc-400 mb-6 italic">"Your GFA Passport is not yet active. Verify to gain full ecosystem access."</p>
                   <Button variant="outline" className="w-full" onClick={() => navigate('/certs')}>Verify Now</Button>
                </div>
              )}
            </div>
            <div className="pt-8 border-t border-zinc-800">
               <div className="flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase text-zinc-600 mb-1">Tier</span>
                    <span className="text-lg font-black italic">{user.membership}</span>
                  </div>
                  <Button variant="ghost" className="text-[10px] px-0 hover:text-gold">Upgrade Plan →</Button>
               </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

// UI Subcomponents
const QuickLink: React.FC<{ title: string, desc: string, icon: string, path: string, highlight?: boolean }> = ({ title, desc, icon, path, highlight }) => (
  <Card 
    className={`p-8 group cursor-pointer transition-all duration-300 active:scale-95 ${highlight ? 'bg-gold/5 border-gold/20' : 'bg-zinc-950 border-zinc-900 hover:border-gold/30'}`}
    onClick={() => window.location.hash = path}
  >
    <div className="text-4xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">{icon}</div>
    <h3 className={`font-black text-sm uppercase tracking-widest mb-1 transition-colors ${highlight ? 'text-gold' : 'text-white group-hover:text-gold'}`}>{title}</h3>
    <p className="text-[10px] text-zinc-500 font-bold uppercase">{desc}</p>
  </Card>
);

const CertCard: React.FC<{ title: string, desc: string, type: string, onApply: () => void }> = ({ title, desc, onApply }) => (
  <Card className="p-8 border-zinc-900 bg-black group hover:bg-zinc-900/50 transition-all duration-300 flex flex-col h-full">
    <div className="flex-1">
      <h3 className="text-lg font-black uppercase tracking-tight mb-3 group-hover:text-gold transition-colors">{title}</h3>
      <p className="text-xs text-zinc-500 leading-relaxed mb-8">{desc}</p>
    </div>
    <Button variant="outline" className="w-full text-[10px]" onClick={onApply}>Request Verification</Button>
  </Card>
);

export default Dashboard;
