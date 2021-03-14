import React from 'react';

let locations = [
        {
            name: 'Nesbyen',
            category: 'Cabin',
        },
        {
            name: 'Risør',
            category: 'Cabin',

        },
        {
            name: 'Hjemme',
            category: 'Cabin',
        }
]

export function getLocations(){
    return locations;
}



export function setLocations(name, category){
    locations.push(
        {
        name: name,
        category: category,
        }
    )

}
