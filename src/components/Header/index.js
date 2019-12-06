import React, { Component } from 'react';
import './header.css'
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div className="header">
      <Link to="/">Filmes</Link>
    </div>
  );
}

export default Header;