import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import ReduxSagaFirebase from 'redux-saga-firebase'
import AuthHandle from '../components/AuthHandle'
import { AuthState } from '../reducers/auth'
import { signin, signout } from '../actions/auth'

interface StateProps {
  rsf: ReduxSagaFirebase
  isSignedIn: boolean
}

interface DispatchProps {
  signinStart: () => void
  signoutStart: () => void
}

const mapStateToProps = (state: { auth: AuthState }): StateProps => ({
  rsf: state.auth.rsf,
  isSignedIn: state.auth.isSignedIn,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  signinStart: () => dispatch(signin.start()),
  signoutStart: () => dispatch(signout.start()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthHandle)
