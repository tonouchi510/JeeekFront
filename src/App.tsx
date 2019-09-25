import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as firebase from 'firebase/app'
import AuthHandle from './containers/AuthHandleContainer'
import firebaseConfig from './config/firebaseConfig'

firebase.initializeApp(firebaseConfig)

const App: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={AuthHandle} />
    </Switch>
  </BrowserRouter>
)

export default App
