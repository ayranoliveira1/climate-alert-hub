"use client";

import { FiMenu } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { useRouter } from "next/navigation";
import { useState } from "react";
const Header = () => {
   const route = useRouter();

   const [showMenu, setShowMenu] = useState(false);

   const handleShowMenu = () => {
      setShowMenu(!showMenu);
   };

   return (
      <header
         className={`flex h-[87px] items-center justify-between ${showMenu ? "bg-white" : "bg-black"} px-5 lg:justify-around lg:px-0`}
      >
         <button
            onClick={() => route.push("/")}
            className="text-[20px] font-bold text-white hover:scale-110"
         >
            Climate Alert Hub
         </button>
         <div className="hidden items-center gap-[143px] lg:flex">
            <button
               onClick={() => route.push("/about")}
               className="text-[16px] text-white hover:scale-110"
            >
               About us
            </button>
            <button
               onClick={() => route.push("/contact")}
               className="text-[16px] text-white hover:scale-110"
            >
               Contact
            </button>
         </div>

         <button
            onClick={handleShowMenu}
            className="flex items-center justify-center text-white lg:hidden"
         >
            <FiMenu className="size-6" />
         </button>

         {showMenu && (
            <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
               <div className="absolute right-0 top-0 z-50 h-screen w-[70%] max-w-[500px] bg-black text-white">
                  <button
                     className="absolute right-5 top-5"
                     onClick={handleShowMenu}
                  >
                     <IoIosCloseCircleOutline className="size-6" />
                  </button>

                  <div className="mt-5 flex flex-col items-center gap-16">
                     <button
                        className="hover:scale-110"
                        onClick={() => route.push("/")}
                     >
                        Climate Alert Hub
                     </button>
                     <button
                        className="hover:scale-110"
                        onClick={() => route.push("/about")}
                     >
                        About us
                     </button>
                     <button
                        className="hover:scale-110"
                        onClick={() => route.push("/contact")}
                     >
                        Contact
                     </button>
                  </div>
               </div>
            </div>
         )}
      </header>
   );
};

export default Header;
