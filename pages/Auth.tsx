
import React, { useState } from 'react';
import { Card, Button, Input } from '../components/UI';
import { UserRole } from '../types';

interface AuthProps {
  onLogin: (email: string, role: UserRole) => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.TALENT);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    onLogin(email, role);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <Card className="max-w-md w-full p-8 md:p-12 space-y-8">
        <div className="text-center">
          <div className="w-12 h-12 bg-gold text-black rounded-lg mx-auto mb-4 flex items-center justify-center text-2xl font-black">G</div>
          <h1 className="text-3xl font-black uppercase tracking-tighter">Welcome Back</h1>
          <p className="text-zinc-500 mt-2">Enter your professional GFA credentials</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">Email Address</label>
            <Input 
              type="email" 
              placeholder="name@agency.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase">I am a...</label>
            <div className="grid grid-cols-2 gap-2">
              {[UserRole.TALENT, UserRole.PRODUCTION, UserRole.AGENCY, UserRole.MERCHANT].map(r => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold border transition-all ${role === r ? 'border-gold text-gold bg-gold/5' : 'border-zinc-800 text-zinc-500 hover:border-zinc-600'}`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full h-12">Sign In</Button>
        </form>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800"></div></div>
          <div className="relative flex justify-center text-xs uppercase"><span className="bg-zinc-900 px-2 text-zinc-600">Or continue with</span></div>
        </div>

        <div className="flex gap-4">
           <button className="flex-1 py-3 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-colors">
             <span className="text-xs font-bold">Google</span>
           </button>
           <button className="flex-1 py-3 border border-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-800 transition-colors">
             <span className="text-xs font-bold">Apple ID</span>
           </button>
        </div>

        <p className="text-center text-xs text-zinc-600">
          New to the industry? <a href="#" className="text-gold hover:underline">Apply for Certification</a>
        </p>
      </Card>
    </div>
  );
};

export default Auth;
