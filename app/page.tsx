"use client";

import { useRouter } from "next/navigation";

export default function Home() {
   const route = useRouter();
   return (
      <div className="h-screen">
         <header className="flex h-[87px] items-center justify-around bg-black">
            <p className="text-sm/[20px] font-bold text-white">
               Climate Alert Hub
            </p>
            <div className="flex items-center gap-[143px]">
               <button className="text-sm/[16px] text-white">About us</button>
               <button className="text-sm/[16px] text-white">Contact</button>
            </div>
         </header>
         <section className="flex h-[1045px] min-h-screen justify-center bg-background-home bg-cover bg-center pt-[110px] text-center">
            <div className="flex flex-col gap-8">
               <h2 className="text-7xl font-bold">
                  Connect with us to receive <br /> news about weather
               </h2>
               <h3 className="pt-8 text-[24px]">
                  Climate Hub Alert is an innovative web platafort designed to{" "}
                  <br /> provide crucial information about weather conditions
                  and <br /> extreme event alerts
               </h3>
               <button
                  onClick={() => route.push("/login")}
                  className="mx-auto w-fit rounded-[40px] bg-black px-[56px] py-[24px] text-[22px] text-white"
               >
                  Get started
               </button>
            </div>
         </section>
      </div>
   );
}
