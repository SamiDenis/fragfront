import React, { Component } from "react";
import Header from "./components/header";
import Mens from "./components/mens";
import Womens from "./components/womens";
import Cart from "./components/cart";
import NewMens from "./components/newMen";
import NewWomens from "./components/newWomen";
import EditMens from "./components/editMens";
import EditWomens from "./components/editWomens";
// import Footer from "./components/footer"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      all: null,
      mensInfo: [],
      womensInfo: [],
      cartInfo: [],
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
  

    // this.pullFrag();
    // pullFrag = () => {
      fetch("https://fragbackend.herokuapp.com/Mens/Cart", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => this.setState({ perfume: data.perfume }));
  }

  

  
  



  render() {
    return (
      <div className="App">
        <div>
          <BrowserRouter>
          <Route exact path="/fragfront">
            <Header />
            </Route>
            <Switch>
              <Route exact path="/Mens">
                <Mens data={this.state.mensInfo} />
              </Route>
              <Route exact path="/Womens">
                <Womens data={this.state.womensInfo} />
              </Route>
              <Route exact path="/Mens/Cart">
                  <Cart />
              </Route>
              <Route exact path="/Mens/New">
                <NewMens />
              </Route>
              <Route exact path="/Womens/New">
                <NewWomens />
              </Route>
              <Route path="/Mens/Cart/:id" component={EditMens} />
              <Route>
                <EditWomens />
              </Route>
            </Switch>
          </BrowserRouter>
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}


export default App;

