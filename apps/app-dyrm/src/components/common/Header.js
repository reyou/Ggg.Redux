// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-ii-react-router-and-container-components/
//=============================================================================
import React from "react";
// https://reactjs.org/docs/typechecking-with-proptypes.html
// https://www.npmjs.com/package/prop-types
import PropTypes from "prop-types"; // ES6
import { Link, IndexLink } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// import GggLogger from "../../gggUtils/GggLogger";
//=============================================================================
class Header extends React.Component {
  constructor(props) {
    super();
    this.logOut = this.logOut.bind(this);
  }

  logOut(event) {
    // https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    event.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    return <div>This is header in component.</div>;
  }
}

function mapStateToProps(state, ownProps) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

//=============================================================================
