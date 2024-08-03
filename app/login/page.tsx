"use client";

import { FcGoogle } from "react-icons/fc";
import Header from "../components/header";
import { useRouter } from "next/navigation";

export default function Login() {
   const route = useRouter();

   return (
      <>
         <Header />

         <section className="flex h-screen items-center justify-center text-center">
            <div className="flex flex-col gap-5">
               <p className="text-[30px] font-bold">Sign in</p>
               <p className="text-[24px] text-[#8C8C8C]">
                  Get started today and enjoy complete access <br /> to our
                  content!
               </p>
               <button
                  onClick={() => route.push("/dashboard")}
                  className="mx-auto flex w-fit items-center justify-center gap-2 px-5 py-2 text-[24px] shadow-md hover:bg-gray-500/10"
               >
                  <FcGoogle className="size-[49px]" />
                  Sign in with Google
               </button>
            </div>
         </section>
      </>
   );
}
