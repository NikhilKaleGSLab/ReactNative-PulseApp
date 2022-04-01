import {ActionTypes} from '../constants/actionTypes';

const initialState = {
  employees: [],
  filterEmployees: [],
};

const mettingFields = {
  title: "Nikhil's meeting",
  starts: new Date(),
  ends: [
    {
      label: '15 Minutes',
      value: '15',
      defaultValue: true,
    },
    {
      label: '30 Minutes',
      value: '30',
      defaultValue: false,
    },
    {
      label: '45 Minutes',
      value: '45',
      defaultValue: false,
    },
    {
      label: '1 Hour',
      value: '1',
      defaultValue: false,
    },
    {
      label: '1.5 Hour',
      value: '1.5',
      defaultValue: false,
    },
    {
      label: '2 Hour',
      value: '2',
      defaultValue: false,
    },
  ],

  repeat: [
    {
      label: 'Never',
      value: 'never',
    },
    {
      label: 'Daily',
      value: 'daily',
    },
    {
      label: 'Weekly',
      value: 'weekly',
    },
    {
      label: 'Monthly',
      value: 'monthly',
    },
    {
      label: 'Yearly',
      value: 'yearly',
    },
  ],

  room: [
    {
      label: 'None',
      value: 'none',
    },
    {
      label: 'Chandryaan',
      value: 'chandryaan',
    },
    {
      label: 'Pragati With Projector',
      value: 'pragati',
    },
  ],
};

export const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_EMPLOYEES:
      return {...state, employees: action.payload};

    case ActionTypes.SET_FILTER_EMPLOYEES:
      return {...state, filterEmployees: action.payload};

    default:
      return state;
  }
};

export const meetingReducer = (state = mettingFields, action) => {
  switch (action.type) {
    case ActionTypes.SET_TITLE:
      return {...state, title: action.payload};

    case ActionTypes.SET_STARTS:
      return {...state, starts: action.payload};

    case ActionTypes.SET_ENDS:
      const data = state.ends.map(item => {
        if (item.value === action.payload) {
          return {...item, defaultValue: true};
        } else {
          return {...item, defaultValue: false};
        }
      });

      return {
        ...state,
        ends: data,
      };

    case ActionTypes.SET_REPEAT:
      return {...state, repeat: action.payload};

    case ActionTypes.SET_ROOM:
      return {...state, room: action.payload};

    default:
      return state;
  }
};
