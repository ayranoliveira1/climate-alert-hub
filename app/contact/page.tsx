import Header from "../components/header";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
   return (
      <>
         <div className="min-h-screen bg-background-contact bg-center">
            <Header />

            <h1 className="flex justify-center pt-20 text-[48px] font-bold">
               CONTACT US
            </h1>
            <div className="flex flex-col items-center justify-center gap-8 pt-32">
               <button className="flex w-[490px] items-center gap-5 rounded-[9px] bg-[#7102B5] px-3 py-2 text-center text-[40px] font-bold text-white shadow-lg">
                  <Image
                     src="/discord.png"
                     width={60}
                     height={60}
                     alt="discord"
                     className="h-[60px] w-[60px]"
                  />
                  <p className="">Join our Discord</p>
               </button>
               <button className="flex w-[490px] items-center gap-5 rounded-[9px] bg-[#41253B] px-3 py-2 text-center text-[40px] font-bold text-white shadow-lg">
                  <FaGithub size={50} />
                  <p>Follow us on Github</p>
               </button>
               <button className="flex items-center gap-5 rounded-[9px] bg-[#5869FF] px-3 py-2 text-center font-bold text-white shadow-lg">
                  <FaLinkedin size={50} />
                  <p className="flex text-center text-[38px]">
                     Follow us on Linkedin
                  </p>
               </button>
               <button className="flex w-[490px] items-center gap-5 rounded-[9px] bg-[#FFFFFF] px-3 py-2 text-center text-[40px] font-bold shadow-md">
                  <Image
                     src="/email.png"
                     width={59}
                     height={45.32}
                     alt="email"
                     className="h-[45.32px] w-[59px]"
                  />
                  <p>Send us an Email</p>
               </button>
            </div>
         </div>
      </>
   );
};

export default Contact;
