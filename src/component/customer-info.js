import "./stylesh.css"
import {user} from "../App"

function Customer(){
 return (
     <div id="main">
     <div id="first">
        <h3><strong>Appointment</strong> {user.Appointment}</h3>
        <h3><strong>Email: </strong>{user.Email}</h3>
        <h3><strong>Phone </strong>{user.phone}</h3>
     </div>
     </div>
 )
}
export default Customer