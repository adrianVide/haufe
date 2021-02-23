import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link } from 'react-router-dom';
import "./Home.css";
import { CharList } from "../CharList/CharList";
import { Char } from "../Char/Char";
import { Loading } from "../Loading/Loading";

export const Home = () => {
    const dispatch = useDispatch();
    const [Auth, setAuth] = useState(false);

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

    return (
        <div id='home'>
            {Auth ? (
                <div id='inner'>
                    <Loading />
                    <CharList />
                    <Char />
                </div>
            ) : (
           <><h1 id='trick'>Do not try to trick me!</h1>  <Link id='pg' to="/"><img src='/portalgun.png'/></Link></>
                )
            }

        </div>
    );
};
