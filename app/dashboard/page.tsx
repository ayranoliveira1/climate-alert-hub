"use client";

import { ChartColumn, Wrench } from "lucide-react";
import HeaderDashboard from "./components/header-dashboard";
import { TbLogout2 } from "react-icons/tb";
import { FormEvent, useState } from "react";
import { FaCircle } from "react-icons/fa";
import dynamic from "next/dynamic";
import { Graphic } from "./components/graphic";
import { Switch } from "../components/ui/switch";

const Dashboard = () => {
   const MapBrazil = dynamic(() => import("./components/maps/HeatMapBR"), {
      ssr: false,
   });
   const MapUS = dynamic(() => import("./components/maps/HeatMapEUA"), {
      ssr: false,
   });
   const MapRussia = dynamic(() => import("./components/maps/HeatMapRU"), {
      ssr: false,
   });
   const MapPhilippines = dynamic(() => import("./components/maps/HeatMapPH"), {
      ssr: false,
   });

   const MapMoçambique = dynamic(() => import("./components/maps/HeatMapMZ"), {
      ssr: false,
   });

   const [page, setPage] = useState<boolean>(true);
   const [coutry, setCountry] = useState<string>("BR");
   const [switchValue, setSwitchValue] = useState<boolean>(false);

   function handleCountryChange(value: string) {
      setCountry(value);
   }

   const handleOpenDashboard = () => {
      setPage(true);
   };

   const handleOpenSettings = () => {
      setPage(false);
   };

   const handleSwitchCheck = (evet: FormEvent) => {
      evet.preventDefault();
      console.log(switchValue);
   };
   return (
      <div className="relative flex h-screen gap-16">
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

         <main className="mt-24 w-full">
            {page ? (
               <div className="flex flex-col gap-3">
                  <h1>Dashboard</h1>

                  <div className="flex gap-16">
                     <section className="flex flex-col gap-5">
                        <div className="rounde flex h-[383px] w-[422px] items-center justify-center rounded-2xl shadow-rounded">
                           {coutry === "BR" && <MapBrazil />}
                           {coutry === "US" && <MapUS />}
                           {coutry === "RU" && <MapRussia />}
                           {coutry === "PH" && <MapPhilippines />}
                           {coutry === "MZ" && <MapMoçambique />}
                        </div>

                        <div className="rounde flex h-[383px] w-[422px] items-center justify-center rounded-2xl shadow-rounded">
                           <h1>
                              5 cidades da <br /> equipe <br /> coda fofo
                           </h1>
                        </div>
                     </section>

                     <div className="flex max-w-[640px] flex-col gap-3">
                        <h1 className="font-semibold">Rain forecasts</h1>

                        <Graphic />

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

                        <div className="mt-5 flex items-center justify-between">
                           <h1 className="font-semibold">Last News</h1>

                           <p className="cursor-pointer font-medium text-[#3F08DD] hover:text-black">
                              See all
                           </p>
                        </div>

                        <div className="mt-5 flex flex-col gap-10">
                           <div className="flex flex-col gap-1 rounded-xl border border-black/50 py-5 pl-5 pr-8">
                              <h1 className="font-semibold">
                                 Tittle: Something Here
                              </h1>

                              <p className="max-w-[540px] text-sm">
                                 Lorem ipsum dolor sit amet. Non nobis sequi hic
                                 odit voluptates ut nulla fugiat non nobis
                                 voluptatem qui dolorum quam non molestiae
                                 tempora ea quia ipsa. Rem corrupti dolorum aut
                                 harum Quis rem quia autem
                              </p>
                           </div>

                           <div className="flex flex-col gap-1 rounded-xl border border-black/50 py-5 pl-5 pr-8">
                              <h1 className="font-semibold">
                                 Tittle: Something Here
                              </h1>

                              <p className="max-w-[540px] text-sm">
                                 Lorem ipsum dolor sit amet. Non nobis sequi hic
                                 odit voluptates ut nulla fugiat non nobis
                                 voluptatem qui dolorum quam non molestiae
                                 tempora ea quia ipsa. Rem corrupti dolorum aut
                                 harum Quis rem quia autem
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ) : (
               <div className="flex items-center justify-between pt-10">
                  <div className="h-[683px] w-[872px] rounded-2xl shadow-rounded">
                     <div className="mt-2 flex flex-col px-10 py-5">
                        <h1 className="text-xl font-bold">Account Details</h1>
                        <p className="text-[#ABABAB]">
                           Manage you account here
                        </p>
                     </div>

                     <div className="h-[1px] w-full bg-[#ABABAB]/50"></div>

                     <div className="flex flex-col px-10 py-14">
                        <div className="flex items-center gap-2">
                           <div className="h-10 w-10 rounded-full bg-[#A8A8A8]"></div>

                           <p className="font-semibold">Profile picture</p>
                        </div>
                     </div>

                     <div className="flex w-full flex-col gap-6 px-10">
                        <div className="flex w-full items-center gap-10">
                           <div className="flex w-full flex-col items-start gap-1">
                              <p className="text-sm text-[#101010]">
                                 First Name
                              </p>
                              <div className="w-full border px-3 text-lg">
                                 IAGO
                              </div>
                           </div>
                           <div className="flex w-full flex-col items-start gap-1">
                              <p className="text-sm text-[#101010]">
                                 Last Name
                              </p>
                              <div className="w-full border px-3 text-lg">
                                 Correia Simoes
                              </div>
                           </div>
                        </div>

                        <div className="flex w-full flex-col items-start gap-1">
                           <p className="text-sm text-[#101010]">First Name</p>
                           <div className="w-full border px-3 font-semibold">
                              IAGOOCSIMOES@GMAIL.COM
                           </div>
                        </div>

                        <form
                           onSubmit={handleSwitchCheck}
                           className="flex flex-col gap-20"
                        >
                           <div className="flex flex-col items-start gap-3">
                              <span className="flex items-center gap-1 text-lg font-light">
                                 Recive Email
                                 <button
                                    type="button"
                                    className="cursor-pointer text-[#3F08DD] hover:text-black"
                                 >
                                    (?)
                                 </button>
                              </span>
                              <Switch
                                 checked={switchValue}
                                 onCheckedChange={setSwitchValue}
                              />
                           </div>

                           <div className="flex justify-end">
                              <button
                                 type="submit"
                                 className="bg-black px-6 py-1 text-white"
                              >
                                 Update
                              </button>
                           </div>
                        </form>
                     </div>

                     <div className="mt-8 h-[1px] w-full bg-[#ABABAB]/50"></div>

                     <div className="w-full items-center gap-6 px-10 pt-5">
                        <button className="text-red-500 hover:text-red-800">
                           Delete Account
                        </button>
                     </div>
                  </div>
               </div>
            )}
         </main>
      </div>
   );
};

export default Dashboard;
