// const $ = require('jquery');
// $('#main').html('Here we go!');

// change require to es6 import style
// import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
import './style.scss';

const About = (props) => {
  return <div> All there is to know about me </div>;
};
const Welcome = (props) => {
  return <div>Welcome</div>;
};

const Test = (props) => {
  return <div> ID: {props.match.params.id} </div>;
};

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};
// const App = () => <div className="test">All the REACT are belong to us!</div>;

const App = (props) => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/about" component={About} />
        <Route exact path="/test/:id" component={Test} />
        <Route component={FallBack} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('main'));

// let sec = 0;
// setInterval(() => { $('#main').html(`You have been on this page for ${sec} seconds.`); sec += 1; }, 1000);
