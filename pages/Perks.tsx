
import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { Card, Button, Badge, Input } from '../components/UI';
import { Merchant, Deal, User, MembershipTier } from '../types';

const Perks: React.FC<{ user: User }> = ({ user }) => {
  const [merchants, setMerchants] = useState<Merchant[]>([]);
  const [selectedDeal, setSelectedDeal] = useState<{ m: Merchant, d: Deal } | null>(null);
  const [redeemed, setRedeemed] = useState(false);

  useEffect(() => {
    api.getMerchants().then(setMerchants);
  }, []);

  const canAccessDeal = (tier: MembershipTier) => {
    const tiers = [MembershipTier.FREE, MembershipTier.SILVER, MembershipTier.PRO, MembershipTier.GOLD, MembershipTier.STUDIO];
    return tiers.indexOf(user.membership) >= tiers.indexOf(tier);
  };

  const handleRedeem = (m: Merchant, d: Deal) => {
    if (!canAccessDeal(d.tierRequired)) {
      alert(`This deal requires ${d.tierRequired} membership.`);
      return;
    }
    setSelectedDeal({ m, d });
    setRedeemed(false);
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-zinc-900 to-black p-8 rounded-2xl border border-zinc-800">
        <div>
          <h1 className="text-4xl font-black mb-2">MEMBER <span className="text-gold">PERKS</span></h1>
          <p className="text-zinc-400">Exclusive deals from our GFA Verified Merchant network.</p>
        </div>
        <div className="flex gap-4">
          <Input placeholder="Search Location (e.g. LA, NY)" className="max-w-[200px]" defaultValue="Los Angeles, CA" />
          <Button>Update Location</Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {merchants.map(merchant => (
          <Card key={merchant.id} className="flex flex-col">
            <div className="aspect-video relative overflow-hidden">
               <img src={`https://picsum.photos/seed/${merchant.id}/600/400`} className="w-full h-full object-cover" alt="" />
               <div className="absolute top-4 left-4">
                 <Badge color="zinc">{merchant.category}</Badge>
               </div>
               {merchant.isVerified && (
                 <div className="absolute top-4 right-4 bg-gold text-black px-2 py-0.5 rounded text-[10px] font-bold">VERIFIED PARTNER</div>
               )}
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <img src={merchant.logo} className="w-10 h-10 rounded-full border border-zinc-800" alt="" />
                <h3 className="font-bold text-lg leading-tight">{merchant.name}</h3>
              </div>
              <p className="text-xs text-zinc-500 mb-6">{merchant.description}</p>
              
              <div className="space-y-3 mt-auto">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Current Deals</h4>
                {merchant.deals.map(deal => (
                  <div key={deal.id} className="p-4 bg-zinc-950 rounded-lg border border-zinc-800 flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                       <p className="text-sm font-bold">{deal.title}</p>
                       <Badge color={canAccessDeal(deal.tierRequired) ? 'gold' : 'zinc'}>
                         {deal.tierRequired}
                       </Badge>
                    </div>
                    <p className="text-xs text-zinc-500">{deal.description}</p>
                    <Button 
                      variant={canAccessDeal(deal.tierRequired) ? 'primary' : 'outline'} 
                      className="w-full mt-2 text-xs py-2"
                      onClick={() => handleRedeem(merchant, deal)}
                    >
                      {canAccessDeal(deal.tierRequired) ? 'Redeem Deal' : 'Upgrade to Unlock'}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Redemption Modal */}
      {selectedDeal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
           <Card className="max-w-md w-full p-8 text-center space-y-6">
              {!redeemed ? (
                <>
                  <h2 className="text-2xl font-bold">Redeem Perk</h2>
                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                    <p className="text-gold font-bold mb-1">{selectedDeal.d.title}</p>
                    <p className="text-sm text-zinc-400">At {selectedDeal.m.name}</p>
                  </div>
                  <p className="text-xs text-zinc-500 italic">Showing this screen to the merchant will mark the deal as used for today.</p>
                  <Button className="w-full h-14 text-lg" onClick={() => setRedeemed(true)}>Generate QR Code</Button>
                  <Button variant="ghost" onClick={() => setSelectedDeal(null)}>Cancel</Button>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gold">ACTIVE PERK</h2>
                  <div className="w-48 h-48 bg-white mx-auto p-4 rounded-xl shadow-2xl">
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=REDEEM-${selectedDeal.d.code}-${user.id}`} alt="QR" className="w-full h-full" />
                  </div>
                  <div>
                    <p className="text-xl font-mono font-bold tracking-widest">{selectedDeal.d.code}</p>
                    <p className="text-xs text-zinc-500 mt-2 uppercase">Valid for next 15 minutes</p>
                  </div>
                  <Button variant="outline" className="w-full" onClick={() => setSelectedDeal(null)}>Done</Button>
                </>
              )}
           </Card>
        </div>
      )}
    </div>
  );
};

export default Perks;
