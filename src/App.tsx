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
import { LucideIcon, MapPin, BusFront, House, MessageSquareHeart, Music, Gift, TreePine, Waves, Footprints } from 'lucide-react';

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
    TreePine: TreePine,
    Waves: Waves,
    House: House,
    Footprints: Footprints,

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
        <section className="flex flex-col gap-8 text-center pb-24 md:pb-50">
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
        <section id="localizacion" className="flex flex-col pb-24 md:pb-50">
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
              <Button text="Ver iglesia" link="https://www.google.es/maps/place/La+Caridad,+El+Franco,+Asturias/@43.554059,-6.8389653,15z/data=!3m1!4b1!4m6!3m5!1s0xd316186c5329db7:0x77ca66d1f4ae4bc!8m2!3d43.5512766!4d-6.8291853!16s%2Fm%2F05q8zf4?hl=es&entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D" />
            </div>
            <div data-aos="fade-up" data-aos-delay="1100">
              <Button text="Ver finca" link="http://ferpelgastronomico.com/" />
            </div>
          </div>
          {/* MAP */}
          <div
            data-aos="fade-up"
            data-aos-delay="1300"
            className="relative rounded-lg w-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11566.077636439637!2d-6.838965321191526!3d43.55405898770959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd316186c5329db7%3A0x77ca66d1f4ae4bc!2sLa%20Caridad%2C%20El%20Franco%2C%20Asturias!5e0!3m2!1ses!2ses!4v1732137141600!5m2!1ses!2ses"
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
        <section id="transporte" className="flex flex-col pb-24 md:pb-50 overflow-x-hidden">
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
        <section id="alojamiento" className="flex flex-col pb-24 md:pb-50">
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
            <Button text="Ver más hoteles" link="https://www.booking.com/searchresults.es.html?ss=Ortiguera%2C+Asturias%2C+Spain&ssne=El+Franco&ssne_untouched=El+Franco&label=gog235jc-1DCAMoRkIJZWwtZnJhbmNvSApYA2hGiAEBmAEKuAEHyAEM2AED6AEB-AECiAIBqAIDuAKGrfm5BsACAdICJGViYWEyMGNjLWY2NTYtNDAwZS1iNjJlLWQ0ZWU5YjA2Y2QyZdgCBOACAQ&aid=356980&lang=es&sb=1&src_elem=sb&src=searchresults&dest_id=-394784&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=27a3980b64160131&ac_meta=GhAyN2EzOTgwYjY0MTYwMTMxIAAoATICZW46CW9ydGlndWVyYUAASgBQAA%3D%3D&checkin=2025-07-11&checkout=2025-07-13&group_adults=2&no_rooms=1&group_children=0" />
          </div>
        </section>
        {/* SECTION 4 */}
        <section id="sitios-de-interes" className="flex flex-col pb-24 md:pb-50">
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
            <Button text="Ver más sitios" link="https://www.turismoasturias.es/descubre/costa/villas-marineras/marinera-ortiguera" />
          </div>
        </section>
        {/* SECTION 5 */}
        <section id="musica" className="flex flex-col pb-24 md:pb-50">
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
            <Button text="Añadir a la lista" link="#" />
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
