import React from 'react'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    })
  }

  render() {
    return (
      <>
        {!this.state.editMode && (
          <h3 onClick={this.activateEditMode}>{this.props.aboutMe}</h3>
        )}
        <div className="input-field col l12 center">
          {this.state.editMode && (
            <>
              <input
                autoFocus={true}
                onBlur={this.deactivateEditMode}
                type="text"
                value={this.props.aboutMe}
              />
              <label for="input_text">status</label>
            </>
          )}
        </div>
      </>
    )
  }
}

export default ProfileStatus
