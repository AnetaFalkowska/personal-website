import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from "react-slick";
import { data } from "../assets/data.ts";
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
    speed: 500,
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
    <div className="w-[75%] mx-auto p-12">
     
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white h-[450px] text-black rounded-2xl p-4">
              <p className="text-xl font-semibold text-center my-5">{d.title}</p>
              <p className="">{d.description}</p>
            </div>
          ))}
        </Slider>
 
    </div>
  );
}
