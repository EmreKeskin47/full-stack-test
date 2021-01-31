import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FormComponent from "../../components/Form";
import User from "../../models/User";
import nav from "react-bootstrap/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
    const user = new User("", "", 0, "", 0, 0, 0, 0);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/create">
                                Create
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/edit">
                                Edit
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <BrowserRouter>
                <Switch>
                    <Route path="/create">
                        <FormComponent user={user} />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default NavBar;
