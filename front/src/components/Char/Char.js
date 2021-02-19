import React from "react";
import { useSelector } from "react-redux";
// import "./Phone.css";

export const Char = () => {
    //Get char from state depending on button from CharList
    const char = useSelector((state) => state.char);
    //Get loading state for showing spinner or not


    //   const loading = useSelector((state) => state.loading);

    return (
        <>
            {/* {Object.keys(char).length !== 0 ?  */}
            (
                <div className="card">
                    <img
                        src={"http://localhost:3001/images/" + char.imageFileName}
                        alt={char.name}
                    />
                    <p className="brand">{char.manufacturer}</p>
                    <h1>{char.name}</h1>
                    <p className="price">{char.price} €</p>
                    <p className="desc">{char.description}</p>
                    <div className="specs-container">
                        <div className="specs">
                            <i className="material-icons md-18"></i>
                            {char.screen}
                        </div>
                        <div className="specs">
                            <i className="material-icons md-18"></i>
                            {char.processor}
                        </div>
                        <div className="specs">
                            <i className="material-icons md-18"></i>
                           
            </div>
                    </div>
                </div>
                //   ) 
                //   : loading ? (
                //     <h1 className="choose">Loading ...</h1>
                //   ) : (
                //         <h1 className="choose">Choose your char</h1>
            )
          }
        </>
    );
};
