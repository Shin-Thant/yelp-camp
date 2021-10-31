import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddCampgroup } from "./pages/AddCampgroup";
import { CommentPage } from "./pages/CommentPage";
import { DetailsPage } from "./pages/DetailsPage";

import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";
import { SearchPage } from "./pages/SearchPage";
import { SignUp } from "./pages/SignUp";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/login/:from" component={Login} />
                    <Route path="/signUp/:from" component={SignUp} />
                    <Route path="/details/:name" component={DetailsPage} />
                    <Route path="/leaveComment" component={CommentPage} />
                    <Route path="/addCampgroup" component={AddCampgroup} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
