import React, { Component } from "react";
import "./add.css";

class Add extends Component {
    constructor(props) {
        super(props);
    }

handleAdd = ()=> {
    console.log("added")
    fetch("https://fragbackend.herokuapp.com/Mens/Cart",  {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ image_url: this.props.pic, name: this.props.name, price: this.props.price })
        })
            .then((res) => res.json())
            .then((out) => console.log(out));
}


    render() {
        return (
            <div className="forMore">
                <div class="contain1">
                    <button onClick={this.handleAdd}> ADD </button>
                </div>
            </div>
        )
    }
}
export default Add;