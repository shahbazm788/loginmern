import { Row, Col } from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { useState , useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";



  
const AllPosts = () => {


    let [posts, setposts] = useState([]);
   


let navigate = useNavigate();


    let handleClick = (item) => {
      let path = "/post";
      navigate(path, {state:{"post":item}});
    }
    useEffect(() => {
    //  fetch("posts.json")
    //  .then(response => response.json())
    //  .then(data => (setposts(data)));
    axios.get('http://localhost:5000/posts').then(data => {
      setposts(data.data)
      console.log(data.data)
    }).catch(err => console.log(err))
    }, []);


  
  return (
    <div>
    <h1 className='text-center text-primary my-3 text-decoration-underline'>Leteast Blogs </h1>
<div className="posts_div">
     <Row>
        <Container>
            <Row>
            { posts.map( (item,i) => {   
                return (
                  <Col md={4}>
                  <Card className='my-3'  onClick={() => (handleClick(item))} > 
                   
                    <Card.Img variant="top" src={`http://localhost:5000/img/${item.post_img}`} className='card_img'/>
                    <Card.Header className="text-light bg-primary">{item.postHeading.slice(0,25) +"..."}</Card.Header>
                    <Card.Body>
                      <Card.Text dangerouslySetInnerHTML={{__html:item.post_body.length > 100 ? item.post_body.slice(0,100) : item.post_body }}>
                        
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                )
           })}
           
        
            </Row>
        </Container>
    </Row>
</div>
    
</div>
  )
}

export default AllPosts;