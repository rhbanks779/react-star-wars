import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <nav id='head' className='headBar' >
           <h1>Star Wars Starships</h1>
        
        <ul className='headBar'>
            <Link to='main'>
            <li>Starships</li>
            </Link>
            <Link to='planets'>
            <li className='plan'>Planets</li>
            </Link>
            <Link to='vehicles'>
            <li classname='veh'>Vehicles</li>
            </Link>

        </ul>
        </nav>
    )
}