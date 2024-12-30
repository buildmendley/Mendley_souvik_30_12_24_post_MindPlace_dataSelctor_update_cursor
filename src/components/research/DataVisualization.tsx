import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Treatment Effectiveness Comparison',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      title: {
        display: true,
        text: 'Improvement Score (%)',
      },
    },
  },
};

const DataVisualization = () => {
  const data = {
    labels: ['Anxiety', 'Depression', 'Stress', 'Overall Wellbeing'],
    datasets: [
      {
        label: 'Traditional Therapy',
        data: [65, 59, 80, 81],
        backgroundColor: '#48BB78',
      },
      {
        label: 'AI-Assisted Therapy',
        data: [63, 60, 82, 83],
        backgroundColor: '#2A4365',
      },
    ],
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <Bar options={options} data={data} />
    </div>
  );
};

export default DataVisualization;