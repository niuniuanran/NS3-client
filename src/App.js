import React, {useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import "./App.css";
import Routes from "./Routes";
import {AppContext} from "./libs/contextLib";
import {Auth} from "aws-amplify";
import {onError} from "./libs/errorLib";

function App() {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const history = useHistory();

    useEffect(() => {
        loadAuthSession().then(() => setIsAuthenticating(false));
    }, []);

    async function loadAuthSession() {
        try {
            await Auth.currentSession();
            userHasAuthenticated(true);
        } catch (e) {
            if (e !== 'No current user') {
                onError(e);
            }
        }
    }

    async function handleLogout() {
        await Auth.signOut();
        history.push("/login");

        userHasAuthenticated(false);
    }

    return (
        !isAuthenticating &&
        <div className="App container">

            <Navbar bg="dark" variant="dark" fluid collapseOnSelect >
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            <div className={"logo-container"}><img src={"/logo-transparent.png"} alt={""} className={"logo"} title={"NS3"}/>
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {isAuthenticated
                            ? <>
                                <NavItem onClick={handleLogout}>Logout</NavItem></>
                            : <>
                                <LinkContainer to="/signup">
                                    <NavItem>Signup</NavItem>
                                </LinkContainer>
                                <LinkContainer to="/login">
                                    <NavItem>Login</NavItem>
                                </LinkContainer>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <AppContext.Provider value={{isAuthenticated, userHasAuthenticated}}>
                <Routes/>
            </AppContext.Provider>
        </div>
    );
}

export default App;