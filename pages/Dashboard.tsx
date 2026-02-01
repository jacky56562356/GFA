import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { gemini } from '../services/gemini';
import { Card, Button, Badge, TagInput } from '../components/UI';
import { User, UserRole, Submission, Certification, TalentProfile } from '../types';
import { useNavigate, Link } from 'react-router-dom';
import { SUGGESTED_SKILLS } from '../constants';

const Dashboard: React.FC<{ user: User }> = ({ user }) => {
  const navigate = useNavigate();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [certs, setCerts] = useState<Certification[]>([]);
  const [profile, setProfile] = useState<TalentProfile | null>(null);
  const [aiSummary, setAiSummary] = useState('');
  const [loading, setLoading] = useState(true);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [tempSkills, setTempSkills] = useState<string[]>([]);
  const [savingSkills, setSavingSkills] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const [s, c, talents] = await Promise.all([
          api.getSubmissionsForUser(user.id),
          api.getCertifications(user.id),
          api.getTalents()
        ]);
        setSubmissions(s);
        setCerts(c);
        
        const myProfile = talents.find(t => t.userId === user.id);
        if (myProfile) {
          setProfile(myProfile);
          setTempSkills([...myProfile.skills]);
          const sum = await gemini.generateTalentSummary(myProfile);
          setAiSummary(sum);
        }
      } catch (error) {
        console.error("Failed to load dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [user]);

  const handleEnterEditMode = () => {
    setTempSkills([...(profile?.skills || [])]);
    setIsEditingSkills(true);
  };

  const handleCancelEdit = () => {
    setTempSkills([...(profile?.skills || [])]);
    setIsEditingSkills(false);
  };

  const handleSaveSkills = async () => {
    if (!profile) return;
    setSavingSkills(true);
    try {
      const updated = await api.updateTalentProfile(user.id, { skills: tempSkills });
      setProfile(updated);
      setIsEditingSkills(false);
      
      // Update AI Insight to reflect new skills
      const sum = await gemini.generateTalentSummary(updated);
      setAiSummary(sum);
    } catch (error) {
      console.error("Failed to update skills:", error);
      alert("Error updating skills. Please try again.");
    } finally {
      setSavingSkills(false);
    }
  };

  if (loading) return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gold/20 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
      <div className="text-center">
        <p className="text-white font-black tracking-widest uppercase text-xs mb-1">Authenticating with GFA Cloud</p>
        <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Synchronizing Portfolio & Certs...</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-12 pb-12">
      {/* Profile Banner */}
      <section className="relative overflow-hidden bg-zinc-950 border border-zinc-800 rounded-[2.5rem] p-10 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
          <div className="relative shrink-0 group">
             <img src={user.avatar} className="w-40 h-40 rounded-[2rem] object-cover border-4 border-gold shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-transform group-hover:scale-105" alt={user.name} />
             <div className="absolute -bottom-2 -right-2 bg-gold text-black text-[10px] font-black px-3 py-1.5 rounded-full shadow-2xl border-2 border-black">PRO TIER</div>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-black tracking-tight mb-3 uppercase italic">{user.name}</h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <Badge color="gold">{user.role}</Badge>
              <Badge color="zinc" className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {user.location}
              </Badge>
              {certs.some(c => c.status === 'APPROVED') && <Badge color="green">GFA Verified Actor</Badge>}
            </div>
            {aiSummary && (
              <div className="max-w-3xl bg-gold/5 border-l-4 border-gold p-6 rounded-2xl text-zinc-300 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                   <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M11 18l-2-1-2 1V4h4v14zM12 4h4v14l-2-1-2 1V4z" /></svg>
                </div>
                <span className="text-gold font-black uppercase text-[10px] block mb-2 tracking-widest">Industry Insight (AI Generated)</span>
                <p className="italic leading-relaxed">"{aiSummary}"</p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
            <Button onClick={() => navigate('/projects')} className="h-12">Search Open Auditions</Button>
            <Button variant="outline" onClick={() => navigate('/certs')} className="h-12">Manage Certifications</Button>
          </div>
        </div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 blur-[120px] rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-zinc-800/20 blur-[120px] rounded-full"></div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* Left Column: Activity & Skills */}
        <div className="lg:col-span-2 space-y-10">
           
           {/* Skill Management Section */}
           <Card className="p-8 border-gold/10 relative">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-1">Talent Arsenal</h3>
                  <p className="text-xs text-zinc-500 font-medium">Verified skills and industry dialects for casting filters.</p>
                </div>
                {!isEditingSkills ? (
                  <Button variant="outline" className="text-[10px] h-9" onClick={handleEnterEditMode}>Modify Arsenal</Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="ghost" className="text-[10px] h-9" onClick={handleCancelEdit}>Discard</Button>
                    <Button variant="primary" className="text-[10px] h-9 px-4" onClick={handleSaveSkills} disabled={savingSkills}>
                      {savingSkills ? 'Syncing...' : 'Confirm Changes'}
                    </Button>
                  </div>
                )}
              </div>

              {isEditingSkills ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <TagInput 
                    tags={tempSkills} 
                    suggestions={SUGGESTED_SKILLS} 
                    onChange={setTempSkills}
                    placeholder="Search dialects, combat, instruments..."
                  />
                  <p className="text-[10px] text-zinc-500 italic">Added skills will be automatically integrated into your AI-generated bio summary.</p>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2.5">
                  {profile?.skills.length ? (
                    profile.skills.map(skill => (
                      <Badge key={skill} color="gold">{skill}</Badge>
                    ))
                  ) : (
                    <div className="py-8 w-full text-center border-2 border-dashed border-zinc-800 rounded-2xl">
                       <p className="text-sm text-zinc-500 mb-4">You haven't listed any skills yet. Let the world know what you're capable of.</p>
                       <Button variant="outline" className="mx-auto" onClick={handleEnterEditMode}>Add Your First Skill</Button>
                    </div>
                  )}
                </div>
              )}
           </Card>

           <div className="space-y-6">
             <div className="flex items-center justify-between">
               <h3 className="text-xl font-black uppercase tracking-widest text-zinc-400">Submission Pipeline</h3>
               <Link to="/projects" className="text-gold text-[10px] font-black uppercase tracking-widest hover:underline">Full History</Link>
             </div>

             {submissions.length === 0 ? (
               <Card className="p-16 text-center border-dashed group cursor-pointer" onClick={() => navigate('/projects')}>
                  <div className="w-20 h-20 bg-zinc-950 rounded-[2rem] flex items-center justify-center mx-auto mb-6 border border-zinc-800 group-hover:border-gold transition-colors">
                    <svg className="w-10 h-10 text-zinc-700 group-hover:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">Your Pipeline is Empty</h4>
                  <p className="text-zinc-500 text-sm max-w-sm mx-auto mb-8">The industry moves fast. Browse 50+ open roles matching your profile in Los Angeles.</p>
                  <Button variant="primary">Start Applying</Button>
               </Card>
             ) : (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {submissions.map(sub => (
                   <Card key={sub.id} className="p-6 group cursor-pointer hover:border-gold/50 transition-all">
                      <div className="flex justify-between items-start">
                        <div className="flex gap-4">
                          <div className="w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center group-hover:bg-gold transition-all duration-500 border border-zinc-800">
                            <svg className="w-7 h-7 text-gold group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase text-gold/60 mb-1">Live Application</p>
                            <h4 className="text-lg font-bold group-hover:text-white transition-colors">Role {sub.roleId}</h4>
                            <p className="text-xs text-zinc-500 mt-1 font-medium">{new Date(sub.appliedAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}</p>
                          </div>
                        </div>
                        <Badge color={sub.status === 'PENDING' ? 'zinc' : 'blue'}>{sub.status}</Badge>
                      </div>
                   </Card>
                 ))}
               </div>
             )}
           </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="space-y-10">
           
           {/* Digital Certification Sidebar */}
           <Card className="p-8 border-gold/20 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-black uppercase text-xs tracking-[0.2em] text-zinc-500">GFA Passport</h3>
                <Link to="/certs" className="text-gold text-[10px] font-black uppercase hover:underline">Verify</Link>
              </div>
              
              {certs.length > 0 ? (
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-[2rem] aspect-square flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-500 cursor-zoom-in">
                    <img src={certs[0].qrUrl} className="w-full h-full object-contain" alt="Certification QR" />
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-lg font-black text-gold tracking-widest">{certs[0].certNo}</p>
                    <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-1">Status: {certs[0].status}</p>
                  </div>
                  <Button variant="outline" className="w-full text-[10px] py-3 uppercase tracking-widest">Share Verification Link</Button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-zinc-950 rounded-full flex items-center justify-center mx-auto mb-6 border border-zinc-800">
                    <svg className="w-8 h-8 text-zinc-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <p className="text-sm text-zinc-400 mb-6 font-medium">Verify your skills to stand out in the GFA talent database.</p>
                  <Button variant="outline" className="w-full h-12 uppercase tracking-widest" onClick={() => navigate('/certs')}>Apply for GFA-100</Button>
                </div>
              )}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold/5 blur-3xl rounded-full"></div>
           </Card>

           {/* Membership Benefits */}
           <Card className="p-8 border-gold/30 bg-gradient-to-b from-zinc-900 to-black">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-black uppercase text-xs tracking-[0.2em] text-gold">Membership Status</h3>
                <Badge color="gold" className="px-3">ACTIVE</Badge>
              </div>
              
              <div className="mb-8">
                <div className="flex items-end justify-between mb-3">
                  <span className="text-3xl font-black uppercase tracking-tighter italic">{user.membership}</span>
                  <span className="text-[10px] text-zinc-500 font-bold mb-1 uppercase tracking-widest">Renew: Dec 2024</span>
                </div>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-gold to-yellow-300 h-full w-[85%] shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "Unlimited Audition Submissions",
                  "Verified Casting Profile Badge",
                  "Access to Premium Studio Gear",
                  "Exclusive Merchant Discounts"
                ].map((perk, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-zinc-400 font-medium">
                    <div className="bg-gold/20 p-1 rounded-md">
                      <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    {perk}
                  </li>
                ))}
              </ul>
              
              <Button variant="primary" className="w-full h-12 text-[10px] uppercase tracking-[0.2em]">Elevate Membership</Button>
           </Card>

           {/* Quick Access */}
           <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 bg-zinc-900/30 hover:bg-gold/10 transition-colors group cursor-pointer" onClick={() => navigate('/perks')}>
                <div className="mb-3">
                  <svg className="w-6 h-6 text-gold transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="font-black text-xs uppercase tracking-widest mb-1">Local Perks</h4>
                <p className="text-[10px] text-zinc-600 font-bold uppercase leading-tight">5 Unused Deals</p>
              </Card>
              <Card className="p-6 bg-zinc-900/30 hover:bg-gold/10 transition-colors group cursor-pointer">
                <div className="mb-3">
                  <svg className="w-6 h-6 text-gold transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h4 className="font-black text-xs uppercase tracking-widest mb-1">Gear Bank</h4>
                <p className="text-[10px] text-zinc-600 font-bold uppercase leading-tight">Studio Support</p>
              </Card>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;