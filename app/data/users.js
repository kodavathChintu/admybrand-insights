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
  {
    username: "admin",
    password: "admin123", // In production, use hashed passwords
    metrics: {
      users: 1200,
      income: "$5000",
      conversion: "2.5%",
      sessions: 1500,
      growth: "3.2%"
    },
    charts: {
      lineData: [
        { name: "Jan", users: 400 },
        { name: "Feb", users: 300 },
        { name: "Mar", users: 600 },
        { name: "Apr", users: 800 },
        { name: "May", users: 700 },
        { name: "Jun", users: 900 }
      ],
      barData: [
        { name: "Jan", clicks: 1000 },
        { name: "Feb", clicks: 1200 },
        { name: "Mar", clicks: 900 },
        { name: "Apr", clicks: 1100 },
        { name: "May", clicks: 1300 },
        { name: "Jun", clicks: 1000 }
      ],
      pieData: [
        { name: "Direct", value: 400 },
        { name: "Referral", value: 300 },
        { name: "Social", value: 200 }
      ],
    },
  },


];

export default users;