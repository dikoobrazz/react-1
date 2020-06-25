import React from 'react'
import ProfilePosts from './ProfilePosts'
import ProfileInfo from './ProfileInfo'

class ProfileClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.acceptUserProfile(userId)
  }

  render() {
    return (
      <div className="col l8">
        <ProfileInfo profile={this.props.profile} />
        <ProfilePosts {...this.props} />
      </div>
    )
  }
}

export default ProfileClass
