import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const context = chartRef.current.getContext('2d');
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    }

    const ctx = chartRef.current.getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.labels,
        datasets: [
          {
            label: 'Line',
            data: data.values,
            fill: false,
            borderColor: '#6592E6', // Set line color to blue
            tension: 0.1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              fontSize: 10,
            },
          },
          y: {
            ticks: {
              fontSize: 10,
            },
          },
        },
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
          },
        },
      },
    });

    return () => {
      newChart.destroy();
    };
  }, [data]);

  return (
    <div style={{ width: '90%', maxWidth: '750px', padding: '0 15px' }}>
      <canvas ref={chartRef} style={{ width: '100%', height: '300px' }} />
    </div>
  );
};

export default LineChart;
