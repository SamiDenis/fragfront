import React from "react";
import "./womens.css";

let Womens = (props) => {
    console.log(props);
    return (
        <div className="card">
            {props.data.length !==0
            ?props.data.map((womens) =>(
                <h1 className="Womens">
                    <div className="border">
                        <span className="name">{womens.name}</span>
                        <span className="brand">{womens.brand}</span>
                    </div>
                    <div className="type">{womens.type}</div>
                </h1>
            ))
        : null}
        </div>
    );
};

export default Womens;