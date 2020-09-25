import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateTask() {
    const [newTask, setNewTask] = useState("")
    const handleInputChange = e => {
        let nt = e.target.value
        setNewTask(nt)
        console.log(newTask)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (newTask.length > 1) {
            
            axios.post(`http://127.0.0.1:8000/task/`,
            {
                name: newTask
            }).then(res => {
                console.log(res)
            }).catch(err => console.log(err.response));
        }
        else alert('Please Enter more than 1 character')


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

            <input value={newTask} onChange={handleInputChange}></input>
            <button>Create</button>
            </form>
        </div>
    )
}

export default CreateTask
