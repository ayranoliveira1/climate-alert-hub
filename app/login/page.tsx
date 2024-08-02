"use client";

import { FcGoogle } from "react-icons/fc";

export default function Login() {
   return (
      <>
         <header className="flex h-[87px] items-center justify-around bg-black">
            <p className="text-sm/[20px] font-bold text-white">
               Climate Alert Hub
            </p>
            <div className="flex items-center gap-[143px]">
               <button className="text-sm/[16px] text-white">About us</button>
               <button className="text-sm/[16px] text-white">Contact</button>
            </div>
         </header>
         <section className="flex h-screen items-center justify-center text-center">
            <div className="flex flex-col gap-5">
               <p className="text-[30px] font-bold">Sign in</p>
               <p className="text-[24px] text-[#8C8C8C]">
                  Get started today and enjoy complete access <br /> to our
                  content!
               </p>
               <button className="mx-auto flex w-fit items-center justify-center gap-2 px-5 py-2 text-[24px] shadow-md">
                  <FcGoogle className="size-[49px]" />
                  Sign in with Google
               </button>
            </div>
         </section>
      </>
   );
}
