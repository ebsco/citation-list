export const UPDATE_RANGE = 'UPDATE_RANGE';


export function updateRange(start, end) {
  return {
    type: UPDATE_RANGE,
    payload: {
      rangeStart: start,
      rangeEnd: end
    }
  };
}
