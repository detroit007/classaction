

import { quotes } from "@/utils/skillData";


export function QuotesSection(){
    return (
      <div className="my-16 ">
       <div className="carousel mt-16" dir='ltr'>
          <div className="carousel-inner">
            { [...quotes, ...quotes, ...quotes]?.map((item, i) => (
                <div className="carousel-item">
                  <img
                    key={i}
                    // className={` max-w-70 md:max-w-80 mix-blend-multiply mx-auto`}
                    className={`w-full`}
                    src={item}
                    alt=""
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
  