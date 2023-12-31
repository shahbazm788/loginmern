import { useEffect, useState } from "react";
import React from "react";
import { Form, Button } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [cookies,setCookies, removeCookie] = useCookies([]);
const navigate = useNavigate();
const data = useLocation();
const [userData, setUserData] = useState();
    const [loginDetaile, setLoginDetail] = useState({
        email:"",
        password:""
    });
  const submitData = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/getuser/login",{
        method: "POST",
        headers:{
          'Content-type':'application/json; charset=UTF-8'
        },
        credentials: "include",
        body:JSON.stringify(loginDetaile)
      }).then((res) => res.json()).then((data) => {
        console.log(data);
        navigate("/",{state:{state:data.state}})
      })
    // console.log(loginDetaile)
  };
  useEffect(() => {
    if(cookies.front_jwt){
      navigate("/",{state:{state:data.state}})
    }
    console.log(data.state)
  },[submitData]);
   
  return (
    <>
      <div className="login_user">
      <Form onSubmit={(e) => submitData(e)} type="submit">
        <label >Email:</label>
        <Form.Control
          type="email"
          placeholder="Email..."
          required
          name="email"
          onChange={(e) => {
            return setLoginDetail({...loginDetaile,email:e.target.value})
          }}
        />
        <label >Password:</label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={(e) => {
            return setLoginDetail({...loginDetaile,password:e.target.value})
          }}
          required
        />
        <Button w-100 variant="dark" className="my-2" type="submit">
          Login
        </Button>
      </Form>
      </div>
    </>
  );
};

export default Login;
