import React from 'react';
import './Navbar.css'
import {useRouter} from 'next/navigation'

const NavbarComponent = (props) => {

  const router = useRouter();

  return (
    <nav className="navbar">
      <div className="container">
        <a className='back-button' href='/' onClick={()=>{
          router.push('/');
          props.reset
        }}>Back</a>
        <h1 className="title">{props.title}</h1>
        <div className="score">Score: {props.score}</div>
      </div>
    </nav>
  );
};

export default NavbarComponent;