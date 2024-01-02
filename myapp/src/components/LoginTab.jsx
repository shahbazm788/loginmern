import {Form, Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import { useCookies } from "react-cookie";


const LoginTab = () => {


  const [cookies, removeCookie] = useCookies([]);
const [getdata,setGetData] = useState({});
const nevigate = useNavigate();

  useEffect(() => {
    if(cookies.jwt){
      nevigate("/");
     
    }
   
  },[]);


  const [logindetail,setLoginDetail] = useState({
    email:'',
    password:''
  });
 

const  sendData = async (e) => {
    e.preventDefault();
  try {
      fetch("https://railway.app/project/97f5fa52-6de5-4156-ad17-29ab640a3569/service/768c1f8a-7099-48c3-827a-941f930e6264", {
      method:"POST",
      headers:{
        'Content-type':'application/json; charset=UTF-8'
      },
      credentials: "include",
      body: JSON.stringify(logindetail)
    
    }).then( res => res.json()).then(data => {
      if(data){
        nevigate("/",{state:{data:data}})
       
      }
      
    });
  } catch (e) {
    console.error('Error', e)
  }
  
}


  return (
    <div>
         <h1>Login </h1>
          <Form onSubmit={(e) => sendData(e)} >
            <Form.Control type="email" placeholder="Emaill....." onChange={(e) => {
              return setLoginDetail({...logindetail,email:e.target.value});
            }} />
            <Form.Control type="password" placeholder="password"  onChange={(e) => {
              return setLoginDetail({...logindetail,password:e.target.value});
            }}/>
            <Button type="submit">SUbimt</Button>
          </Form>
    </div>
  )
}

export default LoginTab
