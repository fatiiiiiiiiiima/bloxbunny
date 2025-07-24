"use client"
import { Line } from 'react-chartjs-2';
import React, { useEffect,useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, BarController,Title, Tooltip, Legend, Filler } from 'chart.js/auto';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AnalyticsChart = () => {

    const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      if (typeof window !== "undefined") {
        window.addEventListener('resize', handleResize);
      }
  
      return () => {
        if (typeof window !== "undefined") {
          window.removeEventListener('resize', handleResize);
        }
      };
    }, []);
  

    const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        type: 'line',
        label: 'Dataset 1',
        borderColor: '#347AE2',
        borderWidth: 2,
        fill: false,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        type: 'line',
        label: 'Dataset 2',
        borderColor: '#FF9500',
        borderWidth: 2,
        fill: false,
        data: [40, 60, 55, 75, 50, 70, 30],
      },
      {
        type: 'bar',
        label: 'Dataset 3',
        backgroundColor: '#E6EDFF',
        data: [30, 20, 50, 40, 60, 30, 80],
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  };

  return <Line key={windowWidth} data={data} options={options} />;
};

export default AnalyticsChart;