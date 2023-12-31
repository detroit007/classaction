import { Button } from "@/components/Button/page";
import Link from "next/link";

export function JoinSection(){
    return (
        <div className="w-full mt-16 h-96 bg-cover" style={{backgroundImage: "url(/assets/images/bg_gradiant.png)"}}>
            <div className="container mx-auto">

                <img alt="logo"
                    src="/assets/images/join.png" decoding="async"
                    data-nimg="1" loading="lazy"
                    className="w-full items-center object-contain pt-20"
                />
                <div className="flex justify-center mt-8">
                    <Link className="w-2/5 mr-8" href={"/students-sign-up"}><Button title={"STUDENT SIGN UP"} className={" bg-white text-primary text-2xl font-bold py-2 w-full rounded-lg"}/></Link>
                    <Link className="w-2/5 mr-8" href={"/creators"}><Button title={"COURSE CREATOR SIGN UP"} className={" bg-white text-primary text-2xl font-bold py-2 w-full rounded-lg"}/></Link>
                </div>
            </div>
        </div>

    )
  }