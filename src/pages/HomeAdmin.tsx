import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface CardItem {
  id: string;
  title: string;
  description: string;
  path: string;
}

const HomeAdmin: React.FC = () => {
  const navigate = useNavigate();

  const cards: CardItem[] = [
    {
      id: 'cardOB',
      title: 'Observer Management',
      description: 'Manage observer registrations, applications, and assignments.',
      path: '/new-application',
    },
    {
      id: 'cardExam',
      title: 'Exam Management',
      description: 'Schedule and oversee examination sessions and records.',
      path: '/admin-viewexam',
    },
    {
      id: 'cardRemuneration',
      title: 'Remuneration Management',
      description: 'Track payments, allowances, and compensation records.',
      path: '/remuneration-management',
    },
    {
      id: 'cardReports',
      title: 'Report and Analysis',
      description: 'View reports, analytics, and performance dashboards.',
      path: '/report-analysis',
    },
    {
      id: 'cardSettings',
      title: 'Settings',
      description: 'Configure account and application preferences.',
      path: '/settings',
    },
  ];

  // Browser back button interception
  useEffect(() => {
    window.history.pushState({ page: 1 }, '', '');

    const handlePopState = () => {
      navigate('/welcome');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  const handleCardClick = (path: string) => {
    console.log('Navigate to:', path);
    navigate(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(path);
    }
  };

  return (
    <>
      {/* Completed Badge */}
      <div className="fixed top-[14%] right-5 z-[99999] flex items-center gap-2 bg-[rgba(75,85,99,0.1)] text-[#4b5563] font-['Segoe_UI',sans-serif] text-xs font-bold py-1.5 px-3 border-[1.5px] border-[rgba(75,85,99,0.25)] rounded-full tracking-[0.5px] pointer-events-none select-none uppercase opacity-60">
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Completed
      </div>

      <div className="page-wrapper w-full bg-[#f8f9fa] min-h-screen flex flex-col">
        
        {/* ========== NAVBAR ========== */}
        <nav className="navbar flex items-center justify-between w-full h-16 bg-[#003366] px-8 sticky top-0 z-[100]">
          <a 
            href="#" 
            className="navbar-logo font-['Source_Sans_Pro',sans-serif] text-[22px] font-bold text-white leading-tight no-underline flex items-baseline gap-3"
            onClick={(e) => e.preventDefault()}
          >
            <span>OMS Portal</span>
            <span className="navbar-tagline font-['Roboto',sans-serif] text-sm font-normal text-white/70 leading-none">
              Excellence in Examination Services
            </span>
          </a>
        </nav>

        {/* ========== HERO SECTION ========== */}
        <section className="hero-section relative w-full h-[250px] bg-[url('EdCIL.jpg')] bg-right-center bg-cover bg-no-repeat flex flex-col justify-center px-14 md:px-12 sm:px-8" aria-label="Hero banner">
          {/* Dark Navy Overlay */}
          <div className="absolute inset-0 bg-[rgba(0,51,102,0.5)] z-0"></div>
          <div className="hero-content relative z-10">
            <h1 className="hero-headline font-['Source_Sans_Pro',sans-serif] text-[38px] md:text-[32px] sm:text-[28px] font-bold text-white leading-tight mb-3">
              Welcome to OMS Portal
            </h1>
            <p className="hero-subtitle font-['Source_Sans_Pro',sans-serif] text-base md:text-sm font-normal text-white/80 leading-tight max-w-[600px]">
              Manage examination centres, observers, vendors, and more — all in one place.
            </p>
          </div>
        </section>

        {/* ========== SECTION HEADER ========== */}
        <div className="section-header pt-7 px-20 md:px-10 sm:px-8">
          <hr className="section-divider w-[60px] h-[3px] bg-[#0055aa] border-none mb-1.5" />
          <h2 className="section-heading font-['Source_Sans_Pro',sans-serif] text-[28px] md:text-2xl font-bold text-[#003366] leading-tight">
            Quick Access
          </h2>
        </div>

        {/* ========== CARDS GRID ========== */}
        <section className="cards-grid grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 px-20 md:px-10 sm:px-5 py-5 pb-10 flex-1" aria-label="Portal modules">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="portal-card relative bg-white border border-[#e0e0e0] min-h-[150px] p-4 flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] cursor-pointer"
              tabIndex={0}
              role="button"
              onClick={() => handleCardClick(card.path)}
              onKeyDown={(e) => handleKeyDown(e, card.path)}
            >
              {/* Left accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full bg-[#003366]"></div>
              
              <h3 className="card-title font-['Source_Sans_Pro',sans-serif] text-base font-normal text-[#003366] leading-tight mb-2.5">
                {card.title}
              </h3>
              <p className="card-desc font-['Source_Sans_Pro',sans-serif] text-[13px] font-normal text-[#666] leading-tight mb-auto">
                {card.description}
              </p>
              <div className="card-btn inline-flex items-center justify-center w-[100px] h-8 bg-[#003366] text-white font-['Source_Sans_Pro',sans-serif] text-xs font-normal leading-tight border-none cursor-pointer mt-4 transition-colors duration-200 hover:bg-[#004080] no-underline">
                Open →
              </div>
            </div>
          ))}
        </section>

        {/* ========== FOOTER ========== */}
        <footer className="page-footer flex justify-center items-center py-3 px-20 gap-1 flex-wrap md:px-10 sm:px-5">
          <span className="footer-copyright font-['Source_Sans_Pro',sans-serif] text-xs font-normal text-[#6b7280] leading-tight">
            © 2026 OMS (India) Limited. All rights reserved.
          </span>
          <span className="footer-links font-['Source_Sans_Pro',sans-serif] text-xs font-normal leading-tight">
            <a href="#" className="text-[#1a56db] no-underline transition-colors duration-200 hover:underline hover:text-[#003366]" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>
            <span className="sep text-[#6b7280] mx-1">|</span>
            <a href="#" className="text-[#1a56db] no-underline transition-colors duration-200 hover:underline hover:text-[#003366]" onClick={(e) => e.preventDefault()}>
              Terms of Use
            </a>
            <span className="sep text-[#6b7280] mx-1">|</span>
            <a href="#" className="text-[#1a56db] no-underline transition-colors duration-200 hover:underline hover:text-[#003366]" onClick={(e) => e.preventDefault()}>
              Help &amp; Support
            </a>
          </span>
        </footer>
      </div>
    </>
  );
};

export default HomeAdmin;