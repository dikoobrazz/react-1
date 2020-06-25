import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { userAuth } from "../../api/api";

class HeaderContainer extends React.Component {
  componentDidMount() {
    userAuth.getUserData().then((response) => {
      if (response.data.resultCode === 0) {
        this.props.setAuthUserData(response.data.data);
      }
    });
  }

  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
