import { connect } from 'react-redux'
import { PostState } from '../reducers/post'
import PostCard from '../components/UserHome/PostCard'

interface StateProps {
  IsPost: boolean
}

const mapStateToProps = (state: PostState): StateProps => ({
  IsPost: state.IsPost,
})

export default connect(mapStateToProps)(PostCard)
