export const UPDATE_RANGE = 'UPDATE_RANGE';
export const HIDE_RECORD = 'HIDE_RECORD';
export const ADD_CITATION = 'ADD_CITATION';
export const REMOVE_CITATION = 'REMOVE_CITATION';
export const CLEAR_CITATIONS = 'CLEAR_CITATIONS';

export function updateRange(start, end) {
  return {
    type: UPDATE_RANGE,
    payload: {
      rangeStart: start,
      rangeEnd: end
    }
  };
}

export function hideRecord(citation) {
  return {
    type: HIDE_RECORD,
    payload: {
      citation
    }
  };
}

export function addCitation(citation) {
  return {
    type: ADD_CITATION,
    payload: {
      citation
    }
  };
}

export function removeCitation(citation) {
  return {
    type: REMOVE_CITATION,
    payload: {
      citation
    }
  };
}

export function clearCitations() {
  return {
    type: CLEAR_CITATIONS
  };
}
