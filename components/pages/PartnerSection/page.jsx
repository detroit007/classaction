import { Button } from "@/components/Button/page";
import { ButtonGradiant } from "@/components/ButtonGradiant/page";


export function PartnerSection(){
    return (
      <div className="block md:flex mt-16">
        <div className="mt-24 w-full md:w-2/5 ">
            <h1 className="text-4xl font-bold font-teko mb-4">Unleash the power of a world-class education at the push of a button!</h1>
            <p className="font-comfortaa text-lg">
              Our global partnerships with top-tier institutions and subject experts, coupled with advanced AI technology, empower transformative learning experiences that deliver life-changing outcomes for our learners worldwide.
              <br/>
              <br/>
              Fuelling excellence through innovation and inclusivity, we empower children, parents and schools with a comprehensive, quality education.
            </p>
            {/* <p className="text-primary mt-6">More...</p> */}
        </div>
        <div className="w-full md:w-2/5 flex md:mt-0 mt-24 md:mx-24">
            <img alt="logo"
                src="/assets/images/partners.png" decoding="async"
                data-nimg="1" loading="lazy"
                className="w-full items-center object-contain"
            />
        </div>
      </div>
    )
  }
  