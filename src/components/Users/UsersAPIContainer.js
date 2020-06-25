import React from 'react'
import User from './User/User'
import user_default from '../../assets/img/user_default.png'
import './Users.css'
import Preloader from '../common/Preloader/Preloader'

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)

    // this.props.setIsFetching(true)
    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((response) => {
    //     this.props.setIsFetching(false)
    //     this.props.setUsers(response.items)
    //     // this.props.setTotalUserCount(response.data.totalCount); // match more ...
    //   })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize)

    // this.props.setIsFetching(true)
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
    //   this.props.setIsFetching(false)
    //   this.props.setUsers(response.items)
    // })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }

    let users = this.props.users.map((user) => (
      <User
        id={user.id}
        photo={user.photos.small !== null ? user.photos.small : user_default}
        fullname={user.name}
        status={user.status !== null ? user.status : 'I am New user'}
        city={user.location !== undefined ? user.location.city : 'n/a'}
        country={user.location !== undefined ? user.location.country : 'n/a'}
        followed={user.followed}
        followingInProgress={this.props.followingInProgress}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
      />
    ))
    return (
      <div className="container col l8">
        <div className="center">
          {this.props.isFetching ? <Preloader /> : null}
          <ul className="pagination">
            <li className="disabled">
              <a href="#!">
                <i className="material-icons">chevron_left</i>
              </a>
            </li>
            {pages.map((p) => {
              return (
                <li
                  className={
                    this.props.currentPage === p ? 'active' : 'waves-effect'
                  }
                >
                  <a
                    href="#!"
                    onClick={() => {
                      this.onPageChanged(p)
                    }}
                  >
                    {p}
                  </a>
                </li>
              )
            })}
            <li className="waves-effect">
              <a href="#!">
                <i className="material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
        {users}
      </div>
    )
  }
}

export default UsersAPIContainer
