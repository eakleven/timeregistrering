import React from "react";



export class Punch extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            locations: [
                {
                    name: 'Nesbyen',
                    category: 'Hytte',
                    id: 2.1
                },
                {
                    name: 'Risør',
                    category: 'Hytte',
                    id: 2.2
                },
                {
                    name: 'Hjemme',
                    category: 'Home',
                    id: 1.1
                }
            ]
        }
    }

    render() {


        return (
            <>
                <p>{this.state.locations.map(locations => <h1 key={locations.id}>{locations.name}</h1>)}</p>
            </>
        );
    }
}