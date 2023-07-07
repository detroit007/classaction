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
        <div className="mt-8 md:mt-0 w-full md:w-2/5 p-16">
            <h1 className="text-4xl font-bold font-teko mb-4">An all-round learning experience!</h1>
            <p className="font-comfortaa text-lg">
                Ignite your child{`&#39;`}s imagination with an engaging, fun online course, featuring captivating, gamified learning, accessible anytime, anywhere.
                <br/>
                <br/>
                Personalised feedback, course recommendations and improvement plans ensure continuous progress.
            </p>
            <div className="flex mt-8">
                {/* <div className="bg-gradient-to-r from-primary to-secondary rounded-md w-55">
                    <button className={` py-2 px-8 my-[2px] mx-[2px] group relative overflow-hidden w-55 text-lg shadow border-primary-300 rounded-md bg-white`}>
                        <span className="relative text-black">Learn More</span>
                    </button>
                </div> */}
                <ButtonGradiant
                    title="Coming Soon"
                    className={"py-2 px-8 rounded-md text-white font-comfortaa mr-4 "}
                />
            </div>
        </div>
        
      </div>
    )
  }
  