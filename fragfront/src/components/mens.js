import React, { Component } from "react";
import "./mens.css";

class Mens extends Component {
    constructor(props) {
        super();
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="one">
                <p></p>
                {this.props.data.length !==0
                ? this.props.data.map((mens) => (
                    <h1 className="two">
                        <span className="three">{mens.name}</span>
                        <div className="four">{mens.brand}</div>
                    </h1>
                ))
            : null}
            </div>
        );
    }
}

export default Mens;