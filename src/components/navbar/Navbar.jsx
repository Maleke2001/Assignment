import React, { useEffect } from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const handleNavLinkClick = (e) => {
    const targetNavLink = e.currentTarget;
    if (targetNavLink.classList.contains('active')) {
      targetNavLink.style.textDecoration = 'underline';
      targetNavLink.style.color = "Black"
    } else {
      targetNavLink.style.textDecoration = 'none';
    }
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll('.link');
    navLinks.forEach((link) => {
      if (link.classList.contains('active')) {
        link.style.textDecoration = 'underline';
        link.style.color = "Black";
      } else {
        link.style.textDecoration = 'none';
      }
    });
  }, []); // Run once on component mount

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Your logo component or image */}
        <p>_Surveys</p>
      </div>
      <div className="navbar-links">
        {/* Your links on the right */}
        <NavLink exact to='/' className='link' activeClassName='active-link' onClick={handleNavLinkClick}>
          FILL OUT SURVEY
        </NavLink>
        <NavLink to='/results' className='link' activeClassName='active-link' onClick={handleNavLinkClick}>
          VIEW SURVEY RESULTS
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
