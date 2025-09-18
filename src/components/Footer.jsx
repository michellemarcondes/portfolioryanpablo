import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 text-white">
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img src="ryanlogo.png" alt="Ryan Pablo Logo" className="h-10 mb-4" />
          
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Michelle Marcondes. Todos os direitos reservados.
          </p>
          
          {/* Links */}
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;