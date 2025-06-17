const stocks = [
  {
    symbol: 'PRC',
    name: 'Peoplerep Corp',
    currentPrice: 1000.00,
    priceHistory: [{ timestamp: new Date().toISOString(), price: 1000.00 }]
  },
  {
    symbol: 'RRI',
    name: 'RusRobotics Inc.',
    currentPrice: 500.00,
    priceHistory: [{ timestamp: new Date().toISOString(), price: 500.00 }]
  },
  {
    symbol: 'RSG',
    name: 'Red Square Gaming',
    currentPrice: 750.00,
    priceHistory: [{ timestamp: new Date().toISOString(), price: 750.00 }]
  },
  {
    symbol: 'VOLK',
    name: 'Volkov Ventures',
    currentPrice: 650.00,
    priceHistory: [{ timestamp: new Date().toISOString(), price: 650.00 }]
  },
  {
    symbol: 'SBDG',
    name: 'Siberian Digital',
    currentPrice: 420.00,
    priceHistory: [{ timestamp: new Date().toISOString(), price: 420.00 }]
  }
];

export default stocks;