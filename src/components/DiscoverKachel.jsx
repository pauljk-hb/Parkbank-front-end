import React, { useState, useEffect } from 'react';
import { getBenchData } from '../js/main.js';
import { dummyData } from '../js/dummyData.js';
import FixedStarRating from "./FixedStarRating";
import ViewRating from "./ViewRating";
import CleanRating from "./CleanRating";

function DiscoverKachel() {
    const [data, setData] = useState([]);
    const [filledStates, setFilledStates] = useState([]);

    const handleClick = (index) => {
        setFilledStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    useEffect(() => {
        // Funktion zum Abrufen von Daten aus Firestore
        async function fetchData() {
            try {
                //const userData = await getBenchData();
                const userData = dummyData;
                console.log(userData)
                setData(userData);
                setFilledStates(Array(userData.length).fill(false));
            } catch (error) {
                console.error('Fehler beim Abrufen der Daten: ', error);
            }
        }

        fetchData();

    }, []);

    return (
        <div className="discover-container">
            {data.slice(0, 15).map((item, index) => (
                <div key={item.id} className="data-container">
                    <div>
                        <div className="discover-img-container">
                            <img src="./Assets/missing-image.jpeg" alt="Beschnittenes Bild" className="discover-img"/>
                        </div>
                        
                        <FixedStarRating  fillNumber={ item.evaluation.full }/>
                        <ViewRating  fillNumber={ item.evaluation.view }/>
                        <CleanRating  fillNumber={ item.evaluation.clean }/>

                        <div className='icon-holder'>
                            <img src="Assets/on-map.svg" alt="" />

                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleClick(index)} width="19.346" height="25.157" viewBox="0 0 19.346 25.157">
                                <g id="save-remove-svgrepo-com" transform="translate(-0.85 -4.73)">
                                    <path id="Pfad_8"  fill={ filledStates[index] ? 'black' : 'none' } data-name="Pfad 8" d="M19.046,10.284V26.373c0,2.054-1.266,2.917-2.813,1.926l-4.785-3.1a1.875,1.875,0,0,0-1.851,0L4.813,28.3C3.266,29.29,2,28.426,2,26.373V10.284c0-2.422,1.7-4.4,3.787-4.4H15.26C17.342,5.88,19.046,7.863,19.046,10.284Z" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3"/>
                                </g>
                            </svg>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default DiscoverKachel;