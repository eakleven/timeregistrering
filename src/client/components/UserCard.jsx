import React from 'react'

import './UserCard.style.css'

export const UserCard = props =>{

    return(
        <>
            <div className='UserCardContainer'>
                <h1>{props.user.name}</h1>
            </div>
        </>
    )
}