"use client";

import { ModeToggle } from "@/app/components/mode-toogle";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PiBellBold } from "react-icons/pi";

interface HeaderProps {
   onCountryChange: (value: string) => void;
}

interface UserProfile {
   firstName: string;
   lastName: string;
   photoUrl: string;
   email: string;
   reciveEmail: boolean;
   city: string | null;
   state: string | null;
   country: string;
   isNewUser: boolean;
}

const HeaderDashboard = ({ onCountryChange }: HeaderProps) => {
   useEffect(() => {
      const local = JSON.parse(localStorage.getItem("user") as string);
      setUser(local);
   }, []);

   const [user, setUser] = useState<UserProfile | null>({
      firstName: "string",
      lastName: "string",
      photoUrl: "/discord.png",
      email: "string",
      reciveEmail: true,
      city: "string or null",
      state: "string or null",
      country: "brazil",
      isNewUser: true,
   });

   if (!user) return;

   return (
      <header className="absolute top-0 flex h-16 w-full items-center justify-between border-b px-[46px]">
         <div className="flex items-center gap-2">
            <Image
               src={user?.photoUrl}
               alt="profile"
               width={30}
               height={30}
               className="rounded-full"
            />

            <p className="text-sm">{user?.firstName}</p>
         </div>

         <div className="text-3xl drop-shadow-lg">Climate Alert Hub</div>
         <div className="flex items-center gap-20">
            <div className="rounded-xl px-2 py-1 shadow-shape">
               <select
                  name="location"
                  id="location"
                  className="w-[90px] text-sm text-[#666666] focus:border-none"
                  onChange={(e) => onCountryChange(e.target.value)}
               >
                  <option value="BR">Brasil</option>
                  <option value="US">Estados Unidos</option>
                  <option value="RU">Russia</option>
                  <option value="PH">Filipinas</option>
                  <option value="MZ">Moçambique</option>
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
