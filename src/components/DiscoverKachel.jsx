import React, { useState, useEffect } from 'react';
import { getBenchData } from '../js/main.js';
import { dummyData } from '../js/dummyData.js';
import FixedStarRating from "./FixedStarRating";
import ViewRating from "./ViewRating";
import CleanRating from "./CleanRating";

function DiscoverKachel() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Funktion zum Abrufen von Daten aus Firestore
        async function fetchData() {
            try {
                //const userData = await getBenchData();
                const userData = dummyData;
                console.log(userData)
                setData(userData);
            } catch (error) {
                console.error('Fehler beim Abrufen der Daten: ', error);
            }
        }

        fetchData();

    }, []);

    return (
        <div className="discover-container">
            {data.map((item) => (
                <div key={item.id} className="data-container">
                    <div>
                        <div className="discover-img-container">
                            <img src="Assets/Map.png" alt="Beschnittenes Bild" className="discover-img"/>
                        </div>
                        
                        <FixedStarRating  fillNumber={ item.evaluation.full }/>
                        <ViewRating  fillNumber={ item.evaluation.view }/>
                        <CleanRating  fillNumber={ item.evaluation.clean }/>

                        <div className='icon-holder'>
                            <img src="Assets/on-map.svg" alt="" />
                            <img src="Assets/save.svg" alt="" />
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default DiscoverKachel;