import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { ProjectDetail } from './pages/ProjectDetail';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { FaGithub } from 'react-icons/fa';

const Nav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'text-white' : 'text-secondary hover:text-white';

  return (
    <nav className="w-full flex-none z-50 max-w-[1400px] mx-auto px-10 pt-6">
      <div className="bg-surface/80 backdrop-blur-md border border-white/5 rounded-full px-6 py-4 flex items-center justify-between shadow-2xl">
        {/* Logo / Home */}
        <Link to="/" className="text-white font-bold text-xl tracking-tight hover:text-neon transition">
          JG
        </Link>

        {/* Centered Links */}
        <div className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link to="/" className={`${isActive('/')} transition text-sm font-medium`}>About</Link>
          <Link to="/projects" className={`${isActive('/projects')} transition text-sm font-medium`}>Projects</Link>
        </div>

        {/* Right Socials */}
        <div className="flex items-center gap-4">
          <a href="https://github.com/joshygarcia" target="_blank" rel="noreferrer" className="text-secondary hover:text-white transition">
            <FaGithub className="text-xl" />
          </a>
          <div className="h-4 w-px bg-white/10" />
          <a href="mailto:hello@joshygarcia.com" className="text-xs font-bold text-neon border border-neon/20 px-3 py-1.5 rounded-full hover:bg-neon/10 transition">
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`h-screen w-full bg-background text-primary font-sans flex flex-col ${isHome ? 'overflow-hidden' : 'overflow-auto custom-scrollbar'}`}>

      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col h-full w-full">
        <Nav />
        {/* Main Content */}
        <main className={`flex-1 w-full max-w-[1400px] mx-auto px-6 mt-6 ${isHome ? 'overflow-hidden h-full' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};


export default App;
