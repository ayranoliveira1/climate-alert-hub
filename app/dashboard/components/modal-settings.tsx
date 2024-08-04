interface ModalSettingsProps {
   handleOpenModalSettings: () => void;
}

const ModalSettings = ({ handleOpenModalSettings }: ModalSettingsProps) => {
   return (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
         <div className="relative h-[502px] w-[643px] space-y-1 bg-white p-5 shadow-rounded">
            <h1 className="px-1 pt-2 font-bold">What&apos;s recive E-mail?</h1>
            <div className="space-y-5 text-sm">
               <p>
                  Our app sends a daily email with weather information to help
                  you start your day well informed. Each morning you will
                  receive a summary of current weather conditions, including
                  temperature, humidity and wind speed.
               </p>
               <p>
                  Additionally, the email includes alerts about any extreme
                  weather conditions that may affect your area, such as storms
                  or heat waves, so you can prepare accordingly.
               </p>
               <p>
                  To make your day more enjoyable, we provide personalized tips
                  based on the day&apos;s weather. For example, if it&apos;s
                  raining, you might get suggestions to bring an umbrella or
                  adapt your activities to the weather.
               </p>
               <p>
                  Emails are sent daily and also offer links to access more
                  details and forecasts specific to your area. This way, you can
                  better plan your activities and always stay one step ahead of
                  the weather conditions.
               </p>
               <p>
                  If you have any questions or need help, our team is on hand to
                  ensure you have the best possible experience with our service.
               </p>
            </div>
            <button
               onClick={handleOpenModalSettings}
               className="absolute bottom-5 right-5 flex items-center justify-center bg-black px-4 py-1 text-lg text-white hover:bg-black/80"
            >
               OK
            </button>
         </div>
      </div>
   );
};

export default ModalSettings;
