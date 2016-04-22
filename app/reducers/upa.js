'use strict';

import * as types from '../actions/actionTypes';

const initialState = {
  tasks: [
    {id: 0, title: 'Take Shower', duration: 15},
    {id: 1, title: 'Pick Coffe and Sandwich', duration: 10},
    {id: 1, title: 'Brushing teeth', duration: 10}
  ]
};

function addTask(state, action) {
  var task = {
    id: state.tasks.length,
    title: action.task.title,
    duration: action.task.duration
  };

  state.tasks.push(task);

  return {
    ...state
  }
}

function decreaseTimer(state, action) {
  if(typeof action.id === 'undefined') return { ...state };

  var filtered = state.tasks.filter(function(item) {
    return item.id === action.id
  });

  if(!filtered) return { ...state };

  filtered[0].duration = filtered[0].duration - 1;
  return {
    ...state
  }
}

function showRecords(state, action) {
  return {
    ...state
  }
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
