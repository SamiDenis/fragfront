import React, { Component } from "react";
import { Link } from "react-router-dom";
// import React from "react";
import "./cart.css";
import Footer from "./footer.js"


class Cart extends Component {
    constructor(props) {
        super();
        this.state = {
            mens: "",
            womens: "",
            perfume: [],
        };
    }
    componentDidMount() {
        this.fetchCartPerfume();
    }

    fetchCartPerfume = () => {
        console.log("pop")
        fetch("https://fragbackend.herokuapp.com/Mens/Cart", {
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((out) => this.setState({ perfume: out }));

    };

    fragAdd = () => {
        console.log("added")
        fetch("https://fragbackend.herokuapp.com/Mens/Cart", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ perfume: this.state.perfume }),
        })
            .then((res) => res.json())
            .then((out) => this.fetchCartPerfume());
    };

    // fragAll = (e) => {

    //     this.setState({
    //         perfume: e.target.value,
    //     });
    //     console.log(e.target.value);
    // };

    // fragUpdate = (_id, e) => {
    //     fetch("https://fragbackend.herokuapp.com/Mens/Cart/" + _id, {
    //         method: "PUT",
    //         headers: {
    //             Accept: "application/json",
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ perfume: this.state.perfume, "status": false }),
    //     })
    //         .then((res) => res.json())
    //         .then((out) => this.fetchCartPerfume());
    // };

    fragDelete = (_id) => {
        console.log("deleted");
        fetch("https://fragbackend.herokuapp.com/Mens/Cart/" + _id, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((out) => this.fetchCartPerfume());
    };
// handleClick = () => {
//     console.log("new")
// }


    render() {
        console.log(this.state.perfume);
        return (
            <body class="final">
                <div className="top">
                    <a href="/fragfront/" className="next">
                        <div className="cartTitle">Dream of Fragrance</div>
                    </a>
                    <a href="/Mens" className="page">Mens</a>

                    <a href="/Womens" className="page">Womens</a>

                    <a href="/Mens/Cart" className="page">Cart</a>

                    <img src="https://luxurycandlesupplies.com.au/wp-content/uploads/2018/08/lcs-banner-fragrance-101.jpg" className="last" />

                    <div className="cart">
                        <p className="added">Add To Basket</p>

                        <div>
                            <div className="grid2">

                                {this.state.perfume.length !== 0
                                    ? this.state.perfume.map((womens, mens) => (

                                        <p>
                                            <div className="prod">
                                                <img src={womens.image_url} />
                                                <p>{womens.name}</p>
                                                <p>${womens.price}</p>
                                                <p>{mens.image_url}</p>
                                                <p>{mens.name}</p>
                                                <p>{mens.price}</p>
                                            </div>
                                            {/* <button onClick="Men/Cart" className="editButton">EDIT</button> */}
                                            {/* <Link to={`Mens/Cart/${mens._id}`} className="newButtonE">EDIT</Link> */}
                                            <Link to={`Cart/${womens._id}`} className="newButtonE">EDIT</Link>
                                            <button onClick={() => this.fragDelete(womens._id)}>DELETE</button>
                                            {/* <button onClick={() => this.fragAdd(womens)}> NEW </button> */}
                                        </p>

                                    ))
                                    : null}
                                    
                            </div>
                            

                        </div>

                    </div>
                    <Footer />
                </div>
            </body>
        );
    }
}

export default Cart;