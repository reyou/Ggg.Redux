import React from "react";
import { connect } from "react-redux";
import { print } from "util";

class HomePage extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    // https://reactjs.org/docs/lists-and-keys.html
    const items = this.props.homeItems.map((item, index) => (
      <div key={index}>
        <a href={item.url}>{item.title}</a>
      </div>
    ));
    return <div>{items}</div>;
  }
}
/*The mapStateToProps function has a very important job: receive application 
state from the store whenever state has changed and make data from that data 
available to the component as props. */
/*If your mapStateToProps function is declared as taking two parameters, it will 
be called with the store state as the first parameter and the props passed to the 
connected component as the second parameter, and will also be re-invoked whenever 
the connected component receives new props as determined by shallow equality comparisons. 
(The second parameter is normally referred to as ownProps by convention.) */
// https://stackoverflow.com/questions/47647070/what-is-ownprops-in-react-redux?rq=1
/*ownProps are the attributes that are passed when the component is used. 
In plain React these would be just called props. */
function mapStateToProps(state, ownProps) {
  // console.log(ownProps.environment);
  return {
    homeItems: state.genericReducer.homeItems
  };
}

function mapDispatchToProps(dispatch) {
  console.log("mapDispatchToProps");
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
