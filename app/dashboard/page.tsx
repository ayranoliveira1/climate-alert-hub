"use client";

import { ChartColumn, Wrench } from "lucide-react";
import HeaderDashboard from "./components/header-dashboard";
import { TbLogout2 } from "react-icons/tb";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import dynamic from "next/dynamic";
import { Graphic } from "./components/graphic";
import Settings from "./components/settings";

import ModalNews from "./components/modal-news";
import PopulationPage from "./components/population";

const Dashboard = () => {
   // Carregamento dinâmico dos mapas
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
   const [news, setNews] = useState<
      Array<{ title: string; url: string; description: string }>
   >([]);
   const [opneModalNews, setOpneModalNews] = useState<boolean>(false);

   const API_URL = "https://api.currentsapi.services/v1/latest-news";
   const API_KEY = "MP9VZVkUd-bD2RTassFmRYC-qpAGPCILxheLFwiOlbwfpCpJ";

   const fetchNews = async (countryCode: string) => {
      const url = `${API_URL}?country=${countryCode}&apiKey=${API_KEY}`;
      try {
         const response = await fetch(url);
         const data = await response.json();
         if (data.status === "ok" && data.news.length > 0) {
            const topNews = data.news.slice(0, 10).map((newsItem: any) => ({
               title: newsItem.title,
               url: newsItem.url,
               description: newsItem.description,
            }));
            setNews(topNews);
         } else {
            console.error("Erro ao buscar notícias:", data);
            setNews([]);
         }
      } catch (error) {
         console.error("Erro na requisição:", error);
         setNews([]);
      }
   };

   useEffect(() => {
      fetchNews(country);
   }, [country]);

   const handleCountryChange = (value: string) => {
      setCountry(value);
   };

   const handleOpenDashboard = () => {
      setPage(true);
   };

   const handleOpenSettings = () => {
      setPage(false);
   };

   const handleOpenNews = () => {
      setOpneModalNews(!opneModalNews);
   };

   return (
      <div className="relative flex h-screen">
         <HeaderDashboard onCountryChange={handleCountryChange} />

         <nav className="h-screen w-[300px] bg-[#F3F3F3]">
            <div className="flex flex-col items-start gap-8 pt-[100px]">
               <h1 className="px-10 text-sm font-light">MENU</h1>

               <div className="flex flex-col items-center gap-4 px-4">
                  <button
                     onClick={handleOpenDashboard}
                     className={`flex w-[162px] items-center gap-3 rounded-xl px-5 py-2 text-sm ${
                        page ? "bg-black text-white" : "hover:bg-gray-300/50"
                     } `}
                  >
                     <ChartColumn className="size-4" /> DASHBOARD
                  </button>

                  <button
                     onClick={handleOpenSettings}
                     className={`flex w-[162px] items-center gap-3 rounded-xl px-5 py-2 text-sm ${
                        !page ? "bg-black text-white" : "hover:bg-gray-300/50"
                     }`}
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

            <div className="fixed bottom-0 left-[60px] text-[9px] font-semibold">
               Created By: Equipe Coda Fofo
            </div>
         </nav>

         <main className="mt-24 w-full pl-5 pr-16">
            {page ? (
               <div className="flex gap-16">
                  <div className="flex gap-16">
                     <section className="flex flex-col gap-5">
                        <div className="flex h-[383px] w-[422px] items-center justify-center rounded-2xl shadow-rounded">
                           {country === "BR" && <MapBrazil />}
                           {country === "US" && <MapUS />}
                           {country === "RU" && <MapRussia />}
                           {country === "PH" && <MapPhilippines />}
                           {country === "MZ" && <MapMoçambique />}
                        </div>

                        <div className="flex h-[383px] w-[422px] justify-center rounded-2xl shadow-rounded">
                           <h1 className="pt-2 text-2xl">5 Cities Weather:</h1>
                           {/* // TODO: Add cities weather */}
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

                           <a
                              onClick={handleOpenNews}
                              className="cursor-pointer font-medium text-[#3F08DD] hover:text-black"
                           >
                              See All
                           </a>

                           {opneModalNews && (
                              <ModalNews
                                 handleOpenNews={handleOpenNews}
                                 news={news}
                              />
                           )}
                        </div>

                        <div className="mt-5 flex flex-col gap-6">
                           {news.length > 0 ? (
                              news.slice(0, 2).map((item) => (
                                 <div
                                    key={item.title}
                                    className="flex flex-col gap-1 rounded-xl border border-black/50 py-5 pl-5 pr-8"
                                 >
                                    <h1 className="font-semibold">
                                       <a
                                          href={item.url}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                       >
                                          Título: {item.title}
                                       </a>
                                    </h1>

                                    <p className="w-[540px] overflow-y-hidden text-sm">
                                       {item.description}
                                    </p>
                                 </div>
                              ))
                           ) : (
                              <p className="text-gray-500">
                                 No news available.
                              </p>
                           )}
                        </div>
                     </div>
                  </div>

                  <div className="w-full rounded-xl border px-3 pt-2">
                     <PopulationPage />
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
