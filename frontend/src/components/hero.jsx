import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
   <div className='carusel'>
    <Carousel data-bs-theme="dark" className='caro'>
      <Carousel.Item>
        <img
          className='img'
          src="/img/toy-bricks-table-with-word-blog.jpg"
          alt="Slide image alt"
        />
        <Carousel.Caption>
          <h3>Wellcom to My Blog </h3>
          <p>Here you can find Blogs on multipull things</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className='img'
          src="/img/julie-may-9LXztI1zY_Y-unsplash.jpg"
          alt="Slide image alt"
        />
        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>Caption for slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className='img'
          src="/img/susan-q-yin-2JIvboGLeho-unsplash.jpg"
          alt="Slide image alt"
        />
        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>Caption for slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className='img'
          src="/img/timothy-raggett-2sPHiRHbwN8-unsplash.jpg"
          alt="Slide image alt"
        />
        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>Caption for slide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         className='img'
          src="/img/julie-may-9LXztI1zY_Y-unsplash.jpg"
          alt="Slide image alt"
        />
        <Carousel.Caption>
          <h3>Slide label</h3>
          <p>Caption for slide</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
  );
}

export default Hero;