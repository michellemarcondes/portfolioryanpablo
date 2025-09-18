// src/components/Header.jsx
import { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between py-4">
        {/* Logo (placeholder) */}
      <div className="flex items-center">
        <img 
          src="ryanlogo.png" 
          alt="Logo" 
          className="h-[50px] w-[150px] object-contain"
        />
      </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="nav-link text-secondary">Início</a>
          <a href="#sobre" className="nav-link text-secondary">Sobre</a>
          <a href="#experiencia" className="nav-link text-secondary">Experiência</a>
          <a href="#certificados" className="nav-link text-secondary">Certificados</a>
          <a href="#projetos" className="nav-link text-secondary">Projetos</a>
          <a href="#contato" className="nav-link text-secondary">Contato</a>
        </nav>

        {/* Social Icons and CV Button */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary hover:scale-110 transition duration-300">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary hover:scale-110 transition duration-300">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="btn btn-highlight ml-4">
            Baixar Currículo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-secondary" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'}`}>
        <nav className="flex flex-col space-y-4 px-4">
          <a href="#inicio" className="text-secondary hover:text-primary transition duration-300" onClick={toggleMenu}>Início</a>
          <a href="#sobre" className="text-secondary hover:text-primary transition duration-300" onClick={toggleMenu}>Sobre</a>
          <a href="#experiencia" className="text-secondary hover:text-primary transition duration-300" onClick={toggleMenu}>Experiência</a>
          <a href="#certificados" className="text-secondary hover:text-primary transition duration-300" onClick={toggleMenu}>Certificados</a>
          <a href="#projetos" className="text-secondary hover:text-primary transition duration-300" onClick={toggleMenu}>Projetos</a>
          <a href="#contato" className="text-secondary hover:text-primary transition duration-300" onClick={toggleMenu}>Contato</a>
          
          <div className="flex items-center space-x-4 pt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="btn btn-highlight ml-4">
              Baixar Currículo
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;