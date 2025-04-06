"use client";

import Image from "next/image";
import { Amiri } from "next/font/google";
import { timeVertical, timeline } from "@/lib/constants";

const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const Process = ({ homeData }) => {
  return (
    <>
      {homeData.map((item) => (
        <section className="py-[80px] bg-gray-50 flex items-center justify-center">
          <div className="container">
            <div className="flex flex-col">
              <div className="p-2 w-full md:w-2/3 lg:w-7/12 mb-4">
                <div className=" mb-4 w-full lg:w-3/4">
                  <h1
                    className={`text-3xl lg:text-4xl tracking-wide text-[#002866] font-semibold mb-2 ${amiri.className}`}>
                    Our Way Of Working
                  </h1>
                  <p className="text-sm text-gray-600">
                  Generations of hard work and commitment made us learn and adapt our own process which is effective in all senses. We have created this process keeping in mind all the legalities and the way our law works
                  </p>
                </div>
              </div>
              <div className="flex flex-col rounded-lg border-2 md:flex-row lg:flex-row gap-2 mb-8">
                {item.process.map((data) => (
                  <div className="w-full flex md:w-1/3 lg:w-1/3  items-center gap-4 p-4">
                    <Image
                      className="rounded-lg"
                      src={data.icon}
                      width={50}
                      height={50}
                      alt={data.title}
                    />
                    <div className="flex-col">
                      <h3 className="text-lg font-medium text-gray-700 ">
                        {data.title}
                      </h3>
                      {/* <p className="text-[10px] text-gray-600 font-light">
                        {data.description}
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
              <div className="py-2 lg:py-12 w-full hidden md:flex lg:flex justify-center ">
                {timeline}
              </div>
              <div className="w-full flex md:hidden lg:hidden justify-center ">
                {timeVertical}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Process;
