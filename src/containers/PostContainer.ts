import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import UserHome from '../components/UserHome'
import { PostState } from '../reducers/post'

interface StateProps {
  // isSignedIn: boolean　// ここはfirestoreの「コレクション名: 型？値？」という形にする
}

const mapStateToProps = (state: PostState): StateProps => ({
  // isSignedIn: state.isSignedIn, // ここはfirestoreの「コレクション名:state.firestore.ordered.コレクション名」という形にする
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    // { コレクション名: 'ドキュメント名' }
  ]),
)(UserHome)
