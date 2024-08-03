"use client";

import { useRouter } from "next/navigation";
import Header from "./components/header";

export default function Home() {
   const route = useRouter();
   return (
      <div className="min-h-screen bg-background-home bg-center">
         <Header />

         <main className="flex justify-center pt-[110px] text-center">
            <div className="flex flex-col gap-8">
               <h2 className="text-7xl font-bold text-black">
                  Connect with us to receive <br /> news about weather
               </h2>
               <h3 className="pt-8 text-[24px] text-black">
                  Climate Hub Alert is an innovative web platafort designed to{" "}
                  <br /> provide crucial information about weather conditions
                  and <br /> extreme event alerts
               </h3>
               <button
                  onClick={() => route.push("/login")}
                  className="mx-auto w-fit rounded-[40px] bg-black px-[56px] py-[24px] text-[22px] text-white hover:bg-black/80"
               >
                  Get started
               </button>
            </div>
         </main>
      </div>
   );
}
