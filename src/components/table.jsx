import React, { Component } from "react";
import Row from "./row";

class Table extends Component {
  state = {
    rows: [
      { id: 1, name: "API1", url: "http://www.mo1cky.io/v2/5da316a22f00005b008a06de" },
      { id: 2, name: "API2", url: "http://www.mocky.io/v2/5da316a22f00005b008a06de" },
      { id: 3, name: "API3", url: "http://www.mocky.io/v2/5da316a22f00005b008a06de" },
      { id: 4, name: "API4", url: "http://www.mocky.io/v2/5da316a22f00005b008a06de" },
      { id: 5, name: "API5", url: "http://www.mocky.io/v2/5da316a22f00005b008a06de" },
      { id: 6, name: "API6", url: "http://www.mocky.io/v2/5da316a22f00005b008a06de" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>API</th>
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
