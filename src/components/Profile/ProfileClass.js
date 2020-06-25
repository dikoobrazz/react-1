import React from 'react'
import ProfilePosts from './ProfilePosts'
import ProfileInfo from './ProfileInfo'
import { Redirect } from 'react-router-dom'

class ProfileClass extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.acceptUserProfile(userId)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />
    return (
      <div className="col l8">
        <ProfileInfo profile={this.props.profile} />
        <ProfilePosts {...this.props} />
      </div>
    )
  }
}

export default ProfileClass
