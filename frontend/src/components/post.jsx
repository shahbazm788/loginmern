import React from 'react';
import { Row, Col ,Container, Form ,Button } from 'react-bootstrap';


import { useLocation } from "react-router-dom";


const Post = () => {
    let data = useLocation();




   
  return (
    
    <>
        <Container fluid className='post_page'>
        <Row>
                <Col md={2}> </Col>
                <Col md={8} className='post_col'>
                    <div className="my-5"></div>
                    <h1>{data.state.post.postHeading}</h1>
                    <div className='time_div'><Row>
                      <Col sm={6}><img src="img/profile1.jpg" alt="profile pic" className='profile_pic'/> <span>Shahbaz Youns</span></Col>
                      <Col sm={6}><p className='date_p'>16/8/2023</p></Col>
                    </Row></div>
                    <div className="img_div">
                    <img src={`http://localhost:5000/img/${data.state.post.post_img}`} alt="" />
                    </div>
                    <div className="post_body" dangerouslySetInnerHTML={{__html:data.state.post.post_body}}>
                    
                     
                    
                    
                    </div>
                    <div className="comments my-3">
                        <Form>
                          <Form.Control as="textarea" placeholder="Type Comment" rows={4}  />
                          <Button w-100 variant="dark" onClick={() => console.log("Dark")} className='my-2'>
                            Add
                          </Button>
                         
                        </Form>
                        
                        <div className="comment_box my-3">
                        <div className="comment">
                         <Row>
                            <Col sm={2}>
                              <img src="img/profile2.jpg" alt=""  className='comment_profile mt-2' />
                            </Col>
                            <Col sm={10}>
                              <div className="user_name">
                              <h6 >User Name</h6> 
                              <p>16/8/2023</p>
                              </div>
                              <p className='mb-0 comment_p '>Here Is Also a Comment</p>
                              <button className='reply_button text-primary'>Reply </button>
                            </Col>
                          </Row>
                         </div>
                         <div className="comment">
                         <Row>
                            <Col sm={2}>
                              <img src="img/profile2.jpg" alt=""  className='comment_profile mt-2' />
                            </Col>
                            <Col sm={10}>
                              <div className="user_name">
                              <h6 >User Name</h6> 
                              <p>16/8/2023</p>
                              </div>
                              <p lassName='mb-0 comment_p '>Here Is Also a Comment</p>
                              <button className='reply_button text-primary'>Reply </button>
                            </Col>
                          </Row>
                         </div>
                         <div className="comment">
                         <Row>
                            <Col sm={2}>
                              <img src="img/profile2.jpg" alt=""  className='comment_profile mt-2' />
                            </Col>
                            <Col sm={10}>
                              <div className="user_name">
                              <h6 >User Name</h6> 
                              <p>16/8/2023</p>
                              </div>
                              <p lassName='mb-0 comment_p '>Here Is Also a Comment</p>
                              <button className='reply_button text-primary'>Reply </button>
                            </Col>
                          </Row>
                         </div>
                        </div>
                       
                    </div>
                </Col>
                <Col md={2}> </Col>
            </Row>
        </Container>
    </>
  )
}

export default Post;