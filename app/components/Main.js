// I had to add Redux only in this component due to problems with
// NavigatorIOS. See https://github.com/facebook/react-native/issues/795

'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import * as upaActions from '../actions/upaActions';
import { connect } from 'react-redux';

import TaskList from './TaskList';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    debugger;
    return true;
  }

  render() {
    const { state, actions } = this.props;
    return (
      <TaskList
        value={state.tasks}
        {...actions}
        navigator={this.props.navigator} />
    );
  }
}

export default connect(state => ({
    state: state.upa
  }),
  (dispatch) => ({
    actions: bindActionCreators(upaActions, dispatch)
  })
)(Main);
