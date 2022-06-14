import { Fragment } from 'react';
import './App.css';
import Customer from './component/customer-info';
import Productlist from './component/product-list';
import Order from './component/order-info';


const user={
    Name:"Alan Ford",
    EmployeeId:"000051152",
    Appointment:"9:00 (24-05-2016)",
    Email:"alan.form@email.nl",
    phone:"+31123456789",
    profileImg:"https://www.w3schools.com/howto/img_avatar.png",
    product_name:"Boltart Bosbessen",
    product_description:"This is some details about the product mentioned above"
  }
var arr="<"

export function App() {
  return (
    <Fragment>
        <div id='header'>
          <h1 className='arr'>{arr}</h1>
          <div className='name'>
            <h1>{user.Name}</h1>
            <label>{user.EmployeeId}</label>
          </div>
          <button>Print</button>
        </div>
        <Customer data={user} />
        <Order />
        <Productlist data={user} />
    </Fragment>
  );
}


export default App

