import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <nav>
      <h1>Bookstore CMS</h1>
      <div className="links">
        <Link to="/" style={{ color: 'blue' }}>
          BOOKS
        </Link>
        <Link to="/categories" style={{ color: 'blue' }}>
          CATEGORIES
        </Link>
      </div>
    </nav>
  </div>
);

export default Header;
