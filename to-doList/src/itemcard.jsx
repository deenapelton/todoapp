//import ItemList from "./itemlist";
import React, {useState} from "react";
import MyButton from "./Button";
export default function ItemCard({ idKey, taskName, dueDate, deleteTask, editTask }) {

const [isEditing, setIsEditing] = useState(false);
const [updatedTask, setUpdatedTask] = useState(taskName);
const [updatedDueDate, setUpdatedDueDate] = useState(dueDate);

    const handleDelete = () => {
        console.log("delete button clicked")
       
       deleteTask(idKey);
    };
    const handleUpdate = () => {    
        console.log("update button clicked")
        editTask(idKey,updatedTask);
        setIsEditing(false);
    }
    return (
        <div className="container-fluid border w-25 p-3">
        {isEditing ? (
            <div>
                <input
                    type="text"
                    value={updatedTask}
                    onChange={(e) => setUpdatedTask(e.target.value)}
                />
                   <input
                    type="text"
                    value={updatedDueDate}
                    onChange={(e) => setUpdatedDueDate(e.target.value)}
                />
                <MyButton doSomething={handleUpdate} name="Save" />
            </div>
        ) : (
            <div>
                <h2 className="text-center">{taskName}</h2>
                <p>Due: {dueDate}</p>
                <MyButton doSomething={handleDelete} name="Delete" style={{ marginRight: '10px' }} />
                <MyButton doSomething={() => setIsEditing(true)} name="Edit" />
            </div>
        )}
    </div>
    );
}

