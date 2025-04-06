import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const Services = ({ homeData }) => {
  const check = (
    <span className="text-green-800">
      <FaCheck />
    </span>
  );
  return (
    <section className="py-[50px] bg-gray-50 opacity-0.05 flex items-center justify-center">
      {homeData.map((item) => (
        <div className="container">
          <div className="mx-auto text-center items-center relative py-10">
            <h2
              className={`text-3xl lg:text-4xl font-semibold tracking-wide ${amiri.className}`}>
              <span className="text-[#002866]">Your Property,</span>{" "}
              <br className="block md:hidden lg:hidden xl:hidden" />
              <span className="text-[#dfa459]">Our Commitment</span>
            </h2>
            <p className="py-2 font-regular font-poppins font-sans mx-auto w-full md:w-2/3 lg:w-2/3 text-sm text-gray-500">
            Commitment to serve you with utmost sincerity and professionalism runs through our veins
            </p>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row gap-6 p-2">
            {item.services.map((data) => (
              <>
                <div className="rounded-xl w-full mx-auto lg:w-1/3 md:w-1/3 bg-white hover:border-[#002866] drop-shadow-[0_0_30px_rgba(0,10,105,.03)] hover:duration-1000 p-2">
                  <div className=" flex justify-center">
                    <Link href={`${data.path}`}>
                      <div className="py-4 flex justify-center pl-4">
                        <div className="image-container pl-6">
                          <Image src={data.icon} width={80} height={60} />
                        </div>
                      </div>

                      <div className="py-4 flex justify-center">
                        <h3 className="text-xl text-gray-800 font-semibold">
                          {data.serviceTitle}
                        </h3>
                      </div>

                      {data.serviceDescription.map((item) => (
                        <div className="py-1 border-b border-dashed  ">
                          <li className=" flex items-center gap-2 rounded-md  list-none text-md text-gray-600 ">
                            {check}
                            {item.text}
                          </li>
                        </div>
                      ))}
                    </Link>
                  </div>
                  <Link href={`${data.path}`}>
                    <div className=" flex justify-center mt-6  border rounded-lg py-2 px-4 hover:text-white hover:bg-[#002866] hover:duration-500">
                      <span className="flex gap-2 items-center">
                        Explore <ChevronRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
