import Card from "./components/card";
import Carousel from "./components/carousel";
import Button from "./components/button";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Timer from "./components/countdown";
import Title from "./components/title";

import CardsData from "./utils/cards-data.json";

import DandelionImage from "/images/dandelion.png";
import BusImage from "/images/bus.png";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LucideIcon, MapPin, BusFront, House, MessageSquareHeart, Music, Gift } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1440px)", () => {
      gsap.fromTo(
        ".dandelion-image",
        { y: -100, opacity: 1, rotation: 0 },
        {
          y: 275,
          opacity: 0.2,
          rotation: -30,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".dandelion-image",
            start: "top center",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        ".bus-image",
        { x: -600},
        {
          x: 745,
          ease: "power2.inOut",
          scrollTrigger: {
          trigger: ".bus-image",
          start: "top+=100 bottom",
          end: "bottom+=100 center",
          scrub: 3,
          },
        }
      );
    });

    mm.add("(min-width: 1024px) and (max-width: 1439px)", () => {
      gsap.fromTo(
        ".dandelion-image",
        { y: -100, opacity: 1, rotation: 0 },
        {
          y: 275,
          opacity: 0.2,
          rotation: -30,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".dandelion-image",
            start: "top center",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        ".bus-image",
        { x: -600},
        {
          x: 325,
          ease: "power2.inOut",
          scrollTrigger: {
          trigger: ".bus-image",
          start: "top+=100 bottom",
          end: "bottom center",
          scrub: 3,
          },
        }
      );
    });

    mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
      gsap.fromTo(
        ".dandelion-image",
        { y: -100, opacity: 1, rotation: 0 },
        {
          y: 275,
          opacity: 0.2,
          rotation: -30,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".dandelion-image",
            start: "top center",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        ".bus-image",
        { x: -600},
        {
          x: 105,
          ease: "power2.inOut",
          scrollTrigger: {
          trigger: ".bus-image",
          start: "top+=100 bottom",
          end: "bottom center",
          scrub: 3,
          },
        }
      );
    });

    mm.add("(min-width: 425px) and (max-width: 767px)", () => {
      gsap.fromTo(
        ".dandelion-image",
        { y: -100, opacity: 1, rotation: 0 },
        {
          y: 210,
          opacity: 0.2,
          rotation: -30,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".dandelion-image",
            start: "top center",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        ".bus-image",
        { x: -600},
        {
          x: -210,
          ease: "power2.inOut",
          scrollTrigger: {
          trigger: ".bus-image",
          start: "top+=100 bottom",
          end: "bottom center",
          scrub: 3,
          },
        }
      );
    });

    mm.add("(min-width: 1px) and (max-width: 424px)", () => {
      gsap.fromTo(
        ".dandelion-image",
        { y: -100, opacity: 1, rotation: 0 },
        {
          y: 210,
          opacity: 0.2,
          rotation: -30,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".dandelion-image",
            start: "top center",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        ".bus-image",
        { x: -600},
        {
          x: -315,
          ease: "power2.inOut",
          scrollTrigger: {
          trigger: ".bus-image",
          start: "top+=100 bottom",
          end: "bottom center",
          scrub: 3,
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  const iconMap: { [key: string]: LucideIcon } = {
    MapPin: MapPin,
    BusFront: BusFront,
    House: House,
    MessageSquareHeart: MessageSquareHeart,
  };

  return (
    <>
      {/* HEADER */}
      <Header />
      {/* HERO */}
      <div className="hero-section">
        <Hero />
      </div>
      {/* CONTENT */}
      <main className="container mx-auto px-4 md:px-8">
        {/* DANDELION IMAGE */}
        <section className="w-40 md:w-48 mx-auto mt-48">
          <img
            width={200}
            className="dandelion-image mx-auto"
            src={DandelionImage}
            alt="Dandelion"
          />
        </section>
        {/* COUNTDOWN */}
        <section className="flex flex-col gap-8 text-center pb-40 md:pb-50">
          <h2
            data-aos="fade-up"
            data-aos-delay="500"
            className="text-gold text-center font-medium font-cormorant text-5xl md:text-7xl"
          >
            ¡No queda nada!
          </h2>
          <div data-aos="fade-up" data-aos-delay="600">
            <Timer />
          </div>
        </section>
        {/* SECTION 1 */}
        <section id="localizacion" className="flex flex-col pb-40 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay="500" className="pb-8">
            <Title icon={MapPin} text="Localización" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay="700" className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Esse ea veniam eu laborum laboris aute elit adipisicing excepteur.
              Elit dolore reprehenderit non in in voluptate ullamco aliquip
              fugiat do dolore. Id ipsum do nisi irure sint qui.
            </p>
            <br />
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Excepteur velit Lorem est fugiat elit ipsum consequat velit ad do
              proident commodo. Commodo sint laborum sint eu quis veniam
              consequat. Officia officia laboris in officia eiusmod occaecat
              laboris laboris. Ullamco commodo laborum sint id ad.
            </p>
          </div>
          {/* BUTTONS */}
          <div className="flex flex-col gap-6 pb-8 sm:flex-row">
            <div data-aos="fade-up" data-aos-delay="900">
              <Button text="Ver Iglesia" link="#" />
            </div>
            <div data-aos="fade-up" data-aos-delay="1100">
              <Button text="Ver Finca" link="#" />
            </div>
          </div>
          {/* MAP */}
          <div
            data-aos="fade-up"
            data-aos-delay="1300"
            className="relative rounded-lg w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d743676.7212841499!2d-6.505803732294989!3d43.272644129714145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368cfa609eb09d%3A0xf8b5f32b7dc69e3a!2sAsturias!5e0!3m2!1sen!2ses!4v1732005528877!5m2!1sen!2ses"
              width="650"
              height="475"
              className="w-full border-none rounded-lg"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        {/* SECTION 2 */}
        <section id="transporte" className="flex flex-col pb-40 md:pb-50 overflow-x-hidden">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay="500" className="pb-8">
            <Title icon={BusFront} text="Transporte" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay="700" className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Esse ea veniam eu laborum laboris aute elit adipisicing excepteur.
              Elit dolore reprehenderit non in in voluptate ullamco aliquip
              fugiat do dolore. Id ipsum do nisi irure sint qui.
            </p>
            <br />
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Excepteur velit Lorem est fugiat elit ipsum consequat velit ad do
              proident commodo. Commodo sint laborum sint eu quis veniam
              consequat. Officia officia laboris in officia eiusmod occaecat
              laboris laboris. Ullamco commodo laborum sint id ad.
            </p>
          </div>
          {/* BUTTONS */}
          <div data-aos="fade-up" data-aos-delay="900" className="pb-8">
            <Button text="Ver empresa" link="#" />
          </div>
          {/* BUS IMAGE */}
          <section className="w-[600px]">
            <img width={1200} className="bus-image" src={BusImage} alt="Bus" />
          </section>
        </section>
        {/* SECTION 3 */}
        <section id="alojamiento" className="flex flex-col pb-40 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay="500" className="pb-8">
            <Title icon={House} text="Alojamiento" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay="700" className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Esse ea veniam eu laborum laboris aute elit adipisicing excepteur.
              Elit dolore reprehenderit non in in voluptate ullamco aliquip
              fugiat do dolore. Id ipsum do nisi irure sint qui.
            </p>
            <br />
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Excepteur velit Lorem est fugiat elit ipsum consequat velit ad do
              proident commodo. Commodo sint laborum sint eu quis veniam
              consequat. Officia officia laboris in officia eiusmod occaecat
              laboris laboris. Ullamco commodo laborum sint id ad.
            </p>
          </div>
          {/* CAROUSEL */}
          <div data-aos="fade-up" data-aos-delay="800" className="pb-8">
            <Carousel />
          </div>
          {/* BUTTONS */}
          <div data-aos="fade-up" data-aos-delay="900" className="pb-8">
            <Button text="Ver más" link="#" />
          </div>
        </section>
        {/* SECTION 4 */}
        <section id="sitios-de-interes" className="flex flex-col pb-40 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay="500" className="pb-8">
            <Title icon={MessageSquareHeart} text="Sitios de interés" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay="700" className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Esse ea veniam eu laborum laboris aute elit adipisicing excepteur.
              Elit dolore reprehenderit non in in voluptate ullamco aliquip
              fugiat do dolore. Id ipsum do nisi irure sint qui.
            </p>
            <br />
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Excepteur velit Lorem est fugiat elit ipsum consequat velit ad do
              proident commodo. Commodo sint laborum sint eu quis veniam
              consequat. Officia officia laboris in officia eiusmod occaecat
              laboris laboris. Ullamco commodo laborum sint id ad.
            </p>
          </div>
          {/* GRID */}
          <div data-aos="fade-up" data-aos-delay="850" className="grid gap-8 pb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {CardsData.map((card) => {
              const IconComponent = iconMap[card.icon];
              if (!IconComponent) {
                console.warn(`Ícono no encontrado para: ${card.icon}`);
                return null;
              }
              return (
                <Card
                  key={card.id}
                  icon={IconComponent}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                />
              );
            })}
          </div>
          {/* BUTTON */}
          <div data-aos="fade-up" data-aos-delay="900" className="pb-8">
            <Button text="Ver más" link="#" />
          </div>
        </section>
        {/* SECTION 5 */}
        <section id="musica" className="flex flex-col pb-40 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay="500" className="pb-8">
            <Title icon={Music} text="Música" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay="700" className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Esse ea veniam eu laborum laboris aute elit adipisicing excepteur.
              Elit dolore reprehenderit non in in voluptate ullamco aliquip
              fugiat do dolore. Id ipsum do nisi irure sint qui.
            </p>
            <br />
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Excepteur velit Lorem est fugiat elit ipsum consequat velit ad do
              proident commodo. Commodo sint laborum sint eu quis veniam
              consequat. Officia officia laboris in officia eiusmod occaecat
              laboris laboris. Ullamco commodo laborum sint id ad.
            </p>
          </div>
          {/* PLAYLIST */}
          <div data-aos="fade-up" data-aos-delay="900" className="pb-8">
            <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/37i9dQZEVXbNG2KDcFcKOF?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
          {/* BUTTON */}
          <div data-aos="fade-up" data-aos-delay="900" className="pb-8">
            <Button text="Ver lista" link="#" />
          </div>
        </section>
        {/* SECTION 6 */}
        <section id="regalo" className="flex flex-col pb-40 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay="500" className="pb-8">
            <Title icon={Gift} text="Regalo" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay="700" className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Esse ea veniam eu laborum laboris aute elit adipisicing excepteur.
              Elit dolore reprehenderit non in in voluptate ullamco aliquip
              fugiat do dolore. Id ipsum do nisi irure sint qui.
            </p>
            <br />
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">
              Excepteur velit Lorem est fugiat elit ipsum consequat velit ad do
              proident commodo. Commodo sint laborum sint eu quis veniam
              consequat. Officia officia laboris in officia eiusmod occaecat
              laboris laboris. Ullamco commodo laborum sint id ad.
            </p>
          </div>
        </section>
        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
}

export default App;
