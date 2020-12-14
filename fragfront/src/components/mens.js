import React, { Component } from "react";
import "./mens.css";

class Mens extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
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
                <p></p>
                {this.props.data.length !==0
                ? this.props.data.map((mens) => (
                    <div className="two">
                        <div className="bord">
                        <img src={mens.image_url} />
                        <p>{mens.name}</p>
                        <p>{mens.brand}</p>
                        <p>{mens.type}</p>
                        <p>$ {mens.price}</p>
                        {/* <p className="frag">{mens.family}</p>
                        <p className="frag">{mens.notes}</p> */}
                    </div>
                </div>
                ))
            : null}
            </div>
            
        );
        // <button onClick>Add to Cart</button>
    }
}

export default Mens;