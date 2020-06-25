import React from 'react'
import './User.css'
import { NavLink } from 'react-router-dom'

const User = (props) => {
  return (
    <div className="card-panel white hoverable">
      <NavLink to={'/profile/' + props.id}>
        <div className="card-action">
          <img
            src={props.photo}
            alt=""
            className="circle small responsive-img left"
          />
          <a href="#!" className="red-text right">
            {props.fullname}
          </a>
        </div>
      </NavLink>
      <p className="teal-text">{props.status}</p>
      <div className="card-action">
        {props.followed ? (
          <a
            href="#!"
            disabled={props.followingInProgress.some((id) => id === props.id)}
            className="waves-effect waves-light btn-small red"
            onClick={() => {
              props.unfollowUser(props.id)
            }}
          >
            Unfollow
          </a>
        ) : (
          <a
            href="#!"
            disabled={props.followingInProgress.some((id) => id === props.id)}
            className="waves-effect waves-light btn-small"
            onClick={() => {
              props.followUser(props.id)
            }}
          >
            Follow
          </a>
        )}
        <a href="#!" className="teal-text right">
          {props.city}, {props.country}
        </a>
      </div>
    </div>
  )
}

export default User
