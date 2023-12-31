import { ButtonGradiant } from "@/components/ButtonGradiant/page";

export default function Creators() {
    return(
        <div className="font-comfortaa">
        <div className="container mx-auto flex justify-center">
            <div className="w-4/5 my-16 pb-16 bg-slate-100 border border-gray-200 rounded-lg shadow ">
            <div className="flex justify-center py-10">
                <img className="w-12" src="/assets/images/classaction_logo.png" />
            </div>
            <div className="flex flex-col items-center">
            <h1 className="font-teko text-6xl font-bold mb-6">CONTACT US</h1>
            <h2>Please contact us for general and press enquiries.</h2>
            {/* <Link href={"mailto:support@classaction.education"} className="text-gray-400">support@classaction.education</Link> */}
            <p className="text-gray-400 cursor-pointer">support@classaction.education</p>
            <form className="w-full px-6 mt-8">
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">First name <span className="text-red-500">*</span></label>
                        <input type="text" id="first_name" className="border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
                    </div>
                    <div>
                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Last name <span className="text-red-500">*</span></label>
                        <input type="text" id="last_name" className="border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary text-sm rounded-lg  block w-full p-2.5 " placeholder="Doe" required />
                    </div>
                     
                </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email <span className="text-red-500">*</span></label>
                    <input type="email" id="email" className="border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary text-sm rounded-lg block w-full p-2.5 " placeholder="john.doe@company.com" required />
                </div> 
                <div className="mt-4">
                    <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 ">Message</label>
                    <textarea type="text" value="" placeholder="Type your message here..." className="w-full h-24 p-2 rounded-lg border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary" />
                </div>
                <div className="flex flex-col items-center mt-8">
                    <ButtonGradiant className={"bg-black text-white p-2 rounded-full px-12"} title={"submit"}  />
                </div>
            </form>
            </div>
            </div>
        </div>
        </div>

    )
}