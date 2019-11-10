import React, { Component } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle, faSpinner, faTimesCircle} from '@fortawesome/free-solid-svg-icons'

class Row extends Component {
  state = {
    status: undefined
  };

  componentDidMount() {
    fetch(this.props.row.url)
      .then(res => res.json())
      .then(result => {
        if (result.status === "UP") {
          this.setState({ status: true });
        }
      })
      .catch(() => {
        this.setState({ status: false });
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.row.name}</td>
        <td>{this.props.row.description}</td>
        {this.state.status !== undefined && (
          <td>{this.state.status ? (<FontAwesomeIcon icon={faCheckCircle} className="text-success"></FontAwesomeIcon>) : (<FontAwesomeIcon icon={faTimesCircle} className="text-danger"></FontAwesomeIcon>)}</td>
        )}
        {this.state.status === undefined && <td>{(<FontAwesomeIcon icon={faSpinner} className="text-primary"></FontAwesomeIcon>)}</td>}
      </tr>
    );
  }
}

export default Row;
