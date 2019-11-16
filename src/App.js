import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import './App.css';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router>
            <div >Boiler Plate</div>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
