"use client";

import { ModeToggle } from "@/app/components/mode-toogle";
import { PiBellBold } from "react-icons/pi";

const HeaderDashboard = ({
   onCountryChange,
}: {
   onCountryChange: (value: string) => void;
}) => {
   return (
      <header className="absolute top-0 flex h-16 w-full items-center justify-between border-b px-[46px]">
         <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-[#A8A8A8]"></div>

            <p className="text-sm">USERNAME</p>
         </div>
         <div className="text-3xl drop-shadow-lg">Climate Alert Hub</div>
         <div className="flex items-center gap-20">
            <div className="rounded-xl bg-[#eeeeeeb4] px-2 py-1 shadow-shape">
               <select
                  name="location"
                  id="location"
                  className="w-[90px] bg-[#eeeeeeb4] text-sm text-[#666666] focus:border-none"
                  onChange={(e) => onCountryChange(e.target.value)}
               >
                  <option value="BR">Brasil</option>
                  <option value="US">Estados Unidos</option>
                  <option value="CA">Canada</option>
                  <option value="MX">Mexico</option>
               </select>
            </div>

            <div className="flex items-center gap-10">
               <button className="text-sm">
                  <PiBellBold className="size-7" />
               </button>

               <ModeToggle />
            </div>
         </div>
      </header>
   );
};

export default HeaderDashboard;
