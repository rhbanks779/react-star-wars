import React, {useState, useEffect} from "react";

export default function Vehicles(){
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        async function getVehicles() {
            let response = await fetch('https://swapi.dev/api/vehicles/')
            let data = await response.json()
            setVehicles(data.results)
        }
        getVehicles()
    })

    return (
        <div className="vehicleBox">
            {vehicles.map(vehicle => <div key={vehicle.id} className="vehicle"><em>Vechicle: </em> {vehicle.name} <br></br><em>Model: </em> {vehicle.model}</div>)}
        </div>
    )
}