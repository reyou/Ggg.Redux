import React from "react";
import { connect } from "react-redux";

class GggUsers extends React.Component {
  render() {
    let users = this.props.gggUsers.users;
    if (users) {
      return (
        <div>
          <h2>GggUsers (thunk):</h2>
          {users.map(function(item, key) {
            return <div key={key}>{item.name}</div>;
          })}
        </div>
      );
    } else {
      return <div />;
    }
  }
}
function mapStateToProps(state) {
  const gggTimer = state.gggTimer;
  const gggUsers = state.gggUsers;
  return {
    gggUsers,
    gggTimer
  };
}
export default connect(mapStateToProps)(GggUsers);
