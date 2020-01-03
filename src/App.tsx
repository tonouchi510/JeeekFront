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
import { firebaseConfig } from './firebase-config'
import AuthHandle from './containers/AuthHandleContainer'
import Timeline from './containers/Timeline/TimelineContainer'
import Profile from './containers/Profile/ProfileContainer'
import DefaultLayout from './Layout'

export const firebaseApp = firebase.initializeApp(firebaseConfig)
const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp)

const initState = {
  ...initialState,
  common: {
    rsf: reduxSagaFirebase,
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
      <DefaultLayout>
        <Switch>
          <Route exact path="/" component={AuthHandle} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
sagaMiddleWare.run(rootSaga)
