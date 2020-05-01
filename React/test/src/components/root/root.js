import React from 'react';
import Header from '../header/header';
import './root.css';
import Dashboard from '../../pages/dashboard/dashnboard'
import { Route } from 'react-router-dom'
import CategoryManagement from '../../pages/cat-mgmt/cat-mgmt';

// Functional Component

//PROPS
function Root() {
    return (
        <div className='ui container'>
            <Header />
            <Route path="/" exact component={Dashboard}/>
            <Route path="/category" component={CategoryManagement}/>
        </div>
    );
}
// Nesting
// Resuability
// Configuration
export default Root;
