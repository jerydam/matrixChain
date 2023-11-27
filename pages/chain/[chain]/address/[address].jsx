// pages/chain/[chain]/address/[address].js

import { useRouter } from 'next/router';
import Etherscan from '@/pages/ethereum';
import BitcoinScan from '@/pages/bitcoin';
import TelosScan from '@/pages/telo';
import ArbitScan from '@/pages/arbit';
import CelosScan from '@/pages/celo';
import SolanaScan from '@/pages/solana';
import PolygonScan from '@/pages/polygon';
import Binance from '@/pages/binance';
import BaseScan from '@/pages/base';

const AddressPage = () => {
  const router = useRouter();
  const { chain, address } = router.query;

  return (
    <div>
      <h1>Address Page - {chain}/{address}</h1>
      {chain === 'ethereum' && <Etherscan address={address} />}
      {chain === 'bitcoin' && <BitcoinScan address={address} />}
      {chain === 'celo' && <CelosScan address={address} />}
      {chain === 'telos' && <TelosScan address={address} />}
      {chain === 'arbitrum' && <ArbitScan address={address} />}
      {chain === 'base' && <BaseScan address={address} />}
      {chain === 'binance' && <Binance address={address} />}
      {chain === 'polygon' && <PolygonScan address={address} />}
      {chain === 'solana' && <SolanaScan address={address} />}
      {/* Add more conditions for other chains as needed */}
    </div>
  );
};

export default AddressPage;
