
import { LOAD_AD_DETAILS} from "../actions/AppActions";

export default (state = null, action = {}) => {
    switch (action.type) {
      case LOAD_AD_DETAILS:
        return {...action.payload};
      default:
        return state;
    }
  };