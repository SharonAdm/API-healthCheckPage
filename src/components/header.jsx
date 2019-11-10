import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar
          collapseOnSelect
          expand="md"
          className="navbar-dark bg-secondary "
        >
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Item>
                <a className="nav-link" href="https://www.pep.co.ir">
                  Home
                </a>
              </Nav.Item>
              <Nav.Item>
                <a className="nav-link" href="https://www.pep.co.ir/about-us/">
                  About
                </a>
              </Nav.Item>
              <Nav.Item>
                <a className="nav-link" href="https://www.pep.co.ir/helpdesk/">
                  Help
                </a>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;
