import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase/app'

import reducer from './reducers'
import AuthHandle from './containers/AuthHandleContainer'

const firebaseConfig = {
  apiKey: 'AIzaSyB62WBiA_JWszHIRl7FrGFwK947_TwL0xo',
  authDomain: 'jeeek-250713.firebaseapp.com',
  databaseURL: 'https://jeeek-250713.firebaseio.com',
  projectId: 'jeeek-250713',
  storageBucket: 'jeeek-250713.appspot.com',
  messagingSenderId: '440603496070',
  appId: '1:440603496070:web:c5eb1c05ce7e278a',
}
// Initialize Firebase
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
