// // import React from 'react';
// // import { Doughnut } from 'react-chartjs-2';
// // import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// // ChartJS.register(ArcElement, Tooltip, Legend);

// // const DoughnutChart = () => {
// //   const data = {
// //     labels: ['Category 1', 'Category 2', 'Category 3'],
// //     datasets: [
// //       {
// //         data: [60, 25, 15], // Example data
// //         backgroundColor: ['#4CAF50', '#FFC107', '#F44336'], // Colors
// //         hoverBackgroundColor: ['#66BB6A', '#FFD54F', '#E57373'], // Hover colors
// //         borderWidth: 0,
// //       },
// //     ],
// //   };

// //   const options = {
// //     cutout: '70%',
// //     plugins: {
// //       tooltip: {
// //         enabled: false,
// //       },
// //       legend: {
// //         display: false,
// //       },
// //     },
// //   };

// //   return (
// //     <>
// //     <div className='flex flex-row justify-center items-center'>
// //   {/* first graph */}
  

// //   <div className="flex items-center justify-center bg-black w-[350px] h-[350px]">
// //       <div className="relative w-74 h-64">
// //         <Doughnut data={data} options={options} />
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <h2 className="text-4xl font-semibold">9659</h2>
// //         </div>
// //       </div>
// //     </div>
  
    
// //     {/* 2nd graph */}
// //     <div className="flex items-center justify-center h-screen">
// //       <div className="relative w-74 h-64">
// //         <Doughnut data={data} options={options} />
// //         <div className="absolute inset-0 flex items-center justify-center">
// //           <h2 className="text-4xl font-semibold">9659</h2>
// //         </div>
// //       </div>
// //     </div>

// //     </div>
  
// //     </>
// //   );
// // };

// // export default DoughnutChart;
// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Home2 = () => {
//   const data = {
//     labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'], // Labels for each part
//     datasets: [
//       {
//         data: [44, 55, 41, 17, 15], // Your provided series data
//         backgroundColor: ['#4CAF50', '#FFC107', '#F44336', '#FF5722', '#9C27B0'], // Colors for each segment
//         hoverBackgroundColor: ['#66BB6A', '#FFD54F', '#E57373', '#FF7043', '#AB47BC'], // Hover colors for each segment
//         borderWidth: 0,
//       },
//     ],
//   };

//   const options = {
//     cutout: '80%',
//     plugins: {
//       tooltip: {
//         enabled: false,
//       },
//       legend: {
//         display: false,
//       },
//     },
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="relative w-64 h-64">
//         <Doughnut data={data} options={options} />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h2 className="text-4xl font-semibold">172</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home2;



import React, { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import 'tailwindcss/tailwind.css';

const DonutCharts = () => {
  const data1 = {
    labels: ['Connected', 'Not Connected'],
    datasets: [
      {
        data: [2, 2],
        backgroundColor: ['#4A90E2', '#C0D3EB'],
        hoverBackgroundColor: ['#3b82f6', '#93c5fd'],
        borderWidth: 0,
      },
    ],
  };

  const data2 = {
    labels: ['Failed', 'Warning', 'Not available', 'Passed'],
    datasets: [
      {
        data: [1699, 681, 36, 7235],
        backgroundColor: ['#ff4d4f', '#ffc107', '#ffecb3', '#4CAF50'],
        hoverBackgroundColor: ['#ff7875', '#ffcd38', '#ffd966', '#66bb6a'],
        borderWidth: 0,
      },
    ],
  };

  const options1 = {
    cutout: '65%', // Adjusted to match the thickness of the chart
    plugins: {
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: true,
        color: '#000',
        font: {
          size: 12,
        },
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
      },
      beforeDraw: (chart) => {
        const { ctx, chartArea: { width, height } } = chart;

        ctx.save();
        ctx.font = 'bold 10px Arial';
        ctx.fillStyle = '#000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('2 Total', width / 2, height / 2);
        ctx.restore();
      },
    },
  };

  const options2 = {
    cutout: '75%',
    plugins: {
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: true,
        color: '#000',
        font: {
          size: 5,
        },
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
      },
      beforeDraw: (chart) => {
        // const { ctx, chartArea: { width, height } } = chart;

        ctx.save();
        // ctx.font = 'bold 18px Arial';
        // ctx.fillStyle = '#000';
        // ctx.textAlign = 'center';
        // ctx.textBaseline = 'middle';
        // ctx.fillText('9659 Total', width / 1, height / 1);
        // ctx.restore();
      },
    },
  };

  return (
    <div className="flex justify-center space-x-8">
      <div className="w-1/4">
        <Doughnut data={data1} options={options1} />
      </div>
      <div className="w-1/4">
        <Doughnut data={data2} options={options2} />
      </div>
    </div>
  );
};

export default DonutCharts;
