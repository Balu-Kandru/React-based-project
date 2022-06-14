import { Fragment } from "react";
import "./style.css"
function Productlist(props){
    return (
        <Fragment>
            <div id="third">
                <input type="checkbox"></input>
                <img src={props.data.profileImg} alt="pic from w3schools"/>
                <h3 id="pro">{props.data.product_name}<h5>{props.data.product_description}</h5></h3>
            </div>
        </Fragment>
    )
}
export default Productlist
