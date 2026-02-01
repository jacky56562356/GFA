
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { gemini } from '../services/gemini';
import { Card, Button, Badge, Input } from '../components/UI';
import { Project, User, Submission, TalentProfile } from '../types';

const ProductionPanel: React.FC<{ user: User }> = ({ user }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedRole, setSelectedRole] = useState<{ p: Project, r: any } | null>(null);
  const [submissions, setSubmissions] = useState<(Submission & { talent?: TalentProfile })[]>([]);
  const [loading, setLoading] = useState(true);
  const [reviewingId, setReviewingId] = useState<string | null>(null);
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);

  useEffect(() => {
    api.getProjectsByProduction(user.id).then(data => {
      setProjects(data);
      setLoading(false);
    });
  }, [user.id]);

  const handleViewRole = async (p: Project, r: any) => {
    setSelectedRole({ p, r });
    const subs = await api.getSubmissionsByRole(r.id);
    const hydrated = await Promise.all(subs.map(async s => ({
      ...s,
      talent: await api.getTalentById(s.talentId)
    })));
    setSubmissions(hydrated);
  };

  const handleAiReview = async (sub: Submission & { talent?: TalentProfile }) => {
    setReviewingId(sub.id);
    setAiFeedback(null);
    const talentInfo = sub.talent ? `${sub.talent.nameEn}, Skills: ${sub.talent.skills.join(',')}` : 'Anonymous Talent';
    const feedback = await gemini.analyzeAudition(`Talent: ${talentInfo}. Project: ${selectedRole?.p.title}. Role: ${selectedRole?.r.name}. Status: ${sub.status}`);
    setAiFeedback(feedback);
  };

  if (loading) return <div className="text-center py-20 font-bold text-zinc-500">Accessing Production Cloud...</div>;

  return (
    <div className="space-y-12">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase">Production <span className="text-gold">Panel</span></h1>
          <p className="text-zinc-500">Manage your projects, roles, and cast the perfect talent.</p>
        </div>
        <Button onClick={() => alert("Create Project Workflow Coming Soon")}>Start New Project</Button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Project List */}
        <div className="lg:col-span-1 space-y-6">
           <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500">Active Projects</h3>
           {projects.map(p => (
             <Card key={p.id} className="p-4 bg-zinc-950 border-zinc-900">
                <h4 className="font-bold mb-4">{p.title}</h4>
                <div className="space-y-2">
                   {p.roles.map(r => (
                     <button 
                       key={r.id}
                       onClick={() => handleViewRole(p, r)}
                       className={`w-full text-left p-3 rounded-lg text-xs font-bold border transition-all ${selectedRole?.r.id === r.id ? 'border-gold bg-gold/5 text-gold' : 'border-zinc-800 text-zinc-500 hover:border-zinc-700'}`}
                     >
                       {r.name}
                     </button>
                   ))}
                </div>
             </Card>
           ))}
        </div>

        {/* Submission Grid */}
        <div className="lg:col-span-3 space-y-8">
           {selectedRole ? (
             <>
               <div className="flex items-center justify-between bg-zinc-950 p-6 rounded-2xl border border-zinc-900">
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight">{selectedRole.r.name}</h2>
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">{selectedRole.p.title} • {submissions.length} Applicants</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" className="text-[10px]">Edit Role</Button>
                    <Button variant="outline" className="text-[10px]">Export List</Button>
                  </div>
               </div>

               {submissions.length === 0 ? (
                 <Card className="p-20 text-center border-dashed">
                   <p className="text-zinc-500">No applications received for this role yet.</p>
                 </Card>
               ) : (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {submissions.map(sub => (
                     <Card key={sub.id} className="p-6">
                        <div className="flex gap-4 mb-6">
                           <img src={sub.talent?.photos[0] || 'https://i.pravatar.cc/100'} className="w-16 h-16 rounded-xl object-cover border border-zinc-800" alt="" />
                           <div className="flex-1">
                             <h4 className="font-bold text-lg">{sub.talent?.nameEn || 'Anonymous'}</h4>
                             <p className="text-xs text-zinc-500 mb-2">{sub.talent?.location}</p>
                             <div className="flex flex-wrap gap-1">
                               {sub.talent?.skills.slice(0,3).map(s => <Badge key={s} color="zinc">{s}</Badge>)}
                             </div>
                           </div>
                           <Badge color={sub.status === 'PENDING' ? 'zinc' : 'blue'}>{sub.status}</Badge>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1 text-[10px]" onClick={() => handleAiReview(sub)}>
                            {reviewingId === sub.id && !aiFeedback ? 'AI Thinking...' : 'AI Review'}
                          </Button>
                          <Button className="flex-1 text-[10px]" onClick={() => alert("Callback sent!")}>Schedule Callback</Button>
                        </div>

                        {reviewingId === sub.id && aiFeedback && (
                          <div className="mt-4 p-4 bg-gold/5 border-l-2 border-gold rounded-r-lg text-xs italic text-zinc-300">
                             <p className="font-black not-italic uppercase text-[10px] text-gold mb-1">Casting Director AI Feedback:</p>
                             {aiFeedback}
                          </div>
                        )}
                     </Card>
                   ))}
                 </div>
               )}
             </>
           ) : (
             <div className="h-96 flex flex-col items-center justify-center text-center p-12 bg-zinc-950 border border-zinc-900 border-dashed rounded-3xl">
                <div className="w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h2 className="text-xl font-black uppercase mb-2">Select a Role</h2>
                <p className="text-zinc-500 max-w-xs">Pick a role from the sidebar to review applicants and manage your production pipeline.</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default ProductionPanel;
