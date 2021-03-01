import React from 'react';
import './location.style.css'
import {Button} from './Button'

export const Location = (props) =>{

    return(
        <div className='container'>

            <h1 >{props.location.name}</h1>
            <Button location = {props.location.name} addLocation = {props.addLocations
            }/>
        </div>
    )
}

