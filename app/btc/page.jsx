// pages/index.js
'use client'
import React, { useState } from 'react';

const Home = () => {
  const [address, setAddress] = useState('');
  const [addressInfo, setAddressInfo] = useState([]);

  const getAddressInfo = async () => {
    try {
      const response = await fetch(`https://blockchain.info/rawaddr/${address}`);
      const data = await response.json();

      // Display the address information
      setAddressInfo([
        { label: 'Hash', value: data.hash },
        { label: 'From', value: data.from },
        { label: 'To', value: data.to },
        { label: 'Time', value: new Date().toLocaleTimeString() },
        { label: 'Value', value: data.value },
        { label: 'Amount', value: 'N/A' },
        { label: 'Date', value: new Date().toLocaleDateString() },
      ]);
    } catch (error) {
      console.error('Error fetching address information:', error);
      alert('Error fetching address information');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blockchain Explorer</h1>
      <label htmlFor="addressInput" className="block mb-2 text-lg">Enter Bitcoin Address:</label>
      <input
        type="text"
        id="addressInput"
        placeholder="Enter a Bitcoin address"
        value={address}
        onChange={(e) => setAddress(e.target.value.trim())}
        className="border border-gray-300 px-3 py-2 mb-4 text-gray-800 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={getAddressInfo}
        className="bg-blue-500 text-gray-800 px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Get Address Info
      </button>

      <h2 className="text-2xl mt-6">Address Information</h2>
      <table className="border-collapse w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 text-gray-800 py-2 px-4">Index</th>
            <th className="border border-gray-400 text-gray-800 py-2 px-4">Label</th>
            <th className="border border-gray-400 text-gray-800 py-2 px-4">Value</th>
          </tr>
        </thead>
        <tbody>
          {addressInfo.map((info, index) => (
            <tr key={index} className="border border-gray-400">
              <td className="border border-gray-400 py-2 px-4">{index + 1}</td>
              <td className="border border-gray-400 py-2 px-4">{info.label}</td>
              <td className="border border-gray-400 py-2 px-4">{info.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
