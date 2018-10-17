export const SET_ADDS = "SET_ADDS"

export default (state = [], action = {}) => {
    switch(action.type) {
  
      case SET_ADDS:
        return Object.values(action.payload);
  
      default:
        return state;
    }
  }