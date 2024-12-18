import SideBar from "./sidebar";
import InputForm from "./inputform";
import ItemCard from "./itemcard";
import ItemList from "./itemlist";
import "bootstrap/dist/css/bootstrap.min.css"

export default function App(){
  return <div>
    App
    <SideBar/>
    <InputForm/>
    <ItemCard/>
    <ItemList/>
  </div>
}
