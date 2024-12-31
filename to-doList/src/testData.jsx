import {v4 as uuidv4} from 'uuid';
//this creates a unique id for each object in the array
const TodoList = [
    
            {
            "id": uuidv4(),
            "task": "sweep floor",
            "due": "Wednesday"
            },

            {
            "id": uuidv4(),
            "task": "Mop floor",
            "due": "Thursday"
            },

            {
            "id": uuidv4(),
            "task": "Take out trash",
            "due": "Friday"
            }
        ];
        export default TodoList;
    
    