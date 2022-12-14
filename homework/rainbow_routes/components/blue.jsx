import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Indigo from './indigo';


class Blue extends React.Component {
  render() {
    return (
      <div>
        <h2 className="blue"></h2>

        <NavLink exact to="/blue">Blue Only</NavLink>
        <NavLink to="/blue/indigo">Add Indigo</NavLink>

        <Route path="/blue/indigo" render={Indigo} />
      </div>
    );
  }
};

export default Blue;
