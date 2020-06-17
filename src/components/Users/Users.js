import React from "react";
import User from "./User/User";
import user_default from "../../assets/img/user_default.png";
import * as axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super(props);

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
        photo={user.photos.small != null ? user.photos.small : user_default}
        fullname={user.name}
        status={user.status != null ? user.status : "I am New user"}
        city={user.location != undefined ? user.location.city : "n/a"}
        country={user.location != undefined ? user.location.country : "n/a"}
        followed={user.followed}
        follow={this.props.follow}
      />
    ));
    return (
      <div className="container col l8">
        {users}

        <div className="container col l12 center">
          <a class="waves-effect waves-light btn">continue</a>
        </div>
      </div>
    );
  }
}

export default Users;
