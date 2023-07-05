

import { quotes } from "@/utils/skillData";


export function QuotesSection(){
    return (
      <div className="my-16 ">
       <div className="slideshow mt-16 overflow-hidden" dir='ltr'>
          <div className="slide-wrapper flex items-center cursor-pointer w-2/3">
            { [...quotes, ...quotes, ...quotes]?.map((item, i) => (
                  <img
                    key={i}
                    // className={` max-w-70 md:max-w-80 mix-blend-multiply mx-auto`}
                    className={`slide`}
                    src={item}
                    alt=""
                  />
              ))}
          </div>
        </div>
      </div>
    )
  }
  