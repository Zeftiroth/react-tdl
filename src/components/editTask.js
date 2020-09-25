import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom"
import axios from "axios";

function EditTask() {
    let id = localStorage.getItem("id" )
    let history = useHistory()
    
    const [list, setList] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/generic/task/${id}/`
       ).then(response => {
            let tlist = response.data
            setList(tlist)
            console.log(tlist)
        }).catch(err => {
            console.log(err)
        });

    })

    const [editTask, setEditTask] = useState("")
    const handleInputChange = e => {
        
        let tet = e.target.value
        setEditTask(tet)
        console.log(editTask)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (editTask.length > 1) {

            axios
              .put(`http://127.0.0.1:8000/generic/task/${id}/`, 
              {
                name: editTask,
              })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
              history.push("/")
        }

        else alert("Please Enter more than 1 character"); 
    }


    return (
        <div>
            {list.name}
            <form onSubmit={handleSubmit}>

            <input value={editTask} onChange={handleInputChange}>
            </input>
            <button>edit</button>
            </form>
        </div>
    )
}

export default EditTask
