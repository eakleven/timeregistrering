import React from 'react';
import {Link} from "react-router-dom"
import {getUsers} from './users'
import {DisplayUsers} from './components/DisplayUsers'
import {AddUser} from "./components/AddUser";


import './home.style.css'


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: null}
    }


    updateUsers = async ()  =>{
        const res = await fetch("/api/users");
        if (!res.ok) {
            throw new Error("Something went wrong " + res.url + ": " + res.statusText);
        }
        const json = await res.json()
        this.setState(json)
    }

    displayUsers() {
        if (this.state.users !== null){
            return (
                <DisplayUsers users={this.state.users}/>
            )
        }
        else {
            console.log("Users er null. Legg til.")
        }

    }


    render() {


        return (
            <>
                <Link to={"/punch"}>Trykk på meg</Link>
                <h1 className='header'>Choose user</h1>
                {this.displayUsers()}

                <h1 className='header'>Add user</h1>
                <AddUser updateUsers={this.updateUsers}/>
            </>
        )
    }
}

