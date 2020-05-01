import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root/root';
import { BrowserRouter, HashRouter, MemoryRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Root />
    </BrowserRouter>,
    document.querySelector('#root')
);

// ReactDOM.render(
//     <HashRouter>
//         <Root />
//     </HashRouter>,
//     document.querySelector('#root')
// );

// ReactDOM.render(
//     <MemoryRouter>
//         <Root />
//     </MemoryRouter>,
//     document.querySelector('#root')
// );
