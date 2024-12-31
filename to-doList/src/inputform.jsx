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
const handlechange = (e) => {
  setTask(e.target.value)//set task to value of input
 setDue(e.target.value)      //set due to value of input
}

    return (//form to take in task and due date
        <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="todoTitle">Task:</label>
        <input
            type="text"
            id="todoTitle"
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <label htmlFor="dueDate">Due Date:</label>
        <input
            type="text"
            id="dueDate"
            value={due}
            onChange={(e) => setDue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
    </form>

   </>//returning the form 
    )
}
/* 

<ItemCard task={task} due={due} />

*/