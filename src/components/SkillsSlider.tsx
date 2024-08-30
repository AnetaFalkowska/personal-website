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
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1280,
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
    <div className="w-full bg-white px-[20%] pb-14 py-14 mb-12 text-center">
      <header className="flex flex-col text-secondary-text my-9">
        <p className="text-2xl font-thin italic">Proffesional Skills</p>
        <p className="uppercase text-sm font-thin tracking-widest">
          What I bring to the table
        </p>
      </header>
      <Slider {...settings}>
        {skillData.map((d) => (
          <div className="rounded-2xl p-4 mb-5">
            <h3 className="h-18 sm:h-24 md:h-16 text-lg xl:text-xl font-semibold text-center text-gray-800 pb-3 sm:pb-0">
              {d.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              {d.description}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
