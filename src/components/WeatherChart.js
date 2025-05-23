import React from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './WeatherChart.css';

const WeatherChart = () => {
  const { forecast, cityName, loading, hasSearched } = useSelector((state) => state.weather);

  // if nothing was searched or city is not found show nothing
  if (!hasSearched || loading || !forecast) {
    return null;
  }

  //  the chart data
  const chartData = forecast.list.slice(0, 8).map((item, index) => {
    const date = new Date(item.dt * 1000);
    const hours = date.getHours();
    const day = date.toLocaleDateString('en-US', { weekday: 'short' });
    
    return {
      time: `${day} ${hours}:00`,
      temperature: Math.round(item.main.temp),
      description: item.weather[0].description,
    };
  });

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          <p className="tooltip-temp">Temperature: {data.temperature}°C</p>
          <p className="tooltip-desc">{data.description}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="weather-chart">
      <h2>Temperature Forecast for {cityName}</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="time" 
              angle={-45}
              textAnchor="end"
              height={80}
              fontSize={12}
            />
            <YAxis 
              label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="temperature" 
              fill="#007bff"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeatherChart; 