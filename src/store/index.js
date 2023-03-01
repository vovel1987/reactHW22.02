import { createStore, combineReducers } from "redux";

import { maleReducer } from "./maleReducer/maleReducer";

const rootReducer = combineReducers({
  male: maleReducer,
});

export const store = createStore(rootReducer);
