import React, { useState, FormEvent, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import OMSVersionFooter from '../components/OMSVersionFooter';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // Handle browser back button
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

  // Load saved email from localStorage if "Remember Me" was checked
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    if (savedEmail) {
      setFormData(prev => ({ ...prev, email: savedEmail, rememberMe: true }));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === 'email' ? 'email' : id === 'password' ? 'password' : 'rememberMe']: 
        type === 'checkbox' ? checked : value,
    }));
    // Clear error for the field being edited
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const determineRedirectPath = (email: string): string => {
    const emailLower = email.toLowerCase();
    
    // Check for role in URL query parameters
    const searchParams = new URLSearchParams(location.search);
    const role = searchParams.get('role');
    
    if (role === 'admin' || emailLower.includes('admin')) {
      return '/home-admin';
    } else if (role === 'observer' || emailLower.includes('observer')) {
      return '/home-observer';
    } else if (role === 'project-manager' || emailLower.includes('pm') || emailLower.includes('project')) {
      return '/home-project-manager';
    } else if (role === 'otm' || emailLower.includes('otm')) {
      return '/home-ota';
    } else if (role === 'cco' || emailLower.includes('cco')) {
      alert('CCO logic is non-functional at the moment.');
      return '/login';
    } else if (role === 'pm-head' || emailLower.includes('head')) {
      return '/pmhead';
    } else {
      alert('Logged in successfully!');
      return '/dashboard-pm';
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    console.log('Login attempt for:', formData.email);
    
    // Handle "Remember Me"
    if (formData.rememberMe) {
      localStorage.setItem('rememberedEmail', formData.email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
    
    const redirectPath = determineRedirectPath(formData.email);
    if (redirectPath !== '/login') {
      navigate(redirectPath);
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

      {/* Page Wrapper */}
      <div className="flex flex-col md:flex-row w-full min-h-[calc(100vh-64px)]">
        
        {/* LEFT PANEL */}
        <div className="left-panel w-full md:w-[65%] bg-white relative flex flex-col min-h-[calc(100vh-64px)]">
          {/* Brand Accents */}
          <div className="brand-accent absolute left-0 top-0  h-full bg-[#003366] z-10"></div>
          <div className="brand-accent-right absolute right-0 top-0  h-full bg-[#003366] z-10"></div>
          
          <div className="form-area px-5 md:px-[100px] py-5 md:py-20 flex-1 flex flex-col justify-start w-full">
            <h1 className="form-title text-[34px] font-bold text-[#003366] font-['Source_Sans_Pro',sans-serif] mb-1">Log In</h1>
            <p className="form-subtitle text-base text-[#666] mb-9 leading-relaxed font-['Roboto',sans-serif]">
              Enter your credentials to access your account.
            </p>

            <form id="loginForm" onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
              {/* Email / Username */}
              <div className="form-row flex gap-5 w-full">
                <div className="form-col flex-1 flex flex-col gap-1.5">
                  <label className="field-label text-base font-medium text-[#003366] font-['Source_Sans_Pro',sans-serif]" htmlFor="email">
                    Username or Email Address
                  </label>
                  <input
                    type="email"
                    className={`field-input h-11 px-3.5 border rounded-md text-[15px] font-['Source_Sans_Pro',sans-serif] text-[#333] bg-white transition-colors focus:outline-none focus:border-[#0055aa] focus:border-[1.5px] ${
                      errors.email ? 'border-red-500' : 'border-[#ccc]'
                    }`}
                    id="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 font-['Roboto',sans-serif]">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Password */}
              <div className="form-row flex gap-5 w-full">
                <div className="form-col flex-1 flex flex-col gap-1.5">
                  <label className="field-label text-base font-medium text-[#003366] font-['Source_Sans_Pro',sans-serif]" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`field-input h-11 px-3.5 border rounded-md text-[15px] font-['Source_Sans_Pro',sans-serif] text-[#333] bg-white transition-colors focus:outline-none focus:border-[#0055aa] focus:border-[1.5px] ${
                      errors.password ? 'border-red-500' : 'border-[#ccc]'
                    }`}
                    id="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1 font-['Roboto',sans-serif]">{errors.password}</p>
                  )}
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="options-row flex items-center justify-between -mt-2 mb-1">
                <div className="tc-row flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="tc-cb w-4 h-4 cursor-pointer accent-[#0055aa]"
                    id="rememberCheck"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  <label className="tc-text text-sm text-[#444] cursor-pointer select-none font-['Roboto',sans-serif]" htmlFor="rememberCheck">
                    Remember me
                  </label>
                </div>
                <a href="#" className="forgot-link text-sm font-semibold text-[#0055aa] hover:opacity-80 hover:underline" onClick={(e) => e.preventDefault()}>
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}
              <button type="submit" className="create-btn h-12 bg-[#003366] text-white text-base font-bold font-['Source_Sans_Pro',sans-serif] border-none rounded-md cursor-pointer transition-colors hover:bg-[#004488] mt-2">
                Log In
              </button>

              {/* Signup Link */}
              <div className="login-row text-center text-[15px] text-[#555] mt-4 font-['Source_Sans_Pro',sans-serif]">
                <span>Don't have an account?</span>
                <a href="/welcome" className="font-semibold ml-1.5 text-[#0055aa] hover:opacity-80 hover:underline">Sign up</a>
              </div>
            </form>
          </div>

          {/* Footer */}
          <div className="form-footer py-2.5 px-5 md:px-[100px] flex justify-center items-center flex-wrap gap-1 mt-auto">
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

        {/* RIGHT PANEL */}
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
      </div>

      <OMSVersionFooter />
    </>
  );
};

export default Login;