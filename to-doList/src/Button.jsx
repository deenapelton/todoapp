export default function myButton({doSomething, name}){
   
return(
<button type="button" 
onClick={doSomething} 
className="btn btn-secondary " 
style={{ marginRight: '10px' } }
>{name}</button>

)


}
