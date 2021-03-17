import React from 'react'
import { useState } from 'react'
import {setUsers} from "../users";

import Axios from 'axios';

export const AddUser = (props) => {

    const [name, setName] = useState("");
    const [wage, setWage] = useState(null);


    const sendToDB = async () => {
        console.log("submitting ",{name, wage});
        await fetch("http://localhost:3000/createuser", {
            method: "POST",
            body: JSON.stringify({name, wage})
        })
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        setUsers(name, wage);
        console.log("submitting ", {name});
        await fetch("/api/users", {
            method: "POST",
            body: JSON.stringify({name: name, wage: wage})
        })

        props.updateUsers();
        e.target.reset()
    //    setName("");
    //    setWage(null);

    }

        return(
                <>
                <h2>Navn: {name} <br/> Lønn: {wage} </h2>
                    <form onSubmit={handleSubmit}>

                    <label>
                        Name:
                        <input type='text'
                               name='name'
                               onChange={(event) =>{
                                   setName(event.target.value)
                               }}/>
                    </label>
                    <br/>
                    <label>
                        Salary:
                        <input type='text'
                               name='salary'
                               onChange={(event) =>{
                            setWage(event.target.value)
                        }}/>
                    </label>
                    <button type="submit" >Submit</button>
                    </form>
            </>
            )
}
