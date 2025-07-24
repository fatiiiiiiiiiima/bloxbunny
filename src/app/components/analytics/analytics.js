"use client"
import React, { useEffect,useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const Analytics = ({ gamedata, activeFilter }) => {
  
  const labels = gamedata.Data?.map(item => new Date(item.Date).toLocaleDateString());
  console.log('Received gamedata:', gamedata);
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

  let dataset = [];
  switch (activeFilter) {
    case 'Visits':
      dataset = gamedata.Data?.map(item => item.Visits);
      break;
    case 'Revenue':
      dataset = gamedata.Data?.map(item => item.MaxRevenue + item.MinRevenue);
      break;
    case 'Users':
      dataset = gamedata.Data?.map(item => item.CCU);
      break;
    case 'Favorites':
      dataset = gamedata.Data?.map(item => item.Favorites);
      break;
    default:
      dataset = gamedata.Data?.map(item => item.Visits);;
  }

  
  const data = {
    labels: labels,
    datasets: [
      {
        label: activeFilter,
        data: dataset,
        fill: false,
        backgroundColor: '#347AE2',
        borderColor: '#347AE2',  // Line color
        borderWidth: 2,  // Adjust the line width as needed
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
        usePointStyle: true,
        backgroundColor: '#ffffff', // Setting tooltip background to white
        titleColor: '#000',         // Setting tooltip title color to black
        bodyColor: '#000',          // Setting tooltip body text color to black
        borderColor: '#e0e0e0',     // Optional: Tooltip border color
        borderWidth: 1,             // Optional: Tooltip border width
        // Customize the tooltip further if needed
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat().format(context.parsed.y);
            }
            return label;
          }
        }
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
        grid: {
          drawOnChartArea: false, // Disable vertical lines
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  return <Line key={windowWidth} data={data} options={options} />;
};

export default Analytics;
