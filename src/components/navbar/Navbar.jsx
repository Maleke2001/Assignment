import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* Your logo component or image */}
      <p>_Surveys</p>
      </div>
      <div className="navbar-links">
        {/* Your links on the right */}
        <a href="/">FILL OUT SURVEY</a>
        <a href="/">VIEW SURVEY RESULTS</a>
      </div>
    </nav>
  );
};

export default Navbar;
