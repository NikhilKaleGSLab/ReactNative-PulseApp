import {combineReducers} from 'redux';
import {employeeReducer, meetingReducer} from './employeeReducer';

const rootReducer = combineReducers({
  allEmployees: employeeReducer,
  meetingsData: meetingReducer,
});

export default rootReducer;
