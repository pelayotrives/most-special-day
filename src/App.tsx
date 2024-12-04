// LIBRARIES
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast, { Toaster } from 'react-hot-toast';
import { LucideIcon, MapPin, BusFront, House, MessageSquareHeart, Music, Gift, TreePine, Waves, Footprints, Users, Files } from 'lucide-react';

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

  const iconMap: { [key: string]: LucideIcon } = { TreePine: TreePine, Waves: Waves, House: House, Footprints: Footprints};

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
          <h2 data-aos="fade-up" data-aos-delay={calculateDelay(1)} className="text-gold text-center font-medium font-cormorant text-5xl md:text-7xl">¡No queda nada!</h2>
          <div data-aos="fade-up" data-aos-delay={calculateDelay(2)}>
            <Timer />
          </div>
        </section>
        {/* SECTION 1 */}
        <section id="localizacion" className="flex flex-col pb-24 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(1)} className="pb-8">
            <Title icon={MapPin} text="Localización" />
            <hr />
          </div>
          {/* TEXT + MAP */}
          <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-12">
            {/* TEXT */}
            <div className="w-full lg:w-1/2">
              {/* TEXT */}
              <div data-aos="fade-up" data-aos-delay={calculateDelay(2)} className="pb-8">
                <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">¡Hola a todos! Nos hace muchísima ilusión compartir con vosotros los detalles de nuestra boda. En un día tan especial para nosotros, queremos que compartáis nuestra felicidad de la mejor manera posible: en una fiesta que no olvidaremos nunca.</p>
                <br />
                <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">La ceremonia se celebrará el <strong>12 de julio de 2025</strong> en la <strong>Iglesia de La Caridad</strong>, en <strong>El Franco, Asturias</strong>. Después lo pasaremos increíble en <strong>Ferpel Gastronómico</strong>, en Coaña. Para quienes vengáis de fuera, os recomendamos planificar con antelación vuestro viaje y alojamiento.</p>
              </div>
              {/* BUTTONS */}
              <div className="flex flex-col gap-6 pb-8 sm:flex-row">
                <div data-aos="fade-up" data-aos-delay={calculateDelay(3)}>
                  <Button text="Ver iglesia" link="https://www.google.es/maps/place/La+Caridad,+El+Franco,+Asturias/@43.554059,-6.8389653,15z/data=!3m1!4b1!4m6!3m5!1s0xd316186c5329db7:0x77ca66d1f4ae4bc!8m2!3d43.5512766!4d-6.8291853!16s%2Fm%2F05q8zf4?hl=es&entry=ttu&g_ep=EgoyMDI0MTExOC4wIKXMDSoASAFQAw%3D%3D"/>
                </div>
                <div data-aos="fade-up" data-aos-delay={calculateDelay(4)}>
                  <Button text="Ver finca" link="http://ferpelgastronomico.com/" />
                </div>
              </div>
            </div>
            {/* MAP */}
            <div data-aos="fade-up" data-aos-delay={calculateDelay(5)} className="w-full lg:w-1/2 relative rounded-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11566.077636439637!2d-6.838965321191526!3d43.55405898770959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd316186c5329db7%3A0x77ca66d1f4ae4bc!2sLa%20Caridad%2C%20El%20Franco%2C%20Asturias!5e0!3m2!1ses!2ses!4v1732137141600!5m2!1ses!2ses"
              className="h-[355px] lg:h-[575px] xl:h-[415px] w-full border-none rounded-lg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Para vuestra comodidad, hemos organizado flota de autobuses para que podáis despreocuparos de conducir. Los turnos son los siguientes:</p>
            <ul className="list-disc mt-6 pl-10">
              <li className="font-inter font-normal text-lg sm:text-xl"><strong>Mañana:</strong> Salida desde [punto de encuentro] hacia [punto de encuentro].</li>
              <li className="font-inter font-normal text-lg sm:text-xl"><strong>Noche:</strong> Retorno desde [punto de encuentro] a [punto de encuentro].</li>
            </ul>
            <br />
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Por favor, confirmad vuestra asistencia y si utilizaréis este servicio para coordinar los horarios en el <a href="#asistencia" className="text-gold underline">formulario de la última sección</a>.</p>
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
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Sabemos que muchos venís de muy lejos (gracias por adelantado ♥️), por lo que hemos seleccionado algunos alojamientos cercanos que podrían interesaros. Estas son nuestras opciones favoritas, pero no las únicas. ¡Las hay de todo tipo! Recordad reservar con antelación para no quedaros sin habitación.</p>
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
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Si Asturias no es uno de los mejores sitios del mundo, entonces no sabemos cuál puede serlo. Si os sobra algo de tiempo entre celebraciones, os hemos preparado algunos de los lugares más especiales que conocemos por la zona. ¿Qué hay mejor que disfrutar de la naturaleza y la cultura asturiana después de una auténtica fiesta?</p>
          </div>
          {/* GRID */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(3)} className="grid gap-8 pb-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
            <Title icon={Music} text="Música" />
            <hr />
          </div>
          <div data-aos="fade-up" data-aos-delay={calculateDelay(2)} className="flex flex-col-reverse gap-8 md:flex-row-reverse md:gap-12">
            {/* TEXT */}
            <div className="w-full md:-1/2">
              {/* TEXT */}
              <div className="pb-8">
                <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Nos encantaría que formarais parte de la banda sonora del día más especial de nuestras vidas. Hemos creado una playlist y nos gustaría que añadierais vuestras canciones favoritas para echar unos buenos bailes. ¡Se admite de todo, pero solo valen temazos!</p>
              </div>
              {/* BUTTON */}
              <Button text="Añadir a la lista" link="#" />
            </div>
            {/* PLAYLIST */}
            <div className="w-full">
              <iframe style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/playlist/37i9dQZEVXbNG2KDcFcKOF?utm_source=generator&theme=0" className="h-[415px] md:h-[355px] lg:h-[355px] w-full" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </section>
        {/* SECTION 6 */}
        <section id="regalo" className="flex flex-col pb-24 md:pb-50">
          {/* TITLE */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(1)} className="pb-8">
            <Title icon={Gift} text="Regalo" />
            <hr />
          </div>
          {/* TEXT */}
          <div data-aos="fade-up" data-aos-delay={calculateDelay(2)} className="pb-8">
            <p className="font-inter font-normal text-lg sm:text-xl leading-relaxed">Lo más importante para nosotros es contar con vuestra presencia en este día tan significativo. Sin embargo, si deseáis contribuir con un regalo, hemos habilitado una cuenta bancaria para ello. Apreciamos muchísimo cualquier aportación, pero, sobre todo, agradecemos el cariño y apoyo que siempre nos habéis dado 🥰</p>
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
        {/* FOOTER */}
        <Footer />
      </div>
    </main>
  );
}

export default App;
