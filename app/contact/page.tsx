import Header from "../components/header";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
   return (
      <>
         <div className="min-h-screen bg-background-contact bg-center">
            <Header />

            <h1 className="flex justify-center pt-20 text-2xl font-bold lg:text-[48px]">
               CONTACT US
            </h1>
            <div className="flex flex-col items-center justify-center gap-8 pt-16 lg:pt-32">
               <button className="flex items-center gap-5 rounded-[9px] bg-[#7102B5] px-5 py-2 text-center font-bold text-white shadow-lg lg:w-[490px] lg:px-3 lg:text-[40px]">
                  <Image
                     src="/discord.png"
                     width={60}
                     height={60}
                     alt="discord"
                     className="hidden lg:block"
                  />

                  <Image
                     src="/discord.png"
                     width={35}
                     height={20}
                     alt="discord"
                     className="lg:hidden"
                  />
                  <p className="">Join our Discord</p>
               </button>
               <button className="flex items-center gap-4 rounded-[9px] bg-[#41253B] px-3 py-2 text-center font-bold text-white shadow-lg lg:w-[490px] lg:gap-5 lg:text-[40px]">
                  <FaGithub className="size-8 lg:size-[58px]" />
                  <p>Follow us on Github</p>
               </button>
               <button className="flex items-center gap-1 rounded-[9px] bg-[#5869FF] px-3 py-2 text-center font-bold text-white shadow-lg lg:gap-5 lg:text-[38px]">
                  <FaLinkedin className="size-8 lg:size-[58px]" />
                  <p className="text-center">Follow us on Linkedin</p>
               </button>
               <button className="flex items-center gap-5 rounded-[9px] bg-[#FFFFFF] px-6 py-2 text-center font-bold shadow-md lg:w-[490px] lg:px-3 lg:text-[40px]">
                  <Image
                     src="/email.png"
                     width={59}
                     height={45.32}
                     alt="email"
                     className="hidden lg:block"
                  />

                  <Image
                     src="/email.png"
                     width={26}
                     height={30}
                     alt="email"
                     className="lg:hidden"
                  />
                  <p>Send us an Email</p>
               </button>
            </div>
         </div>
      </>
   );
};

export default Contact;
