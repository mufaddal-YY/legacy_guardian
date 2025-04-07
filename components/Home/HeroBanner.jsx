"use client";
import Image from "next/image";
import ProblemSlider from "./ProblemSlider";
import { Amiri } from "next/font/google";
import ReactPlayer from "react-player";
const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const icon = (
  <svg
    width="150"
    height="37"
    viewBox="0 0 310 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_65_27)">
      <path d="M0 36.99V0H309.53L0 36.99Z" fill="#FFB000" />
    </g>
    <defs>
      <clipPath id="clip0_65_27">
        <rect width="309.53" height="36.99" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const HeroBanner = ({ homeData }) => {
  return (
    <>
      <main className="w-full items-center justify-center">
        <section className="py-[30px] bg-white">
          <div className="container flex flex-col lg:flex-row items-center justify-between">
            {/* Left Text Content */}
            <article className="w-full lg:w-1/2 flex justify-center lg:p-4 lg:order-2 mt-12">
              <div
                className="relative rounded-2xl overflow-hidden w-full mt-4"
                style={{ paddingTop: "56.25%" }}>
                <ReactPlayer
                  url="https://youtu.be/5f-Thbt1qkU"
                  playing
                  muted
                  loop
                  controls={false}
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0"
                />
              </div>
            </article>
            <article className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="mx-auto text-center lg:text-left relative mt-8 lg:mt-14 py-2">
                <h4 className="lg:text-2xl text-lg font-regular tracking-wide text-[#002866]">
                  Multiple Properties, Zero Stress
                </h4>
                <h2
                  className={`text-[32px] lg:text-4xl py-4 font-semibold text-[#002866] relative ${amiri.className}`}>
                  <span className="relative inline-block">
                    {/* Icon behind text, same position on all screens */}
                    <span className="absolute top-6 opacity-75 z-1">
                      {icon}
                    </span>
                    <span className="relative z-2">
                      Experience Hassle-Free Ownership with Legacy Guardians.
                    </span>
                  </span>
                </h2>
              </div>
              <div className="py-1">
                <ProblemSlider homeData={homeData} />
              </div>
            </article>

            {/* Right Video */}
          </div>
        </section>
      </main>
    </>
  );
};

export default HeroBanner;
