import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">NS3</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <LinkContainer to={"/signup"}>
                    <NavItem>Sign Up</NavItem>
                    </LinkContainer>
                    <LinkContainer to={"/login"}>
                        <NavItem>Log In</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
          <Routes />
      </div>
  );
}

export default App;