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
  scales:{
    x:{
      grid:{
        display: true,
        color: 'white'
      },
      border :{
        color: "white"
      },
      ticks:{
        color: 'white'
      }
    },
    y: {
      grid:{
        display: true,
        color: 'white'
      },
      border :{
        color: "white"
      },
      ticks:{
        color: 'white'
      },
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      max: 110
    }
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'bottom' as const,
    },
    title: {
      display: false,
    },
  },
};

const labels = [
  2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034
];

const amounts = [
  0, 5, 21
];

export const data = {
  labels: labels,
  datasets: [
    {
      label: 'Growth',
      data: amounts,
      borderColor: 'rgb(250, 187, 4)',
      backgroundColor: 'rgba(250, 187, 4)',
    }
  ],
};

export function TechHistory() {
  return <Line options={options} data={data} className='h-full w-auto' />;
}
