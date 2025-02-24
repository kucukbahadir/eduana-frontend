import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const studentProgressData = [
    {lesson: 'Scratch', progress: 75},
    {lesson: 'Microbits', progress: 45},
    {lesson: 'Unity', progress: 60},
    {lesson: 'Lego WeDo 2.0', progress: 85},
];

const chartData = {
    labels: studentProgressData.map((data) => data.lesson),
    datasets: [
        {
            label: 'Progress',
            data: studentProgressData.map((data) => data.progress),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        },
    ],
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: {position: 'top'},
        tooltip: {
            callbacks: {
                label: function (tooltipItem) {
                    return tooltipItem.raw + '%';
                },
            },
        },
    },
};

function StudentDashboard() {
    return (
        <div className="min-h-screen max-w-5xl mx-auto mt-8">
            <div className="mb-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-primary">Student Progress Dashboard</h1>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Progress Overview</h2>
                <Bar data={chartData} options={chartOptions}/>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
                {studentProgressData.map((data, index) => (
                    <div key={index} className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">{data.lesson} Progress</h2>
                        <div className="w-full bg-gray-200 rounded-full h-4">
                            <div
                                className="bg-blue-500 h-4 rounded-full"
                                style={{width: `${data.progress}%`}}
                            ></div>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">how good you are: {data.progress}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StudentDashboard;
