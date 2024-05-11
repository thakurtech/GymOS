import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';

function MyChartComponent(props) {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current.chartInstance;
        chartInstance.destroy();
      }
    };
  }, []);

  return <Line ref={chartRef} data={props.data} options={props.options} />;
}
const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'Number of Gym Members',
      data: [100, 120, 150, 180],
      fill: false,
      backgroundColor: 'rgb(75, 192, 192)',
      borderColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Number of Gym Members Over Time</h1>
    </div>
    <Line data={data} />
  </>
);

export default LineChart;