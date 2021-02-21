import axios from "axios";
export const CHAR_SELECTED = "CHAR_SELECTED";
export const CHAR_LIST = "CHAR_LIST";

export const charSelected = (char) => {
  return {
    type: "CHAR_SELECTED",
    char: char,
  };
};

export const charListStart = () => {
  return {
    type: "CHAR_LIST_START",
  };
};
export const charListSuccess = (chars) => {
  return {
    type: "CHAR_LIST_SUCCESS",
    chars: chars,
  };
};
export const charListError = (error) => {
  return {
    type: "CHAR_LIST_ERROR",
    error: error,
  };
};

export const charListFetchAsync = () => async (dispatch) => {
  dispatch(charListStart());
  try {
    const resp = await axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/char",
    });
    dispatch(charListSuccess(resp.data));
  } catch (e) {
    dispatch(charListError(e.message));
  }
};
