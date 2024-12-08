import { Link, NavLink } from "react-router-dom";
import "@fontsource/poppins";
import './Navbar.css'
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";




const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return ( 
        <div>
          
            <div className="navlinks">
              <div className="links">
              <div className="nextgen">
                <Link to='/'>
                     <div className="logo">
                         <h1 className='the'>The</h1>
                         <h1 className='next'>Next Gen</h1>
                         <h1 className="show">SHOW</h1>
                     </div>
                </Link>
              </div>

               
              
              <div className={`bars ${isOpen ? "open" : "close"}`}>
              <div className="others">
                   <NavLink to='/aboutus'>About Us</NavLink>
                   <Link to='/event'>Events</Link>
                   <Link to='/talent'>Talents</Link>
                   <Link to='/contact'>Contact</Link>
              </div>
                
              <div className="button"><button>Join Us</button></div>
            </div>

             
             
            <div className="toggle" onClick={toggleMenu}>
            {isOpen ?  <FaTimesCircle /> : <FaBars />}
            </div>
            </div>
            </div>
        </div>
     );
}
 
export default Navbar;