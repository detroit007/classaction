import { Button } from "@/components/Button/page";
import { HiPlusSm } from "react-icons/hi";


export default function Creators() {
    return(
        <div className="bg-white">
        <div className="container mx-auto flex justify-center">
            <div className="w-4/5 my-16 pb-16 bg-slate-100 border border-gray-200 rounded-lg shadow ">
            <div className="flex justify-center py-10">
                <img className="w-12" src="/assets/images/classaction_logo.png" />
            </div>
            <div className="flex justify-center">
            <form className="w-full px-6 font-comfortaa">
            <h1 className="font-teko text-4xl font-bold mb-6">Course Creator Sign Up</h1>
                <div className="grid gap-6 mb-6 md:grid-cols-3">
                    <div>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">First name <span className="text-red-500">*</span></label>
                        <input type="text" id="first_name" className="border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary text-sm rounded-lg block w-full p-2.5" placeholder="John" required />
                    </div>
                    <div>
                        <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Last name <span className="text-red-500">*</span></label>
                        <input type="text" id="last_name" className="border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary text-sm rounded-lg  block w-full p-2.5" placeholder="Doe" required />
                    </div>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email <span className="text-red-500">*</span></label>
                        <input type="email" id="email" className="border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary text-sm rounded-lg block w-full p-2.5" placeholder="john.doe@company.com" required />
                    </div>  
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    
                    <div className="">
                        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 ">Phone number</label>
                        <input type="tel" id="phone" className="text-sm rounded-lg block w-full p-2.5  border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                    </div>
                    <div>
                        <label for="website" className="block mb-2 text-sm font-medium text-gray-900 ">Website (if applicable)</label>
                        <input type="url" id="website" className="text-sm rounded-lg block w-full p-2.5  border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary" placeholder="flowbite.com" required />
                    </div>
                </div>

                    <div className="mt-4">
                        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 ">Social media links (for our team's reference only and will not be published on the site)</label>
                        <textarea type="text" value="" className="w-full h-16 p-2 rounded-lg border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary" />
                    </div>

                    <div className="mt-4">
                        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 ">Teaching experience <span className="text-[red]">*</span></label>
                        <textarea type="text" value="" className="w-full h-28 p-2 rounded-lg border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary" required
                            placeholder="Please share your experience teaching or working with learners in online and in-person settings, including professional, volunteer, or personal roles. Specify the subjects you've taught and the ages of learners you've worked with."
                        />
                    </div>
                
                    <div className="mt-4">
                        <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 ">Subjects taught <span className="text-[red]">*</span></label>
                        <textarea type="text" id="subjects-taught" value="" className="w-full h-28 p-2 text-sm rounded-lg border-2 border-[#efeded] focus:outline-none focus:ring-0 hover:border-primary focus:border-primary" required
                            placeholder="Tell us about the topics you are passionate about teaching and the age groups you would like to work with on Class Action Education. Please describe your experience and expertise in these subject areas."
                        />
                    </div>
                <p className="text-center py-4">Online course upload: Please upload an online course that you have created.</p>
                <div className="mb-2">
                    <div class="flex w-full justify-center">
                        <label class="w-64 flex justify-center px-4 py-2 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer ">

                            <span class="text-base leading-normal flex">Upload File <HiPlusSm size={20} className="ml-2"/></span>
                            <input type='file' class="hidden" />
                        </label>
                    </div>
                        {/* <input class="block w-60 text-sm text-gray-900  rounded-lg cursor-pointer" id="file_input" type="file"/> */}

                        <p className="text-gray-300 text-xs text-center mt-3">Upload supported file (Max 15MB)</p>
                    </div>
                <div className="flex flex-col items-center">
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border text-primary border-gray-300 rounded focus:outline-none focus:ring-0 " required/>
                        </div>
                        <label for="remember" className="ml-2 text-lg font-medium text-gray-900 ">I agree to <a href="#" className="text-primary underline ">Privacy Policy</a>.</label>
                    </div>
                    <Button className={"bg-black text-white p-2 rounded-full px-12"} title={"submit"}  />
                </div>
                {/* <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
            </form>
            </div>
            </div>
        </div>
        </div>

    )
}