import React from "react";
import User from "./User/User";
import user_default from "../../assets/img/user_default.png";
import "./Users.css";
import * as axios from "axios";
// import preloader from "../../assets/img/preloader.svg";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        // this.props.setTotalUserCount(response.data.totalCount); // match more ...
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    let users = this.props.users.map((user) => (
      <User
        id={user.id}
        photo={user.photos.small !== null ? user.photos.small : user_default}
        fullname={user.name}
        status={user.status !== null ? user.status : "I am New user"}
        city={user.location !== undefined ? user.location.city : "n/a"}
        country={user.location !== undefined ? user.location.country : "n/a"}
        followed={user.followed}
        follow={this.props.follow}
      />
    ));
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
                    this.props.currentPage === p ? "active" : "waves-effect"
                  }
                >
                  <a
                    href="#!"
                    onClick={() => {
                      this.onPageChanged(p);
                    }}
                  >
                    {p}
                  </a>
                </li>
              );
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
    );
  }
}

export default UsersAPIContainer;
