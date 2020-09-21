import React from "react";
import {Route, Redirect, useLocation} from "react-router-dom";
import {useAppContext} from "../libs/contextLib";

function querystring(name, url = window.location.href) {
    name = name.replace(/[[]]/g, "\\$&");

    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
    const results = regex.exec(url);

    if (!results) {
        return null;
    }
    if (!results[2]) {
        return "";
    }

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function AuthenticatedRoute({children, ...rest}) {

    // useAppContext is the consumer of the AppContext. It returns the values in the context provider.
    const {isAuthenticated} = useAppContext();

    return (
        <Route {...rest}>
            {!isAuthenticated? children : <Redirect to="/"/>}
        </Route>
    )


}