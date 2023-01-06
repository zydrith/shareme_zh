import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import './index.css';

const root = document.getElementById('root');

const ReactRoot = ReactDOM.createRoot(root)
ReactRoot.render(
    <Router>
        <App />
    </Router>
);
