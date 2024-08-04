import { Switch } from "@/app/components/ui/switch";
import { FormEvent, useState } from "react";
import ModalSettings from "./modal-settings";

const Settings = () => {
   const [switchValue, setSwitchValue] = useState<boolean>(false);
   const [isCountry, setIsCountry] = useState<string>();
   const [isOpenModalSettings, setIsOpenModalSettings] =
      useState<boolean>(false);

   const handleSwitchCheck = (evet: FormEvent) => {
      evet.preventDefault();
      console.log(switchValue, isCountry);
   };

   const handleOpenModalSettings = () => {
      setIsOpenModalSettings(!isOpenModalSettings);
   };

   return (
      <div className="flex items-center pt-2">
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

               <form
                  onSubmit={handleSwitchCheck}
                  className="flex flex-col gap-36"
               >
                  <div className="flex items-center gap-20">
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

                     <div className="flex flex-col items-center gap-2">
                        <span className="text-base font-light">
                           Choose your city
                        </span>

                        <input
                           onChange={(e) => setIsCountry(e.target.value)}
                           name="country"
                           id="country"
                           placeholder="Ex.: Salvador"
                           className="h-9 w-[278px] border px-4 text-sm"
                        />
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
               <button className="text-red-500 hover:text-red-800">
                  Delete Account
               </button>
            </div>
         </div>
      </div>
   );
};

export default Settings;
