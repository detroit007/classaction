import { Button } from "@/components/Button/page";
import { ButtonGradiant } from "@/components/ButtonGradiant/page";


export function HeroSection(){
    return (
      <div className="block md:flex">
        <div className="mt-24 w-full md:w-2/5 ">
            <h2 className="font-teko text-4xl bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text animate-gradient">
                CLASS ACTION EDUCATION
            </h2>
            <h1 className="font-teko text-6xl font-semibold my-4">
                INSPIRING YOUNG MINDS BEYOND THE CLASSROOM
            </h1>
            <p className="font-comfortaa text-lg">
                Delivering an all-round education through high-quality, interactive online courses that equip learners aged 4-18+ with the necessary knowledge and skills to succeed in the 21st century.
                <br/>
                <br/>
                Partnering with top-tier institutions and subject experts, our advanced AI platform delivers inspiring, innovative content worldwide.
            </p>
            <div className="flex mt-8">
                <ButtonGradiant
                    title="Coming Soon"
                    className={"py-2 px-8 rounded-md text-white font-comfortaa mr-4 "}
                />
                {/* <div className="bg-gradient-to-r from-primary to-secondary rounded-md w-55">
                    <button className={` py-2 px-8 my-[2px] mx-[2px] group relative overflow-hidden w-55 text-lg shadow border-primary-300 rounded-md bg-white`}>
                        <span className="relative text-black">Learn More</span>
                    </button>
                </div> */}
            </div>
        </div>
        <div className="w-full md:w-3/5 flex md:mt-0 mt-8">
            <img alt="logo"
                src="/assets/images/hero.png" decoding="async"
                data-nimg="1" loading="lazy"
                className="w-full items-center object-contain"
            />
        </div>
      </div>
    )
  }
  