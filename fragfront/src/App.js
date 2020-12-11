import React, { Component } from "react";
import Header from "./components/header";
import Mens from "./components/mens";
import Womens from "./components/womens";
// import Cart from "./components/cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';


class App extends Component() {
  constructor(props) {
    super();
    this.state = {
      mensInfo: [],
      womensInfo: [],
    };
  }

  componentDidMount() {
    fetch("https://fragbackend.herokuapp.com/Mens", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => this.setState({ mensInfo: data }));

    fetch("https://fragbackend.herokuapp.com/Womens", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => this.setState({ womensInfo: data }));
  }



  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/Mens">
                <Mens data={this.state.mensInfo} />
              </Route>
              <Route exact path="/Womens">
                <Womens data={this.state.womensInfo} />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}


export default App;

