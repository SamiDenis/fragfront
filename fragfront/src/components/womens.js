import React from "react";
import "./womens.css";
import Footer from "./footer.js"
import Add from "./add.js";

let Womens = (props) => {

  return (
    <body className="wo">
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

        <img src="https://www.estorepower.com/estore/ehsence/store/images/banner2.jpg" className="pic" />
        <a href="Womens/New" className="newB">NEW</a>

        <div className="grid2">
          {props.data.length !== 0
            ? props.data.map((womens) => (
              <h1 className="container">
                <div className="row">
                  <img src={womens.image_url} />
                  <p className="col">{womens.name}</p>
                  <p className="col">{womens.brand}</p>
                  <p className="col">{womens.type}</p>
                  <p className="col">USD ${womens.price}</p>
                  {/* <p className="col">{womens.family}</p>
                        <p className="col">{womens.notes}</p> */}
                  <Add
                    pic={womens.image_url}
                    name={womens.name}
                    price={womens.price} />
                </div>
              </h1>
            ))
            : null}
        </div>
        <Footer />
      </div>
    </body>
  );
};

export default Womens;