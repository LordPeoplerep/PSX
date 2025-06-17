import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import stocksData from '../data/stocks';

const MarketPage = () => {
  const [stocks, setStocks] = useState(stocksData);

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(stocks => stocks.map(stock => {
        const change = (Math.random() - 0.5) * 10;
        const newPrice = Math.max(0.1, stock.currentPrice + change);
        const rounded = parseFloat(newPrice.toFixed(2));
        return {
          ...stock,
          currentPrice: rounded,
          priceHistory: [...stock.priceHistory, { timestamp: new Date().toISOString(), price: rounded }]
        };
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Peoplerep Stock Exchange (PSX) Market</h1>
      <table border="1" cellPadding="10" style={{ width: '100%', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price (₽)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock.symbol}>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
              <td>
                <button>Buy</button>
                <button>Sell</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {stocks.map(stock => (
        <div key={stock.symbol} style={{ marginBottom: '40px' }}>
          <h2>{stock.name} ({stock.symbol})</h2>
          <LineChart width={600} height={300} data={stock.priceHistory}>
            <XAxis dataKey="timestamp" />
            <YAxis domain={['auto', 'auto']} tickFormatter={value => value.toLocaleString('en-US')} />
            <Tooltip formatter={value => value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} />
            <CartesianGrid stroke="#eee" />
            <Line type="monotone" dataKey="price" dot={false} />
          </LineChart>
        </div>
      ))}
    </div>
  );
};

export default MarketPage;