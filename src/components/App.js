import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.get("/hello").then(res => {
      console.log(res.data);
    });
  }
  render() {
    return <div className="App">Hello World</div>;
  }
}

export default App;
