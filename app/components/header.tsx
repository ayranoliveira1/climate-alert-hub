"use client";

import { useRouter } from "next/navigation";

const Header = () => {
   const route = useRouter();

   return (
      <header className="flex h-[87px] items-center justify-around bg-black">
         <p className="text-[20px] font-bold text-white">Climate Alert Hub</p>
         <div className="flex items-center gap-[143px]">
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
      </header>
   );
};

export default Header;
