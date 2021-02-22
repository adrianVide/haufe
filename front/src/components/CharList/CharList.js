import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { charSelected } from "../../actions/actions";
import axios from "axios";

import "./CharList.css";

export const CharList = () => {
  const dispatch = useDispatch();
  //Get data from state and store in const
  const chars = useSelector((state) => state.chars);

  //dispatch the selected char to state to be fetched on Char component
  function singleChar(id) {
    const char = chars.find((char) => char.id === id);
    dispatch(charSelected(char));
  }
  const dispatchAuth = async () => {
    const isAuth = await axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/user",
    });
    if (isAuth.data) {
      dispatch({ type: "CHAR_LIST_START" });
    }



    console.log('not auth')
  }


  return (
    <ul data-testid="list-group">   
     
        {chars.map((char) => {
          return (

            <li key={char.id} data-testid={char.id}>
              <button
                onClick={() => singleChar(char.id)}
                className="list-button"
              >
                <h2>{char.name}</h2>
              </button>
            </li>
          );
        })}
    
    </ul>
  );
};
