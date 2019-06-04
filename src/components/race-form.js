import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateFormValues, updateRunners } from '../actions/form';

class RaceForm extends Component {
  constructor(props) {
    super(props);
  }
  updateRunners = (e) => {
    this.props.updateRunners(e.target.name, e.target.value);
  }
  changed = (e) => {
    this.props.updateFormValues(e.target.name, e.target.value);
  }
  render() {
    const { runners, raceState: {legCount, legsPerRunner, raceName, runnerCount } } = this.props;
    const runnerObj = Object.values(runners);
    const runnerCountSetup = Math.abs(runnerCount - runnerObj.length);
    const runnersArray = [...runnerObj, ...Array(runnerCountSetup).fill({})];
    return (
      <Fragment>
        <form onChange={this.changed}>
          <label>
            Race Name
            <input name='raceName' defaultValue={raceName} />
          </label>
          <label>
            Runner Count
            <input name='runnerCount' type='number' defaultValue={runnerCount} />
          </label>
          <label>
            Leg Count
            <input name='legCount' type='number' defaultValue={legCount} />
          </label>
          <label>
            Legs per runner
            <input name='legsPerRunner' type='number' defaultValue={legsPerRunner} />
          </label>
        </form>
        <br/>
        <form onChange={this.updateRunners}>
          {runnersArray.map((value, i) => {
            return  (
              <label key={i}>
                Runner {i + 1} Name
                <input name={i} defaultValue={value.name} />
              </label>
            )
          })}
        </form>
      </Fragment>
    );
  }
};

export default connect(
  state => ({
    raceState: state.raceState,
    runners: state.runners
  }),
  {updateFormValues, updateRunners}
)(RaceForm);
