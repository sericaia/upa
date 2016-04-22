'use strict';

import * as types from './actionTypes';

export function addTask(task) {
  return {
    type: types.ADD_TASK,
    task
  };
}

export function showRecords() {
  return {
    type: types.SHOW_RECORDS
  };
}

export function decreaseTimer(id) {
  return {
    type: types.DECREASE_TIMER,
    id
  };
}
