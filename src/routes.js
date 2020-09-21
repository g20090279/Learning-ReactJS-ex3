import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signup from './components/Signup/Singup';
import NotFound from './components/NotFound/NotFound';

const Routes = () => (
    <BrowserRouter basename={'/react-static'}>
        <Switch>
            <Route exact path="/" component={Welcome}/>
            {/* note that Route with "/" should be put in the last, since it match all or you can add 'exact' keyword */}
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;