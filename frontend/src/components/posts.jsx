import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useState , useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import * as images from "../../../uploads/img";


const Posts = (postId) => {
  let [posts, setposts] = useState([]);
let navigate = useNavigate();


 useEffect( () => {
  // fetch("posts.json")
  // .then(response => response.json())
  // .then(data => (setposts(data)));

//   const postData = async () =>  {
//   await  axios.get('http://localhost:5000/posts').then(data => setposts(data.data)).catch(err => console.log(err));
// }
       // axios.get('http://localhost:5000/posts').then(data => setposts(data.data)).catch(err => console.log(err));
  
  axios.get('https://loginmern.vercel.app/posts').then(data => {
    setposts(data.data)
    console.log(data.data)
  }).catch(err => console.log(err))
      

 }, []);


  let handleClick = (item) => {
    let path = "/post";
    navigate(path, {state:{"post":item}});
  }

  return (
    <div>
        <h1 className='text-center text-primary my-3 text-decoration-underline'>Leteast Blogs </h1>
    <div className="posts_div">
         <Row>
            <Container>
                <Row>
               {/* { posts.map( (item,i) => {
                
                    if (i < 18 ) {
                    
                  
                      return (
                      //   <Col md={4}>
                      //   <Card className='my-3' onClick={() => (handleClick(item))}> 
                         
                      //     <Card.Img variant="top" src={`img/LandWater${i}.jpg`} className='card_img'/>
                      //     <Card.Header className="text-light bg-primary">{item.title.slice(0,25) +"..."}</Card.Header>
                      //     <Card.Body>
                      //       <Card.Text>
                      //         {item.body.slice(0,80)}
                      //       </Card.Text>
                      //     </Card.Body>
                      //   </Card>
                      // </Col>
                         <Col md={4}>
                        <Card className='my-3' onClick={() => (handleClick(item))}> 
                         
                          <Card.Img variant="top" src={`img/${item.post_img}.jpg`} className='card_img'/>
                          <Card.Header className="text-light bg-primary">{item.postHeading.slice(0,25) +"..."}</Card.Header>
                          <Card.Body>
                            <Card.Text>
                              {item.post_body.slice(0,80)}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                      )
                 
                  }
               })}
               */}

                 { posts.map( (item,i) => {
                
                    ;
                  
                      return (
                     
                         <Col md={4}>
                        <Card className='my-3' onClick={() => (handleClick(item))}> 
                         
                          <Card.Img variant="top" src={`https://loginmern.vercel.app/img/${item.post_img}`} className='card_img'/>
                          <Card.Header className="text-light bg-primary">{item.postHeading.slice(0,25) +"..."}</Card.Header>
                          <Card.Body>
                            <Card.Text dangerouslySetInnerHTML={{__html:item.post_body.length > 100 ? item.post_body.slice(0,100) : item.post_body }}>
                              {/*item.post_body.slice(0,80) */}
                              {/* {dataBody().slice(0,80)} */}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                       // <li> {item.postHeading} </li>
                      )
                 
                
               })}
               
            
                </Row>
            </Container>
        </Row>
    </div>
        
    </div>
  )
}

export default Posts
