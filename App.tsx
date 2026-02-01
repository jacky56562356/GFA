
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import AuditionOS from './pages/AuditionOS';
import Perks from './pages/Perks';
import TalentDB from './pages/TalentDB';
import CertificationCenter from './pages/CertificationCenter';
import MerchantPortal from './pages/MerchantPortal';
import ProductionPanel from './pages/ProductionPanel';
import { User, UserRole } from './types';
import { api } from './services/api';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getCurrentUser().then(u => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  const handleLogin = async (email: string, role: UserRole) => {
    const u = await api.login(email, role);
    setUser(u);
  };

  const handleLogout = () => {
    api.logout();
    setUser(null);
  };

  if (loading) return null;

  return (
    <Router>
      <Layout user={user} onLogout={handleLogout}>
        <Routes>
          <Route 
            path="/" 
            element={user ? <Dashboard user={user} /> : <Navigate to="/auth" />} 
          />
          <Route 
            path="/auth" 
            element={user ? <Navigate to="/" /> : <Auth onLogin={handleLogin} />} 
          />
          <Route 
            path="/projects" 
            element={user ? <AuditionOS user={user} /> : <Navigate to="/auth" />} 
          />
          <Route 
            path="/perks" 
            element={user ? <Perks user={user} /> : <Navigate to="/auth" />} 
          />
          <Route 
            path="/talents" 
            element={user ? <TalentDB user={user} /> : <Navigate to="/auth" />} 
          />
          <Route 
            path="/certs" 
            element={user ? <CertificationCenter user={user} /> : <Navigate to="/auth" />} 
          />
          <Route 
            path="/merchant-portal" 
            element={user?.role === UserRole.MERCHANT ? <MerchantPortal user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/production-panel" 
            element={user?.role === UserRole.PRODUCTION ? <ProductionPanel user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/admin" 
            element={user?.role === UserRole.ADMIN ? <div className="text-center py-20">Admin Panel - Coming in V3</div> : <Navigate to="/" />} 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
