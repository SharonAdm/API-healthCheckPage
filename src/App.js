import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Header from "./components/header";
import Table from "./components/table";

library.add(fab);

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
