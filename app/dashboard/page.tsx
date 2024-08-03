"use client";

import { ChartColumn, Wrench } from "lucide-react";
import HeaderDashboard from "./components/header-dashboard";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";

const Dashboard = () => {
   const [page, setPage] = useState<boolean>(true);

   const handleOpenDashboard = () => {
      setPage(true);
   };

   const handleOpenSettings = () => {
      setPage(false);
   };

   return (
      <div className="relative flex h-screen gap-10">
         <HeaderDashboard />

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

         <main className="mt-28">
            {page ? <div>DASHBOARD</div> : <div>SETTINGS</div>}
         </main>
      </div>
   );
};

export default Dashboard;
