// http://www.thegreatcodeadventure.com/react-redux-tutorial-part-iv-the-index-feature/
//=============================================================================
// https://redux.js.org/api-reference/bindactioncreators
/*Turns an object whose values are action creators, into an object with the same 
keys, but with every action creator wrapped into a dispatch call so they may be invoked 
directly. */
/*Normally you should just call dispatch directly on your Store instance. If you use 
Redux with React, react-redux will provide you with the dispatch function so you can 
call it directly, too. */
import React from "react";
import PropTypes from "prop-types"; // ES6
import { Link, browserHistory } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CatList from "./CatList";
import NewCatPage from "./NewCatPage";
import * as actions from "../../actions/catActions";
//=============================================================================
class CatsPage extends React.Component {
  /*componentWillMount() is invoked immediately before mounting occurs. 
  It is called before render(), therefore setting state in this method will not 
  trigger a re-rendering. Avoid introducing any side-effects or subscriptions 
  in this method. This is the only lifecycle hook called on server rendering. 
  Generally, we recommend using the constructor() instead. */
  componentWillMount() {
    console.log("CatsPage.js", "componentWillMount()");
    console.log("CatsPage.js", "this.props.cats[0].id", this.props.cats[0].id);
    if (this.props.cats[0].id == "") {
      console.log("CatsPage.js", "this.props.actions.loadCats()");
      this.props.actions.loadCats();
    }
  }
  render() {
    console.log("CatsPage.js", "render()");
    const cats = this.props.cats;
    console.log("CatsPage.js", "render()", "cats.length", cats.length);
    console.log("CatsPage.js", "this.props.children", this.props.children);
    return (
      <div className="col-md-12">
        <h1>
          Cats{" "}
          <Link to={"/cats/new"} className="btn btn-primary">
            + cat
          </Link>
        </h1>
        <div className="col-md-4">
          <CatList cats={cats} />
        </div>
        <div className="col-md-8">{this.props.children}</div>
      </div>
    );
  }
}

CatsPage.propTypes = {
  cats: PropTypes.array.isRequired,
  children: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  console.log("CatsPage.js", "mapStateToProps()");
  console.log(
    "CatsPage.js",
    "mapStateToProps()",
    "state.cats.length",
    state.cats.length
  );
  console.log(
    "CatsPage.js",
    "mapStateToProps()",
    "state.cats.length",
    state.cats.length
  );
  if (state.cats.length > 0) {
    return {
      cats: state.cats
    };
  } else {
    return {
      cats: [
        {
          id: "",
          name: "",
          breed: "",
          temperament: "",
          weight: "",
          hobbies: []
        }
      ]
    };
  }
}

function mapDispatchToProps(dispatch) {
  console.log("CatsPage.js", "mapDispatchToProps()");
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CatsPage);

//=============================================================================
