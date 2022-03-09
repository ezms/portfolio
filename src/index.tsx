import { StrictMode } from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

render(
    <StrictMode>
        <HashRouter basename="/">
            <App />
        </HashRouter>
    </StrictMode>,
    document.querySelector('#root')
);
