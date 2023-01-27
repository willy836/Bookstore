import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../user-logo.png';

const Header = () => (
  <div className="bg-nav">
    <nav>
      <div className="nav-links">
        <h1 className="logo-name">Bookstore CMS</h1>
        <div className="links">
          <Link
            to="/"
            style={{ color: '#777', textDecoration: 'none', fontSize: '15px' }}
          >
            BOOKS
          </Link>
          <Link
            to="/categories"
            style={{ color: '#999', textDecoration: 'none', fontSize: '15px' }}
          >
            CATEGORIES
          </Link>
        </div>
      </div>
      <img className="logo-img" src={logoImg} alt="logo" />
    </nav>
  </div>
);

export default Header;
