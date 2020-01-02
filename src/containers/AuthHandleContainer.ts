import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import AuthHandle from '../components/AuthHandle'
import { AuthUserState } from '../reducers/auth'
import { signin, signout } from '../actions/auth'

interface StateProps {
  authUser: AuthUserState
}

interface DispatchProps {
  signinStart: () => void
  signoutStart: () => void
}

const mapStateToProps = (state: { authUser: AuthUserState }): StateProps => ({
  authUser: state.authUser,
})

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  signinStart: () => dispatch(signin.start()),
  signoutStart: () => dispatch(signout.start()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthHandle)
