
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Recipe Finder App. All rights reserved.</p>
      <p>
        Created with ❤️ by Chashara Devindy Bandaranyake
      </p>
    </footer>
  );
};

export default Footer;
