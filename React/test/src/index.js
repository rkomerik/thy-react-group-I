import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root/root';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import MyRedusers  from './reducers'
const myStore = createStore(MyRedusers);


ReactDOM.render(<BrowserRouter><Provider store={myStore}><Root /></Provider></BrowserRouter>, document.querySelector("#root"));