import SideBar from "./sidebar";
import InputForm from "./inputform";
import ItemCard from "./itemcard";
import ItemList from "./itemlist";
import MyButton from "./Button";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from 'react';

const API_URL= "http://localhost:3000/ToDo"

export default function App(){

  const [task,setList] = useState([])

  /*
  setList(fetch(API_URL).then(data => data.JSON).then(data => getTask(data)))
  

function deleteTask(){}

function updateTask(){}

function postTask(){}


useEffect(() => {getTask()}, [])*/


  return(
  <div className="container-fluid">
    ToDoList
    <InputForm/>
    <MyButton name="submit"/>
    <MyButton name="delete" />
    <MyButton name="Post"/>
    <MyButton name="Update"/>
    <SideBar/>
    <ItemCard/>
  </div>
  )
}
