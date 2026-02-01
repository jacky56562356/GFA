
import React from 'react';
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { UserRole, User } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  user: User | null;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, user, onLogout }) => {
  const navigate = useNavigate();

  const getNavLinks = () => {
    if (!user) return [{ to: '/auth', label: 'Sign In' }];

    const links = [
      { to: '/', label: 'Dashboard' },
      { to: '/projects', label: 'Auditions' },
      { to: '/talents', label: 'Talent DB' },
      { to: '/perks', label: 'Perks' },
      { to: '/certs', label: 'Certs' }
    ];

    if (user.role === UserRole.MERCHANT) links.push({ to: '/merchant-portal', label: 'Merchant Portal' });
    if (user.role === UserRole.PRODUCTION) links.push({ to: '/production-panel', label: 'Production Panel' });
    if (user.role === UserRole.ADMIN) links.push({ to: '/admin', label: 'Control Center' });

    return links;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-gold/30">
      <header className="border-b border-zinc-900 bg-black/80 backdrop-blur-xl sticky top-0 z-[100]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gold rounded flex items-center justify-center text-black font-black text-xl shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform">G</div>
            <div className="flex flex-col -space-y-1">
              <span className="text-lg font-black tracking-tighter text-gold">GFA</span>
              <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">Platform</span>
            </div>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold uppercase tracking-wide">
            {getNavLinks().map(link => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                className={({isActive}) => isActive ? 'text-gold' : 'text-zinc-400 hover:text-white transition-colors'}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3 bg-zinc-900/50 p-1.5 pr-4 rounded-full border border-zinc-800">
                <img src={user.avatar} className="w-8 h-8 rounded-full border border-gold/50" alt="" />
                <div className="hidden sm:block">
                  <p className="text-[10px] font-black uppercase text-gold leading-none mb-1">{user.membership}</p>
                  <p className="text-xs font-bold leading-none">{user.name}</p>
                </div>
                <button 
                  onClick={onLogout}
                  className="ml-2 p-1 text-zinc-500 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                </button>
              </div>
            ) : (
              <Button onClick={() => navigate('/auth')}>Get Started</Button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-zinc-950 border-t border-zinc-900 py-16 text-zinc-500">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-gold rounded text-black font-black flex items-center justify-center text-xs">G</div>
              <span className="text-white font-black tracking-tight">GFA PLATFORM</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">Connecting global talent with industry leaders through a secure, certified ecosystem.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/projects" className="hover:text-gold transition-colors">Auditions</Link></li>
              <li><Link to="/talents" className="hover:text-gold transition-colors">Talent Database</Link></li>
              <li><Link to="/perks" className="hover:text-gold transition-colors">Merchant Perks</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Parental Consent</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Support</h4>
            <p className="text-sm">support@gfa-platform.org</p>
            <div className="mt-4 flex gap-4">
              <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-gold hover:text-black transition-all cursor-pointer">
                <span className="font-bold">in</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-16 pt-8 border-t border-zinc-900 text-center text-[10px] uppercase tracking-widest">
          &copy; 2024 Global Film & Acting Platform. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

// Re-importing UI helper locally to avoid circular dependency if Layout is used inside UI
const Button: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => (
  <button onClick={onClick} className="px-6 py-2 bg-gold text-black font-black rounded-full text-xs hover:bg-yellow-400 transition-all active:scale-95">
    {children}
  </button>
);

export default Layout;
