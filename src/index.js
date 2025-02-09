import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: '0+',
  age: 23,
  profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
}
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App employee={employee} />
  </React.StrictMode>
);
