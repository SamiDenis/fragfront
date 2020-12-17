import React, { Component } from "react";
import "./mens.css";
import Footer from "./footer.js";
import Add from "./add.js";

class Mens extends Component {
  constructor(props) {
    super();
  }

  

  render() {
    return (
      <body className="first">
        <div className="one">
          <a href="/fragfront/" className="next">
            <div className="mensTitle">Dream of Fragrance</div>
          </a>
          <a href="/Mens" className="next">
            Mens
            </a>

          <a href="/Womens" className="next">
            Womens
            </a>

          <a href="/Mens/Cart" className="next">
            Cart
            </a>

          <img src="https://cdn.shopify.com/s/files/1/1397/9545/collections/menbanner3_d41072cb-e054-40c8-96a6-ca20dafa898a.jpg?v=1475332146" className="pic" />

          <a href="Mens/New" className="newButton">NEW</a>
          <div className="grid">
        
            {this.props.data.length !== 0
              ? this.props.data.map((mens) => (
                <h1 className="containerss">
                  <div className="rowss">
                    <img src={mens.image_url} />
                    <p className="col">{mens.name}</p>
                    <p className="col">{mens.brand}</p>
                    <p className="col">{mens.type}</p>
                    <p className="col"> USD ${mens.price}</p>
                    {/* <p className="frag">{mens.family}</p>
                        <p className="frag">{mens.notes}</p> */}
                    <Add
                      pic={mens.image_url}
                      name={mens.name}
                      price={mens.price} />
                  </div>
                </h1>
              ))
              : null}
          </div>
          <Footer />
        </div>
      </body>
    );
  }
}


export default Mens;