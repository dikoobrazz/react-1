import { connect } from "react-redux";
import UsersAPIContainer from "./UsersAPIContainer";
import {
  toggleFollowActionCreator,
  setUsersActionCreator,
  setUsersTotalCountAC,
  setCurrentPageAC,
  setIsFetchingAC,
} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(toggleFollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPageAC(page));
    },
    setTotalUserCount: (totalCount) => {
      dispatch(setUsersTotalCountAC(totalCount));
    },
    setIsFetching: (isFetching) => {
      dispatch(setIsFetchingAC(isFetching));
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIContainer);

export default UsersContainer;
