const PageBanner = ({heading}) => {
    return (
      <>
        <section className="py-6 bg-[#002866]">
          <div className="">
            <div className="mx-auto text-center items-center relative mt-16 py-2">
              <h2 className="text-[32px] lg:text-4xl py-2 font-semibold text-white">
                <span className="z-8 mt-2 relative inline-block">{heading}</span>
              </h2>
            </div>
          </div>
        </section>
        <hr />
      </>
    );
  };
  
  export default PageBanner;
  