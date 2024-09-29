import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
        <img src="/pizzeria.png" alt="pizza" className="header-image" />
        <div className="header-text">
            <h1>¡Pizzería Mamma Mia!</h1>
            <h3>¡Tenemos las mejores pizzas que podrías encontrar!</h3>
        </div>
    </div>
  );
}

export default Header;
