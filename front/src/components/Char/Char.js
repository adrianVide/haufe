import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./Char.css";

export const Char = () => {
    //Get char from state depending on button from CharList
    const char = useSelector((state) => state.char);

    //Set favourite to false until checked
    const [fav, setFav] = useState(false);

    //Get loading state for showing spinner or not
    const loading = useSelector((state) => state.loading);

    //Get favourites array and checks wether or not the actual one is in it
    useEffect(async () => {
        const actualChar = char.id + ''
        const isFav = await axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/fav",
        });
        isFav.data.favourites.includes(actualChar) ?
            setFav(true)
            :
            setFav(false)
    });

    //Function to delete from fav array onClick
    const delFav = async (char) => {
        const theUser = await axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/user",
        })
        axios.post(`http://localhost:3001/delfav/${char.id}`, {
            char: char.id,
            username: theUser.data.username,
            id: theUser.data.id
        })
        setFav(false)

    };
    //Function to add from fav array onClick
    const addFav = async (char) => {
        const theUser = await axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/user",
        })
        axios.post(`http://localhost:3001/addfav/${char.id}`, {
            char: char.id,
            username: theUser.data.username,
            id: theUser.data.id
        })
        setFav(true)

    };


    return (
        <>
            {Object.keys(char).length !== 0 ?
                (
                    <div className="card">
                        <img className='charimg'
                            src={char.image}
                            alt={char.name}
                        />
                        <p>{char.status}</p>
                        <h1>{char.name}</h1>
                        <p className="species">{char.species}</p>

                        {fav ? (<img onClick={() => delFav(char)} class='heart' src='/1977483.png' />

                        ) : (
                                <img onClick={() => addFav(char)} class='heart' src='/1977245.png' />

                            )}

                    </div>
                )
                : loading ? (
                    <h1 className="choose">Loading ...</h1>
                ) : (
                        <h1 className="choose">Choose your fighter</h1>
                    )
            }
        </>
    );
};
