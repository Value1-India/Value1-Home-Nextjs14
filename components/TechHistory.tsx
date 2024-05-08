"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: false,
    },
  },
};

const labels = [
     2022, 2023, 2024, 2025, 2026, 2027
];

const amounts = [
    0, 5, 21
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Growth',
      data: amounts,
      borderColor: 'rgb(250, 187, 4)',
      backgroundColor: 'rgba(250, 187, 4, 0.9)',
    }
  ],
};

export function TechHistory() {
  return <Line options={options} data={data} />;
}
