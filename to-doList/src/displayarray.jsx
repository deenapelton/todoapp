import InputForm from "./inputform";
import ItemCard from "./itemcard";

export default function DisplayArray(props){
    return(
        <div>
            {props.task.map((task) => {
                return <ItemCard key={task.id} task={task.task} due={task.due} />
            })}
        </div>
    )
}