import { connect } from 'react-redux'
import AuthHandle from '../components/AuthHandle'
import { AuthState } from '../reducers/auth'

interface StateProps {
  isSignedIn: boolean
}

const mapStateToProps = (state: AuthState): StateProps => ({
  isSignedIn: state.isSignedIn,
})

export default connect(mapStateToProps)(AuthHandle)
