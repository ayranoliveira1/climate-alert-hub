"use client";

import { ChartColumn, Wrench } from "lucide-react";
import HeaderDashboard from "./components/header-dashboard";
import { TbLogout2 } from "react-icons/tb";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import dynamic from "next/dynamic";
import { Graphic } from "./components/graphic";
import Settings from "./components/settings";

const apiKey = "MP9VZVkUd-bD2RTassFmRYC-qpAGPCILxheLFwiOlbwfpCpJ";
const query = "climate";

interface Article {
   url: string;
   title: string;
   source: { name: string };
   publishedAt: string;
   description: string;
}

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
   const [country, setCountry] = useState<string>("BR");

   const [articles, setArticles] = useState<Article[]>([]);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      async function fetchNews() {
         const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

         try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.status === "ok") {
               setArticles(data.articles);
            } else {
               setError("Erro ao buscar notícias.");
            }
         } catch (error) {
            setError("Erro na requisição.");
         }
      }

      fetchNews();
   }, []);

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
                           {country === "BR" && <MapBrazil />}
                           {country === "US" && <MapUS />}
                           {country === "RU" && <MapRussia />}
                           {country === "PH" && <MapPhilippines />}
                           {country === "MZ" && <MapMoçambique />}
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
                                 <a href={articles[0]?.url}>
                                    Tittle: {articles[0]?.title}
                                 </a>
                              </h1>

                              <p className="w-[540px] overflow-y-hidden text-sm">
                                 {articles[0]?.description}
                              </p>
                           </div>

                           <div className="flex flex-col gap-1 rounded-xl border border-black/50 py-5 pl-5 pr-8">
                              <h1 className="font-semibold">
                                 <a href={articles[1]?.url}>
                                    Tittle: {articles[1]?.title}
                                 </a>
                              </h1>

                              <p className="w-[540px] overflow-y-hidden text-sm">
                                 {articles[1]?.description}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ) : (
               <Settings />
            )}
         </main>
      </div>
   );
};

export default Dashboard;
