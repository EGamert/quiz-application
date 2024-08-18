import React from 'react';
import './Navbar.css'
import Link from 'next/link'

const NavbarComponent = (props) => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href='/'><b className='back-button'>Back</b></Link>
        <h1 className="title">{props.title}</h1>
        <div className="score">Score: {props.score}</div>
      </div>
    </nav>
  );
};

export default NavbarComponent;