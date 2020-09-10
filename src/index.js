import React from 'react';
import ReactDOM from 'react-dom';
import "./tailwind.scss"
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { AppContext } from './Context';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);