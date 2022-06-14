import { Fragment } from 'react';
import './App.css';
import Productlist from './component/product-list';
export const user={
    Name:"Alan Ford",
    EmployeeId:"000051152",
    Appointment:"9:00 (24-05-2016)",
    Email:"alan.form@email.nl",
    phone:"+31123456789",
    profileImg:"https://www.w3schools.com/howto/img_avatar.png",
    product_name:"Boltart Bosbessen",
    product_description:"this is some details about the product mentioned above"
  }
var arr="<"

export function App() {
  return (
    <Fragment>
      <div className='main'>
        <div id='header'>
          <h2>{arr}</h2>
          <div>
            <h1>{user.Name}</h1>
            <label>{user.EmployeeId}</label>
          </div>
          
          <button>Print</button>
        </div>
        
      </div>
      
    </Fragment>
  );
}
export function D1ata(){
  return (
    <div>
      <Productlist data={user}></Productlist>
    </div>
  )
}

// export default App

