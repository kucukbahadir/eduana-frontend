import React from "react";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const Chart = () => {
    const data = {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [
            {
                label: "Users this week",
                data: [12000, 19000, 32000, 21000, 26000],
                borderColor: "#3B82F6",
                fill: false,
                tension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false
    };

    return (
        <div style={{width: "100%", height: "300px"}}>
            <Line data={data} options={options}/>
        </div>
    );
};

export default Chart;
