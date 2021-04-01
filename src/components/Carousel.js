import Carousel from 'react-bootstrap/Carousel'
import carouselImage from '../assets/camille-bluedress.jpg';

const CarouselComponent = () => {
  return(
    <div className='carousel'>
      <Carousel>
        <Carousel.Item>
           <img
             src = {carouselImage}
             alt="First slide"
           />

           <Carousel.Caption>
             <h3>First slide label</h3>
             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
           </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>
            <img
              src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4qsM90UUCDo/v0/1000x-1.jpg"
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
