// LIBRARIES
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast, { Toaster } from 'react-hot-toast';
import { LucideIcon, MapPin, BusFront, House, MessageSquareHeart, Music, Gift, Binoculars, Waves, Footprints, Users, Files } from 'lucide-react';

// COMPONENTS
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
import Accordion from "./components/accordion";
import BusImage from "/images/bus.png";
import Modal from "./components/modal";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        setIsModalOpen(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconMap: { [key: string]: LucideIcon } = { Binoculars: Binoculars, Waves: Waves, House: House, Footprints: Footprints};

  const calculateDelay = (index: number, base = 100) => index * base;

  return (
    <main className="bg-white">
      {/* TOAST */}
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      {/* HEADER */}
      <Header />
      {/* HERO */}
      <section className="hero-section">
        <Hero />
      </section>
      {/* CONTENT */}
      <div className="container mx-auto px-4 md:px-8">
        {/* DANDELION IMAGE */}
        <section className="w-40 md:w-48 mx-auto mt-48">
          <img width={200} className="dandelion-image mx-auto" src={DandelionImage} alt="Dandelion"/>
        </section>
        {/* COUNTDOWN */}
        <section className="flex flex-col gap-8 text-center pb-24 md:pb-50">
          <h2 data-aos="fade-up" data-aos-delay={calculateDelay(1)} className="text-gold text-center font-medium font-cormorant text-5xl md:text-7xl">Tempus Fugit</h2>
          <div data-aos="fade-up" data-aos-delay={calculateDelay(2)}>
            <Timer />
          </div>
          <div data-aos="fade-up" data-aos-delay={calculateDelay(2)}>
            <h2 data-aos="fade-up" data-aos-delay={calculateDelay(3)} className="text-black text-center font-semibold font-cormorant text-3xl md:text-5xl">Querida familia y amigos</h2>
            <h2 data-aos="fade-up" data-aos-delay={calculateDelay(4)} className="text-black text-center font-medium font-cormorant text-2xl md:text-4xl">¡Bienvenidos a nuestra boda!</h2>
          </div>
        </section>
        {/* SECTION 1 */}
        <section id="localizacion" className="flex flex-col pb-24 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(1)} className="pb-8">
            <Title icon={MapPin} text="Cuándo y dónde" />
            <hr />
          </div>
          {/* TEXT + MAP */}
          <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-12">
            {/* TEXT */}
            <div className="w-full lg:w-1/2">
              {/* TEXT */}
              <div data-aos="fade-up" data-aos-delay={calculateDelay(2)} className="pb-8">
                <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">La ceremonia se celebrará el <strong>12 de julio de 2025</strong> a las 13:00h en la <strong>Parroquia de Nuestra Señora de La Braña</strong>, (<strong>El Franco, Asturias</strong>). Después lo celebraremos en <strong>Ferpel Gastronómico</strong>, (<strong>Ortiguera, Asturias</strong>).</p>
                <br/>
                <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">La <strong>Virgen de La Braña</strong> tiene mucho significado para nosotros. Los abuelos de Esther le han transmitido una devoción que le ha acompañado desde siempre. Desde que se juntaron nuestros caminos y comaprtimos nuestras ilusiones y proyectos, la Virgen de La Braña ha estado presente.</p>
                <br/>
                <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Ahora, con motivo de nuestra boda, no hemos podido escoger otro sitio más especial. Estamos seguros de que este rinconcito de Asturias también os cautivará y por eso queremos compartirlo con todos vosotros.</p>
              </div>
              {/* BUTTONS */}
              <div className="flex flex-col gap-6 pb-8 sm:flex-row">
                <div data-aos="fade-up" data-aos-delay={calculateDelay(3)}>
                  <Button text="Ver iglesia" link="https://maps.app.goo.gl/Spe4vqqGHisnVEEAA"/>
                </div>
                <div data-aos="fade-up" data-aos-delay={calculateDelay(4)}>
                  <Button text="Ver finca" link="https://maps.app.goo.gl/bXBaY4NNC6rTWXvFA" />
                </div>
              </div>
            </div>
            {/* MAP */}
            <div data-aos="fade-up" data-aos-delay={calculateDelay(5)} className="w-full lg:w-1/2 relative rounded-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.2794262438165!2d-6.861466487302301!3d43.47563867099053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3165e880fc28cb%3A0xd675a5006de9c171!2sParroquia%20de%20Nuestra%20Se%C3%B1ora%20de%20La%20Bra%C3%B1a!5e0!3m2!1ses!2ses!4v1733343729611!5m2!1ses!2ses"
              className="h-[355px] lg:h-[575px] xl:h-[470px] w-full border-none rounded-lg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </section>
        {/* SECTION 2 */}
        <section id="transporte" className="flex flex-col pb-24 md:pb-50 overflow-x-hidden">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(1)} className="pb-8">
            <Title icon={BusFront} text="Transporte" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(2)} className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Para vuestra comodidad, hemos organizado flota de autobuses para que podáis despreocuparos de conducir. El itinerario es el siguiente:</p>
            <ul className="list-disc mt-6 pl-10">
              <li className="font-inter font-normal text-lg sm:text-xl"><strong>Mañana:</strong> Salida desde <a className="text-gold underline" target="_blank" href="https://maps.app.goo.gl/b9pheLVkQ4n1vYdZ8">Estación de Autobuses de Navia</a>, haciendo parada en <a target="_blank" href="https://maps.app.goo.gl/BC8Qnr1p1sgPTGnV7" className="text-gold underline">La Caridad</a> a las 12:20h, hasta la <strong>Parroquia de Nuestra Señora de La Braña</strong>.</li>
              <li className="font-inter font-normal text-lg sm:text-xl">Trayecto desde la iglesia hasta la finca.</li>
              <li className="font-inter font-normal text-lg sm:text-xl"><strong>Noche:</strong> Retorno a la 01:00h desde <strong>Ferpel Gastronómico</strong>, con parada en la <a className="text-gold underline" target="_blank" href="https://maps.app.goo.gl/b9pheLVkQ4n1vYdZ8">Estación de autobuses de Navia</a>, y finalizando en <a className="text-gold underline" href="https://maps.app.goo.gl/BC8Qnr1p1sgPTGnV7" target="_blank" rel="noopener noreferrer">La Caridad</a>.</li>
            </ul>
            <br />
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Por favor, confirmad si utilizaréis este servicio para coordinar los horarios en el <a href="#asistencia" className="text-gold underline">formulario de la última sección</a>.</p>
          </div>
          {/* BUS IMAGE */}
          <section className="w-[600px]" data-aos-delay={calculateDelay(3)}>
            <img width={1200} className="bus-image" src={BusImage} alt="Bus" />
          </section>
        </section>
        {/* SECTION 3 */}
        <section id="alojamiento" className="flex flex-col pb-24 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(1)} className="pb-8">
            <Title icon={House} text="Alojamiento" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(2)} className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Sabemos que muchos venís de muy lejos, por lo que hemos seleccionado algunos alojamientos cercanos que podrían interesaros. Estas son algunas opciones, pero no las únicas (para apartamentos o casas rurales grandes, recomendamos buscar en <strong>Booking, Airbnb </strong> y <strong>Google Maps</strong>). Recordad reservar con antelación para no quedaros sin habitación.</p>
          </div>
          {/* CAROUSEL */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(3)} className="pb-8">
            <Carousel />
          </div>
          {/* BUTTON */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(4)} className="pb-8">
            <Button
              text="Ver más hoteles"
              link="https://www.booking.com/searchresults.es.html?ss=Ortiguera%2C+Asturias%2C+Spain&ssne=El+Franco&ssne_untouched=El+Franco&label=gog235jc-1DCAMoRkIJZWwtZnJhbmNvSApYA2hGiAEBmAEKuAEHyAEM2AED6AEB-AECiAIBqAIDuAKGrfm5BsACAdICJGViYWEyMGNjLWY2NTYtNDAwZS1iNjJlLWQ0ZWU5YjA2Y2QyZdgCBOACAQ&aid=356980&lang=es&sb=1&src_elem=sb&src=searchresults&dest_id=-394784&dest_type=city&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=1&search_selected=true&search_pageview_id=27a3980b64160131&ac_meta=GhAyN2EzOTgwYjY0MTYwMTMxIAAoATICZW46CW9ydGlndWVyYUAASgBQAA%3D%3D&checkin=2025-07-11&checkout=2025-07-13&group_adults=2&no_rooms=1&group_children=0"
            />
          </div>
        </section>
        {/* SECTION 4 */}
        <section id="sitios-de-interes" className="flex flex-col pb-24 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(1)} className="pb-8">
            <Title icon={MessageSquareHeart} text="Sitios de interés" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(2)} className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Estamos seguros de que a todos os encanta Asturias, pero es probable que no conozcáis esta zona más occidental. Por eso nos hace ilusión compartir con vosotros algunos de los lugares más destacados de la zona y que disfrutéis visitándolos tanto como nosotros.</p>
          </div>
          {/* GRID */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(3)} className="grid gap-8 pb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {CardsData.map((card) => {
              const IconComponent = iconMap[card.icon];
              if (!IconComponent) {
                console.warn(`Icono no encontrado para: ${card.icon}`);
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
          <div data-aos="fade-up" data-aos-delay={calculateDelay(4)} className="pb-8">
            <Button
              text="Ver más sitios"
              link="https://www.turismoasturias.es/descubre/costa/villas-marineras/marinera-ortiguera"
            />
          </div>
        </section>
        {/* SECTION 5 */}
        <section id="musica" className="flex flex-col pb-24 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(1)} className="pb-8">
            <Title icon={Music} text="Canciones que no pueden faltar" />
            <hr />
          </div>
          <div data-aos="fade-up" data-aos-delay={calculateDelay(2)} className="flex flex-col-reverse gap-8 md:flex-row-reverse md:gap-12">
            {/* TEXT */}
            <div className="w-full md:-1/2">
              {/* TEXT */}
              <div className="pb-8">
                <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed hidden special:block">Nos encantaría que formarais parte de la banda sonora del día más especial de nuestras vidas. Hemos creado una playlist y nos gustaría que añadierais vuestras canciones favoritas para echar unos buenos bailes. ¡Se admite de todo, pero solo valen temazos!</p>
              </div>
              {/* BUTTON */}
              <Button text="¡Añade un temazo!" link="https://open.spotify.com/playlist/3h5PyVNSerLzbi3z6YUeMW?si=UeM0rJlARdyEye3l0LvCyA" />
            </div>
            {/* PLAYLIST */}
            <div className="w-full">
              <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/3h5PyVNSerLzbi3z6YUeMW?utm_source=generator&theme=0" className="h-[415px] md:h-[355px] lg:h-[355px] w-full" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </section>
        {/* SECTION 6 */}
        <section id="regalo" className="flex flex-col pb-24 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(1)} className="pb-8">
            <Title icon={Gift} text="Oda a la generosidad" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(2)} className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">No queremos tu dinero. Nos importa tu presencia. Pero la boda no se paga sola, ¿quieres descargar tu conciencia? Tenemos una cuenta: ¡la hemos abierto conjunta! Si quieres colaborar, mira abajo y apunta 🥰</p>
          </div>
          {/* ACCORDION */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(3)}>
            <Accordion question="Cuenta bancaria">
              <hr className="pb-3" />
              <p className="pt-2 text-lg sm:text-xl font-inter font-normal"><strong>Titular:</strong> Javier de la Vega | Esther Aragay</p>
              <div className="flex flex-row gap-4 pt-2 items-end md:items-center">
                <p className="text-lg sm:text-xl font-inter font-normal"><strong>IBAN:</strong> <span id="iban-text">ES18 0239 0806 7737 1665 6826</span></p>
                <Files size="24px" className="min-w-[20px] mb-[8px]"
                  onClick={() => {
                    const ibanElement = document.getElementById("iban-text");
                    const ibanText = ibanElement?.textContent ?? "";
                    navigator.clipboard.writeText(ibanText).then(() => {
                        toast.success("¡IBAN copiado!");
                      })
                      .catch((err) => {
                        console.error("Error al copiar el IBAN: ", err);
                      });
                   }}
                />
              </div>
              <p className="pt-2 text-lg sm:text-xl font-inter font-normal"><strong>Banco:</strong> EVO Banco</p>
            </Accordion>
          </div>
        </section>
        {/* SECTION 7 */}
        <section id="asistencia" className="flex flex-col pb-40 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(1)} className="pb-8">
            <Title icon={Users} text="Asistencia" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(2)} className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Para organizar todo de la mejor manera posible, os pedimos que rellenéis el formulario de confirmación de asistencia con todos los datos necesarios. Esto nos va a ayudar a asegurar que cada detalle esté a vuestro gusto.</p>
          </div>
          {/* BUTTON */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(3)} className="pb-8">
            <Button text="Ir a formulario" link="#" />
          </div>
        </section>
        {/* MODAL */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
          title="¿Te unes al reto runner?"
          description="Por supuesto, no podía faltar un poco de running antes del enlace. Acompáñanos en este reto y ¡corre por La Braña!"
          image="/images/reto-runner.jpg"
          closure="Iremos compartiendo entrenamientos y más detalles sobre la carrera más adelante."
        />
        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}

export default App;
