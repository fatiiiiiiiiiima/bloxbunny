"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const MultiRingChart = () => {
  const thickness = 20; // Thickness of each ring
  const dataValues = [60, 40, 80]; // Example data values for each dataset
  const totalValue = 100; // Total value representing 100% of a ring
  const colors = ['#347AE2', '#FF9500', '#34C759'];
  const legs = ['offline','online','both'];
  const data = {
    datasets: dataValues.reverse().map((value, index) => {
      const cutoutPercentage = 80 - index * thickness ;
      return {
        label: legs[index],
        data: [value, totalValue - value],
        backgroundColor: [
          colors[index], // Color for the filled part
          'rgba(211, 214, 219, 0.5)' // Light grey for the unfilled part #34C759
    ],
        borderColor: [
          'rgba(0, 0, 0, 0)', // Hide the border by making it transparent
        ],
        borderWidth: 1,
        cutout: `${cutoutPercentage}%`,
        // spacing: 4 // Adjust the spacing to create gaps between rings
      };
    }),
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          boxWidth: 100,
          usePointStyle: true,
          padding: 20,
        }
      },
      tooltip: {
        enabled: true,
      },
    },
    cutout: '50%',
    rotation: 180,
    circumference: 360,
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 20 // Adjust this value to prevent cutting off
      }
    }
  };
  

  return <Doughnut data={data} options={options} />;
};

export default MultiRingChart;
