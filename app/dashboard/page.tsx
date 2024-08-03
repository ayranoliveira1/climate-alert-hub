"use client";

import { ChartColumn, Wrench } from "lucide-react";
import HeaderDashboard from "./components/header-dashboard";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import EuaMap from "../components/HeatMapEUA";
import MapComponent from "../components/HeatMap";
import dynamic from "next/dynamic";
// import { Graphic } from "./components/graphic";

const Dashboard = () => {
   const MapBrazil = dynamic(() => import("../components/HeatMap"), {
      ssr: false,
   });
   const MapUS = dynamic(() => import("../components/HeatMapEUA"), {
      ssr: false,
   });
   const [page, setPage] = useState<boolean>(true);

   const [coutry, setCountry] = useState<string>("BR");

   function handleCountryChange(value: string) {
      setCountry(value);
   }

   const handleOpenDashboard = () => {
      setPage(true);
   };

   const handleOpenSettings = () => {
      setPage(false);
   };

   return (
      <div className="relative flex h-screen gap-10">
         <HeaderDashboard onCountryChange={handleCountryChange} />

         <nav className="h-screen w-[300px] bg-[#F3F3F3]">
            <div className="flex flex-col items-start gap-8 pt-[100px]">
               <h1 className="px-10 text-sm font-light">MENU</h1>

               <div className="flex flex-col items-center gap-4 px-4">
                  <button
                     onClick={handleOpenDashboard}
                     className={`flex w-[162px] items-center gap-3 rounded-xl px-5 py-2 text-sm ${page ? "bg-black text-white" : "hover:bg-gray-300/50"} `}
                  >
                     <ChartColumn className="size-4" /> DASHBOARD
                  </button>

                  <button
                     onClick={handleOpenSettings}
                     className={`flex w-[162px] items-center gap-3 rounded-xl px-5 py-2 text-sm ${!page ? "bg-black text-white" : "hover:bg-gray-300/50"}`}
                  >
                     <Wrench className="size-4" />
                     SETTINGS
                  </button>

                  <button className="mt-2 flex w-[162px] items-center gap-3 rounded-xl px-5 py-2 text-sm text-red-500 hover:bg-gray-300/50">
                     <TbLogout2 className="size-4" />
                     LOG OUT
                  </button>
               </div>
            </div>
         </nav>

         <main className="mt-24">
            {page ? (
               <div className="flex flex-col gap-3">
                  <h1>Dashboard</h1>

                  <div className="flex gap-16">
                     <section className="flex flex-col gap-5">
                        <div className="rounde flex h-[383px] w-[422px] items-center justify-center rounded-2xl shadow-rounded">
                           {coutry === "BR" && <MapBrazil />}
                           {coutry === "US" && <MapUS />}
                        </div>

                        <div className="rounde flex h-[383px] w-[422px] items-center justify-center rounded-2xl shadow-rounded">
                           <h1>
                              5 cidades da <br /> equipe <br /> coda fofo
                           </h1>
                        </div>
                     </section>

                     <div className="flex flex-col gap-5">
                        <h1>Rain forecasts</h1>

                        <div className="flex items-center gap-20">
                           <span className="flex items-center gap-2 text-xs">
                              <FaCircle className="size-3 text-black" />
                              After 6 days
                           </span>

                           <span className="flex items-center gap-2 text-xs">
                              <FaCircle className="size-3 text-[#D8D9DB]" />
                              Last 6 days
                           </span>
                        </div>

                        <h1>Last News</h1>
                     </div>
                  </div>
               </div>
            ) : (
               <div>SETTINGS</div>
            )}
         </main>
      </div>
   );
};

export default Dashboard;
