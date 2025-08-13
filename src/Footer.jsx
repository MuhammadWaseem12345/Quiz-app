import React from "react"
import logo from './assets/logo.png'
import ftr from './assets/ftr.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
const Footer = () => {
   return (
      <>
     <div className="flex flex-wrap  justify-evenly  items-center   h-[70vh]">
             <div className="flex flex-col justify-center items-center max-2xl:mt-20 py-5  space-y-32">
                 <div className="flex justify-between items-center gap-2">
                               <img src={logo} className="h-7 w-7 cursor-pointer"></img>
                               <h1 className="font-bold text-2xl cursor-pointer max-sm:text-2xl" >Mentimeter</h1>
                  </div>
                    
                    <div className="flex flex-col justify-center items-center ">
                         <img src={ftr} className="h-28 w-28 cursor-pointer "></img>
                         <div className="flex justify-center gap-4 items-center border-b-1 border-solid border-black pb-5">
                                   <FaFacebook className="text-3xl cursor-pointer  hover:opacity-50 transition-all duration-500 delay-150 ease-linear"/>
                                   <FaLinkedin className="text-3xl cursor-pointer hover:opacity-50 transition-all duration-500 delay-150 ease-linear"/>
                                   <FaYoutubeSquare className="text-3xl cursor-pointer hover:opacity-50 transition-all duration-500 delay-150 ease-linear"/>
                                   <FaInstagram className="text-3xl cursor-pointer hover:opacity-50 transition-all duration-500 delay-150 ease-linear"/>
                                   <FaTwitter className="text-3xl cursor-pointer hover:opacity-50 transition-all duration-500 delay-150 ease-linear"/>
                         
                         </div>
                    

                             <details className="mt-3">
                    <summary className="flex font-lg cursor-pointer focus:bg-gray-200 p-2  hover:opacity-50 transition-all duration-200 delay-150 ease-in">
                        <AiOutlineGlobal className="text-2xl" />
                        Choose your language
                    
                    </summary>
                     <div className="flex flex-col cursor-pointer   hover:opacity-50 transition-all duration-200 delay-150 ease-in">
                        <span className="hover:opacity-50 transition-all duration-200 delay-150 ease-in">English</span>
                    <span className="hover:opacity-50 transition-all duration-200 delay-150 ease-in">Portuguese (Brazil)</span>
                    <span className="hover:opacity-50 transition-all duration-200 delay-150 ease-in">Spanish</span>
                    <span className="hover:opacity-50 transition-all duration-200 delay-150 ease-in">German</span>
                    
                     </div>
                </details>
                    </div>
             </div>

               <div className="flex flex-wrap justify-center gap-40 max-sm:gap-16 items-start h-[50vh] ">
                   <ul className="space-y-3">
                <li className="border-b-1 border-solid border-black font-bold"><h1>Features</h1></li>
                <li className="hover:opacity-50 cursor-pointer">Overview</li>
                <li className="hover:opacity-50 cursor-pointer">AI Menti builder</li>
                <li className="hover:opacity-50 cursor-pointer">Live polling</li>
                <li className="hover:opacity-50 cursor-pointer">Word cloud</li>
                <li className="hover:opacity-50 cursor-pointer">Quiz</li>
                <li className="hover:opacity-50 cursor-pointer">Q&A</li>
                <li className="hover:opacity-50 cursor-pointer">Survey</li>
                <li className="hover:opacity-50 cursor-pointer">Presentations</li>
             </ul>

              <ul className="space-y-3 ">
                <li className="border-b-1 border-solid border-black font-bold"><h1>Resources</h1></li>
                <li className="hover:opacity-50 cursor-pointer">Blog</li>
                <li className="hover:opacity-50 cursor-pointer">How to</li>
                <li className="hover:opacity-50 cursor-pointer">Work</li>
                <li className="hover:opacity-50 cursor-pointer">Education</li>
                <li className="hover:opacity-50 cursor-pointer">Templates</li>
                <li className="hover:opacity-50 cursor-pointer">Academy</li>
                <li className="hover:opacity-50 cursor-pointer">Webinars</li>
                <li className="hover:opacity-50 cursor-pointer">Comparison</li>
                <li className="hover:opacity-50 cursor-pointer">Stories</li>
                <li className="hover:opacity-50 cursor-pointer">Integrations</li>
             </ul>

               <ul className="space-y-3 ">
                <li className="border-b-1 border-solid border-black font-bold"><h1>Details</h1></li>
                <li className="hover:opacity-50 cursor-pointer">Legal</li>
                <li className="hover:opacity-50 cursor-pointer">Policies</li>
                <li className="hover:opacity-50 cursor-pointer">Accessibility</li>
                <li className="hover:opacity-50 cursor-pointer">Help center</li>
                <li className="hover:opacity-50 cursor-pointer">Requirements</li>
                <li className="hover:opacity-50 cursor-pointer">AI at Mentimeter</li>
                <li className="hover:opacity-50 cursor-pointer">Cookie preferences</li>
             </ul>

               <ul className="space-y-3  ">
                <li className="border-b-1 border-solid border-black font-bold"><h1>About us</h1></li>
                <li className="hover:opacity-50 cursor-pointer">Press info</li>
                <li className="hover:opacity-50 cursor-pointer">The team</li>
                <li className="hover:opacity-50 cursor-pointer">Jobs</li>
                <li className="hover:opacity-50 cursor-pointer">Culture</li>
                <li className="hover:opacity-50 cursor-pointer">Benefits</li>
                <li className="hover:opacity-50 cursor-pointer">Contact us</li>
                <li className="hover:opacity-50 cursor-pointer">Climate</li>
                <li className="hover:opacity-50 cursor-pointer">Investors</li>
             </ul>
             </div>
     </div>

      </>
   )
}
export default Footer;