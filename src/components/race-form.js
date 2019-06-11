import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateFormValues, addRunner } from '../actions/form';

class RaceForm extends Component {
  updateRunners = (e) => {
    this.props.addRunner(e.target.name, e.target.value);
  }

  startRace = () => {
    this.props.updateFormValues('hasStarted', true);
    this.props.updateFormValues('currentLeg', 1);
  }

  changed = (e) => {
    this.props.updateFormValues(e.target.name, e.target.value);
  }

  render() {
    const { runners, raceState: {legCount, legsPerRunner, raceName, runnerCount } } = this.props;
    const runnerObj = Object.values(runners);
    const runnersAdded = runnerObj.length;
    const runnerCountSetup = Math.abs(runnerCount - runnersAdded);
    const runnersArray = [...runnerObj, ...Array(runnerCountSetup).fill({})];
    const hasRunners = Boolean(runnersAdded);
    return (
      <Fragment>
        <form onChange={this.changed} className='columns'>
          <label className='column'>
            Race Name
            <input className='input' type="text" name='raceName' defaultValue={raceName} />
          </label>
          <label className='column'>
            Runner Count
            <input className='input' name='runnerCount' type='number' defaultValue={runnerCount} />
          </label>
          <label className='column'>
            Leg Count
            <input className='input' name='legCount' type='number' defaultValue={legCount} />
          </label>
          <label className='column'>
            Legs per runner
            <input className='input' name='legsPerRunner' type='number' defaultValue={legsPerRunner} />
          </label>
        </form>
        <br/>
        <form onChange={this.updateRunners}>
          {runnersArray.map((value, i) => {
            return  (
              <label key={i}>
                Runner {i + 1} Name
                <input className='input' type="text" name={i} defaultValue={value.name} />
              </label>
            )
          })}
        </form>
        <button onClick={this.startRace} disabled={!hasRunners}>Start Race!</button>
      </Fragment>
    );
  }
};

export default connect(
  state => ({
    raceState: state.raceState,
    runners: state.runners
  }),
  {updateFormValues, addRunner}
)(RaceForm);
