import Carousel from 'react-bootstrap/Carousel'

const CarouselComponent = () => {
  return(
    <div className='carousel'>
      <Carousel>
        <Carousel.Item>
           <img
             src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4qsM90UUCDo/v0/1000x-1.jpg"
             alt="First slide"
           />

           <Carousel.Caption>
             <h3>First slide label</h3>
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/popular-clothing-brands-1591993508.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>

        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarouselComponent;
