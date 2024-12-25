import ItemList from "./itemlist";
export default function ItemCard(){
    return (
    <div className="container-fluid border w-25 p-3">
        <h1 className="position-absolute start-50 translate-middle
">TASK</h1>
    <ItemList id="1" task="dishes" due="today" />
    </div>
    
)
}