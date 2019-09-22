import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

// 実際ははここはPostCardがくるべき。FireStoreに問い合わせているcomponentを書くべきである。
// が、なぜかPostCardだとうまく反映されない。FCの問題？ハードコーディングの問題？
// そういえば「PostCardだけ表示されない問題」も残っていた。その原因と同じ原因な気がする。
import UserHome from '../components/UserHome'

import { PostState } from '../reducers/post'

// interface StateProps {
//   users: User[]
// }

// const mapStateToProps = (state: PostState): StateProps => ({
// isSignedIn: state.isSignedIn,
// })

// export default connect(mapStateToProps)(UserHome)
