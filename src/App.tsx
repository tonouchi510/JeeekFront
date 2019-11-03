import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase'

import reducer, { initialState } from './reducers'
import rootSaga from './sagas'
import AuthHandle from './containers/AuthHandleContainer'
import { firebaseConfig } from './firebase-config'

export const firebaseApp = firebase.initializeApp(firebaseConfig)
const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp)

const initState = {
  ...initialState,
  auth: {
    rsf: reduxSagaFirebase,
  },
  userProfile: {
    userProfile: null,
  },
  feed: {
    isLoading: true,
    feeds: [],
  },
  trend: {
    trends: [],
  },
}

/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
const composeEnhancers =
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
/* eslint-enable */

const sagaMiddleWare = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare))
const store = createStore(reducer, initState, enhancer)

const App: FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AuthHandle} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
sagaMiddleWare.run(rootSaga)
