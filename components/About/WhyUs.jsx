import Image from "next/image";
import { Amiri } from "next/font/google";
import { customization, expertize, strongTeam, trusted } from "@/lib/constants";

const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const WhyUs = () => {
  return (
    <section className="bg-white flex justify-center py-[50px] lg:py-[50px]">
      <div className="container">
        <div className="py-4">
          <h3
            className={`font-semibold text-[#002866] text-4xl max-md:text-3xl text-left items-center ${amiri.className}`}>
            Why choose us?
          </h3>
        </div>
        <div className="flex flex-wrap">
          <div className=" w-1/2 md:w-1/4 lg:w-1/4 p-2">
            <div className=" p-4 bg-white hover:bg-gray-50 border-[3px] border-blue-50 hover:duration-800 rounded-xl flex flex-col justify-center  ">
              <div className="border-b  border-[#002866] hover:animate-pulse p-4 w-full flex justify-center">
                {expertize}
              </div>

              <h5 className="text-center font-medium text-md lg:text-lg text-gray-800 mt-4">
                Specialized <br className="block lg:hidden md:hidden" />{" "}
                Expertise
              </h5>
              {/* <p className="text-center font-light text-xs text-gray-600 py-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p> */}
            </div>
          </div>
          <div className=" w-1/2 md:w-1/4 lg:w-1/4 p-2">
            <div className=" p-4 bg-white hover:bg-gray-50 border-[3px] border-blue-50 hover:duration-800 rounded-xl flex flex-col justify-center ">
              <div className="border-b  border-[#002866] p-4 w-full hover:animate-pulse flex justify-center">
                {strongTeam}
              </div>

              <h5 className="text-center font-medium text-md lg:text-lg text-gray-800 mt-4">
                Strong Legal Team
              </h5>
              {/* <p className="text-center font-light text-xs text-gray-600 py-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p> */}
            </div>
          </div>
          <div className=" w-1/2 md:w-1/4 lg:w-1/4 p-2">
            <div className=" p-4 bg-white hover:bg-gray-50 border-[3px] border-blue-50 hover:duration-800 rounded-xl flex flex-col justify-center  ">
              <div className="border-b  border-[#002866] p-4 w-full hover:animate-pulse flex justify-center">
                {customization}
              </div>

              <h5 className="text-center font-medium text-md lg:text-lg text-gray-800 mt-4">
                Customized Solutions
              </h5>
              {/* <p className="text-center font-light text-xs text-gray-600 py-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p> */}
            </div>
          </div>
          <div className=" w-1/2 md:w-1/4 lg:w-1/4 p-2">
            <div className=" p-4 bg-white hover:bg-gray-50 border-[3px] border-blue-50 hover:duration-800 rounded-xl flex flex-col justify-center  ">
              <div className="border-b  border-[#002866] p-4 w-full hover:animate-pulse flex justify-center">
                {trusted}
              </div>

              <h5 className="text-center font-medium text-md lg:text-lg text-gray-800 mt-4">
                Strong Trust Base
              </h5>
              {/* <p className="text-center font-light text-xs text-gray-600 py-1">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
