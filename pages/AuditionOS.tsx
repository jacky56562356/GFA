
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Card, Button, Badge, Input } from '../components/UI';
import { Project, AuditionRole, User } from '../types';

const AuditionOS: React.FC<{ user: User }> = ({ user }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedRole, setSelectedRole] = useState<{ p: Project, r: AuditionRole } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    api.getProjects().then(data => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  const handleApply = async (p: Project, r: AuditionRole) => {
    setSelectedRole({ p, r });
  };

  const confirmSubmit = async () => {
    if (!selectedRole) return;
    setSubmitting(true);
    await api.submitAudition(selectedRole.r.id, user.id);
    setSubmitting(false);
    setSelectedRole(null);
    alert("Application submitted successfully!");
  };

  if (loading) return <div className="text-center pt-20">Scanning industry database...</div>;

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black mb-2">AUDITION <span className="text-gold">OS</span></h1>
          <p className="text-zinc-500">Live projects and casting calls curated for your profile.</p>
        </div>
        <div className="w-full md:w-72">
          <Input 
            placeholder="Search projects, roles, skills..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map(project => (
          <Card key={project.id} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm text-zinc-500 flex items-center gap-1 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  {project.location}
                </p>
              </div>
              <Badge color="zinc">{project.status}</Badge>
            </div>
            <p className="text-sm text-zinc-300 mb-6">{project.description}</p>
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gold uppercase tracking-widest">Open Roles</h4>
              {project.roles.map(role => (
                <div key={role.id} className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex justify-between items-center group">
                  <div>
                    <p className="font-bold">{role.name}</p>
                    <p className="text-xs text-zinc-500">{role.ageRange} • {role.gender}</p>
                  </div>
                  <Button variant="outline" className="group-hover:bg-gold group-hover:text-black" onClick={() => handleApply(project, role)}>
                    View / Apply
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Modal Mock */}
      {selectedRole && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <Card className="max-w-xl w-full p-8 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold">Apply for {selectedRole.r.name}</h2>
                <p className="text-gold font-medium">{selectedRole.p.title}</p>
              </div>
              <button onClick={() => setSelectedRole(null)} className="text-zinc-500 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l18 18" /></svg>
              </button>
            </div>

            <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-800 text-sm">
              <h4 className="font-bold mb-2">Requirements:</h4>
              <p className="text-zinc-400">{selectedRole.r.requirements}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-zinc-500 mb-2">Self-Tape Upload (Optional)</label>
                <div className="border-2 border-dashed border-zinc-800 rounded-xl p-8 text-center cursor-pointer hover:border-gold transition-colors">
                  <input type="file" className="hidden" id="tape-upload" />
                  <label htmlFor="tape-upload" className="cursor-pointer">
                    <svg className="w-10 h-10 text-zinc-700 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                    <p className="text-sm font-medium">Click to upload your audition tape</p>
                    <p className="text-[10px] text-zinc-600">MP4, MOV up to 100MB</p>
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="consent" className="w-4 h-4 bg-black border-zinc-800 rounded text-gold focus:ring-gold" />
                <label htmlFor="consent" className="text-xs text-zinc-500">I agree to the GFA talent terms and privacy policy.</label>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1" onClick={() => setSelectedRole(null)}>Cancel</Button>
              <Button className="flex-1" disabled={submitting} onClick={confirmSubmit}>
                {submitting ? 'Submitting...' : 'Submit Application'}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AuditionOS;
