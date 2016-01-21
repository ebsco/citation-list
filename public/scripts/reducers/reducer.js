import { UPDATE_TEXT } from '../actions/actions';
import data from './data.json';

const initialState = {
  text: '',
  dummyData: data
};

export default function (state = initialState, action) {
  switch(action.type) {
  case UPDATE_TEXT:
    return {
      ...state,
      text: action.text
    };
  default:
    return state;
  }
}
