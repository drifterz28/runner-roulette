import React, { Component} from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        hello {this.props.counter}
        <button onClick={this.props.up}>up</button>
      </div>
    );
  }
};

export default connect(
  state => ({counter: state.counter}),
  dispatch => ({
    up: () => dispatch({
      type: 'INCREMENT'
    })
  })
)(App);
