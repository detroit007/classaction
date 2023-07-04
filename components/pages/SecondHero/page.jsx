import { Button } from "@/components/Button/page";
import { ButtonGradiant } from "@/components/ButtonGradiant/page";


export function SecondHero(){
    return (
      <div className="md:flex mt-16 block mx-4">
        <div className="w-full md:w-3/5 flex">
            <img alt="logo"
                src="/assets/images/iphone.png" decoding="async"
                data-nimg="1" loading="lazy"
                className="w-full items-center object-contain"
            />
        </div>
        <div className="mt-8 md:mt-16 w-full md:w-2/5 p-16">
            <p className="font-comfortaa text-lg">
                Choose from a variety of live and ondemand courses across multiple
                subjects, each delivering an engaging,
                gamified experience.
                <br/>
                <br/>
                With personalised feedback, course
                recommendations and improvement
                plans to ensure continuous progress
            </p>
            <div className="flex mt-8">
                <div className="bg-gradient-to-r from-primary to-secondary rounded-md w-55">
                    <button className={` py-2 px-8 my-[2px] mx-[2px] group relative overflow-hidden w-55 text-lg shadow border-primary-300 rounded-md bg-white`}>
                        <span className="relative text-black">Learn More</span>
                    </button>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
  