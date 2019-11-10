import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar  navbar-expand-md navber-fixed-top navbar-dark bg-secondary">
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#myNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="myNav" className="collapse navbar-collapse">
            <ul className=" navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="https://www.pep.co.ir">
                  Home
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="https://www.pep.co.ir/about-us/">
                  About
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="https://www.pep.co.ir/helpdesk/">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Header;
