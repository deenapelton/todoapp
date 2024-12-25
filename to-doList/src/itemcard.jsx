import ItemList from "./itemlist";
export default function ItemCard(props){
    return (
    <div className="container-fluid border w-25 p-3">
        <h2 className="text-center">{props.task}</h2>
    <p>Due: {props.due}</p>
    </div>
    
)
}