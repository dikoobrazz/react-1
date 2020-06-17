import React from "react";
import User from "./User/User";

const Users = (props) => {
  let users = props.users.map((user) => (
    <User
      id={user.id}
      fullname={user.username}
      status={user.status}
      city={user.location.city}
      country={user.location.country}
      followed={user.followed}
      follow={props.follow}
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
};

export default Users;
