import React, { Component } from "react";
import "./cart.css";

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
            <div>
                <div className="cart">
                    <p>Add To Cart</p>
                    <form>
                        <label>
                            Select Item(s)
                              <input type="words" onChange={this.fragMens} name="name" />
                        </label>
                        <div>
                            <button onClick={this.fragMens}></button>
                        </div>
                    </form>
                </div>

                <div className="basket">
                    <h1>Cart Filled</h1>
                    <div className="basketinfo">
                        {this.state.perfume.length !== 0
                            ? this.state.perfume.map((basket) => (
                                <div className="add">
                                    {basket.name}
                                    <button onClick={(e) => this.fragUpdate(basket._id, e)}>
                                    </button>
                                    <button onClick={(e) => this.fragDelete(basket._id, e)}>
                                    </button>
                                </div>
                            ))
                            : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;