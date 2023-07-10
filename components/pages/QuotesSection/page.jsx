
'use client'

import { quotes } from "@/utils/skillData";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function QuotesSection(){


  const settings1 = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0,

    responsive: [
        {
            breakpoint: 1240,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
            }
        },
    ]
}

  return (
    <div className="m-16">
      <Slider {...settings1}>
        {[...quotes, ...quotes, ...quotes]?.map((item, i) => (
          <>
            <div key={i}><img className={` w-4/6 m-auto`} src={item} alt="" /></div>
          </>
        ))}
      </Slider>
    </div>
  )
}
  