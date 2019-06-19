import React, { Component} from 'react';
import { connect } from 'react-redux';

import RaceForm from './race-form';
import Race from './race';

class App extends Component {
  render() {
    const { hasStarted } = this.props;
    return (
      <div>
        {!hasStarted && <RaceForm />}
        {hasStarted && <Race />}
      </div>
    );
  }
};

export default connect(
  state => ({
    hasStarted: state.race.hasStarted,
  })
)(App);
