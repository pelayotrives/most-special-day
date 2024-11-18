import HeroImage from "/hero.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center overflow-hidden">
      {/* IMAGE */}
      <div className="absolute inset-0 w-full h-full bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}></div>
      {/* TEXT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* TITLE */}
        <h1 data-aos="fade-up" className="text-5xl sm:text-8xl font-bold font-cormorant mb-4">Javier & Esther</h1>
        {/* SUBTITLE */}
        <p data-aos="fade-up" data-aos-delay="250" className="text-2xl sm:text-4xl font-inter mb-8 tracking-wider">13.07.2024</p>
        {/* ARROW */}
        <div data-aos="fade-up" data-aos-delay="450" className="flex flex-col items-center">
          <ChevronDown className="animate-bounce w-8 h-8 mb-2" />
          <span className="text-lg">¡Haz scroll!</span>
        </div>
      </div>
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black opacity-65"></div>
    </section>
  );
};

export default Hero;
