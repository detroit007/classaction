import Link from "next/link";
import {FiShoppingCart} from "react-icons/fi";
import { Button } from "../Button/page";

export function Navbar(){
    return (
      <div className="w-full bg-white pt-6 sticky top-0 font-comfortaa font-medium z-20">
        <div className="container mx-auto flex items-center justify-between">
          <Link href={"#"}><img src="/assets/images/classaction_logo.png" className="w-12" /></Link>
          <div className="flex">
            <div className="flex mr-8 text-sm md:text-base text-center">
                <Link className="p-2 lg:px-4 hover:text-primary" href={"/"}>
                    HOME
                </Link>
                <Link className="p-2 lg:px-4 hover:text-primary" scroll={false} href={"/#students"}>
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
            <div>
            {/* <input
              type="text"
              name="search"
              placeholder="What are you looking for?"
              value={""}
              onChange={(e) => console.log(e.target.value)}
            /> */}
            </div>
            {/* <FiShoppingCart size={30} /> */}
            <Button className={"px-6 rounded-3xl text-sm text-white bg-gradient-to-r from-primary to-secondary"} title={"SIGN UP"} />
          </div>
        </div>
        <img src={"/assets/images/rainbow.png"} className="w-full h-2 mt-4" />
      </div>
    )
  }
  