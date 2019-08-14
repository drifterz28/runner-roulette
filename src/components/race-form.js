import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { updateFormValues, addRunner } from '../actions/form';

const Input = ({label, name, type = 'text', classes = '', defaultValue}) => (
  <div className='field column'>
    <label id={name} className='label'>{label}</label>
    <div className='control'>
      <input htmlFor={name} className={`input ${classes}`} type={type} name={name} defaultValue={defaultValue} />
    </div>
  </div>
);

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
    const { runners, race: {legCount, legsPerRunner, raceName, runnerCount } } = this.props;
    const runnerObj = Object.values(runners);
    const runnersAdded = runnerObj.length;
    const runnerCountSetup = Math.abs(runnerCount - runnersAdded);
    const runnersArray = [...runnerObj, ...Array(runnerCountSetup).fill({})];
    const hasRunners = Boolean(runnersAdded);
    return (
      <Fragment>
        <form onChange={this.changed} className='columns'>
          <Input
            label='Race Name'
            classes='input'
            type='text'
            name='raceName'
            defaultValue={raceName} />
          <Input label='Runner Count' classes='input' name='runnerCount' type='number' defaultValue={runnerCount} />
          <Input label='Leg Count' classes='input' name='legCount' type='number' defaultValue={legCount} />
          <Input label='Legs per runner' classes='input' name='legsPerRunner' type='number' defaultValue={legsPerRunner} />
        </form>
        <br/>
        <form onChange={this.updateRunners}>
          {runnersArray.map((value, i) => {
            return  (
              <Input key={i} label={`Runner ${i + 1} Name`} className='input' type='text' name={i} defaultValue={value.name} />
            )
          })}
        </form>
        <button className='button is-primary' onClick={this.startRace} disabled={!hasRunners}>Start Race!</button>
      </Fragment>
    );
  }
};

export default connect(
  state => ({
    race: state.race,
    runners: state.runners
  }),
  {updateFormValues, addRunner}
)(RaceForm);
