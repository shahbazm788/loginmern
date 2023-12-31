import React, { useEffect,useRef,useState } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { useCookies } from "react-cookie";
import axios from 'axios';

import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [cookies, setCookies, removeCookie] = useCookies([]);
  const [userData,setUserData] = useState();
  const [logOutClass,setLogOutClass] = useState("hide_logout")
  const cruntReff = useRef();
  const location = useLocation();

  const navigate = useNavigate();
   
  const logOut = () => {
    removeCookie("front_jwt",{path:'/'});
    // console.log(cookies);
    setUserData();
    // console.log(userData);
  }
  // function handleLogoutDiv(){
  //   console.log(cruntReff.current)
  // }
const toggleDiv = () => {
  logOutClass === "hide_logout" ? setLogOutClass("show_logout") : setLogOutClass("hide_logout");
}
  useEffect(() => {
    // console.log(cookies);
    if(cookies.front_jwt){
      fetch("http://localhost:5000/getuser",{
        method:"GET",
        headers:{
          'Content-type':'application/json; charset=UTF-8'
        },
        credentials: "include",
        // body:JSON.stringify(cookies.front_jwt)
      }).then(res => res.json()).then(data => {
        setUserData(data);
        // setCookies()
      })
    }
      // window.addEventListener("click",handleLogoutDiv)
      // return window.removeEventListener("click",handleLogoutDiv);
  
    // console.log(userData)
  },[cookies])
    return (
  <Navbar bg='dark' expand="lg" data-bs-theme="dark" className='px-3 py-0'  sticky='top' >
    <LinkContainer to="/">
  <Navbar.Brand className="text-decoration-underline">BLOG </Navbar.Brand>
  </LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
    <Nav className="mr-auto">
      {/* <LinkContainer to="/service">
         <Nav.Link>Service</Nav.Link>
      </LinkContainer> */}
      
      <LinkContainer to="/allposts">
         <Nav.Link>All Posts</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
         <Nav.Link>About</Nav.Link>
      </LinkContainer>
      {!userData ? <LinkContainer to="/registor">
         <Nav.Link>Login/Registor</Nav.Link>
      </LinkContainer> : <></>}
      {userData ? <div className='login_detail'  onClick={toggleDiv}>
    <img src='http://localhost:5000/img/icons8-user-60.png' />
    {userData.name}
    <div className={`logout_div ${logOutClass}`} >
      <p>Profile</p>
      <button onClick={logOut}>Log Out</button>
    </div>
    </div> : <></>}
    </Nav>
  </Navbar.Collapse>

  
</Navbar>
    )
}

export default Header



