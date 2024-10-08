import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from "react-slick";
import { skillData } from "../assets/data.ts";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function SkillsSlider() {
  function SamplePrevArrow(props: CustomArrowProps) {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <ChevronLeft className="w-full text-secondary-button-text" />
      </div>
    );
  }

  function SampleNextArrow(props: CustomArrowProps) {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <ChevronRight className="w-full text-secondary-button-text" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full bg-secondary-section px-[15%] lg:px-[20%] sm:max-lg:px-[12%] pb-16 mb-12 text-center">
      <header className="flex flex-col text-secondary py-10 sm:py-16 ">
        <p className="text-2xl sm:text-3xl font-medium">What I bring to the table</p>
        {/* <p className="uppercase text-sm font-thin tracking-widest">
          What I bring to the table
        </p> */}
      </header>
      <div className="max-w-[1100px] mx-auto">
        <Slider {...settings}>
          {skillData.map((d) => (
            <div className="h-full p-0 sm:p-1 mb-10 sm:mb-2">
              {/* <h3 className="h-18 sm:h-24 md:h-16 text-md xl:text-xl font-semibold text-center text-gray-800 pb-3 sm:pb-0">
                {d.title}
              </h3>
              <p className="text-gray-600 mb-1 text-sm md:text-base">
                {d.description}
              </p> */}
              <h3 className="font-semibold text-center text-gray-800 h-16 xl:text-lg p-0 sm:p-1">
                {d.title}
              </h3>
              <p className="text-gray-600">
                {d.description}
              </p>
            </div>
          ))}
        </Slider>        
      </div>
    </div>
  );
}
