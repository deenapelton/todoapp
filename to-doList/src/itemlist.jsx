export default function ItemList({id,task, due}){
    return (
    <div className="container-fluid">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Task</th>
      <th scope="col">Due</th>
     
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{id}</th>
      <td>{task}</td>
      <td>{due}</td>
      
    </tr>
    <tr>
      <th scope="row">{id}</th>
      <td>{task}</td>
      <td>{due}</td>
      
    </tr>
    <tr>
      <th scope="row">{id}</th>
      <td>{task}</td>
      <td>{due}</td>
      
    </tr>
  </tbody>
</table>
    
    </div>
    )
}