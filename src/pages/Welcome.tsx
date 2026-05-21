// pages/Welcome.tsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import OMSVersionFooter from '../components/OMSVersionFooter';

interface DropdownOption {
  value: string;
  label: string;
}

interface LoginOptions {
  [key: string]: string;
}

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  
  // Dropdown states
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isSignupOpen, setIsSignupOpen] = useState<boolean>(false);
  const [selectedLoginRole, setSelectedLoginRole] = useState<string>('');
  const [selectedSignupRole, setSelectedSignupRole] = useState<string>('');
  
  // Refs for click outside detection
  const loginDropdownRef = useRef<HTMLDivElement>(null);
  const signupDropdownRef = useRef<HTMLDivElement>(null);

  // Dropdown options
  const loginOptions: DropdownOption[] = [
    { value: 'admin', label: 'Admin' },
    { value: 'observer', label: 'Observer' },
    { value: 'ota', label: 'Observer Management Team' },
    { value: 'pm', label: 'Project Manager' },
    { value: 'cro', label: 'CRO' },
    { value: 'pm-head', label: 'Project Head' },
  ];

  const signupOptions: DropdownOption[] = [
    { value: 'observer', label: 'Observer' },
  ];

  // Role to page mapping for login
  const roleRedirectMap: LoginOptions = {
    'admin': '/home-admin',
    'observer': '/home-observer',
    'ota': '/home-ota',
    'pm': '/home-project-manager',
    'cro': '/cro',
    'pm-head': '/pmhead',
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target as Node)) {
        setIsLoginOpen(false);
      }
      if (signupDropdownRef.current && !signupDropdownRef.current.contains(event.target as Node)) {
        setIsSignupOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLoginOpen(false);
        setIsSignupOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLoginSelect = (value: string, label: string) => {
    setSelectedLoginRole(label);
    setIsLoginOpen(false);
    
    console.log('Log-in as:', label, '(' + value + ')');
    
    const redirectPath = roleRedirectMap[value];
    if (redirectPath) {
      navigate(`${redirectPath}?role=${encodeURIComponent(value)}`);
    } else {
      navigate(`/login?role=${encodeURIComponent(value)}`);
    }
  };

  const handleSignupSelect = (value: string, label: string) => {
    setSelectedSignupRole(label);
    setIsSignupOpen(false);
    
    console.log('Sign-up as:', label, '(' + value + ')');
    
    if (value === 'observer') {
      navigate('/signup-observer');
    }
  };

  const toggleLoginDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSignupOpen(false);
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleSignupDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoginOpen(false);
    setIsSignupOpen(!isSignupOpen);
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

      {/* Navigation Bar */}
      <nav className="flex items-center justify-between w-full max-w-full mx-0 h-16 bg-[#003366] px-8 sticky top-0 z-[2000]">
        <a
          href="welcome.html"
          id="navLogo"
          className=" text-[22px] font-bold text-white leading-[1.2] no-underline flex items-baseline gap-3"
        >
          <span>OMS Portal</span>

          <span className="text-[14px] font-normal text-white/70 leading-none">
            Excellence in Examination Services
          </span>
        </a>
      </nav>

      {/* Welcome Container */}
      <div className="welcome-container flex flex-col md:flex-row w-full min-h-[calc(100vh-64px)] bg-white">
        
        {/* LEFT PANEL */}
        <div className="left-panel w-full md:w-[65%] min-h-[calc(100vh-64px)] bg-white flex flex-col relative">
          <div className="form-area px-5 md:px-[100px] py-5 md:py-20 flex-1 flex flex-col justify-start w-full">
            
            {/* Welcome Message */}
            <h1 className="welcome-message text-[34px] font-bold text-[#003366] font-['Source_Sans_Pro',sans-serif] mb-0.5">
              Welcome Back!
            </h1>
            <p className="subtitle text-base text-[#666] font-['Roboto',sans-serif] leading-relaxed max-w-[664px] mb-9">
              Please select your preferred path to continue. Manage your exams or join our mission.
            </p>

            {/* Log-in as Label */}
            <label className="section-label text-lg font-normal text-[#003366] mb-2.5 font-['Source_Sans_Pro',sans-serif]" id="login-label">
              Log-in as
            </label>

            {/* Login Dropdown */}
            <div
              ref={loginDropdownRef}
              className={`dropdown-box relative w-full max-w-[664px] h-[50px] bg-white border-2 rounded-lg flex items-center px-[18px] cursor-pointer transition-all duration-300 ${
                isLoginOpen 
                  ? 'border-[#003366] shadow-[0_0_0_3px_rgba(0,51,102,0.12)] rounded-b-none' 
                  : 'border-[#e0e0e0] hover:border-[#003366] hover:shadow-[0_0_0_3px_rgba(0,51,102,0.08)]'
              }`}
              role="listbox"
              aria-labelledby="login-label"
              tabIndex={0}
              onClick={toggleLoginDropdown}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleLoginDropdown(e as unknown as React.MouseEvent);
                }
              }}
            >
              <span className={`dropdown-placeholder flex-1 font-['Roboto',sans-serif] text-[15px] font-normal leading-tight select-none ${
                selectedLoginRole ? 'text-[#003366] font-medium' : 'text-[rgba(102,102,102,0.6)]'
              }`}>
                {selectedLoginRole || 'Select your role...'}
              </span>
              <span className={`dropdown-icon text-[22px] text-[#003366] leading-none select-none transition-transform duration-300 ${isLoginOpen ? 'rotate-180' : ''}`}>
                ▾
              </span>
              
              {/* Dropdown Options */}
              {isLoginOpen && (
                <div className="dropdown-options absolute top-full left-[-2px] right-[-2px] bg-white border-2 border-[#003366] border-t border-[#e0e0e0] rounded-b-xl overflow-hidden z-[100]">
                  {loginOptions.map((option) => (
                    <div
                      key={option.value}
                      className="dropdown-option px-[18px] py-3 font-['Roboto',sans-serif] text-[15px] text-[#333] cursor-pointer transition-all duration-150 border-b border-[#f0f0f0] last:border-none hover:bg-[#f0f5fa] hover:text-[#003366]"
                      role="option"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLoginSelect(option.value, option.label);
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* OR Divider */}
            <div className="or-divider flex items-center gap-4 w-full max-w-[664px] my-7">
              <div className="line flex-1 h-[2px] bg-[#e0e0e0]"></div>
              <span className="or-text font-['Roboto',sans-serif] text-lg font-medium text-[#666] select-none">or</span>
              <div className="line flex-1 h-[2px] bg-[#e0e0e0]"></div>
            </div>

            {/* Sign-up as Label */}
            <label className="section-label text-lg font-normal text-[#003366] mb-2.5 font-['Source_Sans_Pro',sans-serif]" id="signup-label">
              Sign-up as
            </label>

            {/* Signup Dropdown */}
            <div
              ref={signupDropdownRef}
              className={`dropdown-box relative w-full max-w-[664px] h-[50px] bg-white border-2 rounded-lg flex items-center px-[18px] cursor-pointer transition-all duration-300 mb-[70px] ${
                isSignupOpen 
                  ? 'border-[#003366] shadow-[0_0_0_3px_rgba(0,51,102,0.12)] rounded-b-none' 
                  : 'border-[#e0e0e0] hover:border-[#003366] hover:shadow-[0_0_0_3px_rgba(0,51,102,0.08)]'
              }`}
              role="listbox"
              aria-labelledby="signup-label"
              tabIndex={0}
              onClick={toggleSignupDropdown}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleSignupDropdown(e as unknown as React.MouseEvent);
                }
              }}
            >
              <span className={`dropdown-placeholder flex-1 font-['Roboto',sans-serif] text-[15px] font-normal leading-tight select-none ${
                selectedSignupRole ? 'text-[#003366] font-medium' : 'text-[rgba(102,102,102,0.6)]'
              }`}>
                {selectedSignupRole || 'Create a new account...'}
              </span>
              <span className={`dropdown-icon text-[22px] text-[#003366] leading-none select-none transition-transform duration-300 ${isSignupOpen ? 'rotate-180' : ''}`}>
                ▾
              </span>
              
              {/* Dropdown Options */}
              {isSignupOpen && (
                <div className="dropdown-options absolute top-full left-[-2px] right-[-2px] bg-white border-2 border-[#003366] border-t border-[#e0e0e0] rounded-b-xl overflow-hidden z-[100]">
                  {signupOptions.map((option) => (
                    <div
                      key={option.value}
                      className="dropdown-option px-[18px] py-3 font-['Roboto',sans-serif] text-[15px] text-[#333] cursor-pointer transition-all duration-150 border-b border-[#f0f0f0] last:border-none hover:bg-[#f0f5fa] hover:text-[#003366]"
                      role="option"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSignupSelect(option.value, option.label);
                      }}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="form-footer py-2.5 px-5 md:px-[100px] flex justify-center items-center flex-wrap gap-1">
            <span className="footer-copy text-xs text-[#6b7280] font-['Source_Sans_Pro',sans-serif]">
              © 2026 OMS (India) Limited. All rights reserved.
            </span>
            <span className="footer-links text-xs font-['Source_Sans_Pro',sans-serif]">
              <a href="#" className="text-[#1a56db] no-underline hover:underline" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <span className="sep mx-1.5 text-[#6b7280]">|</span>
              <a href="#" className="text-[#1a56db] no-underline hover:underline" onClick={(e) => e.preventDefault()}>Terms of Use</a>
              <span className="sep mx-1.5 text-[#6b7280]">|</span>
              <a href="#" className="text-[#1a56db] no-underline hover:underline" onClick={(e) => e.preventDefault()}>Help &amp; Support</a>
            </span>
          </div>
        </div>

        {/* rightside */}
        <div
          className="right-panel sticky top-9 self-start h-[calc(100vh-54px)] w-full md:w-[35%] bg-cover bg-right bg-no-repeat flex flex-col justify-end px-5 md:px-20 pb-10 text-white relative"
          style={{ backgroundImage: "url('/building_bg.jpg')" }}
        >
          <div className="right-overlay absolute inset-0 bg-gradient-to-b from-[rgba(15,52,96,0.2)] to-[rgba(15,52,96,0.9)] z-0"></div>
          <div className="right-content relative z-10 max-w-[500px]">
            <div className="right-headline text-[40px] font-bold leading-tight mb-6 font-source-sans">
              Driving Excellence in Examination Services across India.
            </div>
            <div className="right-desc text-base leading-relaxed opacity-90 mb-8 font-roboto">
              Sign up as a observer to play a vital role in ensuring fair and
              transparent examination processes across the country.
            </div>
            <div className="right-credit text-xs opacity-60">
              Building Excellence by xyz
            </div>
          </div>
        </div>
          <OMSVersionFooter />
      </div>
      
    </>
  );
};

export default Welcome;