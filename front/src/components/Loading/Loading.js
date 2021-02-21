import React from "react";
import { useSelector } from "react-redux";
import "./Loading.css";

export const Loading = () => {
  //Grab loading state from redux
  const loading = useSelector((state) => state.loading);

  return (
    <>
      {loading ? (
        <>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : null}
    </>
  );
};
