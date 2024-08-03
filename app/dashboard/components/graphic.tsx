"use client";

import {
   ChartConfig,
   ChartContainer,
   ChartTooltip,
   ChartTooltipContent,
} from "@/app/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
   { city: "São Paulo", After: 51, Last: 29 },
   { city: "Rio de Janeiro", After: 42, Last: 56 },
   { city: "Salvador", After: 49, Last: 25 },
   { city: "Santa Catarina", After: 36, Last: 49 },
   { city: "Brasilia", After: 57, Last: 43 },
];

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

export function Graphic() {
   return (
      <ChartContainer config={chartConfig} className="min-h-[280px] w-full">
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
