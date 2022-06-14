import "./stylesh.css"
// import {user} from "../App"
import { Fragment } from "react"

function Order(){
 return (
     <Fragment>
        <div id="secound">
        <div id="row1">
            <h3 className="font">Status<h4 className="sub" ><span>&#9679;</span> In Process</h4></h3>
            <h3 className="font">Door <h4 className="sub">Mark</h4></h3>
            <h3 className="font"id="time">Time <h4 className="sub">10:30 <label style={{margin:"0px"}}>(25-05-2016)</label></h4></h3>
        </div>
        </div>
  </Fragment>
 )
}
export default Order