import React from "react"
import logo from './assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
   return (
      <>
         <div className="flex flex-wrap justify-around items-center h-16 max-sm:mb-10 gap-3 ">

            <div className="flex justify-between items-center">
               <img src={logo} className="h-10 w-10 cursor-pointer"></img>
               <h1 className="font-bold text-4xl cursor-pointer max-sm:text-2xl" >Mentimeter</h1>
            </div>

            <div className="hidden lg:flex gap-5 justify-center ">
               <select className="outline-none cursor-pointer"><option>Business</option></select>
               <select className="outline-none cursor-pointer"><option>Education</option></select>
               <select className="outline-none cursor-pointer"><option>Enterprise</option></select>
               <select className="outline-none cursor-pointer"><option>Learn</option></select>
               <span className="cursor-pointer">pricing</span>
               <span className="cursor-pointer">talk to sales</span>
            </div>
            <div className="flex gap-5">
               <button className="py-2 px-4 cursor-pointer">Log in</button>
               <button className="py-2 px-4 bg-blue-600 text-white rounded-3xl cursor-pointer transition-colors hover:bg-blue-800 duration-1000 delay-200 ease-in">Sign Up</button>
            </div>
             
             <GiHamburgerMenu className=" block lg:hidden text-3xl cursor-pointer"/>
         </div>

      </>
   )
}
export default Navbar;