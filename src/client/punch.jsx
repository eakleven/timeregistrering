import React, {useEffect, useState} from "react";
import {DisplayLocations} from "./components/DisplayLocations";
import {AddLocation} from "./components/AddLocation";


export const Punch = () => {
    const [locations, setLocations] = useState();
    const  [error, setError] = useState();



    const loadLocations  = async () => {
        try {
            const res = await fetch("api/locations");
            if (!res.ok) {
                throw new Error(`Something went wrong ${res.url}: ${res.statusText}`)
            }
            const json = await res.json();
            setLocations(json);
        } catch (e) {
            setError(e)
        }
    }

    useEffect(loadLocations, [])

    if(error){
        return <div>Error happened</div>
    }

    if(!locations){
        return <div>..Loading..</div>
    }
        return (
            <>
                <h1 className='header'>Timeregistrering</h1>
                <DisplayLocations
                    locations = {locations}/>
                <AddLocation/>
            </>
        );
}