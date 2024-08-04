import { IoClose } from "react-icons/io5";

interface ModalNewsProps {
   news: Array<{ title: string; url: string; description: string }>;
   handleOpenNews: () => void;
}
const ModalNews = ({ news, handleOpenNews }: ModalNewsProps) => {
   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
         <div className="relative h-[602px] w-[743px] bg-white p-5 shadow-rounded">
            <h1 className="px-3 pt-2 font-bold">All news</h1>

            <div className="mt-5 flex max-h-[500px] flex-col gap-5 overflow-y-scroll px-3 scrollbar scrollbar-track-transparent scrollbar-thumb-black">
               {news.length > 0 &&
                  news.map((item) => (
                     <div
                        key={item.title}
                        className="flex w-[650px] flex-col gap-1 rounded-xl border border-black/50 py-5 pl-5 pr-5"
                     >
                        <h1 className="font-semibold">
                           <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#5200FF]"
                           >
                              Tittle: {item.title}
                           </a>
                        </h1>

                        <p className="w-[540px] overflow-y-hidden text-sm">
                           {item.description}
                        </p>
                     </div>
                  ))}
            </div>

            <button
               onClick={handleOpenNews}
               className="absolute right-5 top-5 flex items-center justify-center rounded-full bg-black px-1 py-1"
            >
               <IoClose className="size-4 text-white" />
            </button>
         </div>
      </div>
   );
};

export default ModalNews;
