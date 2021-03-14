import React from "react";
import {getLocations} from "./locations"
import {DisplayLocations} from "./components/DisplayLocations";


export class Punch extends React.Component{
    constructor(props) {
        super(props);

        this.state = {locations: getLocations()}
    }

    addLocations = () => {
        this.setState({locations: getLocations()})
    }


    render() {

        return (
            <>
                <h1 className='header'>Timeregistrering</h1>
                <DisplayLocations
                    locations = {this.state.locations}
                    addLocations = {this.addLocations}
                />
            </>
        );
    }
}