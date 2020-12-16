import React, { Component } from "react";
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
        fetch("https://fragbackend.herokuapp.com/Mens/Cart", {
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((out) => this.setState({ perfume: out }));
            
    };

    fragApp = (e) => {
        e.preventDefault();
        fetch("https://fragbackend.herokuapp.com/Mens/Cart", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ perfume: this.state.perfume, "status": true }),
        })
            .then((res) => res.json())
            .then((out) => this.fetchCartPerfume());
    };

    fragMens = (e) => {
        this.setState({
            perfume: e.target.value,
        });
        console.log(e.target.value);
    };

    fragUpdate = (_id, e) => {
        fetch("https://fragbackend.herokuapp.com/Mens/Cart/" + _id, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ perfume: this.state.perfume, "status": false }),
        })
            .then((res) => res.json())
            .then((out) => this.fetchCartPerfume());
    };

    fragDelete = (_id, e) => {
        console.log(_id);
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
                        <form>
                            <div>
                            <div className="grid2">
            {this.state.perfume.length !==0
            ?this.state.perfume.map((womens) =>(
                <p>
                    {womens.perfume}
                </p>
                  
            ))
        : null}
        </div>
                                <button onClick={this.fragMens}>EDIT</button>
                                <button onClick={this.fragMens}>DELETE</button>      
                                </div>
                            </form>
                        </div>
                    <Footer />
                </div>
            </body>
        );
    }
}

export default Cart;