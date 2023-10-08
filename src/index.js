import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FireBaseContext } from './store/CreateContext';
import { Firebase } from './firebase/config';


ReactDOM.render(
<FireBaseContext.Provider value={{Firebase}}>
<App />
</FireBaseContext.Provider>
, document.getElementById('root')
);
