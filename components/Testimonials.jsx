"use client";
import { country, properties, team } from "@/lib/constants";
import CountUp from "react-countup";
import { useRef } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const Testimonials = ({ testimonialsData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    loop: true,
    autoplay: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  return (
    <section className="flex flex-col md:flex-row lg:flex-row items-stretch bg-white">
      <div className="flex-1 w-full md:w-4/12 lg:w-4/12 bg-[#002866] py-[50px] flex justify-center">
        <div className="flex flex-col">
          <div className="flex gap-4 py-6">
            <span>{properties} </span>
            <div className="flex flex-col">
              <div className="text-3xl font-medium text-white">
                <CountUp start={0} end={parseInt(450)} />
                <span>+</span>
              </div>
              <div>
                <p className="text-white text-xs">Properties Managed</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 py-6">
            <span>{team} </span>
            <div className="flex flex-col">
              <div className="text-3xl font-medium text-white">
                <CountUp start={0} end={parseInt(20)} />
                <span>+</span>
              </div>
              <div>
                <p className="text-white text-xs">Experienced Professionals</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 py-6">
            <span>{country} </span>
            <div className="flex flex-col">
              <div className="text-3xl font-medium text-white">
                <CountUp start={0} end={parseInt(10)} />
                <span>+</span>
              </div>
              <div>
                <p className="text-white text-xs">Countries Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 md:w-8/12 lg:w-8/12 bg-white py-[50px]">
        <div className="flex justify-between p-4">
          <div className="mb-2">
            <h3
              className={`font-semibold text-[#002866] text-4xl max-md:text-3xl text-left items-center ${amiri.className}`}>
              Testimonials
            </h3>
            <p className="text-sm text-gray-600 font-regular py-1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            </p>
          </div>
        
        </div>
        {testimonialsData.map((data) => (
          <div className="p-2">
            <Slider
              ref={sliderRef}
              {...settings}
              className="flex justify-between gap-4">
              {data.reviews.map((item) => (
                <div className="flex p-2 items-center">
                  <div className="p-4 bg-white rounded-xl border-2">
                    <div className="flex justify-between">
                      <div className="py-2 mb-2">
                        <h6 className="text-md font-medium text-gray-800">
                          {item.name}
                        </h6>
                        <p className="text-xs font-regular text-gray-600">
                          {item.designation}
                        </p>
                      </div>
                      <div className="py-2">
                        <span className="flex gap-1 text-[#ffba2d]">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 font-regular pb-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
