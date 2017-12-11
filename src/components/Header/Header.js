import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="content-width">
        <Link to="/">
          <h3 className="logo"><span className="gold bold">Film</span> Classics</h3>
        </Link>
      </nav>
    </header>
  )
}

export default Header;
