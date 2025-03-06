import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

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
    if (chartElement && typeof ApexCharts !== "undefined") {
      const chart = new ApexCharts(chartElement, getChartOptions());
      chart.render();
    }
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div id="radial-chart"></div>
    </div>
  );
};

export default Dashboard;
