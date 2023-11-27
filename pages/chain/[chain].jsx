// pages/chain/[chain].js

import { useRouter } from 'next/router';
import Etherscan from '../ethereum';
import BitcoinScan from '../bitcoin'; 
import TelosScan from '../telo';
import ArbitScan from '../arbit';
import CelosScan from '../celo';
import Solana from '../solana';
import PolygonScan from '../polygon';
import Binance from '../binance';
import BaseScan from '../base';

const ChainPage = () => {
  const router = useRouter();
  const { chain } = router.query;

  const chainComponents = {
    ethereum: <Etherscan chain={chain} />,
    bitcoin: <BitcoinScan chain={chain} />,
    ethereum: <CelosScan chain={chain} />,
    bitcoin: <TelosScan chain={chain} />,
    ethereum: <ArbitScan chain={chain} />,
    bitcoin: <BaseScan chain={chain} />,
    ethereum: <Binance chain={chain} />,
    bitcoin: <PolygonScan chain={chain} />,
    ethereum: <Solana chain={chain} />,
    bitcoin: <BitcoinScan chain={chain} />,
    // Add components for other chains as needed
  };

  const selectedChainComponent = chainComponents[chain];

  return (
    <div>
      <h1>Chain Page - {chain}</h1>
      {selectedChainComponent ? (
        selectedChainComponent
      ) : (
        <p>Chain not supported or not found.</p>
      )}
    </div>
  );
};

export default ChainPage;
