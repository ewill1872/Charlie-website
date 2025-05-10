
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-300 mt-4 max-w-xs">
              Professional web development and design services for businesses and individuals.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail size={16} />
              <a href="mailto:charlie.oneill@cwodesigns.co.uk" className="hover:text-brand-teal transition-colors">
                charlie.oneill@cwodesigns.co.uk
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-xl mb-4">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-brand-teal transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-teal transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-brand-teal transition-colors">Projects</Link></li>
              <li><Link to="/prices" className="hover:text-brand-teal transition-colors">Prices</Link></li>
              <li><Link to="/contact" className="hover:text-brand-teal transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-xl mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="hover:text-brand-teal transition-colors">Web Design</span></li>
              <li><span className="hover:text-brand-teal transition-colors">Web Development</span></li>
              <li><span className="hover:text-brand-teal transition-colors">Responsive Layouts</span></li>
              <li><span className="hover:text-brand-teal transition-colors">E-Commerce Solutions</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} CWODesigns. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Website by <Link to="/" className="text-brand-teal hover:underline">CWODesigns</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
