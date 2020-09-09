import React from 'react';
import ReactDOM from 'react-dom';
import "./tailwind.scss"
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Navigation } from './components/Navigation';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);