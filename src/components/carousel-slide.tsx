import Button from './button';

interface CarouselSlideProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CarouselSlide = ({ image, title, subtitle, description, buttonText, buttonLink }: CarouselSlideProps) => (
  <div className="bg-transparent shadow-sm border border-gray-200 rounded-lg w-full md:w-11/12">
    <div className="p-6 flex flex-col gap-4">
      <img className="w-full rounded-lg" src={image} alt={title} />
      <div>
        <h3 className="font-inter text-2xl font-medium pb-1">{title}</h3>
        <h4 className="font-inter text-md font-light">{subtitle}</h4>
      </div>
      <p className="font-inter text-md font-normal pb-1">{description}</p>
      <Button text={buttonText} link={buttonLink} />
    </div>
  </div>
);

export default CarouselSlide;