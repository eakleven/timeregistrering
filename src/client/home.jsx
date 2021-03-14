import React from 'react';
import {Link} from "react-router-dom"
import {getUsers} from './users'
import {DisplayUsers} from './components/DisplayUsers'
import {AddUser} from "./components/AddUser";


import './home.style.css'

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {users: getUsers()}
    }

  updateUsers = () =>{
        this.setState({users: getUsers()})
    }


    render() {


        return (
            <>
                <Link to={"/punch"}>Trykk på meg</Link>
                <h1 className='header'>Choose user</h1>
                <DisplayUsers users={this.state.users}/>
                <h1 className='header'>Add user</h1>
                <AddUser updateUsers={this.updateUsers}/>
            </>
        )
    }
}

