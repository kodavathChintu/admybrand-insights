// app/data/mockData.js

const dashboardData = {
  metrics: [
    { title: 'Revenue', value: 1200000, growth: '+12.5%' },
    { title: 'Users', value: 24500, growth: '+3.2%' },
    { title: 'Conversions', value: 2150, growth: '+1.8%' },
    { title: 'Impressions', value: 500000, growth: '+7.1%' },
    { title: 'Click-Through Rate', value: 2.5, growth: '-0.4%' },
  ],
  trafficSources: [
    { source: 'Google Ads', value: 300000 },
    { source: 'Facebook Ads', value: 150000 },
    { source: 'Instagram', value: 100000 },
    { source: 'YouTube', value: 80000 },
    { source: 'Organic', value: 120000 },
  ],
  deviceDistribution: [
    { device: 'Mobile', percentage: 65 },
    { device: 'Desktop', percentage: 25 },
    { device: 'Tablet', percentage: 10 },
  ],
  userLocations: [
    { country: 'India', users: 15000 },
    { country: 'USA', users: 5000 },
    { country: 'UK', users: 2000 },
    { country: 'Canada', users: 1500 },
    { country: 'Germany', users: 1000 },
  ],
};

export default dashboardData;
