import React from "react";
import "./womens.css";

let Womens = (props) => {
    console.log(props);
    return (
        <div className="card">
             <a href="/fragfront/" className="turn">
            <div className="womensTitle">Dream of Fragrance</div>
          </a>
                <a href="/Mens" className="turn">
              Mens
            </a>
          
            <a href="/Womens" className="turn">
              Womens
            </a>
          
            <a href="/Mens/Cart" className="turn">
              Cart
            </a>
            {props.data.length !==0
            ?props.data.map((womens) =>(
                <h1 className="Womens">
                    <div className="border">
                    <img src={womens.image_url} />
                        <p className="frag">{womens.name}</p>
                        <p className="frag">{womens.brand}</p>
                        <p className="frag">{womens.type}</p>
                        <p className="frag">$ {womens.price}</p>
                        {/* <p className="frag">{womens.family}</p>
                        <p className="frag">{womens.notes}</p> */}
                    </div>
                </h1>
            ))
        : null}
        </div>
    );
};

export default Womens;