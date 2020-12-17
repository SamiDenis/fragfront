import React, { Component } from 'react';
import "./editWomens.css"

class editWomens extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: "",
            price: "",
            image_url: ""
        }
    }

// componentDidMount ()
// {console.log(this.props.match.params.id)}
    
handleEditW = (e) => {
    e.preventDefault ()
        fetch("https://fragbackend.herokuapp.com/Mens/Cart/id/" + this.props.match.params.id, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ image_url: this.state.image_url, name: this.state.name, price: this.state.price }),
        })
            .then((res) => res.json())
            .then((out) => this.setState())
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
            <body className="editBackW">
            <div>
            <a href="/fragfront/" className="editWomens">
            <div className="mensTitle">Dream of Fragrance</div>
          </a>
          <a href="/Mens" className="editLinkW">
            Mens
            </a>

          <a href="/Womens" className="editLinkW">
            Womens
            </a>

          <a href="/Mens/Cart" className="editLinkW">
            Cart
            </a>
                 <form className="formWomen">
                    Name: <p> <input type="text" onChange={this.editHandler}></input></p>
                    Image Link: <p><input type="text" onChange={this.editHandlerPic}></input></p>
                    Price: <p><input type="text" onChange={this.editHandlerPrice}></input></p>
                    <button onClick={(e) => this.handleEditW (e)}>SUBMIT</button>
                 </form>
            </div>
            </body>
        );
    }
}

export default editWomens;