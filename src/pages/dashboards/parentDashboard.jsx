import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import Card, { CardContent } from "../../components/Card.jsx";

const Dashboard = () => {
  const getChartOptions = () => {
    return {
      series: [90, 85, 70],
      colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
      chart: {
        height: "350px",
        width: "100%",
        type: "radialBar",
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          track: {
            background: "#E5E7EB"
          },
          dataLabels: {
            show: false
          },
          hollow: {
            margin: 0,
            size: "32%"
          }
        }
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -23,
          bottom: -20
        }
      },
      labels: ["Done", "In progress", "To do"],
      legend: {
        show: true,
        position: "bottom",
        fontFamily: "Inter, sans-serif"
      },
      tooltip: {
        enabled: true,
        x: {
          show: false
        }
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function(value) {
            return value + "%";
          }
        }
      }
    };
  };

  useEffect(() => {
    const chartElement = document.getElementById("radial-chart");
    if (chartElement && !chartElement.chart) {
      const chart = new ApexCharts(chartElement, getChartOptions());
      chart.render();
      chartElement.chart = chart;
    }
  }, []);

  const skills = [
    { skill: "Scratch", width: "w-full" },
    { skill: "HTML5", width: "w-3/4" },
    { skill: "JavaScript", width: "w-1/2" },
    { skill: "Python", width: "w-1/4" }
  ];

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Progress</h1>
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="w-full lg:w-1/2">
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold">Your team's progress</h2>
              <div className="grid grid-cols-3 gap-3 mb-2">
                {["To do", "In progress", "Done"].map((status, index) => (
                  <dl key={index}
                      className="bg-gray-200 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                    <dt
                      className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 text-sm font-medium flex items-center justify-center mb-1">{[12, 23, 64][index]}</dt>
                    <dd className="text-gray-700 dark:text-gray-300 text-sm font-medium">{status}</dd>
                  </dl>
                ))}
              </div>
            </CardContent>
            <CardContent>
              <div className="py-24.5" id="radial-chart"></div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:flex-1">
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold">Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["4500 minutes of lesson time", "50 lessons in total", "4 completed courses", "22 solo projects", "10 team projects", "5 classes total"].map((text, index) => (
                  <p key={index}><strong>{text.split(" ")[0]}</strong> {text.split(" ").slice(1).join(" ")}</p>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardContent>
              <h2 className="text-lg font-semibold">Programming skills</h2>
              {skills.map(({ skill, width }, index) => (
                <div key={index} className="mb-3">
                  <p className="text-gray-700 font-medium mb-1">{skill}</p>
                  <div className="w-full bg-gray-300 h-2 rounded-full">
                    <div className={`bg-blue-500 h-2 rounded-full ${width}`}></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
