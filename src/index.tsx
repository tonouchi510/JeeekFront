import React from 'react'
import ReactDOM from 'react-dom'
// import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import firebaseConfig from './config/firebaseConfig'
import reducer from './reducers'

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    // reactReduxFirebase(firebaseConfig), // redux binding for firebase
    reduxFirestore(firebaseConfig), // redux bindings for firestore
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
// registerServiceWorker();
