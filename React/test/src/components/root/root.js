import React from 'react';
import Header from '../header/header';
import './root.css';
import Card from '../card/card';
import faker from 'faker';
import ApproveCard from '../approve/approve';

// Functional Component

//PROPS
function Root() {
    return (
        <div className='ui container'>
            <Header />
            <div className='ui link cards two'>
                <Card
                    avatar={faker.image.avatar()}
                    firstName={faker.name.firstName()}
                    lastName={faker.name.lastName()}
                    joinDate={faker.date.past().getFullYear()}
                    friendsCount={faker.random.number(500)}
                    jobArea={faker.name.jobArea()}>
                    <ApproveCard></ApproveCard>
                </Card>
                <Card
                    avatar={faker.image.avatar()}
                    firstName={faker.name.firstName()}
                    lastName={faker.name.lastName()}
                    joinDate={faker.date.past().getFullYear()}
                    friendsCount={faker.random.number(500)}
                    jobArea={faker.name.jobArea()}>
                    <ApproveCard></ApproveCard>
                </Card>
                <Card
                    avatar={faker.image.avatar()}
                    firstName={faker.name.firstName()}
                    lastName={faker.name.lastName()}
                    joinDate={faker.date.past().getFullYear()}
                    friendsCount={faker.random.number(500)}
                    jobArea={faker.name.jobArea()}>
                    <ApproveCard></ApproveCard>
                </Card>
                <Card
                    avatar={faker.image.avatar()}
                    firstName={faker.name.firstName()}
                    lastName={faker.name.lastName()}
                    joinDate={faker.date.past().getFullYear()}
                    friendsCount={faker.random.number(500)}
                    jobArea={faker.name.jobArea()}
                />
                <Card
                    avatar={faker.image.avatar()}
                    firstName={faker.name.firstName()}
                    lastName={faker.name.lastName()}
                    joinDate={faker.date.past().getFullYear()}
                    friendsCount={faker.random.number(500)}
                    jobArea={faker.name.jobArea()}>
                    <ApproveCard></ApproveCard>
                </Card>
                <Card
                    avatar={faker.image.avatar()}
                    firstName={faker.name.firstName()}
                    lastName={faker.name.lastName()}
                    joinDate={faker.date.past().getFullYear()}
                    friendsCount={faker.random.number(500)}
                    jobArea={faker.name.jobArea()}>
                    <ApproveCard></ApproveCard>
                </Card>
                <Card
                    avatar={faker.image.avatar()}
                    firstName={faker.name.firstName()}
                    lastName={faker.name.lastName()}
                    joinDate={faker.date.past().getFullYear()}
                    friendsCount={faker.random.number(500)}
                    jobArea={faker.name.jobArea()}>
                    <ApproveCard></ApproveCard>
                </Card>
                <Card
                    avatar={faker.image.avatar()}
                    firstName={faker.name.firstName()}
                    lastName={faker.name.lastName()}
                    joinDate={faker.date.past().getFullYear()}
                    friendsCount={faker.random.number(500)}
                    jobArea={faker.name.jobArea()}
                />
            </div>
        </div>
    );
}
// Nesting
// Resuability
// Configuration
export default Root;
