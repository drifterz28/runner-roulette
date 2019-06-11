import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateRunner, clearRace, updateFormValues } from '../actions/form';


class RaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runnerNumber: null,
      lastPick: null
    }
  }


  editRace = () => {
    this.props.updateFormValues('hasStarted', false);
  }

  skipRun = () => {
    // select a new runner.
    // mark runner as used skip
    this.pickRunner();
  }
  runIt = () => {
    // set that the person is running
    // keep track of all legs runner has run
  }

  pickRunner = () => {
    const { raceState: { runnerCount } } = this.props;
    const { runnerNumber } = this.state;
    const newRunnerNumber = Math.floor(Math.random() * Number(runnerCount)) + 0;
    this.setState({
      runnerNumber: newRunnerNumber,
      lastPick: runnerNumber
    });
  }

  render() {
    const { runners, raceState: {legCount, legsPerRunner, raceName, runnerCount, currentLeg } } = this.props;
    const { runnerNumber } = this.state;
    const runner = runnerNumber && runners[runnerNumber].name;
    const pickButtonText = runnerNumber ? 'Pick another Runner' : 'Pick Runner';
    return (
      <div>
        {Boolean(runnerNumber) && <div>
          <span>Hello {runner} you are up!</span>
          <button type="button" onClick={this.skipRun}>Skip</button>
          <button type="button" onClick={this.runIt}>Run it!</button>
        </div>}
        <button type="button" onClick={this.pickRunner}>{pickButtonText}</button>
        <button type="button" onClick={this.props.clearRace}>Clear Race</button>
        <button type="button" onClick={this.editRace}>Edit Race</button>
      </div>
    );
  }
};

export default connect(
  state => ({
    raceState: state.raceState,
    runners: state.runners
  }),
  {updateRunner, clearRace, updateFormValues}
)(RaceForm);
