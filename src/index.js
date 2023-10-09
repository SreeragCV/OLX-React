import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FireBaseContext } from './store/CreateContext';
import { Firebase } from './firebase/config';
import Context from './store/CreateContext';


ReactDOM.render(
<FireBaseContext.Provider value={{Firebase}}>
<Context>
<App />
</Context>
</FireBaseContext.Provider>
, document.getElementById('root')
);
