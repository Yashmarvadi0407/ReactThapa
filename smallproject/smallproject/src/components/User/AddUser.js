import  React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './AddUser.module.css'
function AddUser(){



    const [enteredUsername,setEnteredUsername]=useState('')
    const [enteredage,setEnteredage]=useState('')
    const addUserHandler=(event)=>{
      event.preventDefault()
      console.log(enteredUsername,enteredage)
    }

    const usernamechangeHandler=(event)=>{
        setEnteredUsername(event.target.value)
    }

    const agechangeHandler=(event)=>{
        setEnteredage(event.target.value)
    }


    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <lable htmlFor="username"> Username</lable>
                <input id="username" type="text" onChange={usernamechangeHandler}/> 
                <lable htmlFor="age"> Age (Years)</lable>
                <input id="age" type="text" onChange={agechangeHandler}/>
                <Button type="submit"> Add User</Button>
            </form>
            </Card>
    )
}

export default AddUser;