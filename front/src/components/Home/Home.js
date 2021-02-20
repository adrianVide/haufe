import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import "./Home.css";
import { CharList } from "../CharList/CharList";
import { Char } from "../Char/Char";
import { Loading } from "../Loading/Loading";
// import { Loading } from "../Loading/Loading";

export const Home = () => {
    const dispatch = useDispatch();

    //Trigger the data fetch on first load
    useEffect(() => {
        dispatch({ type: "CHAR_LIST_START" });
    }, [dispatch]);

    return (
        <div className="wrapper">
            <div className="flexcont">
                <Loading />
                <CharList />
                <Char />
            </div>
        </div>
    );
};
