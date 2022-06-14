import "./style.css"
import { Fragment } from "react"

function Order(){
 return (
     <Fragment>
        <div id="second">
            <h3 className="font">Status<h4 className="sub" ><span>&#9679;</span> In Process</h4></h3>
            <h3 className="font">Door <h4 className="sub">Mark</h4></h3>
            <h3 className="font" style={{marginRight:"10rem"}}>Time <h4 className="sub">10:30 <label style={{fontWeight:"100"}}>(25-05-2016)</label></h4></h3>
        </div>
  </Fragment>
 )
}
export default Order