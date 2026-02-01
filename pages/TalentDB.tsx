
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Card, Button, Badge, Input } from '../components/UI';
import { TalentProfile, User } from '../types';

const TalentDB: React.FC<{ user: User }> = ({ user }) => {
  const [talents, setTalents] = useState<TalentProfile[]>([]);
  const [search, setSearch] = useState('');
  const [locationSearch, setLocationSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getTalents().then(data => {
      setTalents(data);
      setLoading(false);
    });
  }, []);

  const filtered = talents.filter(t => {
    const matchesKeyword = 
      t.nameEn.toLowerCase().includes(search.toLowerCase()) || 
      t.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    
    const matchesLocation = 
      t.location.toLowerCase().includes(locationSearch.toLowerCase());

    return matchesKeyword && matchesLocation;
  });

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl font-black tracking-tighter uppercase">Talent <span className="text-gold">Database</span></h1>
          <p className="text-zinc-500 font-medium">Search verified GFA actors and industry professionals by skill or location.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative group">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-gold transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </span>
            <Input 
              placeholder="Name, skills, dialect..." 
              className="pl-10 md:w-64"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="relative group">
             <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-gold transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <Input 
              placeholder="Location (City, State)" 
              className="pl-10 md:w-48"
              value={locationSearch}
              onChange={(e) => setLocationSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" className="hidden sm:flex"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg></Button>
        </div>
      </header>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-zinc-900 h-[400px] rounded-xl animate-pulse"></div>
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="py-20 text-center">
          <div className="bg-zinc-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 border border-zinc-800">
            <svg className="w-10 h-10 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 className="text-xl font-bold mb-2">No talent found</h3>
          <p className="text-zinc-500">Try adjusting your search filters or location keywords.</p>
          <Button variant="ghost" className="mt-4" onClick={() => { setSearch(''); setLocationSearch(''); }}>Clear all filters</Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map(talent => (
            <Card key={talent.id} className="group cursor-pointer hover:border-gold/40 transition-all flex flex-col">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src={talent.photos[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                {talent.isVerified && (
                  <div className="absolute top-4 right-4 bg-gold text-black p-1 rounded-full shadow-lg">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.64.304 1.25.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] font-black uppercase text-gold/80 mb-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {talent.location}
                  </p>
                  <h3 className="text-xl font-black tracking-tight">{talent.nameEn}</h3>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-1 mb-4">
                  {talent.skills.slice(0, 3).map(s => <Badge key={s} color="zinc">{s}</Badge>)}
                  {talent.skills.length > 3 && <span className="text-[10px] text-zinc-500 font-bold">+{talent.skills.length - 3}</span>}
                </div>
                <div className="mt-auto flex gap-2">
                  <Button variant="outline" className="flex-1 text-[10px] py-2">Profile</Button>
                  <Button className="flex-1 text-[10px] py-2">Request</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default TalentDB;
