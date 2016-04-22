'use strict';

import * as types from '../actions/actionTypes';
import { List } from 'immutable';

const initialState = new List([
    {id: 0, title: 'Take Shower', duration: 15},
    {id: 1, title: 'Pick Coffe and Sandwich', duration: 10},
    {id: 1, title: 'Brushing teeth', duration: 10}]);

function addTask(state, action) {
  var task = {
    id: state.size,
    title: action.task.title,
    duration: parseInt(action.task.duration)
  };

  return state.insert(state.size, task);
}

function decreaseTimer(state, action) {
  if(typeof action.id === 'undefined') {
    return state;
  }

  return state.update(action.id, function(v) {
    return {id: v.id, title: v.title, duration: v.duration - 1 };
  });
}

function showRecords(state, action) {
  return state;
}

export default function upa(state = initialState, action = {}) {

    if(action.type === types.ADD_TASK) {
      return addTask(state, action);
    }
    else if(action.type === types.SHOW_RECORDS) {
      return showRecords(state, action);
    }
    else if (action.type === types.DECREASE_TIMER) {
      return decreaseTimer(state, action);
    }

    return state;
};
