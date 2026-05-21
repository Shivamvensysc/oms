
import {  Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Welcome from '../pages/SignupObserver';
import HomeAdmin from '../pages/HomeAdmin';
// import HomeObserver from './pages/HomeObserver';
// import HomeProjectManager from './pages/HomeProjectManager';
// import HomeOTA from './pages/HomeOTA';
// import PMHead from './pages/PMHead';
// import DashboardPM from './pages/DashboardPM';
import Welcome1 from '../pages/Welcome';
const Index = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" replace />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome1" element={<Welcome1 />} />
        <Route path="/homeadmin" element={<HomeAdmin />} />
      </Routes>
    
  )
}

export default Index