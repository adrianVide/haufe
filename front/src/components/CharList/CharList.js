import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { charSelected } from "../../actions/actions";
// import "./PhoneList.css";

export const CharList = () => {
  const dispatch = useDispatch();
  //Get data from state and store in const
  const chars = useSelector((state) => state.chars);

  //dispatch the selected phone to state to be fetched on Phone component
  function singleChar(id) {
    const char = chars.find((char) => char.id === id);
    dispatch(charSelected(char));
  }

  return (
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
  );
};
