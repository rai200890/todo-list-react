import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

import {TodoList} from "./TodoList.js"

function Index() {
  return <TodoList/>
}

function New() {
  return <h2>Add TODO</h2>;
}

type Props = { name: string };

class NavBar extends React.PureComponent<Props> {
  render() {
    const { name } = this.props;

    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">{name}</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todos/new">Add TODO</Link>
          </li>
        </ul>
      </div>
    </nav>)
  }
};

function AppRouter() {
  return (
    <Router>
      <NavBar name="App" />
      <Container className="container-fluid">
        <Route path="/" exact component={Index} />
        <Route path="/todos/new" component={New} />
      </Container>
    </Router>
  )
};

export default AppRouter;
