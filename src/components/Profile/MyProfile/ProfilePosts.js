import React from 'react'
import MyPosts from './../MyPosts/MyPosts'

let ProfilePosts = (props) => {
  let newPostElement = React.createRef()

  let onPostAdd = () => {
    props.addPost()
  }

  let onPostTextChange = () => {
    let text = newPostElement.current.value
    props.onPostChange(text)
  }

  let onTitleTextChange = (e) => {
    let title = e.target.value
    props.onTitleChange(title)
  }
  return (
    <div className="row">
      <div className="container col l12">
        <form className="col l12">
          <div className="row">
            <div className="input-field">
              <input
                id="input_text"
                type="text"
                onChange={onTitleTextChange}
                value={props.newTitleText}
              />
              <label for="input_text">Title</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field">
              <textarea
                id="textarea1"
                className="materialize-textarea"
                ref={newPostElement}
                onChange={onPostTextChange}
                value={props.newPostText}
              />
              <label for="textarea1">New post</label>
              <div className="btn" onClick={onPostAdd}>
                <span>Send post</span>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container col l12">
        <div className="hide-on-small-only">
          <span className="teal-text">
            <p>My posts</p>
          </span>
        </div>
      </div>
      <MyPosts posts={props.posts} />
    </div>
  )
}

export default ProfilePosts
