

import { Button } from "@/components/Button/page";
import { ButtonGradiant } from "@/components/ButtonGradiant/page";
import { images } from "@/utils/skillData";


export function SkillSection(){
    return (
      <div className="">
        
       <h1 className="font-teko text-4xl font-semibold text-center">ACADEMICS, THE ARTS, DIGITAL,LIFE, MUSIC, PARENTING, SPORTS & WELLNESS SKILLS.</h1>
       {/* {
        images.map(item=>(
          <div>
            <img src={item} className="w-60"/>
          </div>
        ))
       } */}
       <div className="buyer-slider-home mt-16" dir='ltr'>
          <div className="buyer-slide-track-home">
            { [...images, ...images, ...images]?.map((item, i) => (
              <div key={item?.slug || i} className="buyer-slide-home" >
                  <section className="flex items-center cursor-pointer flex-wrap gap-4 md:gap-6">
                    <div className="relative mx-auto w-full max-w-140 md:max-w-180 grid place-content-center rounded-sm transition-all ">
                      <img
                        className={` max-w-70 md:max-w-80 mix-blend-multiply mx-auto`}
                        src={item}
                        alt=""
                      />
                    </div>
                  </section>
              </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
  