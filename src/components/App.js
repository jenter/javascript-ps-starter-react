/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch, NavLink, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SampleAppPage from '../containers/SampleAppPage';
import NotFoundPage from './NotFoundPage';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: 'lightblue' };
    return (
      <div className="bodycontainer">
        <div className="nav-bar">
          <ul className="menu">
            <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
            <li><NavLink to="/sample" activeStyle={activeStyle}>Sample App</NavLink></li>
          </ul>
        </div>
        <div className="content-container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/sample" component={SampleAppPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
