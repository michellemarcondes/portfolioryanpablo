// src/App.jsx
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// Importações do Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './App.css';

function App() {
  // Simular o comportamento do AOS (Animate on Scroll)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('section').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;