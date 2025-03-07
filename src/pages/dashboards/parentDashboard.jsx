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
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-2">Progress</h1>
      <div className="flex space-x-6">
        <div className="flex-shrink-0 w-1/2">
          <Card>
            <CardContent>
              <h2 className="text-lg font-semibold">Your team's progress</h2>
              <br/>
              <div className="grid grid-cols-3 gap-3 mb-2">
                <dl
                  className="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                  <dt
                    className="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">12
                  </dt>
                  <dd className="text-orange-600 dark:text-orange-300 text-sm font-medium">To do</dd>
                </dl>
                <dl
                  className="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                  <dt
                    className="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">23
                  </dt>
                  <dd className="text-teal-600 dark:text-teal-300 text-sm font-medium">In progress</dd>
                </dl>
                <dl
                  className="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
                  <dt
                    className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">64
                  </dt>
                  <dd className="text-blue-600 dark:text-blue-300 text-sm font-medium">Done</dd>
                </dl>
              </div>
            </CardContent>
            <CardContent>
              <div className="py-24.5" id="radial-chart"></div>
            </CardContent>
          </Card>
        </div>
        <div className="flex-1">
          <Card className="col-span-2">
            <CardContent>
              <h2 className="text-lg font-semibold">Overview</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <p><strong>4500</strong> minutes of lesson time</p>
                <p><strong>50</strong> lessons in total</p>
                <p><strong>4</strong> completed courses</p>
                <p><strong>22</strong> solo projects</p>
                <p><strong>10</strong> team projects</p>
                <p><strong>5</strong> classes total</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
