import {  AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
    const [nav, setNav] = useState(false);


    const toggleNav = () => {
        setNav(!nav);
    }

  return (
    <div className="flex items-center justify-between h-24 p-10 max-width-[1240px] mx-auto px-36 text-white">
      <h1 className="w-full tex-3xl font-bold text-[#00df9a]">FINANCE.</h1>
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Services</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

        {/* mobile menu */}
        
      <div onClick={toggleNav} className="block md:hidden">
      {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav ? "fixed left-0 top-0 w-[30%] h-full ease-in-out duration-700 border-r border-r-gray-900 bg-[#000000]" : "fixed left-[-100%]"}>
      <h1 className="w-full tex-3xl font-bold text-[#00df9a] m-4">FINANCE.</h1>
      <ul className="p-4 uppercase border-b-gray-900">
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Services</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
      </div>
    </div>
  );
}

export default Navbar;
