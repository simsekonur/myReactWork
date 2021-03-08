import React, { Component } from "react";
import { Button } from "reactstrap";
import HeaderCom from "./components/HeaderCom";
import About from "./components/About";
import Home from "./components/Home";
import FormPage from "./components/FormPage";
import AddPeople from "./components/AddPeople";
import PropSubject from "./components/PropSubject";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class App extends Component {
  render() {
    this.state ={
      isim :'Ozan',
      people : ["Ahmet","Ozan","Veli"]

    }
    return (
      <Router>
        <nav>
          <HeaderCom />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/form" component={FormPage} />
            <Route exact path="/addPeople" component={AddPeople} />
          </Switch>
          <Link to="/">
            <Button style={{ margin: 10 }} className="btn btn-warning">
              Home Page
            </Button>
          </Link>
          <br />
          <Link to="/form">
            <Button style={{ margin: 10 }} className="btn btn-danger">
              Form Page
            </Button>
          </Link>
          <br />
          <Link to="/addPeople">
            <Button style={{ margin: 10 }} className="btn btn-primary">
              Add People{" "}
            </Button>
          </Link>
        <PropSubject name = {this.state.people[2]} />
        </nav>
      </Router>
    );
  }
}

export default App;
