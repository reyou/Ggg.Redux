// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-ii-react-router-and-container-components/
//=============================================================================
import React from "react";
// https://reactjs.org/docs/typechecking-with-proptypes.html
// https://www.npmjs.com/package/prop-types
import PropTypes from "prop-types"; // ES6
import { Link, IndexLink } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sessionActions from "../../actions/sessionActions";
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
    console.log("Header.js", "this.props.logged_in:", this.props.logged_in);
    if (this.props.logged_in) {
      return (
        <nav>
          {/* https://github.com/reactjs/react-router-tutorial/tree/master/lessons/09-index-links */}
          <IndexLink to="/" activeClassName="active">
            Home
          </IndexLink>
          {" | "}
          <Link to="/cats" activeClassName="active">
            Cats
          </Link>
          {" | "}
          <Link to="/about" activeClassName="active">
            About
          </Link>
          {" | "}
          <a href="/logout" onClick={this.logOut}>
            log out
          </a>
        </nav>
      );
    } else {
      return (
        <nav>
          <IndexLink to="/" activeClassName="active">
            Home
          </IndexLink>
          {" | "}
          <Link to="/cats" activeClassName="active">
            Cats
          </Link>
          {" | "}
          <Link to="/about" activeClassName="active">
            About
          </Link>
          {" | "}
          <Link to="/login" activeClassName="active">
            log in
          </Link>
        </nav>
      );
    }
  }
}

Header.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  console.log("Header.js", "mapStateToProps", "state.session", state.session);
  return {
    logged_in: state.session
  };
}

function mapDispatchToProps(dispatch) {
  console.log("Header.js", "mapDispatchToProps");
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

//=============================================================================
