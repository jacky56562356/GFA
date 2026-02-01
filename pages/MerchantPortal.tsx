
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Card, Button, Badge, Input } from '../components/UI';
import { Merchant, User, Deal, MembershipTier } from '../types';

const MerchantPortal: React.FC<{ user: User }> = ({ user }) => {
  const [merchant, setMerchant] = useState<Merchant | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAddingDeal, setIsAddingDeal] = useState(false);
  const [newDeal, setNewDeal] = useState<Partial<Deal>>({ tierRequired: MembershipTier.PRO });

  useEffect(() => {
    api.getMerchantByUserId(user.id).then(m => {
      if (m) setMerchant(m);
      setLoading(false);
    });
  }, [user.id]);

  const handleAddDeal = async () => {
    if (!merchant || !newDeal.title) return;
    await api.createDeal(merchant.id, newDeal);
    const updated = await api.getMerchantByUserId(user.id);
    if (updated) setMerchant(updated);
    setIsAddingDeal(false);
    setNewDeal({ tierRequired: MembershipTier.PRO });
  };

  if (loading) return <div className="text-center py-20 font-bold text-zinc-500 uppercase tracking-widest">Loading Merchant Dashboard...</div>;
  if (!merchant) return (
    <Card className="p-12 text-center max-w-lg mx-auto">
      <h2 className="text-2xl font-black mb-4">Partner Program</h2>
      <p className="text-zinc-500 mb-8">Your account is not yet registered as a GFA Verified Merchant.</p>
      <Button>Apply for Merchant Status</Button>
    </Card>
  );

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row justify-between items-start gap-6 bg-zinc-950 p-8 rounded-3xl border border-zinc-900">
        <div className="flex gap-6 items-center">
           <img src={merchant.logo} className="w-24 h-24 rounded-2xl border border-zinc-800" alt="" />
           <div>
             <div className="flex items-center gap-2 mb-1">
               <h1 className="text-3xl font-black">{merchant.name}</h1>
               <Badge color="gold">{merchant.partnershipLevel}</Badge>
             </div>
             <p className="text-zinc-500 text-sm max-w-md">{merchant.description}</p>
             <p className="text-xs text-gold font-bold mt-2 uppercase tracking-widest">{merchant.address}, {merchant.city}</p>
           </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Edit Profile</Button>
          <Button onClick={() => setIsAddingDeal(true)}>Create New Perk</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           <div className="flex items-center justify-between">
             <h2 className="text-2xl font-black uppercase tracking-tighter">Active Perks</h2>
             <span className="text-xs font-bold text-zinc-500">{merchant.deals.length} Active Deals</span>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {merchant.deals.map(deal => (
               <Card key={deal.id} className="p-6 flex flex-col hover:border-gold/30 transition-all group">
                 <div className="flex justify-between items-start mb-4">
                   <Badge color="gold">{deal.tierRequired}+ Required</Badge>
                   <button className="text-zinc-700 hover:text-red-500 transition-colors">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                   </button>
                 </div>
                 <h3 className="text-lg font-bold group-hover:text-gold transition-colors">{deal.title}</h3>
                 <p className="text-sm text-zinc-500 mt-2 flex-1">{deal.description}</p>
                 <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-between items-center">
                    <span className="font-mono text-xs text-zinc-400">Code: {deal.code}</span>
                    <span className="text-[10px] uppercase font-bold text-zinc-600">Expires: {new Date(deal.expiresAt).toLocaleDateString()}</span>
                 </div>
               </Card>
             ))}
           </div>
        </div>

        <div className="space-y-8">
           <Card className="p-6">
              <h3 className="font-black uppercase text-xs tracking-widest text-zinc-400 mb-6">Store Analytics</h3>
              <div className="space-y-6">
                 <div>
                   <p className="text-zinc-500 text-[10px] font-bold uppercase mb-1">Total Redemptions</p>
                   <p className="text-3xl font-black">1,284</p>
                 </div>
                 <div>
                   <p className="text-zinc-500 text-[10px] font-bold uppercase mb-1">Unique Members</p>
                   <p className="text-3xl font-black">842</p>
                 </div>
                 <div className="pt-4 border-t border-zinc-800">
                   <Button variant="ghost" className="w-full text-xs">Download Full Report</Button>
                 </div>
              </div>
           </Card>

           <Card className="p-6 bg-gold/5 border-gold/20">
              <h3 className="font-black uppercase text-xs tracking-widest text-gold mb-4">Merchant Support</h3>
              <p className="text-xs text-zinc-400 mb-6 leading-relaxed">Need help with QR scanning or redemption verification? Our account managers are available 24/7.</p>
              <Button variant="outline" className="w-full text-[10px]">Contact GFA Support</Button>
           </Card>
        </div>
      </div>

      {isAddingDeal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
           <Card className="max-w-md w-full p-8 space-y-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter">Create New Perk</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-zinc-500">Deal Title</label>
                  <Input placeholder="e.g. 15% Off All Production Gear" value={newDeal.title || ''} onChange={e => setNewDeal({...newDeal, title: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-zinc-500">Description</label>
                  <Input placeholder="What exactly do members get?" value={newDeal.description || ''} onChange={e => setNewDeal({...newDeal, description: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-zinc-500">Required Tier</label>
                  <select 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-gold"
                    value={newDeal.tierRequired}
                    onChange={e => setNewDeal({...newDeal, tierRequired: e.target.value as MembershipTier})}
                  >
                    {Object.values(MembershipTier).map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-zinc-500">Promo Code (Auto-generated if empty)</label>
                  <Input placeholder="e.g. GFA2024" value={newDeal.code || ''} onChange={e => setNewDeal({...newDeal, code: e.target.value})} />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Button variant="ghost" className="flex-1" onClick={() => setIsAddingDeal(false)}>Cancel</Button>
                <Button className="flex-1" onClick={handleAddDeal}>Publish Deal</Button>
              </div>
           </Card>
        </div>
      )}
    </div>
  );
};

export default MerchantPortal;
