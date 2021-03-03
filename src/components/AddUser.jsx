import React from 'react'

import {setUsers} from "../users";

export class AddUser extends React.Component {
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
        this.setState({[name]: value})
    }


    handleSubmit = (event) =>{
        event.preventDefault()
        let name = this.state.name;
        let salary = this.state.salary;
        setUsers(name, salary)
        this.props.updateUsers()
        this.setState({name: '', salary: null})
        event.target.reset();

    }


    render() {
        return(
                <>
                <h2>Navn: {this.state.name} <br/> Lønn: {this.state.salary} </h2>
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
