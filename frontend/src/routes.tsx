import { Dashboard } from 'pages/Dashboard';
import { Home } from 'pages/Home';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


const Routes = () =>{
    return(
       <BrowserRouter>
       <Route component={Home} path='/' exact/>
       <Route component={Dashboard} path='/dashboard'/>
       </BrowserRouter>
    );
}

export default Routes;