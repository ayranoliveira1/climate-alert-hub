import { FaCircle } from "react-icons/fa";
import imagemBoneco from "../../Public/photo_5003499371148455309_x.jpg";
import Image from "next/image";
import Header from "../components/header";
const About = () => {
   return (
      <>
         <Header />
         <h2 className="flex justify-center pt-5 text-[48px] font-bold">
            ABOUT US
         </h2>

         <section className="flex items-center justify-center gap-10">
            <Image
               src={imagemBoneco}
               alt="Boneco"
               className="h-[351px] w-[351px]"
            />
            <div>
               <h5 className="text-[30px] font-bold">Our mission</h5>
               <p className="text-[#8C8C8C]">
                  Our mission is to empower individuals and communities around
                  the <br /> world with essential weather information and timely
                  warnings, <br /> helping them make informed decisions and
                  prepare for severe <br /> weather events. We believe that,
                  with the right tools and resources, it <br /> is possible to
                  mitigate the impacts of climate change and promote <br />{" "}
                  greater safety and well-being.
               </p>
            </div>
         </section>

         <section className="flex items-center justify-center">
            <div className="flex flex-col text-center">
               <h5 className="text-[30px] font-bold">What we do</h5>
               <p className="text-[20px] text-[#8C8C8C]">
                  Climate Hub Alert offers a comprehensive range of features for{" "}
                  <br /> monitoring and managing climate conditions, including:
               </p>
            </div>
         </section>

         <section className="flex justify-center gap-5 pt-8">
            <div className="flex flex-col gap-7">
               <p className="flex items-center gap-5 text-[#8C8C8C]">
                  <FaCircle className="text-black" />
                  Real-Time Monitoring: We provide up-to-date data on <br />{" "}
                  temperature, humidity, air quality and other essenti al <br />{" "}
                  weather conditions.
               </p>
               <p className="flex items-center gap-5 text-[#8C8C8C]">
                  <FaCircle className="text-black" />
                  Interactive Maps and Visualizations: Explore interactive{" "}
                  <br /> maps that show risk areas and impact predictions.
               </p>
            </div>

            <div className="flex flex-col gap-7">
               <p className="flex items-center gap-5 text-[#8C8C8C]">
                  <FaCircle className="text-black" />
                  Custom Alerts: Our technology allows you to set up <br />{" "}
                  custom alerts for extreme weather events such as <br />{" "}
                  storms, heat waves and floods.{" "}
               </p>
               <p className="flex items-center gap-5 text-[#8C8C8C]">
                  <FaCircle className="text-black" />
                  Analytics and Reporting: Get detailed insights into the <br />{" "}
                  impact of climate change and the effectiveness of response{" "}
                  <br /> measures through customizable reports and dashboards.
               </p>
            </div>
         </section>
      </>
   );
};

export default About;
