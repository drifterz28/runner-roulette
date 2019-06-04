import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';



class RaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runnerNumber: 0
    }
  }
  skipRun = () => {
    // select a new runner.
    // mark runner as used skip
  }
  runIt = () => {
    // set that the person is running
  }
  startRace = () => {
    // action to set leg number
    // pick first runner
  }
  pickRunner = (e) => {
    e.preventDefault();
    const { raceState: { runnerCount } } = this.props;
    const runnerNumber = Math.floor(Math.random() * Number(runnerCount)) + 0;
    console.log(runnerNumber)
    this.setState({runnerNumber});
  }
  render() {
    const { runners, raceState: {legCount, legsPerRunner, raceName, runnerCount, currentLeg } } = this.props;
    const { runnerNumber } = this.state;
    const runner = runners[runnerNumber].name;
    return (
      <div>
        {currentLeg === 0 && <button onClick={this.startRace}>Start Race!</button> }
        {<span>Hello {runner} you are up!</span>}
        <button>Skip</button>
        <button>Run it!</button>
        <button onClick={this.pickRunner}>Pick Runner</button>
      </div>
    );
  }
};

export default connect(
  state => ({
    raceState: state.raceState,
    runners: state.runners
  })
)(RaceForm);
