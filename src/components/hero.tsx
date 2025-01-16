// LIBRARIES
import { ChevronDown } from "lucide-react";

// COMPONENTS
import HeroImage from "/images/hero-1.jpg";
import AudioButton from "./audio";

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center overflow-hidden">
      {/* IMAGE */}
      <div className="absolute inset-0 w-full h-full bg-no-repeat special2:bg-center bg-[-400px] bg-cover" style={{ backgroundImage: `url(${HeroImage})` }}></div>
      {/* TEXT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* AUDIO */}
        <div data-aos="fade-down" className="mb-4">
          <AudioButton />
        </div>
        {/* TITLE */}
        <h1 data-aos="fade-down" data-aos-delay="300" className="text-7xl sm:text-8xl font-bold font-cormorant mb-12 mt-8 special:mb-4 special:mt-0 leading-none special:leading-normal">Esther <span className="special:inline block">&</span> <span className="special:inline block">Javier</span></h1>
        {/* SUBTITLE */}
        <p data-aos="fade-up" data-aos-delay="500" data-aos-offset="125" className="text-2xl sm:text-4xl font-inter mb-8 tracking-wider">12.07.2025</p>
        {/* ARROW */}
        <a href="#localizacion" className="flex flex-col items-center">
          <ChevronDown data-aos="fade-up" data-aos-delay="900" className="animate-bounce w-8 h-8 mb-2" />
          <span data-aos="fade-up" data-aos-delay="700" data-aos-offset="175" className="text-lg">¡Haz scroll!</span>
        </a>
      </div>
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black opacity-65"></div>
      {/* SVG CIRCLE MASK */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[100px] md:h-[200px]" viewBox="0 0 100 20" preserveAspectRatio="none">
          <path d="M0,20 Q50,0 100,20 Z" fill="#FFF"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
