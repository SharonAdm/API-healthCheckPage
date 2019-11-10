import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Table from "./components/table";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Header />
        <Table />
      </main>
    );
  }
}
export default App;
