import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { charSelected } from "../../actions/actions";
import axios from "axios";

// import "./PhoneList.css";

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
    console.log(await isAuth.data)
    if (await isAuth.data) {
          dispatch({ type: "CHAR_LIST_START" });
    } 
    

    
    console.log('not auth')
  }


  return (
    <div>   <button
    onClick={dispatchAuth}
      
    >LIST</button>
      <div className="list">
        {chars.map((char) => {
          return (

            <div key={char.id} data-testid={char.id}>
              <button
                onClick={() => singleChar(char.id)}
                className="list-button"
              >
                <h2>{char.name}</h2>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
