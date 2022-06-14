import "./style.css"

function Customer(props){
 return (
     <div id="first">
        <h3><strong>Appointment</strong> {props.data.Appointment}</h3>
        <h3><strong>Email: </strong>{props.data.Email}</h3>
        <h3><strong>Phone </strong>{props.data.phone}</h3>
     </div>
 )
}
export default Customer