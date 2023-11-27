import React, { useState } from 'react';
import Link from 'next/link';
import '/styles/global.css';

const Navbar = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedChain, setSelectedChain] = useState('ethereum'); // Default to Ethereum

  const handleSearch = () => {
    // Navigate to the chain page with the selected chain and search text
    window.location.href = `/chain/${selectedChain}/address/${searchText}`;
  };

  const handleChainChange = (event) => {
    setSelectedChain(event.target.value);
  };

  return (
    <nav className="bg-white p-4 flex justify-end items-center">
      <div className="flex items-center space-x-4">
        <div className="relative ml-4 flex items-center">
          <button className="ml-2 absolute" onClick={handleSearch}>
            <img src="images/search.png" alt="" className="w-3 h-3" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 pr-10 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 mr-10 placeholder:ml-3"
            style={{ paddingLeft: '30px' }}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
            onChange={handleChainChange}
            value={selectedChain}
          >
            <option value="ethereum">Ethereum</option>
            <option value="solana">Solana</option>
            <option value="base">Base</option>
            <option value="bitcash">Bitcash</option>
            <option value="arbitrum">Arbitrum</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="litecoin">Litecoin</option>
            <option value="telos">Telos</option>
            <option value="celo">Celo</option>
            <option value="xrp">XRP</option>
            <option value="binance">Binance</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="flex items-center gap-10">
          <button>
            <img src="images/day.png" alt="" className="w-6 h-6" />
          </button>
          <button>
            <img src="images/bell.png" alt="" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
