"use client";

import { useRouter } from "next/navigation";
import Header from "./components/header";

export default function Home() {
   const route = useRouter();
   return (
      <div className="min-h-screen bg-background-home bg-bottom lg:bg-center">
         <Header />

         <main className="flex justify-center pt-[110px] text-center">
            <div className="flex flex-col gap-4">
               <h2 className="text-2xl font-bold text-black lg:text-7xl">
                  Connect with us to receive <br /> news about weather
               </h2>

               <h3 className="text-xs text-black lg:hidden">
                  Climate Hub Alert is an innovative web platafort designed to{" "}
                  <br /> provide crucial information about weather conditions
                  and <br /> extreme event alerts
               </h3>

               <h3 className="hidden text-[24px] text-black lg:block">
                  Climate Hub Alert is an innovative web platafort designed to{" "}
                  <br /> provide crucial information about weather conditions
                  and <br /> extreme event alerts
               </h3>

               <button
                  onClick={() => route.push("/login")}
                  className="plg:x-[56px] mx-auto w-fit rounded-[40px] bg-black px-10 py-5 text-sm text-white hover:bg-black/80 lg:py-[24px] lg:text-[22px]"
               >
                  Get started
               </button>
            </div>
         </main>
      </div>
   );
}
