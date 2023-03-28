import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'


import { Account } from './components'
import Navbar    from './pages/Navbar'
import Form from './pages/Context'
import HeroHome from './parts/HeroHome'
import Tab from './parts/Tab'
import Footer from './pages/Footer'
import Tiles from './parts/Tiles'

import '@rainbow-me/rainbowkit/styles.css';
import 'bulma/css/bulma.min.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { sepolia,} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [sepolia],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'AmmyEth',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})



export function App() {
  const { isConnected } = useAccount()
  
  return (
    <>
    
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      {/* <h1>wagmi + RainbowKit + Vite</h1> */}
      <div style={{backgroundColor:'#c97fbc',overflow:'hidden'}}>
      <Navbar/>
      <HeroHome/>
      {/* <ConnectButton /> */}
      <Tab/>
      <Form/>
      <Tiles/>
      <Footer/>
      </div>
      {/* <ConnectButton />
      {isConnected && <Account />} */}
      </RainbowKitProvider>
    </WagmiConfig>
    </>
  )
}
