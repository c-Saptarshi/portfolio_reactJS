import React from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <p><b className='name'>Saptarshi's</b> Portfolio</p>
      <div className='desktopMenu'>
        <Link
          activeClass='active'
          to='intro'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopListMenuItems"
        >
          Home
        </Link>
        <Link
          activeClass='active'
          to='skills'
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          className="desktopListMenuItems"
        >
          Skills
        </Link>
        <Link
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          className="desktopListMenuItems"
        >
          Projects
        </Link>
      </div>
      <Link
        to='contact'
        smooth={true}
        duration={500}
        className='desktopMenuBtn'
      >
        <img src={contactImg} alt='' className='desktopMenuImg' /> Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
