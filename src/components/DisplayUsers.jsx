import React from 'react';
import './DisplayUsers.style.css'
import {UserCard} from "./UserCard";
import {setUsers} from "../users";


export const DisplayUsers = props => {
    return (
        <>

        <div className='DisplayUsers'>
        {props.users.map(users => <UserCard user = {users}/>)}
        </div>
        </>)

}