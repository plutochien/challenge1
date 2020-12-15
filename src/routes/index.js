
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserListPage from "../pages/UserListPage/UserListPage";
import UserPage from "../pages/UserPage/UserPage";

const routes = () => (
    <Switch>
        <Route path="/" exact component={UserListPage} />
        <Route path="/users" component={UserListPage} />
        <Route path="/user/:userId" component={UserPage} />
    </Switch>
);

export default routes;