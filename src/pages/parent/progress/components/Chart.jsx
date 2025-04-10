import React from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import { ArrowUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Chart({ student }) {
  const total = student.progress.todo + student.progress.inProgress + student.progress.done;

  const chartData = [
    { progress: "todo", tasks: student.progress.todo, fill: "var(--color-chart-3)" },
    { progress: "inProgress", tasks: student.progress.inProgress, fill: "var(--color-chart-2)" },
    { progress: "done", tasks: student.progress.done, fill: "var(--color-chart-1)" },
  ];

  const chartConfig = {
    tasks: {
      label: "Tasks",
    },
    todo: {
      label: "To do",
    },
    inProgress: {
      label: "In progress",
    },
    done: {
      label: "Done",
    },
  };

  return (
    <ChartContainer config={chartConfig} className={"aspect-square my-[-2rem]"}>
      <RadialBarChart
        data={chartData}
        startAngle={90}
        endAngle={450}
        innerRadius={"30%"}
        barCategoryGap={"10%"}
      >
        <PolarAngleAxis type="number" domain={[0, total]} tick={false} axisLine={false} radius={200} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent nameKey="progress" />} />
        <RadialBar dataKey="tasks" animationDuration={1000} animationEasing={"ease"} background />
      </RadialBarChart>
    </ChartContainer>
  );
}

export default Chart;