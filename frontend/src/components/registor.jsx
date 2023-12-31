import { useState ,useRef, useEffect} from 'react';
import React  from 'react'

import { Tabs,Tab ,Row, Col, Form, Button } from 'react-bootstrap';
import Login from "./login";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";




const Registor = () => {
    const [key, setKey] = useState('login');
    const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

    const [formData, setFormData] = useState({email: "", pass : ""});

    const [userReg, setUserReg]= useState({
      name:"",
      email:"",
      password:'',
      confiromPass:'',
      phone: 0
    });


   
   
    const getUserName = (e) => {
      setUserReg({...userReg,name:e.target.value}, (userReg) => {return userReg});
      
    }
    const getUserEmail = (e) => {
      setUserReg({...userReg,email:e.target.value}, (userReg) => {return userReg});
      
    }
    const getUserPass = (e) => {
      setUserReg({...userReg,password:e.target.value}, (userReg) => {return userReg});
      
    }
    const getUserConfiromPass = (e) => {
      setUserReg({...userReg,confiromPass:e.target.value}, (userReg) => {return userReg});
      
    }
    const getUserPhone = (e) => {
      setUserReg({...userReg,phone:e.target.value}, (userReg) => {return userReg});
      
    }

    function registorUser (e){
      e.preventDefault();
      fetch("http://localhost:5000/addusers",{
        method: "POST",
        headers:{
          'Content-type':'application/json; charset=UTF-8'
        },
        credentials: "include",
        body:JSON.stringify(userReg)
      }).then((res) => res.json()).then((data) => {
        // console.log(data)
        navigate("/login", {state:{data}})
      });

    }
  return (
    <>
      <h1 className='reg_h1'>Registor Or Login First</h1>
        <div className="log_reg_teb">
        {/* <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
       
      <Tab eventKey="login" title="Login">
        <Login />
      </Tab>
      <Tab eventKey="registor" title="Registor" >

      </Tab>
     
     
    </Tabs> */}
    <Form onSubmit={(e) => registorUser(e)}>
  <Form.Label for="user_name">Name*</Form.Label>
  <Form.Control type="text" placeholder="Enter name" name='user_name'onChange={(e) => getUserName(e)} required />
  <Form.Label for="reg_email">Email*</Form.Label>
  <Form.Control type="email" placeholder="Enter email" name='reg_email' onChange={(e) => getUserEmail(e)} required />
    <Form.Label for="reg_passs">Passsword</Form.Label>
  <Form.Control type="password" placeholder="type passsword" name='reg_passs' onChange={(e) => getUserPass(e)} required />
 <Form.Label for="reg_confirom_passs">Confirom password</Form.Label>
  <Form.Control type="password" placeholder="re enter  passsword" name='reg_confirom_passs' onChange={(e) => getUserConfiromPass(e)} required />
  <Form.Label for="phone">Phon Number</Form.Label>
  <Form.Control
    type="tel"
    placeholder='Enter phone number'
    onChange={(e) => getUserPhone(e)}
    name='phone'
    required
  />
   <Button w-100 variant="dark"  className='my-2' type="submit"
    // onClick={() => {console.log(userReg)}}
    >
         Registor
   </Button>
</Form>
        </div>
    </>
  )
}

export default Registor;