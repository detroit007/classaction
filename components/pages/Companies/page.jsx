import { companies } from "@/utils/skillData";

export function Companies(){
    return (
        <div className='grid grid-cols-6 gap-6 mx-8 mt-16 items-center'> 
        {
          companies.map((item, i)=>
            <div className="w-4/6 h-11.5 border-1 border-slate-950" key={i}>
              <img alt="logo"
                src={item} decoding="async"
                data-nimg="1" loading="lazy"
                className="w-full h-full"
              />
            </div>
          )
        }
      </div>
    )
  }
  