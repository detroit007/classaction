import { Button } from "@/components/Button/page";
import { ButtonGradiant } from "@/components/ButtonGradiant/page";
import { skills } from "@/utils/skillData";


export default function Createos(){
    // <main className="relative">
    return (
        <main>
        <main className="bg-cover transparent w-full h-full pb-16" style={{backgroundImage: "url(/assets/images/creator_page/creator_bg.png)"}}> 
            <div className="block md:flex container mx-auto">
                <div className="pt-24 w-full md:w-2/5 ">
                    {/* <h2 className="font-teko text-4xl bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text animate-gradient"> */}
                    <h2 className="font-teko text-5xl">
                        CLASS ACTION EDUCATION
                    </h2>
                    {/* <h1 className="font-teko text-9xl text-white font-semibold my-4 text-shadow">
                        ARE YOU AN EXPERT
                    </h1> */}
                    <div className="w-full flex md:mt-0 mt-8">
                        <img alt="logo"
                            src="/assets/images/creator_page/are_u_expert.png" decoding="async"
                            data-nimg="1" loading="lazy"
                            className="w-[400px] h-52"
                        />
                    </div>
                    <p className="font-comfortaa text-3xl">
                        in one of the following domains - Academics, The Arts, Digital Skills, Life Skills, Music, Parenting, Sports, or Wellbeing?
                    </p>
                    <div className="flex mt-8">
                        <ButtonGradiant
                            title="SIGN UP NOW!"
                            className={"py-2 px-8 h-14 rounded-lg text-white !text-3xl !font-extrabold mr-4 "}
                        />
                    </div>
                </div>
                <div className="w-full md:w-3/5 flex md:mt-0 mt-8">
                    <img alt="logo"
                        src="/assets/images/creator_page/creator_hero.png" decoding="async"
                        data-nimg="1" loading="lazy"
                        className="w-full items-center object-contain"
                    />
                </div>
            </div>
        </main>
            <div className="w-full flex flex-col items-center mt-8">
                <img alt="logo"
                    src="/assets/images/creator_page/create.png" decoding="async"
                    data-nimg="1" loading="lazy"
                    className="w-10/12 h-54 -ml-16"
                />
                <h1 className="text-3xl w-3/4 font-bold font-teko text-center -mt-8">
                    IF YOU’RE PASSIONATE ABOUT SHARING YOUR KNOWLEDGE AND SKILLS WITH A GLOBAL ONLINE AUDIENCE OF LEARNERS, WE’D LIKE TO HEAR FROM YOU!
                </h1>
                <h1 className="text-5xl w-3/4 font-bold font-teko text-center mt-16 mb-4">
                    OUR PLATFORM OFFERS A DIVERSE RANGE OF SUBJECTS
                </h1>
                <div className="flex flex-col items-center w-4/5 mb-16">
                    <div className="grid grid-cols-4 gap-2">
                        {
                            skills.map((item, i)=>
                                <img alt="logo" key={i}
                                    src={item} decoding="async"
                                    data-nimg="1" loading="lazy"
                                    className="w-full"
                                />
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="bg-cover transparent w-full h-full" style={{backgroundImage: "url(/assets/images/creator_page/creator_gradiant.png)"}}> 
                <div className="flex flex-col items-center pt-16 container mx-auto pb-16">
                    <img alt="logo"
                        src="/assets/images/creator_page/why_classaction.png" decoding="async"
                        data-nimg="1" loading="lazy"
                        className="w-full"
                    />
                    <div className="block md:flex justify-center mt-8">
                        <div className="text-white w-2/5 mr-16">
                            <h1 className="font-teko text-3xl font-bold mb-2">IMPACT:</h1>
                            <p className="font-comfortaa text-xl mb-4">
                                The freedom to create engaging, high-quality
                                courses that can impact children’s lives and help
                                them reach their full potential.
                            </p>
                            <h1 className="font-teko text-3xl font-bold mb-2">REVENUE:</h1>
                            <p className="font-comfortaa text-xl mb-4">
                                Enjoy a rewarding compensation for your expertise and course quality. Receive a revenue share for each course sold.
                            </p>
                            <h1 className="font-teko text-3xl font-bold mb-2">FLEXIBILITY:</h1>
                            <p className="font-comfortaa text-xl mb-4">
                                Work on YOUR schedule and create courses at your own pace.
                            </p>
                        </div>
                        <div className="text-white w-2/5">
                            <h1 className="font-teko text-3xl font-bold mb-2">SUPPORT:</h1>
                            <p className="font-comfortaa text-xl mb-4">
                                Receive online support and resources to create, publish and market your courses on our platform.
                            </p>
                            <h1 className="font-teko text-3xl font-bold mb-2">GLOBAL:</h1>
                            <p className="font-comfortaa text-xl mb-4">
                                Reach a worldwide audience and share your passion with students from different backgrounds.
                            </p>
                            <h1 className="font-teko text-3xl font-bold mb-2">REWARDING:</h1>
                            <p className="font-comfortaa text-xl mb-4">
                                Experience the satisfaction of shaping young minds and contributing to the future of education.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-8">
                <img alt="logo"
                    src="/assets/images/creator_page/apply_today.png" decoding="async"
                    data-nimg="1" loading="lazy"
                    className="w-4/5 cursor-pointer"
                />
                <ButtonGradiant
                    title="SIGN UP NOW!"
                    className={"py-2 px-8 h-14 my-8 rounded-lg text-white !text-3xl !font-extrabold mr-4 "}
                />
            </div>
        </main>
    )
  }
  