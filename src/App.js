import React, { Component } from "react";

import Modal from "../src/model/model";

import "./App.css";

class App extends Component {
  state = { show: false };

  changeShow = () => {
    this.setState(state => ({ show: !state.show }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.changeShow}>Show</button>
          {this.state.show && <Modal onClose={this.changeShow} />}
        </header>
      </div>
    );
  }
}

export default App;
