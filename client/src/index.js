import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store/store";
import './index.css';
import App from './app';

ReactDom.render(
    <Provider store={store}>
        <HashRouter>
        <App />
        </HashRouter>
    </Provider>, document.getElementById('app')
);
