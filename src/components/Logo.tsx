
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="font-serif text-xl font-bold text-brand-navy flex items-center"
    >
      <span className="text-brand-teal">CWO</span>
      <span>Designs</span>
    </Link>
  );
};

export default Logo;
