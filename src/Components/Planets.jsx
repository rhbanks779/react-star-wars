import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function Planets (){
const [planets, setPlanets] = useState([])

useEffect (() => {
    async function getPlanets(){
        let response = await fetch('https://swapi.dev/api/planets/')
            let data = await response.json()
            console.log(data)
            setPlanets(data.results)
    }
    getPlanets()
})

    return(
        <div className="planetBox">
            {planets.map(planet => <div key={planet.id} className='planet'><em>Planet: </em>{planet.name} <br></br> <em>Population: </em> {planet.population}</div>)}
        </div>
    )
}