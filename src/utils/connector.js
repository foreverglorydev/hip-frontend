import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { BscConnector } from '@binance-chain/bsc-connector';
import {Buffer} from 'buffer';
Buffer.from('anything','base64');


// export const injected = new InjectedConnector({
//   supportedChainIds: [1, 2, 3, 4, 5, 56, 97],
// });

const POLLING_INTERVAL = 12000
// const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
const chainIds = [1, 4, 56, 97];

export const injected = new InjectedConnector({ supportedChainIds: chainIds })

// export const walletconnector = new WalletConnectConnector({
//   rpc: { 1: "https://mainnet.infura.io/v3/66b1fd9daec44fbeb94eca2b0386b455" },
//   bridge: "https://bridge.walletconnect.org",
//   qrcode: true,
//   pollingInterval: POLLING_INTERVAL,
// });

export const walletconnector = new WalletConnectConnector({
  rpc: { 1: "https://mainnet.infura.io/v3/66b1fd9daec44fbeb94eca2b0386b455"},
  bridge: 'https://bridge.walletconnect.org',
  supportedChainIds:[1,4,56,97],
  qrcode: true,
});


// export const walletconnector = new WalletConnectConnector({
//   rpcUrl: `https://mainnet.infura.io/v3/66b1fd9daec44fbeb94eca2b0386b455`,
//   bridge: "https://bridge.walletconnect.org",
//   qrcode: true
// });
// const chainId = 56;
// export const walletconnector = new WalletConnectConnector({
//   rpc:  {[chainId]: "https://bsc-dataseed.binance.org/"},
//   supportedChainIds:[1,4,56,97],
//   bridge: 'https://bridge.walletconnect.org',
//   qrcode: true,
//   // pollingInterval: POLLING_INTERVAL,
// })


export const bsc = new BscConnector({ supportedChainIds: chainIds })
