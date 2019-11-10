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
          <Navbar.Brand
            href="https://www.pep.co.ir"
            title="شرکت پرداخت الکترونیک پاسارگاد"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Pasargad_Electronic_Payment_Services_Company_logo.png"
              height="45"
              width="45"
              className="align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ml-auto">
              <Nav.Item>
                <a
                  className="nav-link"
                  href="https://www.pep.co.ir/about-us/"
                  title="درباره ما"
                >
                  About
                </a>
              </Nav.Item>
              <Nav.Item>
                <a
                  className="nav-link"
                  href="https://www.pep.co.ir/helpdesk/"
                  title="امداد مشتریان پاسارگاد"
                >
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
