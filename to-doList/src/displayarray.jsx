import InputForm from "./inputform";
import ItemCard from "./itemcard";
import React from "react";
import { v4 as uuidv4 } from 'uuid';


export default function DisplayArray({ tasks, deleteTask, editTask }) {

    return(
        <div >
         {tasks.map((task) => {
                return <ItemCard 
                key={uuidv4()} 
                dueDate={task.due} 
                idKey={task.id} 
                taskName={task.task} 
                deleteTask={deleteTask}
                editTask={editTask} />
})}
          
        </div>
    );
}