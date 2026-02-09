import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Operations from './components/Operations';
import Sustainability from './components/Sustainability';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import OperationsPage from './pages/OperationsPage';
import ContactPage from './pages/ContactPage';

import MediaPage from './pages/MediaPage';
import CareersPage from './pages/CareersPage';
import LeadershipPage from './pages/LeadershipPage';
import ScrollToTop from './components/ScrollToTop';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Operations />
      <Sustainability />
      <Footer />
    </>
  );
}

import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-profile" element={<AboutPage />} />
          <Route path="/operations-detail" element={<OperationsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/leadership" element={<LeadershipPage />} />
          <Route path="/contact-full" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
