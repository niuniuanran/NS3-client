import React from "react";
import {Route, Redirect, useLocation} from "react-router-dom";
import {useAppContext} from "../libs/contextLib";

export default function AuthenticatedRoute({children, ...rest}) {

    // useAppContext is the consumer of the AppContext. It returns the values in the context provider.
    const {isAuthenticated} = useAppContext();

    return (
        <Route {...rest}>
            {!isAuthenticated? children : <Redirect to="/"/>}
        </Route>
    )


}