# ADmyBRAND Insights Dashboard

A modern analytics dashboard built with Next.js and Recharts, featuring interactive line, bar, and donut charts, real-time data updates, and PDF/CSV export functionality. Designed to showcase metrics like Users, Income, Conversion, and Sessions, with a responsive UI and system-based dark/light mode (dark background in dark mode, white in light mode).

## Live Demo
[https://admybrand-insights-556ftb07m-kodavath-chintus-projects.vercel.app](https://admybrand-insights-556ftb07m-kodavath-chintus-projects.vercel.app)

## For Login demo 
username : admin
password: admin123

## Portfolio
See this project in my portfolio: [https://chintu-portfolio.vercel.app](https://chintu-portfolio.vercel.app)

## Features
- **Interactive Charts**: Line (Users Over Time), Bar (Clicks Per Month), Donut (Traffic Sources) with gradient fills and custom tooltips.
- **Real-time Updates**: Metrics and charts update every 5 seconds.
- **Dark/Light Mode**: System-based theme (no toggle).
- **Export**: PDF (charts) and CSV (table data) export functionality.
- **Responsive Design**: Adapts to screen sizes (320px–1200px).
- **Error Handling**: Robust validation with error messages for invalid data.
- **Loading States**: Skeleton UI during data loading.
- **Date Filtering**: Filter chart data by month/year using MUI DatePickers.

## Tech Stack
- **Frontend**: Next.js, Recharts, Tailwind CSS, MUI (DatePickers)
- **Dependencies**: @tanstack/react-table, dayjs, papaparse, jspdf, html2canvas, bootstrap-icons
- **Deployment**: Vercel

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kodavath-chintu/admybrand-insights.git
   cd admybrand-insights
