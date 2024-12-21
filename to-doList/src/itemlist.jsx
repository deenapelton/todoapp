export default function ItemList({task, due}){
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
      <th scope="row">1</th>
      <td>{task}</td>
      <td>{due}</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{task}</td>
      <td>{due}</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{task}</td>
      <td>{due}</td>
      
    </tr>
  </tbody>
</table>
    
    </div>
    )
}