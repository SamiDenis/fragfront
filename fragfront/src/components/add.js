import React, { Component } from "react";
import "./add.css";

class Add extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="forMore">
                <div class="contain1">
                    <button onClick={() => alert("You item has been added !")}> ADD </button>
                </div>
            </div>
        )
    }
}
export default Add;