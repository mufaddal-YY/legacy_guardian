"use client";
import Slider from "react-slick";
import Image from "next/image";

const ProblemSlider = ({ homeData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    loop: true,
    autoplaySpeed: 2000,
    onHoverPause: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
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
          slidesToShow: 3,
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

  return (
    <>
      {homeData.map((data, index) => (
        <div className="items-center">
          <Slider {...settings}>
            {data.problemSlider.map((item, index) => (
              <div className="flex" key={index}>
                <div className="rounded-xl">
                  <div className="text-center items-center">
                    <div>
                      <h4 className="text-md lg:text-sm font-regular text-gray-800">
                        {item?.caption}
                      </h4>
                    </div>
                    <div>
                      <Image
                        width={300}
                        height={180}
                        src={item?.sliderImage}
                        alt=""
                        className="mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </>
  );
};

export default ProblemSlider;
