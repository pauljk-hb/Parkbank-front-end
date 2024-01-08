import React, { useState, useEffect } from 'react';
import { getBenchData } from '../js/main.js';

function DiscoverKachel() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Funktion zum Abrufen von Daten aus Firestore
        async function fetchData() {
            try {
                const userData = await getBenchData();
                console.log(userData)
                setData(userData);
            } catch (error) {
                console.error('Fehler beim Abrufen der Daten: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container">
            {data.map((item) => (
                <div key={item.id} className="data-container">
                    <div>
                        <div>
                            <h3>{item.pos._lat}</h3>
                            <h3>{item.pos._long}</h3>
                            <p>{item.evaluation.full}</p>
                            <p>{item.evaluation.view}</p>
                            <p>{item.evaluation.clean}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DiscoverKachel;