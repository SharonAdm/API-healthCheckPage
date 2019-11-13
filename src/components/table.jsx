import React, { Component } from "react";
import Row from "./row";

class Table extends Component {
  state = {
    rows: []
  };

  constructor(){
    super();
    fetch('http://www.mocky.io/v2/5dcbe17554000060009c1ece')
    .then(res => res.json())
    .then(results=> {
      this.setState({rows:results})
    })
  }

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>API</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map(row => (
              <Row key={row.id} row={row} />
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
