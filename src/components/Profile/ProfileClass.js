import React from "react";
import ProfilePosts from "./ProfilePosts";
import ProfileInfo from "./ProfileInfo";
import * as axios from "axios";

class ProfileClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 9;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <div className="col l8">
        <ProfileInfo profile={this.props.profile} />
        <ProfilePosts {...this.props} />
      </div>
    );
  }
}

export default ProfileClass;
