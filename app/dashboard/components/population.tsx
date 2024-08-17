import { Country } from "@/app/types/country";
import { useEffect, useState } from "react";

const PopulationPage = () => {
   const [countries, setCountries] = useState<Country[]>([]);

   useEffect(() => {
      async function fetchPopulationData() {
         try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();

            if (!data) {
               console.error("Error fetching population data");
               return;
            }

            const countriesData: Country[] = data.map((country: any) => ({
               name: country.name.common,
               population: country.population,
               flag: country.flags.svg,
            }));

            countriesData.sort((a, b) => b.population - a.population);

            setCountries(countriesData);
         } catch (error) {
            console.error("Error fetching population data:", error);
         }
      }

      fetchPopulationData();
   }, []);

   return (
      <div className="flex w-full flex-col gap-2">
         <h1 className="font-semibold">Most Population Countries</h1>
         <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <tbody>
               {countries.slice(0, 28).map((country) => (
                  <tr key={country.name}>
                     <td>
                        <img
                           className="h-auto w-[30px]"
                           src={country.flag}
                           alt={`${country.name} flag`}
                        />
                     </td>
                     <td className="pr-24">{country.name}</td>
                     <td>{country.population.toLocaleString()}</td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default PopulationPage;
