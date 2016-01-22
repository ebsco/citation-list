import {
  UPDATE_RANGE,
  HIDE_RECORD,
  ADD_CITATION,
  REMOVE_CITATION,
  CLEAR_CITATIONS
} from '../actions/actions';
import data from './data.json';

const initialState = {
  rangeStart: 1,
  rangeEnd: 10,
  dummyData: data,
  citations: [],
  uncited: [...data]
};

export default function (state = initialState, action) {
  switch(action.type) {
  case UPDATE_RANGE:
    return {
      ...state,
      rangeStart: action.payload.rangeStart,
      rangeEnd: action.payload.rangeEnd
    };
  case HIDE_RECORD: {
    let citation = action.payload.citation,
      index = state.uncited.indexOf(citation),
      uncited = [...state.uncited];
    uncited.splice(index,1);
    return {
      ...state,
      uncited
    };
  }
  case ADD_CITATION: {
    let citation = action.payload.citation,
      index = state.uncited.indexOf(citation),
      citations = [...state.citations],
      uncited = [...state.uncited];
    citations.push(citation);
    uncited.splice(index,1);
    return {
      ...state,
      citations,
      uncited
    };
  }
  case REMOVE_CITATION: {
    let citation = action.payload.citation,
      index = state.citations.indexOf(citation),
      citations = [...state.citations],
      uncited = [...state.uncited];
    uncited.push(citation);
    citations.splice(index,1);
    return {
      ...state,
      citations,
      uncited
    };
  }
  case CLEAR_CITATIONS:
    return {
      ...state,
      citations: [],
      uncited: [...state.dummyData]
    };
  default:
    return state;
  }
}
