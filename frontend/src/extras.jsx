{ posts.map( (item,i) => {
    return (
      <Col md={4}>
      <Card className='my-3'> 
       
        <Card.Img variant="top" src="img/joshua-bayliss-stMx5il6Tto-unsplash.jpg"/>
        <Card.Header className="text-light bg-primary">{item.title.slice(0,25) +"..."}</Card.Header>
        <Card.Body>
          <Card.Text>
            {item.body.slice(0,100)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    )
})}