import SideBar from "./sidebar";
import InputForm from "./inputform";
import ItemCard from "./itemcard";
import ItemList from "./itemlist";
import MyButton from "./Button";
import TodoList from "./testData";  
import DisplayArray from "./displayarray";  
import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from 'react';

//const API_URL= "http://localhost:3000/ToDo"

//function to create card, takes in TodoList object
function createCard(TodoList){
  //returns ItemCard component with task and due props
  return <ItemCard
  key={TodoList.id}
  task={TodoList.task}
  due={TodoList.due}
  />
}



export default function App(){

//const API_URL= "http://localhost:3000/ToDo"
// I'm setting the state of the task array to the TodoList array 
 const [task, setTask] = useState(TodoList);
 const addTask= (newTask) => {
  //create a new copy of task array
  const updatedTasks = [...task];
  //add new task to the new copy
  updatedTasks.push(newTask);
  //set the task array to the new copy
  setTask(updatedTasks);
}
  
 /*function getToDoList() {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        setToDoList(data)
        console.log(data)
      })
  }

  function deleteTask(id) {
    fetch(API_URL + `/${id}`, {
      method: 'DELETE',
    }).then(() => getTasks())
  }
  function postTask(e) {
    e.preventDefault()
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        task: newTask,
        due: newDueDate
        
      }),
    }).then(() => getToDoList())
  }

  function updateTask(e, toDoListObject) {
    e.preventDefault()
    let updatedTaskObject = {
      ...toDoListObject,
      task: updatedTask,
      due: updatedDueDate,
    }
    fetch(`${API_URL}/${toDoListObject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTaskObject),
    }).then(() => getToDoList())
  }*/





  return(
  <div className="container-fluid">
    ToDoList
    <InputForm addTask={addTask} />
    
    <MyButton name="delete" />
    <MyButton name="Post"/>
    <MyButton name="Update"/>
    <DisplayArray task={task} />
  
 
    
  </div>
)
}
//
//
// <InputForm addTodo= {addTask}/> calls the InputForm function and passes in addTask function as a prop
// {TodoList.map(createCard)} maps through TodoList array and calls createCard function for each object in the array