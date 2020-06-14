import React, { Component } from "react";
import Todoitem from "./Todoitem";
import PropTypes from "prop-types";

class Todolist extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <Todoitem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todolist.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todolist;
