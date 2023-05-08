import React from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ expenseValue, revenueValue, soldActualValue }) => {
  const chartRef = React.useRef(null);

  React.useEffect(() => {
    let chart = null;
    if (chartRef && chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      chart = new Chart(chartRef.current, {
        type: 'doughnut',
        data: {
          labels: ['Expenses', 'Revenue', 'Current Balance'],
          datasets: [
            {
              label: 'Data',
              data: [expenseValue, revenueValue, soldActualValue],
              backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [expenseValue, revenueValue, soldActualValue]);

  return <canvas ref={chartRef} style={{ width: "500px", height: "500px" }}/>;
};

export default ChartComponent;