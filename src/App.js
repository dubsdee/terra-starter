import './App.css';
// bring in the required gooks and wallet states
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import { Wallet } from '@terra-money/terra.js';
import Menu from './components/Menu';
//importing wallet address 
import WalletAddress from './components/WalletAddress';

function App() {
  // current wallet status, connect and disconnect functions, available connections
  const { status, connect, disconnect, availableConnectTypes } = useWallet();

   // take a look at starting states - logs wallet status and available connection types
  console.log("Wallet status is ", status);
  console.log("Available connection types: ", availableConnectTypes);

  // render a connect button to prompt wallet
  const renderConnectbutton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => connect("EXTENSION")}
            className="cta-button connect-wallet-button"
          >
            Connect Wallet
          </button>
        </div>
      );
    }
    // check if wallet is connected
    else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button 
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect
        </button>
      );
    }
  };
  
  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>💥 ENEMIES INBOUND 💥</h1>
          <p> Get ready for battle! </p>
        </div>
      </header>

      {/* if not connected, show the dbz gif*/}
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
        <div>
          <iframe src="https://giphy.com/embed/mXz3v0UdjrNTO" width="429" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reaction-dragonball-z-mXz3v0UdjrNTO"></a></p>
        </div>
      )}
    
      {/* Show the menu after connection */}
      {status === WalletStatus.WALLET_CONNECTED && (
          <div className="game-menu-container">
            <Menu />
          </div>
        )}
      
      {renderConnectbutton()}
    
    <WalletAddress />
    </main>
    
  );
}

export default App;
