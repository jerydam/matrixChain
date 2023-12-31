// components/EtherscanDetails.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SolanaScan = ({ address }) => {
  const [details, setDetails] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "4ECEUW6FRCQ1WI3FF7VCNYW2IKI3MWNCWV";

  useEffect(() => {
    const fetchAddressDetails = async () => {
      try {
        // Fetch address details
        const addressDetailsResponse = await axios.get(
            `https://api.some-solana-explorer.com/address/${address}?apikey=${API_KEY}`
          );
  
          // Fetch transaction history (replace with the actual Solana API endpoint for transactions)
          const transactionHistoryResponse = await axios.get(
            `https://api.some-solana-explorer.com/transactions/${address}?apikey=${API_KEY}`
          );

        setDetails(addressDetailsResponse.data.result);

        // Check if transactions is an array before setting state
        if (Array.isArray(transactionHistoryResponse.data.result)) {
          setTransactions(transactionHistoryResponse.data.result);
        } else {
          setTransactions([]); // Set an empty array if the response is not an array
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching Etherscan details:', error);
        setLoading(false);
      }
    };

    fetchAddressDetails();
  }, [address]);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Etherscan Details for {address}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p className="mb-4">
            <strong>Balance:</strong> {details.balance} wei
          </p>
          <table className="w-full border-collapse mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4">#</th>
                <th className="py-2 px-4">Transaction Hash</th>
                <th className="py-2 px-4">From</th>
                <th className="py-2 px-4">To</th>
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
                  <td className="py-2 px-4">{tx.from}</td>
                  <td className="py-2 px-4">{tx.to}</td>
                  <td className="py-2 px-4">{tx.value} wei</td>
                  <td className="py-2 px-4">{new Date(tx.timeStamp * 1000).toLocaleDateString()}</td>
                  <td className="py-2 px-4">{new Date(tx.timeStamp * 1000).toLocaleTimeString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SolanaScan;
