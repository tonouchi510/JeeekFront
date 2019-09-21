import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
//  import rootSaga from './saga/post'
// import * as serviceWorker from './services/postApi'
import AuthHandle from './containers/AuthHandleContainer'

const App: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AuthHandle} />
    </Switch>
  </BrowserRouter>
)

export default App

// serviceWorker.unregister()
// sagaMiddleWare.run(rootSaga)
