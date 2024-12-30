import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { commonOptions } from './chartConfig';

interface EmotionPieChartProps {
  data: {
    dominantEmotion: string;
    intensity: number;
  } | undefined;
  colors: Record<string, string>;
}

const EmotionPieChart = ({ data, colors }: EmotionPieChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current || !data) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart with simplified data
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [data.dominantEmotion],
        datasets: [{
          data: [data.intensity, 10 - data.intensity], // Show intensity and remaining space
          backgroundColor: [
            colors[data.dominantEmotion],
            'rgba(0,0,0,0.1)'
          ],
          borderColor: 'white',
          borderWidth: 2
        }]
      },
      options: {
        ...commonOptions,
        cutout: '70%',
        plugins: {
          legend: {
            display: true,
            position: 'bottom'
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, colors]);

  return (
    <div className="h-[300px]">
      <canvas ref={chartRef} />
    </div>
  );
};

export default EmotionPieChart;