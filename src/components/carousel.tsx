"use client";

import Carousel from "react-multi-carousel";
import Button from "./button";
import "react-multi-carousel/lib/styles.css";

export default function CardCarousel() {
  return (
    <Carousel
    additionalTransfrom={0}
    arrows={false}
    autoPlay
    autoPlaySpeed={4500}
    centerMode={false}
    className="pb-8"
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
    responsive={{
      desktop: {
        breakpoint: { max: 5000, min: 1024 },
        items: 3,
        partialVisibilityGutter: 40
      },
      tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        partialVisibilityGutter: 30
      },
      mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        partialVisibilityGutter: 30
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
    >
      {/* SLIDE */}
      <div className="bg-transparent shadow-sm border border-gray-200 rounded-lg w-11/12">
        <div className="p-6 flex flex-col gap-4">
          <img className="w-full rounded-lg" src="https://placehold.co/300x175" alt="Carousel Image"/>
          <div>
            <h3 className="font-inter text-2xl font-medium pb-1">Lorem Ipsum 1</h3>
            <h4 className="font-inter text-md font-light">Lorem Subheader</h4>
          </div>
          <p className="font-inter text-md font-normal pb-1">Nulla excepteur veniam in Lorem voluptate deserunt. Lorem Ipsum Dolor Sit Amet.</p>
          <Button text="Ver más" link="#" />
        </div>
      </div>
      {/* SLIDE */}
      <div className="bg-transparent shadow-sm border border-gray-200 rounded-lg w-11/12">
        <div className="p-6 flex flex-col gap-4">
          <img className="w-full rounded-lg" src="https://placehold.co/300x175" alt="Carousel Image"/>
          <div>
            <h3 className="font-inter text-2xl font-medium pb-1">Lorem Ipsum 2</h3>
            <h4 className="font-inter text-md font-light">Lorem Subheader</h4>
          </div>
          <p className="font-inter text-md font-normal pb-1">Nulla excepteur veniam in Lorem voluptate deserunt. Lorem Ipsum Dolor Sit Amet.</p>
          <Button text="Ver más" link="#" />
        </div>
      </div>
      {/* SLIDE */}
      <div className="bg-transparent shadow-sm border border-gray-200 rounded-lg w-11/12">
        <div className="p-6 flex flex-col gap-4">
          <img className="w-full rounded-lg" src="https://placehold.co/300x175" alt="Carousel Image"/>
          <div>
            <h3 className="font-inter text-2xl font-medium pb-1">Lorem Ipsum 3</h3>
            <h4 className="font-inter text-md font-light">Lorem Subheader</h4>
          </div>
          <p className="font-inter text-md font-normal pb-1">Nulla excepteur veniam in Lorem voluptate deserunt. Lorem Ipsum Dolor Sit Amet.</p>
          <Button text="Ver más" link="#" />
        </div>
      </div>
      {/* SLIDE */}
      <div className="bg-transparent shadow-sm border border-gray-200 rounded-lg w-11/12">
        <div className="p-6 flex flex-col gap-4">
          <img className="w-full rounded-lg" src="https://placehold.co/300x175" alt="Carousel Image"/>
          <div>
            <h3 className="font-inter text-2xl font-medium pb-1">Lorem Ipsum 4</h3>
            <h4 className="font-inter text-md font-light">Lorem Subheader</h4>
          </div>
          <p className="font-inter text-md font-normal pb-1">Nulla excepteur veniam in Lorem voluptate deserunt. Lorem Ipsum Dolor Sit Amet.</p>
          <Button text="Ver más" link="#" />
        </div>
      </div>
    </Carousel>
  );
}
