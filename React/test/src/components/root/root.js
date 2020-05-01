import React, { Suspense } from 'react';
import Header from '../header/header';
import LoadingIndicator from '../loading/loading';
import { Switch, Route } from 'react-router-dom';
import './root.css';

const Dashboard = React.lazy(() => import('../../pages/dashboard/dashboard'));
const CategoryManagement = React.lazy(() => import('../../pages/category-management/index'));
const UnitManagement = React.lazy(() => import('../../pages/unit-management/index'));

//PROPS
function Root() {
    return (
        <div className='ui container'>
            <Header />
            <Suspense fallback={<LoadingIndicator />}>
                <Switch>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/category-management' component={CategoryManagement} />
                    <Route path='/unit-management' component={UnitManagement} />
                </Switch>
            </Suspense>
        </div>
    );
}
// Nesting
// Resuability
// Configuration
export default Root;
