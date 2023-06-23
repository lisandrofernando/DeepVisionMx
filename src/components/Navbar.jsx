import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import myLog from '../assets/logoandvideos/FullLogo_Transparent.png'


function Navbar() {

  // const history = useHistory();
  // const handleSmoothScroll = (event) => {
  //   event.preventDefault();
  //   const targetPath = event.target.getAttribute('id');
  //   history.push(targetPath);
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };


  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container" id='Home'>
          {/* <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
          Dv <i className='fab fa-typo3'/>
           </Link> */}
          <div className="navbar-logo">
            <img src={myLog} alt="Company Logo" />
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <div to="/Home" className="nav-links" onClick={closeMobileMenu}>
                Home
              </div>
            </li>
            <li className="nav-item">
              <div
                to="/About"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </div>
            </li>
            <li className="nav-item">
              <div
                to="/Services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </div>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contact</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
