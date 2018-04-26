import React from "react";
import { connect } from "react-redux";
import Stream from "./presenter";

/*Additionally the connect function takes as first argument a mapStateToProps 
function which returns an object. The object is a substate of our global state. 
In mapStateToProps we are only exposing the substate of the global state which 
is required by the component. */
/*Moreover it is worth to mention that we could still access properties given 
from parent components via <Stream something={thing} /> via the mapStateToProps 
function. The functions gives us as second argument these properties, which 
we could pass with out substate to the Stream component itself. */
/**function mapStateToProps(state, props) { … } */
function mapStateToProps(state, props) {
  console.log("ggg:", "mapStateToProps", state);
  const tracks = state.track;
  const gggTimer = state.gggTimer;
  return {
    tracks,
    gggTimer
  };
}
/*The connect functionality from react-redux helps us to wire React components
, which are embedded in the Provider helper component, to our Redux store. 
We can extend our Stream component as follows to get the required state from 
the Redux store. */
export default connect(mapStateToProps)(Stream);
