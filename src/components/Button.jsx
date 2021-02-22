import React from 'react';
import './Button.style.css'
import {setLocations} from "../locations";
import {getLocations} from "../locations";

export const Button = props => {

    const onclick = () => {
        alert(props.location);
        setLocations("Nordbyveien", "hjemme")
        console.log(getLocations())
        props.addLocation();
    }

    return <div className='button' onClick={onclick}><p className='text'>Legg til timer</p></div>
}