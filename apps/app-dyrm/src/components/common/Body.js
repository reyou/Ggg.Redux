// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-ii-react-router-and-container-components/
//=============================================================================
import React from "react";
// <Switch>
// Renders the first child <Route> or <Redirect> that matches the location.
import { Link, IndexLink, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HomePage from "../pages/HomePage";
// import GggLogger from "../../gggUtils/GggLogger";
//=============================================================================
class Body extends React.Component {
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
    return (
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/roster" component={Roster} />
          <Route path="/schedule" component={Schedule} /> */}
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);

//=============================================================================
