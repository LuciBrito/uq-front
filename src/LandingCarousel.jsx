import Carousel from 'react-bootstrap/Carousel';
import logo from './img/img-slider.jpg';

function ExampleCarouselImage({ text }) {
  return (
    <img
      className="d-block w-100"
      src={logo}
      alt={text}
    />
  );
} 



export default function LandingCarousel() {
return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}