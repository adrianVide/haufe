import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { charSelected } from "../../actions/actions";

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
