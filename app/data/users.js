const users = [
  {
    username: 'chintu',
    password: 'chintu123',
    metrics: {
      users: 1200,
      income: '$50,000',
      conversion: '25%',
      sessions: 5000,
      growth: '-12.4%',
    },
    charts: {
      lineData: [
        { name: 'Jan', users: 1000 },
        { name: 'Feb', users: 1100 },
        { name: 'Mar', users: 1200 },
        { name: 'Apr', users: 1150 },
        { name: 'May', users: 1300 },
        { name: 'Jun', users: 1250 },
      ],
      barData: [
        { name: 'Jan', clicks: 500 },
        { name: 'Feb', clicks: 600 },
        { name: 'Mar', clicks: 550 },
        { name: 'Apr', clicks: 700 },
        { name: 'May', clicks: 650 },
        { name: 'Jun', clicks: 800 },
      ],
      pieData: [
        { name: 'Organic', value: 60 },
        { name: 'Paid', value: 30 },
        { name: 'Referral', value: 10 },
      ],
    },
  },
];

export default users;