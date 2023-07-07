import Link from "next/link";
import { ButtonGradiant } from "../ButtonGradiant/page";

export function Footer(){
    return (
        <footer className='bg-white'>
        <div className="container mx-auto ">
            <div className="block md:flex justify-between ">
                <div className="py-16">
                    <img alt="logo"
                        src="/assets/images/full_logo.png" width="180" height="30" decoding="async"
                        data-nimg="1" loading="lazy" style={{color: "transparent"}}
                        className="mb-8"
                    />
                    <div className="flex mr-8 text-sm md:text-base text-center">
                        <Link className="p-2 lg:px-4 hover:text-primary" href={"/"}>
                            HOME
                        </Link>
                        <Link className="p-2 lg:px-4 hover:text-primary" href={"/#students"} >
                            STUDENTS
                        </Link>
                        <Link className="p-2 lg:px-4 hover:text-primary" href={"#"}>
                            COURSE CREATORS
                        </Link>
                        <Link className="p-2 lg:px-4 hover:text-primary" href={"/About"}>
                            ABOUT US
                        </Link>
                        <Link className="p-2 lg:px-4 hover:text-primary" href={"#"}>
                            CONTACT
                        </Link>
                    </div>
                </div>
                <div className="my-16 relative">
                    <div className="absolute right-0 bottom-2">
                        <p className="font-comfortaa">Get the fresh news for us</p>
                        <div className="flex mt-4 w-96"> 
                            <input type="email" className="border border-[#bfbfbf4f] rounded-md mr-4 text-sm w-full pl-2 p-2 focus:divide-primary" placeholder="email"/>
                            <ButtonGradiant title={"Subscribe"} className={"w-40 rounded-md"}/>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="block md:flex justify-between font-comfortaa text-xs py-8 border-t border-[#bfbfbf4f] border-grey">
            <div className="flex">
                {/* <Link className="lg:px-4 border-r h-4" href={"#"}>
                    Terms & Conditions
                </Link> */}
                <Link className="lg:px-4" href={"#"}>
                    Privacy Policy
                </Link>
                {/* <Link className="lg:px-4 border-r h-4" href={"#"}>
                    Accessibility
                </Link>
                <Link className="lg:px-4 border-r h-4" href={"#"}>
                    Legal
                </Link> */}
            </div>
            <p >Design with love © Class Action Education 2023. All rights reserved</p>
        </div>
        </div>
        
    </footer>
    )
  }
  