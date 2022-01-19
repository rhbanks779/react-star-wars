import React, { useState, useEffect } from "react";

export default function Main(){
    const [ships, setShips] = useState([])


        useEffect(() => {
        async function getStarship(){
            let response = await fetch('https://swapi.dev/api/starships/')
            let data = await response.json()
            console.log(data)
            setShips(data.results)
        
        }
        getStarship()
        })
       

    return(
        <div className="shipBox">
            {ships.map(ship => <div key={ship.id} className="ship"><em>Ship: </em> {ship.name} <br></br><em>Model: </em> {ship.model}</div> )}
            
        </div>
    )
}

// useEffect(() => {
//     axios.get('https://swapi.dev/api/starships/')
//     .then(data => {
//         setShips(data.data)
//     })
//     .catch(error)
//     }), ([])
