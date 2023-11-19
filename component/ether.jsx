// components/AddressExplorer.js
'use client'
import { useState } from 'react';
import axios from 'axios';

const AddressExplorer = () => {
  const [address, setAddress] = useState('');
  const [addressInfo, setAddressInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAddressInfo = async () => {
    setLoading(true);
    try {
      const apiKey = "4ECEUW6FRCQ1WI3FF7VCNYW2IKI3MWNCWV";

      if (!address) {
        alert('Please enter a valid Ethereum address');
        return;
      }

      // Fetch balance
      const balanceResponse = await axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${apiKey}`);
      const balanceData = balanceResponse.data;

      // Fetch transaction history
      const txHistoryResponse = await axios.get(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&apikey=${apiKey}`);
      const txHistoryData = txHistoryResponse.data;

      // Display the address information
      setAddressInfo([
        { label: 'Balance', value: `${balanceData.result} Wei` },
        ...txHistoryData.result.map((tx, index) => ({
          index: index + 1,
          hash: tx.hash,
          from: tx.from,
          to: tx.to,
          time: new Date(tx.timeStamp * 1000).toLocaleTimeString(),
          value: tx.value,
          amount: 'N/A', // This information may not be available in the response
          date: new Date(tx.timeStamp * 1000).toLocaleDateString(),
        })),
      ]);
    } catch (error) {
      console.error('Error fetching address information:', error);
      alert('Error fetching address information');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Ethereum Explorer</h1>
      <label htmlFor="addressInput" className="block mb-2 text-lg">Enter Ethereum Address:</label>
      <input
        type="text"
        id="addressInput"
        placeholder="Enter an Ethereum address"
        value={address}
        onChange={(e) => setAddress(e.target.value.trim())}
        className="border border-gray-300 px-3 py-2 mb-4 text-gray-800 rounded-md focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={getAddressInfo}
        className="bg-blue-500 text-gray-800 px-4 py-2 rounded-md hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Fetching...' : 'Get Address Info'}
      </button>

      <h2 className="text-2xl mt-6">Address Information</h2>
      <table className="border-collapse w-full mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 text-gray-800 py-2 px-4">Index</th>
            <th className="border border-gray-400 text-gray-800 py-2 px-4">Hash</th>
            <th className="border border-gray-400 text-gray-800 py-2 px-4">From</th>
            <th className="border border-gray-400 text-gray-800 py-2 px-4">To</th>
            <th className="border border-gray-400 text-gray-800 py-2 px-4">Time</th>
            <th className="border border-gray-400 text-gray-800 py-2 px-4">Value</th>
            <th className="border border-gray-400 text-gray-800 py-2 px-4">Amount</th>
            <th className="border border-gray-400 text-gray-800 py-2 px-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {addressInfo.map((info, index) => (
            <tr key={index} className="border border-gray-400">
              <td className="border border-gray-400 py-2 px-4">{info.index}</td>
              <td className="border border-gray-400 py-2 px-4">{info.hash}</td>
              <td className="border border-gray-400 py-2 px-4">{info.from}</td>
              <td className="border border-gray-400 py-2 px-4">{info.to}</td>
              <td className="border border-gray-400 py-2 px-4">{info.time}</td>
              <td className="border border-gray-400 py-2 px-4">{info.value}</td>
              <td className="border border-gray-400 py-2 px-4">{info.amount}</td>
              <td className="border border-gray-400 py-2 px-4">{info.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddressExplorer;
