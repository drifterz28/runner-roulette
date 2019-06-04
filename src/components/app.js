import React, { Component} from 'react';
import { connect } from 'react-redux';

import RaceForm from './race-form';
import Race from './race';
export default class App extends Component {
  render() {
    return (
      <div>
        <RaceForm />
        <Race />
      </div>
    );
  }
};
