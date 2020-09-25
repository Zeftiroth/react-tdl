
import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateTask from "./createTask";
import EditTask from "./editTask";
import { Link } from "react-router-dom";

function TaskList() {
    const [taskList, setTaskList] = useState([])
    const [bstatus, setBstatus] = useState("")

useEffect(() => {
    axios.get(`http://127.0.0.1:8000/task/`)
    .then(response => {
        let tempTaskList = response.data
        console.log(tempTaskList)
        setTaskList(tempTaskList)
        
    });
})

    const handleComplete = e => {
        e.preventDefault()
        let ans = prompt('Are you you want to complete the task? y/n')
        ans.toLowerCase()
        let eid = e.target.getAttribute('id')
        let ename = e.target.getAttribute('ename')
        console.log(eid)
        
        console.log(taskList[1].status)

        if (taskList[eid].status == "done") {

        }
        if (ans == "y") {


            axios.put(`http://127.0.0.1:8000/generic/task/${eid}/`,
            {
                name: ename,
                status: "done",
            }).then(response => {
    
                console.log(response)
            })
            .catch(error => 
                {
    
                    console.log(error)
                }
                )
        }

        else if ( ans == "n")
            {
                alert('You have selected no')
            }

        else if ( ans !== "y" || ans !== "n" ) {
            alert('Please enter a valid answer')
        }
            




    }

const handleUnComplete = (e) => {
  e.preventDefault();
  let ans = prompt("Are you you want to uncomplete the task? Y/N");
  ans.toLowerCase();
  let eid = e.target.getAttribute("id");
  let ename = e.target.getAttribute("ename");
  console.log(eid);

  console.log(taskList[1].status);

  if (taskList[eid].status == "done") {
  }
  if (ans === "y") {
    axios
      .put(`http://127.0.0.1:8000/generic/task/${eid}/`, {
        name: ename,
        status: "undone",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (ans == "n") {
    alert("You have selected no");
  } else if (ans !== "y" || ans !== "y") {
    alert("Please enter a valid answer");
  }
};

const storeID = e => {
    let sid = e.target.getAttribute("id")
    localStorage.setItem("id", sid);
    
}


    return (
        <div>
            
            <CreateTask />
            
            { taskList.map((task) => {
                return (
                  <div>
                      <Link id={task.id} to={`/edit/${task.id}`} onClick={storeID}>

                    {task.name}
                    
                      </Link>
                    <div>
                      {/* <script>

                            if ({task.status} == "done" ) 
                                return (
                                    <div>
                                        <button id={task.id} ename={task.name} onClick={handleComplete}>
                                Complete
                            </button>
                                    </div>
                                )
                            
                            </script> */}

                      {task.status}
                      <button
                        id={task.id}
                        ename={task.name}
                        onClick={handleComplete}
                      >
                        Complete
                      </button>
                      <button
                        id={task.id}
                        ename={task.name}
                        onClick={handleUnComplete}
                      >
                        Uncomplete
                      </button>
                    </div>
                  </div>
                );
            })}
        </div>
    )
}

export default TaskList
