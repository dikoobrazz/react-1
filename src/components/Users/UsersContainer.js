import { connect } from 'react-redux'
import UsersAPIContainer from './UsersAPIContainer'
import {
  setCurrentPage,
  getUsers,
  followUser,
  unfollowUser,
} from '../../redux/users-reducer'
import { compose } from 'redux'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(toggleFollowActionCreator(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: (page) => {
//       dispatch(setCurrentPageAC(page));
//     },
//     setTotalUserCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount));
//     },
//     setIsFetching: (isFetching) => {
//       dispatch(setIsFetchingAC(isFetching));
//     },
//   };
// };

// const UsersContainer = connect(mapStateToProps, {
//   setCurrentPage,
//   getUsers,
//   followUser,
//   unfollowUser,
// })(UsersAPIContainer)

// export default UsersContainer

export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser,
  })
)(UsersAPIContainer)
