import { connect } from "react-redux";
import Nav from "./Nav";

const mapStateToProps = (state) => {
  return {
    friends: state.sideBar.friends,
  };
};

const mapDispatchToProps = () => {};

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
