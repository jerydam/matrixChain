import React, { useState } from 'react';
import Navbar from './nav';
import Etherscan from '@/pages/ethereum';
import BitcoinScan from '@/pages/bitcoin';
import TelosScan from '@/pages/telo';
import ArbitScan from '@/pages/arbit';
import CelosScan from '@/pages/celo';
import Solana from '@/pages/solana';
import PolygonScan from '@/pages/polygon';
import Binance from '@/pages/binance';
import BaseScan from '@/pages/base';
const ParentComponent = () => {
  const [ethereumAddress, setEthereumAddress] = useState('');
  const [bitcoinAddress, setBitcoinAddress] = useState('');
  const [binanceAddress, setBinanceAddress] = useState('');
  const [teloAddress, setTeloAddress] = useState('');
  const [celoAddress, setCeloAddress] = useState('');
  const [solanaAddress, setSolanaAddress] = useState('');
  const [polygonAddress, setPolygonAddress] = useState('');
  const [arbitrumAddress, setArbitrumAddress] = useState('');
  const [baseAddress, setBaseAddress] = useState('');


  const handleAddressChange = (newAddress) => {
    setEthereumAddress(newAddress);
    setArbitrumAddress(newAddress);
    setCeloAddress(newAddress);
    setTeloAddress(newAddress);
    setBinanceAddress(newAddress);
    setBaseAddress(newAddress);
    setBitcoinAddress(newAddress);
    setPolygonAddress(newAddress);
    setSolanaAddress(newAddress);
  };

  return (
    <div>
      <Navbar onAddressChange={handleAddressChange} />
      <Etherscan address={ethereumAddress} />
      <BitcoinScan address={bitcoinAddress} />,
     <CelosScan address={celoAddress} />,
     <TelosScan address={teloAddress} />,
     <ArbitScan address={arbitrumAddress} />,
     <BaseScan address={baseAddress} />,
     <Binance address={binanceAddress} />,
     <PolygonScan address={polygonAddress} />,
    <Solana address={solanaAddress} />,
     <BitcoinScan address={bitcoinAddress} />,
    </div>
  );
};

export default ParentComponent;