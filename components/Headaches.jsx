import { Amiri } from "next/font/google";
import Image from "next/image";

const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const Headaches = ({ homeData }) => {
  return (
    <>
      {homeData.map((item) => (
        <section className="bg-[#002866] py-[50px] items-center">
          <div className="container">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-4 items-center mb-4">
              <div className="w-full md:w-1/2 lg:w-1/2 mb-4">
                <h3
                  className={`text-3xl text-[#fff] font-semibold ${amiri.className}`}>
                  Ditch the Landlord Headaches, <br /> Your Peace of Mind Starts
                  with us
                </h3>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 ">
                <p className="text-sm text-white font-regular">
                  Aliquyam erat, sed diam voluptua.nonumy eirmod tempor invidunt
                  ut labore et dolore magna Lorem ipsum dolor sit amet,
                  consetetur sadipscing elitr, sed diam
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-between py-6">
              {item.headacheIcon.map((data, index) => (
                <div
                  key={index}
                  className="flex-col w-1/2 md:w-[100px] lg:w-[100px] xl:w-[100px] gap-2 flex items-center justify-center p-2">
                  <Image src={data.icon} width={50} height={50} />
                  <p className="text-xs text-gray-100 font-light py-1 text-center">
                    {data.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default Headaches;
