// components/BitcoinDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BitcoinScan = ({ address }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "YOUR_BLOCKCHAIR_API_KEY"; // Replace with your Blockchair API key

  useEffect(() => {
    const fetchAddressDetails = async () => {
      try {
        // Fetch transaction history
        const transactionHistoryResponse = await axios.get(
          `https://api.blockchair.com/bitcoin/dashboards/address/${address}?`
        );

        // Check if transactions is an array before setting state
        if (Array.isArray(transactionHistoryResponse.data.data[address].transactions)) {
          setTransactions(transactionHistoryResponse.data.data[address].transactions);
        } else {
          setTransactions([]); // Set an empty array if the response is not an array
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching Bitcoin details:', error);
        setLoading(false);
      }
    };

    fetchAddressDetails();
  }, [address]);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Bitcoin Details for {address}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Transaction Hash</th>
                <th className="py-2 px-4">Value</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Time</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(transactions) && transactions.map((tx, index) => (
                <tr key={tx.hash} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">{tx.hash}</td>
                  <td className="py-2 px-4">{tx.value} satoshis</td>
                  <td className="py-2 px-4">{new Date(tx.time * 1000).toLocaleDateString()}</td>
                  <td className="py-2 px-4">{new Date(tx.time * 1000).toLocaleTimeString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BitcoinScan;
