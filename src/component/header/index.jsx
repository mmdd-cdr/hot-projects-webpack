import React from "react"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import "./index.scss";

const Header = () => {
  const pageLocation = useLocation();

  return <div className="header" >
    
    <div className="header-button" >
      <Link className={`header-nav ${pageLocation.pathname === "/" ? 'active' : ''}`} to="/" >Popular</Link>
    </div>
    <div className="header-button" >
      <Link className={`header-nav ${pageLocation.pathname === "/battle" ? 'active' : ''}`} to="/battle" >Battle</Link>
    </div>
  </div>
}

export default Header;