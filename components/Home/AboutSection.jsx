"use client";

import CountUp from "react-countup";
import Image from "next/image";
import PortableText from "react-portable-text";
import Link from "next/link";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const AboutSection = ({ homeData }) => {
  return (
    <>
      {homeData.map((item) => (
        <section className="py-[80px] bg-white flex items-center justify-center">
          <div className="container">
            <div className="flex flex-col md:flex-row lg:flex-row">
              <div className="p-2 w-full md:w-2/3 lg:w-7/12 mb-4">
                <div className=" mb-4">
                  {/* <h4 className="text-sm py-1 lg:text-sm text-[#dfa459] tracking-wide uppercase font-regular font-poppins font-sans">
                    About us
                  </h4> */}
                  <h1
                    className={`text-3xl font-amiri lg:text-4xl tracking-wide text-[#002866] font-semibold ${amiri.className}`}>
                    {item.aboutHeader}
                  </h1>
                </div>

                <div className=" pb-4 border-b-2 border-gray-400 border-dashed">
                  <p className="text-sm lg:text-md text-gray-600 leading-6 py-1">
                    {item.aboutDesc}
                  </p>
                </div>
                <div className="flex md:flex-row lg:flex-row py-8 gap-4">
                  {item.stats.map((data) => (
                    <div className="w-1/2 md:w-1/4 lg:w-1/4">
                      <div className="text-lg md:text-2xl lg:text-3xl font-medium text-gray-600">
                        <CountUp start={0} end={parseInt(data.statNumber)} />
                        <span>+</span>
                      </div>
                      <div>
                        <p className="py-1 text-xs text-gray-500 font-regular">
                          {data.statCaption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-2 w-full md:w-1/3 flex justify-center lg:w-5/12 order-2 sm:order-1 ">
                <Image
                  className="rounded-lg"
                  src={item.aboutImage}
                  width={400}
                  height={400}
                  alt="About Image"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default AboutSection;
