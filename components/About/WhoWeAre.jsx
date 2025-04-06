import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const WhoWeAre = () => {
  return (
    <section className="bg-white flex justify-center py-4 lg:py-12">
      <div className="container">
        <div className="py-4">
          {/* <h4 className="text-sm text-left py-1 text-[#dfa459] tracking-wide uppercase font-regular ">
            Why choose us
          </h4> */}
          <h3
            className={`font-semibold text-[#002866] text-4xl max-md:text-3xl text-left items-center ${amiri.className}`}>
            A Legacy Of Generations
          </h3>
        </div>
        <div className="gap-4 bg-white rounded-md text-left">
          <p className="text-sm md:text-md lg:text-lg text-gray-600 font-regular py-2 ">
            Since the end of the 19th Century, Legacy Guardians are successfully
            guarding the properties of their customers with honour, pride,
            commitment and utmost professionalism.
          </p>
          <p className="text-sm md:text-md lg:text-lg text-gray-600 font-regular py-2">
            Began by solving the property issues of their beloved ones and
            helping them free their properties legally from unauthorised
            possessions in 1999, today, Legacy Guardians stands tall with
            thousands of successful case studies and happy customers not just in
            India but all over the globe. We have seen the best and the worst
            scenarios, we know what might go wrong and what solution to provide.
          </p>
          <p className="text-sm md:text-md lg:text-lg text-gray-600 font-regular py-2">
            For us every property is just like a child, a child who needs to be
            protected, nurtured, cherished and maintained. Our forefathers have
            always taught us that every property saved will bring us goodluck
            and help us achieve success with satisfaction
          </p>

          <p className="text-sm md:text-md lg:text-lg text-gray-600 font-regular py-2">
            Legacy Guardians began its journey under the name of Document’s
            Masters in 1999, and the journey has never stopped, neither will it
            stop, but will keep bringing smiles on people’s faces. That’s our
            promise!{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
