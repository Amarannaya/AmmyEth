import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Logo from '../../images/Logo-.png'

function Navbar() {
  const { isConnected } = useAccount();
  
  // Replace "YOUR_RAINBOWKIT_URL_HERE" with the actual URL for the Rainbowkit website
  const rainbowkitUrl = encodeURIComponent("YOUR_RAINBOWKIT_URL_HERE");
  const wagmiConnectUrl = `https://www.wagmii.com/connect?returnUrl=${rainbowkitUrl}`;

  
  return (
    <nav style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center", 
      background: '#160F29', 
      color: '#FFB60A', 
      padding: "1rem", 
      width: "100%", 
      position: "fixed", 
      top: 0, 
      left: 0,
      zIndex: 1,
    }}>

      <div>
        <a href="#">
          <img src={Logo} alt="Logo" style={{height:'100px' }} />
        </a>
      </div>
      <ul style={{ 
        display: "flex", 
        justifyContent: "flex-end", 
        alignItems: "center", 
        listStyle: "none", 
        marginRight:'2rem' 
      }}>
        <li><a href="#tiles" style={{ color: "white", textDecoration: "none", margin: "0 1rem" }}>About</a></li>
        <li><a href="#tab" style={{ color: "white", textDecoration: "none", margin: "0 1rem" }}>Our Services</a></li>
        <li><a href="#usage" style={{ color: "white", textDecoration: "none", margin: "0 1rem" }}>Usage</a></li>
        <li><a href="#form" style={{ color: "white", textDecoration: "none", margin: "0 1rem" }}>Transactions</a></li>
        <li><ConnectButton /></li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
