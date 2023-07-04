import { Button } from "@/components/Button/page";
import { ButtonGradiant } from "@/components/ButtonGradiant/page";


export function PartnerSection(){
    return (
      <div className="block md:flex mt-16">
        <div className="mt-24 w-full md:w-2/5 ">
            <p className="font-comfortaa text-lg">
                We partner with top-tier institutions,
                organisations and subject matter experts
                globally, to create high-quality courses,
                covering Academics, The Arts, Digital, Life,
                Music, Parenting, Sports and Wellbeing
                skillsets, using advanced technology to
                make learning more accessible, engaging
                and impactful.
                <br/>
                <br/>
                We operate based on the core values of
                innovation, inclusivity and excellence, with
                a mission to provide a quality all-round
                education for our learners.
            </p>
            <p className="text-primary mt-6">More...</p>
        </div>
        <div className="w-full md:w-3/5 flex md:mt-0 mt-24 md:mx-24">
            <img alt="logo"
                src="/assets/images/partners.png" decoding="async"
                data-nimg="1" loading="lazy"
                className="w-full items-center object-contain"
            />
        </div>
      </div>
    )
  }
  