import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateRunner, clearRace, updateFormValues, runIt } from '../actions/form';
import RunnerList from './runner-list';

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
    const { runners, race: {currentLeg} } = this.props;
    const { runnerNumber } = this.state;
    this.props.runIt(currentLeg, runners[runnerNumber]);
  }

  clearLegs = () => {
    localStorage.removeItem('legs');
  }

  clearRace = () => {
    if(confirm('Are you sure you want to start over?')) {
      this.props.clearRace();
    }
  }

  pickRunner = () => {
    const { runners, race: { runnerCount } } = this.props;
    const { runnerNumber } = this.state;
    const newRunnerNumber = Math.floor(Math.random() * Number(runnerCount)) + 0;
    this.setState({
      runnerNumber: newRunnerNumber,
      lastPick: runnerNumber
    });
  }

  render() {
    const { legs, runners, race: {legCount, legsPerRunner, raceName, runnerCount, currentLeg } } = this.props;
    const { runnerNumber } = this.state;
    const runner = runnerNumber && runners[runnerNumber].name;
    const pickButtonText = runnerNumber ? 'Pick another Runner' : 'Pick Runner';
    return (
      <div>
        {Boolean(runnerNumber) && <div>
          <span>Hello {runner} you are up!</span>
          <button className='button is-danger' type="button" onClick={this.skipRun}>Skip</button>
          <button className='button is-primary' type="button" onClick={this.runIt}>Run it!</button>
        </div>}
        <RunnerList legs={legs}/>
        <button className='button is-primary' type="button" onClick={this.pickRunner}>{pickButtonText}</button>
        <button className='button is-danger' type="button" onClick={this.clearRace}>Clear Race</button>
        <button className='button is-info' type="button" onClick={this.editRace}>Edit Race</button>
        <button className='button is-danger' type="button" onClick={this.clearLegs}>Clear legs</button>
      </div>
    );
  }
};

export default connect(
  state => ({
    race: state.race,
    runners: state.runners,
    legs: state.legs
  }),
  {updateRunner, clearRace, updateFormValues, runIt}
)(RaceForm);
