import React from 'react'
import {getUsers, setUsers} from "../users";

export class AddUser extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: null
        }
    }
    handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        //this.setState({[name]: value})
    };

    handleSubmit = (event) =>{
        event.preventDefault()
        let name = this.state.name;
        let salary = this.state.salary
        setUsers(name, salary)
        console.log(getUsers())
        props.updateUsers()

    }





    render() {
         return(
            <>
            <h2>Navn:{this.state.name} <br/> Lønn: {this.state.salary}</h2>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type='text' name='name' onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Salary:
                    <input type='text' name='salary' onChange={this.handleChange}/>
                </label>
                    <input type='submit' value='Submit'/>
            </form>
        </>
        )
    }
}
