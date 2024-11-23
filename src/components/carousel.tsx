// LIBRARIES
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// COMPONENTS
import CarouselSlide from './carousel-slide';
import SlidesData from '../utils/slides-data.json';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3001 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1
  }
};

const CardCarousel = () => (
  <Carousel
    additionalTransfrom={0}
    arrows={false}
    autoPlay
    autoPlaySpeed={4500}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={responsive}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >
    {SlidesData.map((slide: { id: number; image: string; title: string; subtitle: string; description: string; buttonText: string; buttonLink: string; }) => (
      <CarouselSlide
        key={slide.id}
        image={slide.image}
        title={slide.title}
        subtitle={slide.subtitle}
        description={slide.description}
        buttonText={slide.buttonText}
        buttonLink={slide.buttonLink}
      />
    ))}
  </Carousel>
);

export default CardCarousel;
