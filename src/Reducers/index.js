import changethenumber from "./updoewn";

import { combineReducers } from "redux";

// below is the root reducer which we can use to call all the reducers
const rootReducer = combineReducers({
  changethenumber: changethenumber,
});

export default rootReducer;