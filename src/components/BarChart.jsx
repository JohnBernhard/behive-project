// src/components/BarChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Vendas em R$',
      data: [12000, 19000, 3000, 5000, 20000, 15000],
      backgroundColor: 'rgba(0, 123, 255, 0.7)',
    }]
  };
  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Vendas nos Últimos 6 Meses',
      },
    },
  };

  return (
    <div className="card shadow-sm h-100">
        <div className="card-body">
            <div style={{ height: '300px' }}> {/* Contêiner para definir a altura */}
                <Bar options={options} data={data} />
            </div>
        </div>
    </div>
  );
};

export default BarChart;