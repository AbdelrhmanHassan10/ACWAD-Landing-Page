import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CoursesCatalog from './pages/CoursesCatalog';
import KidsCoursesCatalog from './pages/KidsCoursesCatalog';
import KidsPython from './pages/KidsPython';
import KidsScratch from './pages/KidsScratch';
import KidsPictoBlox from './pages/KidsPictoBlox';
import CourseDetails from './pages/CourseDetails';
import Booking from './pages/Booking';
import AdminDashboard from './pages/AdminDashboard';
import AdminLogin from './pages/AdminLogin';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { CoursesProvider } from './context/CoursesContext';
import './GlobalBg.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force instant scroll to top, bypassing smooth scrolling CSS
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.style.scrollBehavior = '';

    // Re-initialize AOS for new DOM elements on route change
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init({
          duration: 800,
          once: true,
        });
        window.AOS.refresh();
      }, 100);
    }
  }, [pathname]);

  return null;
}

function MainLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <div className="global-bg-mesh"></div>}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kids" element={<KidsCoursesCatalog />} />
          <Route path="/kids/python" element={<KidsPython />} />
          <Route path="/kids/scratch" element={<KidsScratch />} />
          <Route path="/kids/pictoblox" element={<KidsPictoBlox />} />
          <Route path="/adults" element={<CoursesCatalog />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/book/:courseId" element={<Booking />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/book-kids/:courseId" element={<Booking type="kids" />} />
          <Route path="/book-kids" element={<Booking type="kids" />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CoursesProvider>
          <Router>
            <ScrollToTop />
            <div className="app-container">
              <MainLayout />
            </div>
          </Router>
        </CoursesProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
