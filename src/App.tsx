import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'

import reducer from './reducers'
import AuthHandle from './containers/AuthHandleContainer'
import { firebaseConfig } from './firebase-config'

firebase.initializeApp(firebaseConfig)

const store = createStore(reducer)

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
