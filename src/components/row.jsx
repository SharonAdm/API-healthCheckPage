import React, { Component } from "react";

class Row extends Component {
  state = {
      status: undefined
  }

  componentDidMount(){
    fetch(this.props.row.url)
    .then(res => res.json())
    .then(result => {
      if (result.status === "UP") {
          this.setState({status:true});
      }
    }).catch(()=>{
        this.setState({status:false});
    });
  }
  
  render() {
    return (
      <tr>
        <td>{this.props.row.name}</td>
        {this.state.status != undefined && <td>{this.state.status ? "true" : "false"}</td>}
        {this.state.status==undefined && <td>{"-"}</td>}
      </tr>
    );
  }
}

export default Row;
