import { UserProfile } from "@/app/types/use-profile";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ModalDeleteProps {
   handleOpenModalDelete: () => void;
}

const ModalSettings = ({ handleOpenModalDelete }: ModalDeleteProps) => {
   const [sessin, setSession] = useState<UserProfile | null>(
      JSON.parse(localStorage.getItem("user") || "{}"),
   );

   const router = useRouter();

   const deleteUser = async () => {
      const token = localStorage.getItem("jwt");

      const response = await fetch(
         "https://climate-alert-hub.onrender.com/auth/me",
         {
            method: "DELETE",
            headers: {
               authorization: `Bearer ${token}`,
            },
         },
      );

      if (!response.ok) {
         console.log("Erro ao deletar conta:", response.statusText);
      }

      handleLogout();

      window.location.href = "/login";
   };

   useEffect(() => {
      if (!sessin) {
         localStorage.removeItem("jwt");
         localStorage.removeItem("user");
         router.push("/login");
      }
   }, [sessin, router]);

   const handleLogout = () => {
      setSession(null);
   };

   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
         <div className="relative h-[180px] w-[443px] bg-white px-5 py-3 shadow-rounded">
            <h1 className="px-3 font-bold">Delete account</h1>

            <div className="mt-6 flex px-3 text-sm">
               Are you sure you want to delete your account? You will no longer
               receive emails about the weather
            </div>

            <div className="absolute bottom-5 right-5 flex items-center gap-4">
               <button
                  onClick={deleteUser}
                  className="flex items-center justify-center border px-4 py-1"
               >
                  Yes
               </button>

               <button
                  onClick={handleOpenModalDelete}
                  className="flex items-center justify-center bg-black px-5 py-1 text-white"
               >
                  No
               </button>
            </div>
         </div>
      </div>
   );
};

export default ModalSettings;
