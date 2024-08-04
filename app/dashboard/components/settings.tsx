import { Switch } from "@/app/components/ui/switch";
import { ChangeEvent, FormEvent, useState } from "react";
import ModalSettings from "./modal-settings";
import ModalDelete from "./modal-delete";

interface City {
   display_name: string;
}

const Settings = () => {
   const [switchValue, setSwitchValue] = useState<boolean>(false);
   const [isOpenModalSettings, setIsOpenModalSettings] =
      useState<boolean>(false);
   const [isModalDelete, setIsModalDelete] = useState<boolean>(false);

   const [query, setQuery] = useState<string>("");
   const [suggestions, setSuggestions] = useState<City[]>([]);
   const [selectedCity, setSelectedCity] = useState<string>("");

   const fetchCities = async (query: string) => {
      try {
         const response = await fetch(
            `https://nominatim.openstreetmap.org/search?city=${query}&format=json&addressdetails=1`,
         );
         const data: City[] = await response.json();
         setSuggestions(data);
      } catch (error) {
         console.error("Error fetching cities:", error);
      }
   };

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setQuery(value);

      if (value.length > 2) {
         fetchCities(value);
      } else {
         setSuggestions([]);
      }
   };

   const handleSuggestionClick = (city: City) => {
      setSelectedCity(city.display_name);
      setQuery(city.display_name);
      setSuggestions([]);
   };

   const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      if (selectedCity) {
         const cityParts = selectedCity.split(",");
         const state = cityParts[cityParts.length - 3]?.trim();
         const city = cityParts[0]?.trim();
         console.log("City:", city);
         console.log("State:", state);
         console.log("Switch:", switchValue);
      } else {
         alert("Please select a city first.");
      }
   };

   const handleOpenModalSettings = () => {
      setIsOpenModalSettings(!isOpenModalSettings);
   };

   const handleOpenModalDelete = () => {
      setIsModalDelete(!isModalDelete);
   };

   return (
      <div className="flex items-center px-7 pt-2">
         <div className="h-[783px] w-[1080px] rounded-2xl shadow-rounded">
            <div className="mt-2 flex flex-col px-10 py-5">
               <h1 className="text-xl font-bold">Account Details</h1>
               <p className="text-[#ABABAB]">Manage you account here</p>
            </div>

            <div className="mt-2 h-[1px] w-full bg-[#ABABAB]/50"></div>

            <div className="flex flex-col px-10 py-14">
               <div className="flex items-center gap-2">
                  <div className="h-10 w-10 rounded-full bg-[#A8A8A8]"></div>

                  <p className="font-semibold">Profile picture</p>
               </div>
            </div>

            <div className="flex w-full flex-col gap-6 px-10">
               <div className="flex w-full items-center gap-10">
                  <div className="flex w-full flex-col items-start gap-1">
                     <p className="text-sm text-[#101010]">First Name</p>
                     <div className="w-full border px-3 text-lg">IAGO</div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-1">
                     <p className="text-sm text-[#101010]">Last Name</p>
                     <div className="w-full border px-3 text-lg">
                        Correia Simoes
                     </div>
                  </div>
               </div>

               <div className="flex w-full flex-col items-start gap-1">
                  <p className="text-sm text-[#101010]">Email</p>
                  <div className="w-full border px-3 font-semibold">
                     IAGOOCSIMOES@GMAIL.COM
                  </div>
               </div>

               <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="flex items-start gap-20">
                     <div className="flex flex-col items-start gap-3">
                        <span className="flex items-center gap-1 text-lg font-light">
                           Recive Email
                           <button
                              onClick={handleOpenModalSettings}
                              type="button"
                              className="cursor-pointer text-[#3F08DD] hover:text-black"
                           >
                              (?)
                           </button>
                           {isOpenModalSettings && (
                              <ModalSettings
                                 handleOpenModalSettings={
                                    handleOpenModalSettings
                                 }
                              />
                           )}
                        </span>
                        <Switch
                           checked={switchValue}
                           onCheckedChange={setSwitchValue}
                        />
                     </div>

                     <div className="flex h-[200px] flex-col items-center gap-2">
                        <span className="text-base font-light">
                           Choose your city
                        </span>

                        <input
                           autoComplete="off"
                           type="text"
                           id="cityInput"
                           value={query}
                           onChange={handleInputChange}
                           placeholder="Enter a city name"
                           className="h-9 w-[278px] border px-4 text-sm"
                        />

                        <div
                           id="suggestions"
                           className="mt-1 max-h-[100px] max-w-[278px] overflow-y-scroll border border-x-gray-100"
                        >
                           {suggestions.map((city, index) => (
                              <div
                                 key={index}
                                 className="suggestion-item"
                                 onClick={() => handleSuggestionClick(city)}
                                 style={{ padding: "8px", cursor: "pointer" }}
                              >
                                 {city.display_name}
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  <div className="flex justify-end">
                     <button
                        type="submit"
                        className="bg-black px-10 py-2 text-white hover:bg-black/80"
                     >
                        Update
                     </button>
                  </div>
               </form>
            </div>

            <div className="mt-8 h-[1px] w-full bg-[#ABABAB]/50"></div>

            <div className="w-full items-center gap-6 px-10 pt-8">
               <button
                  onClick={handleOpenModalDelete}
                  className="text-red-500 hover:text-red-800"
               >
                  Delete Account
               </button>

               {isModalDelete && (
                  <ModalDelete handleOpenModalDelete={handleOpenModalDelete} />
               )}
            </div>
         </div>
      </div>
   );
};

export default Settings;
