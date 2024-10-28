import React from 'react'
import './login.css'
import Img1 from '../images/login6.jpg';
function Check(){
  alert("Thanks for Login You details are saved sucessfully...");
}
function Sign(){
  alert('Oops Something went Wrong please try later!')
}
export default function login() {
  return (
    <>
    <div className='first-login'>
    </div>
    {/*//! login start */}
    <div className="cont14 container-fuild">
    <center><h1 id='lern'>LearnGo.in</h1></center>
    <div className="field">
      <div className="child1">
        <h3>Get Started :</h3>
        <div className="inpu">
          <div className="child1">
            <label htmlFor="Username" id='lab1'>UserName : </label> 
            <label htmlFor="Password" id='pass'>Password :</label>
            <label htmlFor="email" id='mail'>Email :</label>
          </div>
          <div className="child2">
            <input type="text" name="Username" id="Username" placeholder='solo@1753'/>
            <input type="password" name="Password" id="Password" placeholder='Raju123$_'/>
            <input type="email" name="email" id="email" placeholder='boyella@1753gmail.com'/>
            <div className="fin">
              <label htmlFor="remember">Remember me...</label>
              <input type="checkbox" name="remember" id="remember" />
            </div>
            <input type="submit" value="Login " className='log' onClick={Check}/>
            <p id='dont'>Don't have Account Sign-up!</p>
            <b onClick={Sign}><a href="#">sign-up</a></b>
          </div>
        </div>
      </div>
      <div className="child2">
        <img src={Img1} alt="" />
      </div>
    </div>
    </div>
    </>
  )
}
