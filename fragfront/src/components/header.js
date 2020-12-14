import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header(props) {

 
  return (
    <div>
      <nav>
        <div className="front">
          <Link to="/fragfront/" className="link">
            <div className="title">Dream of Fragrance</div>
          </Link>
        </div>
            <a href="/Mens" className="link">
              Mens
            </a>
          
            <a href="/Womens" className="link">
              Womens
            </a>
          
            {/* <Link to="/Mens/Cart" className="link">
              Cart
            </Link> */}
        
        
      </nav>
    </div>
  );
}

export default Header;

