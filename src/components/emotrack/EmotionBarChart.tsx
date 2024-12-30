import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';
import { commonOptions } from './chartConfig';

interface EmotionBarChartProps {
  data: Array<{
    date: string;
    dominantEmotion: string;
    intensity: number;
  }>;
  colors: Record<string, string>;
  onDateSelect: (date: string) => void;
}

const EmotionBarChart = ({ data, colors, onDateSelect }: EmotionBarChartProps) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(d => new Date(d.date).toLocaleDateString()),
        datasets: [{
          label: 'Emotion Intensity',
          data: data.map(d => d.intensity),
          backgroundColor: data.map(d => colors[d.dominantEmotion]),
          borderColor: data.map(d => colors[d.dominantEmotion]),
          borderWidth: 1
        }]
      },
      options: {
        ...commonOptions,
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            title: {
              display: true,
              text: 'Intensity'
            }
          }
        },
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const index = elements[0].index;
            onDateSelect(data[index].date);
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, colors, onDateSelect]);

  return (
    <div className="h-[300px]">
      <canvas ref={chartRef} />
    </div>
  );
};

export default EmotionBarChart;