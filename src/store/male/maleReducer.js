const maleUsers = [];

export const maleReducer = (state = maleUsers, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload];
  } else if (action.type === "DELETE") {
    return state.filter(({ id }) => id !== action.payload);
  } else {
    return state;
  }
};
