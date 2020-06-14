import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todolist from "./Todolist";
import Header from "./layout/Header";
import AddTodo from "./AddTodo";
import About from "./pages/About";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    todos: [
      // { id: uuidv4(), title: "Take out the trash", completed: false },
      // { id: 2, title: "Dinner out", completed: false },
      // { id: 3, title: "Feed the plants", completed: false },
    ],
  };

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todolist
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
