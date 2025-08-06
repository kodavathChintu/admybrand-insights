'use client';

import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MetricCard from '../components/MetricCard';
import ChartCard from '../components/ChartCard';
import DataTable from '../components/DataTable';
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import users from '../data/users';
import '../styles/dashboard.css';
import { useRouter } from 'next/navigation';
import Papa from 'papaparse';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';

export default function DashboardPage() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const router = useRouter();
  const chartRef = useRef(null);

  useEffect(() => {
    const userString = localStorage.getItem('loggedInUser');
    if (!userString) {
      router.replace('/login');
      return;
    }

    const user = JSON.parse(userString);
    const foundUser = users.find(u => u.username === user.username && u.password === user.password);
    if (foundUser) {
      setTimeout(() => {
        setUserData(foundUser);
        setIsLoading(false);
      }, 1000);
    } else {
      localStorage.removeItem('loggedInUser');
      router.replace('/login');
    }
  }, [router]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (userData) {
        setUserData((prev) => {
          const newUsers = Math.max(0, prev.metrics.users + Math.floor(Math.random() * 10 - 5));
          const newIncome = Math.max(0, parseInt(prev.metrics.income.replace('$', '')) + Math.floor(Math.random() * 1000 - 500));
          const newConversion = Math.max(0, parseFloat(prev.metrics.conversion) + (Math.random() * 0.5 - 0.25)).toFixed(1);
          const newSessions = Math.max(0, prev.metrics.sessions + Math.floor(Math.random() * 100 - 50));
          const newLineData = (prev.charts.lineData || []).map((item) => ({
            ...item,
            name: item.name || 'Unknown',
            users: Math.max(0, (item.users || 0) + Math.floor(Math.random() * 50 - 25)),
          }));
          const newBarData = (prev.charts.barData || []).map((item) => ({
            ...item,
            name: item.name || 'Unknown',
            clicks: Math.max(0, (item.clicks || 0) + Math.floor(Math.random() * 20 - 10)),
          }));
          console.log('Real-time update:', { newLineData, newBarData });
          return {
            ...prev,
            metrics: {
              ...prev.metrics,
              users: newUsers,
              income: `$${newIncome}`,
              conversion: `${newConversion}%`,
              sessions: newSessions,
              growth: `${(Math.random() * 10 - 5).toFixed(1)}%`,
            },
            charts: {
              ...prev.charts,
              lineData: newLineData,
              barData: newBarData,
              pieData: prev.charts.pieData || [],
            },
          };
        });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [userData]);

  const exportToCSV = () => {
    const csv = Papa.unparse(filteredTableData || []);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'table-data.csv';
    link.click();
  };

  const exportToPDF = async () => {
    const charts = chartRef.current;
    if (charts) {
      const canvas = await html2canvas(charts, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 190;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save('charts.pdf');
    }
  };

  const filterDataByDate = (data) => {
    if (!data || !Array.isArray(data) || data.length === 0 || !startDate || !endDate || !dayjs(startDate).isValid() || !dayjs(endDate).isValid()) {
      console.log('filterDataByDate: Returning original data due to invalid input', { data, startDate, endDate });
      return data || [];
    }
    const start = dayjs(startDate).startOf('month');
    const end = dayjs(endDate).endOf('month');
    const filtered = data.filter((item) => {
      if (!item || !item.name || typeof item.name !== 'string') {
        console.log('filterDataByDate: Skipping invalid item', { item });
        return false;
      }
      const itemDate = dayjs(item.name, 'MMM', true);
      if (!itemDate.isValid()) {
        console.log('filterDataByDate: Invalid date format', { name: item.name });
        return false;
      }
      return itemDate.isSame(start, 'month') || itemDate.isSame(end, 'month') || (itemDate.isAfter(start) && itemDate.isBefore(end));
    });
    console.log('filterDataByDate result:', filtered);
    return filtered;
  };

  if (isLoading || !userData) {
    return (
      <div className="dashboard-container">
        <Header />
        <div className="main-layout ml-0 md:ml-[240px]">
          <Sidebar />
          <div className="content-area">
            <div className="metrics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-[100px] w-full rounded-lg" />
              ))}
            </div>
            <div className="charts-section mt-4">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-[250px] w-full rounded-lg mt-4" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { metrics, charts } = userData;
  const filteredLineData = filterDataByDate(charts.lineData);
  const filteredBarData = filterDataByDate(charts.barData);
  const filteredTableData = filterDataByDate(charts.lineData).map(item => ({
    name: item.name || 'Unknown',
    value: item.users || 0,
  }));

  console.log('Rendering charts:', { filteredLineData, filteredBarData, pieData: charts.pieData });

  return (
    <div className="dashboard-container" key={darkMode ? 'dark' : 'light'}>
      <Header />
      <div className="main-layout ml-0 md:ml-[240px]">
        <Sidebar />
        <div className="content-area p-4">
          <div className="metrics grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MetricCard title="Users" value={metrics.users} growth={metrics.growth || "0%"} color="#6366F1" isLoading={false} />
            <MetricCard title="Income" value={metrics.income} growth={metrics.growth || "0%"} color="#3B82F6" isLoading={false} />
            <MetricCard title="Conversion" value={metrics.conversion} growth={metrics.growth || "0%"} color="#F59E0B" isLoading={false} />
            <MetricCard title="Sessions" value={metrics.sessions} growth={metrics.growth || "0%"} color="#EF4444" isLoading={false} />
          </div>
          <div className="charts-section mt-4 grid grid-cols-1 lg:grid-cols-3 gap-4" ref={chartRef}>
            {filteredLineData && filteredLineData.length > 0 && filteredLineData.every(item => item.name && typeof item.users === 'number') ? (
              <ChartCard title="Users Over Time" type="line" data={filteredLineData} />
            ) : null}
            {charts.pieData && charts.pieData.length > 0 && charts.pieData.every(item => item.name && typeof item.value === 'number') ? (
              <ChartCard title="Traffic Sources" type="donut" data={charts.pieData} />
            ) : null}
            {filteredBarData && filteredBarData.length > 0 && filteredBarData.every(item => item.name && typeof item.clicks === 'number') ? (
              <ChartCard title="Clicks Per Month" type="bar" data={filteredBarData} />
            ) : null}
          </div>
          <div className="table-section mt-4">
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Start Date"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  views={['month', 'year']}
                  className="w-full sm:w-auto"
                />
                <DatePicker
                  label="End Date"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  views={['month', 'year']}
                  className="w-full sm:w-auto"
                />
              </LocalizationProvider>
              <Button onClick={exportToCSV}>Export CSV</Button>
              <Button onClick={exportToPDF}>Export PDF</Button>
            </div>
            <DataTable data={filteredTableData} />
          </div>
        </div>
      </div>
    </div>
  );
}