"use client";

import Image from "next/image";
import { Amiri } from "next/font/google";
import Slider from "react-slick";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const Team = ({ teamData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    loop: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  return (
    <>
      <section className="py-[50px] bg-white flex items-center justify-center">
        <div className="container">
          <div className="flex justify-between px-4">
            <div className="mb-2">
              <h3
                className={`font-semibold text-[#002866] text-4xl max-md:text-3xl text-left items-center ${amiri.className}`}>
                Our Guardians
              </h3>
            </div>
            <div className="flex justify-between text-xl mb-2">
              <div
                className="slick-arrow px-3"
                onClick={() => sliderRef?.current?.slickPrev()}>
                <MdArrowBackIosNew />
              </div>
              <div
                className="slick-arrow px-3"
                onClick={() => sliderRef?.current?.slickNext()}>
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between px-4 py-2">
            <p className="text-sm text-gray-600 font-regular py-1">
            Every Successful story has a team behind it, and we don’t just have a team, we have a team of Guardians. No superheroes, but simple human beings who are well qualified and vastly experienced in managing, structuring, protecting and consulting when it comes to Property Management.
            </p>
          </div>

          <div className="p-2">
            <Slider
              ref={sliderRef}
              {...settings}
              className="flex justify-between gap-4">
              {teamData.map((item) => (
                <div className="flex flex-row relative overflow-hidden">
                  <div className="p-4">
                    <div className="rounded-full border-2 border-white hover:border-[#dea359] hover:scale-[1.05] hover:duration-1000">
                      <Image
                        className="rounded-full"
                        src={item.image}
                        width={400}
                        height={400}
                        alt={item.name}
                      />
                    </div>

                    <div className="bg-white rounded-lg text-center py-3">
                      <Link href={`${item.linkedin}`}>
                        <h3 className="gap-2 py-2 flex justify-center text-xl text-blue-700 font-medium">
                          <FaLinkedin />
                        </h3>
                      </Link>
                      <h4 className="text-sm lg:text-lg font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-sm font-light">{item.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
