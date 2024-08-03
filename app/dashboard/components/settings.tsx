import { Switch } from "@/app/components/ui/switch";
import { FormEvent, useState } from "react";

const Settings = () => {
   const [switchValue, setSwitchValue] = useState<boolean>(false);
   const [isCountry, setIsCountry] = useState<string>();
   const [isState, setIsState] = useState<string>();
   const [isCity, setIsCity] = useState<string>();

   const handleSwitchCheck = (evet: FormEvent) => {
      evet.preventDefault();
      console.log(switchValue, isCountry, isState, isCity);
   };

   return (
      <div className="flex items-center justify-between pt-10">
         <div className="h-[683px] w-[872px] rounded-2xl shadow-rounded">
            <div className="mt-2 flex flex-col px-10 py-5">
               <h1 className="text-xl font-bold">Account Details</h1>
               <p className="text-[#ABABAB]">Manage you account here</p>
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

               <form
                  onSubmit={handleSwitchCheck}
                  className="flex flex-col gap-20"
               >
                  <div className="flex items-center gap-5">
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

                     <div className="flex flex-col items-center gap-2">
                        <span className="text-lg font-light">Country</span>

                        <div className="rounded-xl px-2 py-1 shadow-shape">
                           <select
                              onChange={(e) => setIsCountry(e.target.value)}
                              name="country"
                              id="country"
                              className="w-[90px] text-sm text-[#666666] focus:border-none"
                           >
                              <option value=""></option>
                              <option value="brasil">Brasil</option>
                              <option value="estados unidos">
                                 Estados Unidos
                              </option>
                              <option value="russia">Russia</option>
                              <option value="filipinas">Filipinas</option>
                              <option value="mocambique">Moçambique</option>
                           </select>
                        </div>
                     </div>

                     <div className="flex flex-col items-center gap-2">
                        <span className="text-lg font-light">State</span>

                        <div className="rounded-xl px-2 py-1 shadow-shape">
                           <select
                              onChange={(e) => setIsState(e.target.value)}
                              name="state"
                              id="state"
                              className="w-[90px] text-sm text-[#666666] focus:border-none"
                           >
                              <option value=""></option>
                              <option value="BR">Brasil</option>
                              <option value="US">Estados Unidos</option>
                              <option value="RU">Russia</option>
                              <option value="PH">Filipinas</option>
                              <option value="MZ">Moçambique</option>
                           </select>
                        </div>
                     </div>

                     <div className="flex flex-col items-center gap-2">
                        <span className="text-lg font-light">City</span>

                        <div className="rounded-xl px-2 py-1 shadow-shape">
                           <select
                              onChange={(e) => setIsCity(e.target.value)}
                              name="city"
                              id="city"
                              className="w-[90px] text-sm text-[#666666] focus:border-none"
                           >
                              <option value=""></option>
                              <option value="BR">Brasil</option>
                              <option value="US">Estados Unidos</option>
                              <option value="RU">Russia</option>
                              <option value="PH">Filipinas</option>
                              <option value="MZ">Moçambique</option>
                           </select>
                        </div>
                     </div>
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
   );
};

export default Settings;
