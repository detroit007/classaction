
import { advisors, directors, images } from "@/utils/skillData";


export default function About(){
    return (
      <div className="mt-8">
        
       <h1 className="font-teko text-7xl mb-4 font-semibold text-center">BOARD MEMBERS</h1>
        <div className="">
        <div className="w-full h-72 bg-cover text-white" style={{backgroundImage: "url(/assets/images/bg_gradiant.png)"}}>
            <h1 className="font-teko  text-6xl pt-8 font-semibold text-center">BOARD OF DIRECTORS</h1>
            <div className="flex justify-center">
                <p className="font-comfortaa text-center text-xl self-center w-3/5">We combine expertise in technology, global marketing, education and production, supported by a strong board of directors and leadership team.</p>
            </div>
            
        </div>
        <div className=" container mx-auto flex justify-center -mt-48">
                <div className=" grid grid-cols-3 gap-2 ">
                    {directors.map((item, i)=>
                        <img alt="logo" key={i}
                            src={item} decoding="async"
                            data-nimg="1" loading="lazy"
                            className="w-96 items-center object-contain pt-20"
                        />
                    )}
                </div>
            </div>
        </div>
        <div className="relative mb-16">
            <h1 className="font-teko text-6xl pt-8 font-semibold text-center">ADVISORY BOARD</h1>
            <div className="container mx-auto flex justify-center ">
                <div className={`grid grid-cols-3 justify-center`}>
                {/* <div className={`flex justify-center items-center flex-col`}> */}
                    {advisors.map((item, i)=>
                        <div className={`${i === advisors.length - 1 ? 'center' : ''}`} key={i}>
                            <img alt=""
                                src={item} decoding="async"
                                data-nimg="1" loading="lazy"
                                className="w-96 object-contain"
                            />
                        </div>
                    )}
                </div>
            </div>
        
       </div>
       
      </div>
    )
  }
  