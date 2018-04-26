import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import Footer from "./Footer";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TodoFilters";

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
};

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  state = { filter: SHOW_ALL };

  handleClearCompleted = () => {
    this.props.actions.clearCompleted();
  };

  handleShow = filter => {
    console.log("components-MainSection.js.filter:");
    console.log(filter);
    this.setState({ filter });
  };

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props;
    if (todos.length > 0) {
      return (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todos.length}
          />
          <label onClick={actions.completeAll} />
        </span>
      );
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props;
    const { filter } = this.state;
    const activeCount = todos.length - completedCount;

    if (todos.length) {
      return (
        <Footer
          completedCount={completedCount}
          activeCount={activeCount}
          filter={filter}
          onClearCompleted={this.handleClearCompleted}
          onShow={this.handleShow}
        />
      );
    }
  }
  // D:\Git\Ggg\Ggg.Redux\apps\todomvc\src\containers\App.js
  render() {
    const { todos, actions } = this.props;
    const { filter } = this.state;
    console.log("components-MainSection.js.todos:");
    console.log(todos);

    const filteredTodos = todos.filter(TODO_FILTERS[filter]);
    const completedCount = todos.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    );
    /*We then modify our TodoList component to show “Loading…” 
whenever the loading state key is true : */
    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} {...actions} />
          ))}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    );
  }
}
