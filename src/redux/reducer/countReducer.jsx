function countReducer(state = { count: 0 }, action) {
  if (action.type === "INCRESE") {
    state.count++;
  }
  if (action.type === "DECRESE") {
    state.count--;
  }
  return { ...state };
}

export default countReducer;
