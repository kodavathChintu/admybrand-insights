   # ADmyBRAND Insights Dashboard

   A modern analytics dashboard built with Next.js and Recharts, featuring interactive line, bar, and donut charts, real-time data updates, dark/light mode, and PDF/CSV export functionality. Designed to showcase metrics like Users, Income, Conversion, and Sessions, with a responsive UI and smooth animations.

   ## Features
   - **Interactive Charts**: Line (Users Over Time), Bar (Clicks Per Month), Donut (Traffic Sources) with gradient fills and custom tooltips.
   - **Real-time Updates**: Metrics and charts update every 5 seconds.
   - **Dark/Light Mode**: Theme toggle with local storage persistence.
   - **Export**: PDF (charts) and CSV (table data) export functionality.
   - **Responsive Design**: Adapts to screen sizes (320px–1200px).
   - **Error Handling**: Robust validation with error messages for invalid data.
   - **Loading States**: Skeleton UI during data loading.
   - **Date Filtering**: Filter chart data by month/year using MUI DatePickers.

   ## Tech Stack
   - **Frontend**: Next.js, Recharts, Tailwind CSS, MUI (DatePickers)
   - **Dependencies**: @tanstack/react-table, dayjs, papaparse, jspdf, html2canvas, bootstrap-icons
   - **Deployment**: Vercel (recommended) or Netlify

   ## Setup Instructions
   1. **Clone the Repository**:
      ```bash
      git clone https://github.com/yourusername/admybrand-insights.git
      cd admybrand-insights
      ```
   2. **Install Dependencies**:
      ```bash
      npm install
      ```
   3. **Run Locally**:
      ```bash
      npm run dev
      ```
      Open `http://localhost:3000` in your browser.
   4. **Build for Production**:
      ```bash
      npm run build
      npm run start
      ```

   ## Deployment
   ### Vercel
   1. Install Vercel CLI: `npm i -g vercel`
   2. Login: `vercel login`
   3. Deploy: `vercel --prod`
   4. Link GitHub repo in Vercel dashboard for automatic deployments.

   ### Netlify
   1. Push code to GitHub.
   2. In Netlify dashboard, select "New site from Git" and link GitHub repo.
   3. Set build command: `npm run build`, publish directory: `out`.
   4. Deploy and access the live URL.

   ## Testing
   - **Charts**: Verify line, bar, and donut charts render with gradients and tooltips.
   - **Responsiveness**: Test across 320px–1200px.
   - **Dark/Light Mode**: Toggle theme in Header.
   - **Real-time Updates**: Wait 5 seconds to confirm updates.
   - **Export**: Test PDF/CSV exports.
   - **Error Handling**: Test with invalid data in `app/data/users.js`.

   ## License
   MIT License
