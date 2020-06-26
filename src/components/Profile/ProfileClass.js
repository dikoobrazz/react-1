import React from 'react'
import ProfilePosts from './MyProfile/ProfilePosts'
import ProfileInfo from './MyProfile/ProfileInfo'

class ProfileClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) return
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
