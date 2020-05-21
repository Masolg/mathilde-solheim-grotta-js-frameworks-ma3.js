import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import News from "../news/News";
import Login from "../login/Login";

function Layout() {
    return (
        <Router>
            <NavLink to="/" exact>
                Website <br />
            </NavLink>
            <NavLink to="/" exact className="nav-link">
                Home
            </NavLink>
            <NavLink to="/news" exact className="nav-link">
                News
            </NavLink>
            <NavLink to="/login" exact className="nav-link">
                Login
            </NavLink>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/news" exact component={News} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </Router>
    );
}

export default Layout;
