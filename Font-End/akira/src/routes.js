import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './Pages/Landing/'
import InformationPage from './Pages/Information';
import LoginPage from './Pages/Login';

function Routes() {
    return(
        <BrowserRouter>
            <Route path='/' component={LandingPage} exact />
            <Route path='/contato' component={InformationPage} exact />
            <Route path='/login' component={LoginPage} exact />
        </BrowserRouter>
    );
}

export default Routes;