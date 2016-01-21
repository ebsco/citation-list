import { UPDATE_TEXT } from '../actions/actions';


const initialState = {
  text: ''
};

export default function (state = initialState, action) {
  switch(action.type) {
  case UPDATE_TEXT:
    return {
      text: action.text
    };
  default:
    return state;
  }
}
