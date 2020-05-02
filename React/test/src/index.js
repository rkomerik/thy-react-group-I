import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root/root';
import reducers from './reducers';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import middleWareSetup from './saga';

const middleWare = createSagaMiddleware();
const myStore = createStore(reducers, applyMiddleware(middleWare));
middleWare.run(middleWareSetup);

ReactDOM.render(
    <BrowserRouter>
        <ReduxProvider store={myStore}>
            <Root />
        </ReduxProvider>
    </BrowserRouter>,
    document.querySelector('#root')
);

// import { HashRouter } from 'react-router-dom';
// ReactDOM.render(
//     <HashRouter>
//         <Root />
//     </HashRouter>,
//     document.querySelector('#root')
// );

// import { MemoryRouter } from 'react-router-dom';
// ReactDOM.render(
//     <MemoryRouter>
//         <Root />
//     </MemoryRouter>,
//     document.querySelector('#root')
// );
