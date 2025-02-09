import React, { Fragment, useEffect, useState } from 'react';
import './style.css'


function Postview() {
  const [userData, setUserData]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3001/user')
    .then((data)=>{
      return data.json()
    })
    .then((userData)=>{
      setUserData(userData);
    })
  },[])
  return (
    <Fragment>
      <header id='header'>
        <span id='name'>
          <img className='logo_icon' src='https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-photo-camera-logo-outline-svg-png-icon-17.png' alt='' ></img>
          <h1 id='app_name' >Instaclone</h1>
        </span>
          <img className='logo_icon' src='https://banner2.cleanpng.com/20190829/pbo/transparent-app-icon-camera-icon-image-icon-5d6788a180b701.0518543115670662735272.jpg' alt=''></img>
      </header>
      <div className='post'>
      {
        userData.map((user,i)=>{
          return (
            <div className='content' key={i}>
            <div >
                <header id='head'>
                  <div  >
                    <h3 className='name_loc'>{user.name}</h3>
                    <h4 className='name_loc' style={{fontWeight:'100'}} >{user.location}</h4>
                  </div>
                    <h2 style={{margin:'0px'}}>...</h2>
                </header>
            </div>
            <div>
              <img className='image' src={user.PostImage} alt=''></img>
            </div>
            <div id='footer'>
              <div id='footer_flex'>
                <div >
                  <img className='like_share' src='https://p.kindpng.com/picc/s/169-1694281_heart-symbol-computer-icons-heart-icon-instagram-png.png' alt=''></img>
                  <img className='like_share' src='https://cdn0.iconfinder.com/data/icons/simple-line-design/100/Fast_delivery-512.png' alt=''></img>
                </div>
                <h6 style={{margin:'1px'}} className='date'>{user.date}</h6>
              </div>
              <h6 style={{margin:'10px 4px'}} className='likes'>{user.likes} likes</h6>
              <h4 style={{margin:'10px 4px'}}>{user.description}</h4>
            </div>
            </div>
          )
        })
      }
      </div>
    </Fragment>
  );
}
export default Postview

