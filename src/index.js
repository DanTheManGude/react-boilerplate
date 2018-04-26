import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

//reducer current loggedin user
const currentUser = (state = null, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return action.user;
        default:
            return state;
        }
}

//main reducer
const appState = combineReducers({
    currentUser
});

//redux store
export const store = createStore(appState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//root render of the application
const render = () => {
    ReactDOM.render(
        <div>
            <App />
        </div>,
        document.getElementById('root')
    );
};

render();
registerServiceWorker();
