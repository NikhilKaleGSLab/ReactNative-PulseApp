import {ActionTypes} from '../constants/actionTypes';

export const setEmployees = employees => {
  return {
    type: ActionTypes.SET_EMPLOYEES,
    payload: employees,
  };
};

export const setFilterEmployees = employees => {
  return {
    type: ActionTypes.SET_FILTER_EMPLOYEES,
    payload: employees,
  };
};

// Meeting Actions
export const setTitle = title => {
  return {
    type: ActionTypes.SET_TITLE,
    payload: title,
  };
};

export const setDate = date => {
  return {
    type: ActionTypes.SET_STARTS,
    payload: date,
  };
};

export const setEnds = value => {
  return {
    type: ActionTypes.SET_ENDS,
    payload: value,
  };
};

export const setRepeat = value => {
  return {
    type: ActionTypes.SET_REPEAT,
    payload: value,
  };
};

export const setRoom = room => {
  return {
    type: ActionTypes.SET_ROOM,
    payload: room,
  };
};
