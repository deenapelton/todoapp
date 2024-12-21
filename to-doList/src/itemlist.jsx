export default function ItemList(){
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
      <td>Make Dinner</td>
      <td>tonight</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Wash clothes</td>
      <td>Sunday</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Wash Car</td>
      <td>Saturday</td>
      
    </tr>
  </tbody>
</table>
    
    </div>
    )
}