// pages/chain/[chain]/address/[address].js

import { useRouter } from 'next/router';
import Etherscan from '@/pages/ethereum';
import BitcoinScan from '@/pages/bitcoin';
import TelosScan from '@/pages/telo';
import ArbitScan from '@/pages/arbit';
import CelosScan from '@/pages/celo';
import Solana from '@/pages/solana';
import PolygonScan from '@/pages/polygon';
import Binance from '@/pages/binance';
import BaseScan from '@/pages/base';


const AddressPage = () => {
  const router = useRouter();
  const { chain, address } = router.query;

  return (
    <div>
      <h1>Address Page - {chain}/{address}</h1>
       <Etherscan address={address} />,
     <BitcoinScan address={address} />,
     <CelosScan address={address} />,
     <TelosScan address={address} />,
     <ArbitScan address={address} />,
     <BaseScan address={address} />,
     <Binance address={address} />,
     <PolygonScan address={address} />,
    <Solana address={address} />,
     <BitcoinScan address={address} />,
    </div>
  );
};

export default AddressPage;
