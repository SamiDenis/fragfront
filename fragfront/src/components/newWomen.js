import React, { Component } from 'react';
import "./newWomen.css";

class newWomens extends Component {
    constructor(props) {
        super(props)
        this.state={
            name: "",
            price: "",
            image_url: ""
        }
    }

    handleNewW = (e)=> {
        e.preventDefault()
        console.log("added")
        fetch("https://fragbackend.herokuapp.com/Womens",  {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ image_url: this.state.image_url, name: this.state.name, price: this.state.price })
            })
                .then((res) => res.json())
                .then((out) => console.log(out));
    }

    myChangeHandler = (e) => {
        console.log(e.target.value)
        this.setState({ name: e.target.value})
    }
    
    myChangeHandlerPic = (e) => {
        console.log(e.target.value)
        this.setState({ image_url: e.target.value})
    }
    
    myChangeHandlerPrice = (e) => {
        console.log(e.target.value)
        this.setState({ price: e.target.value})
    }

    render() {
        return (
            <body className="newBackW">
            <div>
            <a href="/fragfront/" className="newWomens">
            <div className="titleW">Dream of Fragrance</div>
          </a>
          <a href="/Mens" className="newLinkW">
            Mens
            </a>

          <a href="/Womens" className="newLinkW">
            Womens
            </a>

          <a href="/Mens/Cart" className="newLinkW">
            Cart
            </a>
                
                <form>
                    Name: <p> <input type="text" onChange={this.myChangeHandler}></input></p>
                    Image Link: <p><input type="text" onChange={this.myChangeHandlerPic}></input></p>
                    Price: <p><input type="text" onChange={this.myChangeHandlerPrice}></input></p>
                    <button onClick={(e) => this.handleNewW (e)}>SUBMIT</button>
                 </form>
            </div>
            </body>
        );
    }
}

export default newWomens;