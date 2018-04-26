import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoTextInput from "./TodoTextInput";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../actions";
class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
