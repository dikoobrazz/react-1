import React from "react";
import User from "./User/User";
import user_default from "../../assets/img/user_default.png";
import "./Users.css";
import * as axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
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
        {users}

        <div className="center">
          <ul className="pagination">
            <li className="disabled">
              <a href="#!">
                <i className="tiny material-icons">chevron_left</i>
              </a>
            </li>
            <li className="active">
              <a href="#!">1</a>
            </li>
            <li className="waves-effect">
              <a href="#!">2</a>
            </li>
            <li className="waves-effect">
              <a href="#!">3</a>
            </li>
            <li className="waves-effect">
              <a href="#!">4</a>
            </li>
            <li className="waves-effect">
              <a href="#!">5</a>
            </li>
            <li className="waves-effect">
              <a href="#!">
                <i className="tiny material-icons">chevron_right</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Users;
