import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
// import logo from "../components/images/Dream.png";

function Header(props) {

 
  return (
    <body className="back">
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
           
        
            <h3>Sami Denis ©2020</h3>
      </nav>
    </div>
    </body>
  );
}

export default Header;

