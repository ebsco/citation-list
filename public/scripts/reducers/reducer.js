import { UPDATE_RANGE } from '../actions/actions';
import data from './data.json';

const initialState = {
  rangeStart: 1,
  rangeEnd: 10,
  dummyData: data
};

export default function (state = initialState, action) {
  switch(action.type) {
  case UPDATE_RANGE:
    return {
      ...state,
      rangeStart: action.payload.rangeStart,
      rangeEnd: action.payload.rangeEnd
    };
  default:
    return state;
  }
}
