import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebase } from './firebase/config';
import { FireBaseContext } from './store/CreateContext';



ReactDOM.render(
<FireBaseContext.Provider value={{firebase}}>
<App />
</FireBaseContext.Provider>
, document.getElementById('root')
);
