import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import App from './Components/App';
import Default from './Components/Default';
import Accounts from './Components/accounts';

const history=createBrowserHistory();
const root= ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter history={history}>
        <Routes>
            <Route path='/' element={<Default/>} />
            <Route path='/App' element={<App />} />
            <Route path='/Accounts' element={<Accounts/>} />
        </Routes>
    </BrowserRouter>
)