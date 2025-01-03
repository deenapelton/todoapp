import React, { useState } from 'react';
import ItemCard from './itemcard';
import createCard from './App';
import { v4 as uuidv4 } from 'uuid';
import DisplayArray from './displayarray';

//function to create a new task
export default function InputForm({addTask}){
    //state for task and due date
    const [task, setTask] = useState('')
    const [due, setDue] = useState('')
    
//function to handle form submission(clicking submit button)
 function handleSubmit(e){
       e.preventDefault()//prevents page from refreshing

//create new task object
  const newTask = {
    id: uuidv4(), // create a unique id
    task: task,
    due: due
  }
        addTask(newTask); //adds new task to task array
        setTask(''); //resets task to empty string
        setDue(''); //resets due to empty string
   }   

   //function to handle change in input
const handleTaskChange = (e) => {
    
  setTask(e.target.value)//set task to value of input
 
}
const handleDueChange = (e) => {
    setDue(e.target.value)      //set due to value of input
}

    return (//form to take in task and due date
        <div>
    <form onSubmit={handleSubmit}>
        <label htmlFor="todoTitle">Task:</label>
        <input
            type="text"
            
            value={task}
            onChange={handleTaskChange}
            placeholder="Enter Task"
        />
        <label htmlFor="dueDate">Due Date:</label>
        <input
            type="text"
            
            value={due}
            onChange={handleDueChange}
            placeholder="Enter Due Date"
        />
        <button type="submit">Add Todo</button>
    </form>

   </div>//returning the form 
    )
}
/* 

<ItemCard task={task} due={due} />

*/