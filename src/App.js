import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";

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
                    <NavItem href="/signup">Signup</NavItem>
                    <NavItem href="/login">Login</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
          <Routes />
      </div>
  );
}

export default App;