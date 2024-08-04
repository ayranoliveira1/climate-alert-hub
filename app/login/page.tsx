"use client";

import Header from "../components/header";
import LoginAuth from "./components/login";

export default function Login() {
   return (
      <>
         <div className="min-h-screen">
            <Header />

            <section className="flex items-center justify-center pt-60 text-center">
               <div className="flex flex-col gap-5">
                  <p className="text-[30px] font-bold">Sign in</p>
                  <p className="text-[24px] text-[#8C8C8C]">
                     Get started today and enjoy complete access <br /> to our
                     content!
                  </p>
                  <button className="mx-auto flex w-fit items-center justify-center">
                     <LoginAuth />
                  </button>
               </div>
            </section>
         </div>
      </>
   );
}
