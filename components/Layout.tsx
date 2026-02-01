
import React from 'react';
import { NavLink, useNavigate, Link, useLocation } from 'react-router-dom';
import { UserRole, User } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  user: User | null;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, user, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getNavLinks = () => {
    // Fix: Wrap string icon in <span> to ensure return type consistency (JSX.Element)
    if (!user) return [{ to: '/auth', label: 'Sign In', icon: <span>👤</span> }];

    const links = [
      { to: '/', label: 'Home', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg> },
      { to: '/projects', label: 'Audition', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> },
      { to: '/talents', label: 'Database', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
      { to: '/perks', label: 'Perks', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
      { to: '/certs', label: 'Certs', icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
    ];

    // Fix: Wrap string icons in <span> to match JSX.Element type expected by the links array
    if (user.role === UserRole.MERCHANT) links.push({ to: '/merchant-portal', label: 'Store', icon: <span>🏪</span> });
    if (user.role === UserRole.PRODUCTION) links.push({ to: '/production-panel', label: 'Studio', icon: <span>🎬</span> });

    return links;
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-gold/30 pb-20 lg:pb-0">
      {/* Top Header - Simplified for Desktop, Dynamic for Mobile */}
      <header className="border-b border-zinc-900 bg-black/80 backdrop-blur-xl sticky top-0 z-[100]">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gold rounded flex items-center justify-center text-black font-black text-xl shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform">G</div>
            <div className="flex flex-col -space-y-1">
              <span className="text-lg font-black tracking-tighter text-gold">GFA</span>
              <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">Platform</span>
            </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
            {getNavLinks().map(link => (
              <NavLink 
                key={typeof link.to === 'string' ? link.to : 'auth'} 
                to={link.to} 
                className={({isActive}) => `transition-all duration-300 ${isActive ? 'text-gold' : 'text-zinc-500 hover:text-white'}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-3 bg-zinc-900/50 p-1 rounded-full border border-zinc-800 pr-3">
                <img src={user.avatar} className="w-8 h-8 rounded-full border border-gold/50 object-cover" alt="" />
                <div className="hidden sm:block">
                  <p className="text-[10px] font-black uppercase text-gold leading-none mb-0.5">{user.membership}</p>
                  <p className="text-[11px] font-bold leading-none tracking-tight">{user.name.split(' ')[0]}</p>
                </div>
                <button 
                  onClick={onLogout}
                  className="p-1 text-zinc-600 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => navigate('/auth')}
                className="px-6 py-2 bg-gold text-black font-black rounded-full text-[11px] uppercase tracking-widest hover:bg-yellow-400 transition-all active:scale-95"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 py-8 relative">
        {children}
      </main>

      {/* Mobile Bottom Navigation - Sticky Fixed */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-[150] bg-zinc-950/90 backdrop-blur-2xl border-t border-zinc-800/50 px-2 pb-safe">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto">
          {getNavLinks().slice(0, 5).map(link => {
            const isActive = location.pathname === link.to;
            return (
              <NavLink 
                key={typeof link.to === 'string' ? link.to : 'auth'} 
                to={link.to} 
                className="flex flex-col items-center justify-center w-full h-full relative group"
              >
                <div className={`transition-all duration-300 ${isActive ? 'text-gold scale-110' : 'text-zinc-500'}`}>
                  {link.icon}
                </div>
                <span className={`text-[9px] font-black uppercase tracking-tighter mt-1 transition-all ${isActive ? 'text-gold' : 'text-zinc-600'}`}>
                  {link.label}
                </span>
                {isActive && (
                  <div className="absolute -bottom-1 w-8 h-0.5 bg-gold rounded-full shadow-[0_0_10px_#D4AF37]"></div>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Desktop Footer Only */}
      <footer className="hidden lg:block bg-zinc-950 border-t border-zinc-900 py-16 text-zinc-500 mt-20">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-gold rounded text-black font-black flex items-center justify-center text-xs">G</div>
              <span className="text-white font-black tracking-tight uppercase">GFA Platform</span>
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
                <span className="font-bold text-xs">in</span>
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

export default Layout;
