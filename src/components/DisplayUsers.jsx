import React from 'react';
import './DisplayUsers.style.css'
import {UserCard} from "./UserCard";


export const DisplayUsers = props => {
    return (
        <>

        <div className='DisplayUsers'>
        {props.users.map(users => <UserCard key={users.name + users.salary} user = {users}/>)}
        </div>
        </>)

}