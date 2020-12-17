import React, { Component } from 'react';
import "./editMens.css"

class editMens extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: "",
            price: "",
            image_url: "",
            message: "",
        }
    }

componentDidMount ()
{console.log(this.props.match.params.id)}
    
handleEdit = (e) => {
    e.preventDefault ()
        fetch("https://fragbackend.herokuapp.com/Mens/Cart/" + this.props.match.params.id, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ image_url: this.state.image_url, name: this.state.name, price: this.state.price }),
        })
            .then((res) => res.json())
            .then((out) => alert("Your Item has been Updated !"))
    };
    
    editHandler = (e) => {
        console.log(e.target.value)
        this.setState({ name: e.target.value})
    }
    
    editHandlerPic = (e) => {
        console.log(e.target.value)
        this.setState({ image_url: e.target.value})
    }
    
    editHandlerPrice = (e) => {
        console.log(e.target.value)
        this.setState({ price: e.target.value})
    }


    render() {
        return (
            <body className="editBack">
            <div>
            <a href="/fragfront/" className="editMens">
            <div className="editTitle">Dream of Fragrance</div>
          </a>
          <a href="/Mens" className="editLink">
            Mens
            </a>

          <a href="/Womens" className="editLink">
            Womens
            </a>

          <a href="/Mens/Cart" className="editLink">
            Cart
            </a>
                 <form className="formMen">
                    Name: <p> <input type="text" onChange={this.editHandler}></input></p>
                    Image Link: <p><input type="text" onChange={this.editHandlerPic}></input></p>
                    Price: <p><input type="text" onChange={this.editHandlerPrice}></input></p>
                    <button onClick={(e) => this.handleEdit (e)}>SUBMIT</button>
                    
                 </form>
            </div>
            </body>
        );
    }
}

export default editMens;