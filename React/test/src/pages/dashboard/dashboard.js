import React, { Component, Suspense } from 'react';
import LoadingIndicator from '../../components/loading/loading';

const PeopleCards = React.lazy(() => import('../../components/people-cards/people-cards'));

// Sadece data gösterilecek ise Functional Component.
const Dashboard = () => {
    return (
        <Suspense fallback={<LoadingIndicator />}>
            <PeopleCards />
        </Suspense>
    );
};

export default Dashboard;
