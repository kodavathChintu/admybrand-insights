'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const pieColors = ['#0088FE', '#00C49F', '#FFBB28'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 border rounded shadow-md">
        <p className="text-gray-700 dark:text-gray-200">{`Month: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-gray-700 dark:text-gray-200">{`${entry.name}: ${entry.value}`}</p>
        ))}
      </div>
    );
  }
  return null;
};

const ChartCard = ({ title, type, data }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(`ChartCard [${title}]:`, { type, data });
    setIsLoading(true);

    if (!data || !Array.isArray(data) || data.length === 0 || !['line', 'bar', 'pie', 'donut'].includes(type)) {
      setHasError(true);
      setIsLoading(false);
      return;
    }

    if (type === 'pie' || type === 'donut') {
      if (!data.every(item => item && typeof item === 'object' && item.name && typeof item.value === 'number' && item.value >= 0)) {
        setHasError(true);
      }
    } else if (type === 'line') {
      if (!data.every(item => item && typeof item === 'object' && item.name && typeof item.users === 'number' && item.users >= 0)) {
        setHasError(true);
      }
    } else if (type === 'bar') {
      if (!data.every(item => item && typeof item === 'object' && item.name && typeof item.clicks === 'number' && item.clicks >= 0)) {
        setHasError(true);
      }
    }

    setIsLoading(false);
  }, [data, type]);

  if (isLoading) {
    return (
      <div className="chart-box p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <div className="h-[250px] bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
      </div>
    );
  }

  if (hasError || !data || !['line', 'bar', 'pie', 'donut'].includes(type)) {
    console.log(`ChartCard [${title}] error: Invalid data or type`, { data, type });
    return (
      <div className="chart-box p-4 shadow-md rounded-lg">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="text-red-600 dark:text-red-400">Unable to render chart: Invalid data or chart type</p>
      </div>
    );
  }

  return (
    <div className="chart-box p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
          {type === 'line' ? (
            <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="var(--foreground)" />
              <YAxis stroke="var(--foreground)" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" fill="url(#lineGradient)" isAnimationActive={true} animationDuration={1000} />
            </LineChart>
          ) : type === 'bar' ? (
            <BarChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="var(--foreground)" />
              <YAxis stroke="var(--foreground)" />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="clicks" fill="url(#barGradient)" isAnimationActive={true} animationDuration={1000} />
            </BarChart>
          ) : type === 'pie' ? (
            <PieChart margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
                isAnimationActive={true}
                animationDuration={1000}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          ) : type === 'donut' ? (
            <PieChart margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={40}
                fill="#8884d8"
                label
                isAnimationActive={true}
                animationDuration={1000}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend />
            </PieChart>
          ) : null}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;