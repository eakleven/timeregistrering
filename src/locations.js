import React from 'react';

const locations = [
        {
            name: 'Nesbyen',
            category: 'Cabin',
            id: () =>{
                return this.name + '+' + this.category
            }
        },
        {
            name: 'Risør',
            category: 'Cabin',
            id: () =>{
                return this.name + '+' + this.category
            }
        },
        {
            name: 'Hjemme',
            category: 'Cabin',
            id: () =>{
                return this.name + '+' + this.category
            }
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
        id: () =>{
            return this.name + '+' + this.category
        }
        }
    )

}
