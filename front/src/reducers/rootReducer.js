//Empty initial redux state
const initialState = {
    chars: [],
    char: {},
    loading: true,
    error: undefined,
  };
  
  //Reducers
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CHAR_SELECTED":
        return {
          ...state,
          char: action.char,
          loading: false,
        };
      case "CHAR_LIST_START":
        return {
          ...state,
          loading: true,
        };
      case "CHAR_LIST_SUCCESS":
        return {
          ...state,
          chars: action.payload.chars,
          loading: false,
        };
      case "CHAR_LIST_ERROR":
        return {
          ...state,
          error: action.payload,
          loading: false,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  