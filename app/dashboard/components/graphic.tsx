"use client";

import {
   ChartConfig,
   ChartContainer,
   ChartTooltip,
   ChartTooltipContent,
} from "@/app/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
   After: {
      label: "After",
      color: "#000000",
   },
   Last: {
      label: "Last",
      color: "#E6E8EC",
   },
} satisfies ChartConfig;

export function Graphic({
   cities,
}: {
   cities: { name: string; After: number; Last: number }[];
}) {
   const chartData = cities.map((city) => ({
      city: city.name,
      After: city.After,
      Last: city.Last,
   }));
   console.log(chartData);
   return (
      <ChartContainer config={chartConfig} className="h-[300px] w-full">
         <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
               dataKey="city"
               tickLine={false}
               tickMargin={10}
               axisLine={false}
               tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="After" fill="#000000" radius={4} />
            <Bar dataKey="Last" fill="#E6E8EC" radius={4} />
         </BarChart>
      </ChartContainer>
   );
}
