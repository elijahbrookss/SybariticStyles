

// Components
import DisplayCard from '../components/DisplayCard';
import CarouselComponent from '../components/Carousel';

//images
import image1 from '../assets/camille-bluedress-standing-2.jpg';
import image2 from '../assets/camille-white-sitting.jpg';
import image3 from '../assets/camille-cream-sitting-chair.jpg';

// StyleSheet
import '../stylesheets/landing-page.css';

const LandingPage = () => {

  return(
    <div className='landing-page'>
      <div className = 'mid-section'>
        <CarouselComponent />
        <div className='display-cards'>
          <DisplayCard image={image1} />
          <DisplayCard image={image2} />
          <DisplayCard image={image3} />
        </div>

      </div>
    </div>
  )

}


export default LandingPage;
