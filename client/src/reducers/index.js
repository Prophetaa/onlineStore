import {combineReducers} from "redux";

import advertisements from "./AdsReducer"
import AdToShow from "./AdRedudcer"

export default combineReducers({
  advertisements,
  AdToShow
  });
  