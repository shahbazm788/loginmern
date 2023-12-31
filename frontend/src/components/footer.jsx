import React from 'react';
import { Row, Col ,Container ,Button, Form} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {


    let navigate = useNavigate();

    let handleClick = (path) => {      
        navigate(path);
      }
  return (
    <>
        <div className='footer_div'>
        <div className='footer_left_margin'></div>
        <div>
            <Row >
                <Col md={6}>
                   <div className='my-3'>
                    <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button>
                            Search
                            </Button>
                        </Form>
                   </div>
                   <div className="pages">
                        <h6 onClick={() => (handleClick("/"))} className='pages_element'>Home</h6>
                        <hr />
                        <h6 onClick={() => (handleClick("/posts"))} className='pages_element'>All Post</h6>
                        <hr />
                        <h6 onClick={() => (handleClick("/post"))} className='pages_element'>Post</h6>
                        <hr />
                        <h6 onClick={() => (handleClick("/"))} className='pages_element'>Subscribe to our newsletter</h6>
                        <hr />
                   </div>
                </Col>
                <Col md={6}>
                    <div className='socileIcons my-3'>
                        <div>
                            <h6>Address</h6>
                            <p className='footer_p'>13 Street Plot # 1012 Main City Area Karachi, Pakistan</p>
                            <hr />
                            <h6>Call Us</h6>
                            <p>+(92) 340 8628219</p>
                            <hr />
                            <h6>Mail Us</h6>
                            <p>Email : shahbazm788@gmail.com</p>
                            <hr />
                        </div>
                        <div className='icons_div'>
                            <h6>Follow Us on Socile Sites:</h6>
                            <a href=""><img src="img/icons8-facebook-96.png" alt="" /></a>
                            <a href=""><img src="img/icons8-instagram-96.png" alt="" /></a>
                            <a href=""><img src="img/icons8-linkedin-96.png" alt="" /></a>
                            <a href=""><img src="img/1690643640twitter-x-icon-png.webp" alt="" /></a>
                            <a href=""><img src="img/icons8-whatsapp-96.png" alt="" /></a>
                        </div>
                        
                    </div>
                </Col>
             </Row>
             <div className='footer_right_margin'></div>
             </div>
        
    </div>
    <div className='copy_right'><p>Copy Rigt &#169; All Rights reserved Desined and developed by <a href='https://www.facebook.com/eagles.king.10' target='_blank'>Shahbaz</a> </p></div>
    </>
  )
}

export default Footer