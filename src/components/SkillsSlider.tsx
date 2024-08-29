import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from "react-slick";
import { skillData } from "../assets/data.ts";
import {ChevronRight, ChevronLeft} from "lucide-react"


export default function SkillsSlider() {

 function SamplePrevArrow(props:CustomArrowProps) {
    const { className, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`}>
        <ChevronLeft className="w-full text-secondary-button-text"/>
      </div>
    )
    }

function SampleNextArrow(props:CustomArrowProps) {
    const { className, onClick } = props;
    return(
      <div onClick={onClick} className={`arrow ${className}`}>
        <ChevronRight className="w-full text-secondary-button-text"/>
      </div>
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };

  return (
    <div className="w-full bg-[#f9f7f7] px-[20%] pb-14 pt-3 text-center">
     <header className="flex flex-col text-secondary-text my-9">
          <p className="text-2xl font-thin italic">Proffesional Skills</p>
          <p className="uppercase text-sm font-thin tracking-widest">
            What I bring to the table
          </p>
          </header>
     <Slider {...settings}>
          {skillData.map((d) => (
            <div className="bg-white h-[350px] text-black rounded-2xl p-4 mb-5">
              <p className="text-xl font-semibold text-center my-5">{d.title}</p>
              <p className="">{d.description}</p>
            </div>
          ))}
        </Slider>
 
    </div>
  );
}
