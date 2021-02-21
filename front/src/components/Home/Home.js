import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import "./Home.css";
import { CharList } from "../CharList/CharList";
import { Char } from "../Char/Char";
import { Loading } from "../Loading/Loading";
// import { Loading } from "../Loading/Loading";

export const Home = () => {
    const dispatch = useDispatch();
    const [Auth, setAuth] = useState(false);

    // const isAuth = async () => {
    //     await axios({
    //     method: "GET",
    //     withCredentials: true,
    //     url: "http://localhost:3001/user",
    //   })};

    // Trigger the data fetch on first load in case user is logged in
    useEffect(async () => {
        const isAuth = await axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/user",
        });
        if (isAuth.data) {
            setAuth(true)
            dispatch({ type: "CHAR_LIST_START" });
        }
    }, [dispatch]);
    // useEffect(() => {

    //       if (isAuth.data) {
    //             dispatch({ type: "CHAR_LIST_START" });
    //       } 
    // }, [dispatch])

    return (
        <div>
            {Auth ? (
                <div id='home'>
                    <Loading />
                    <CharList />
                    <Char />
                </div>
            ) : (
                    <h1>Do not try to trick me!</h1>
                )
            }

        </div>
    );
};
