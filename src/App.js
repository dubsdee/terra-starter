import './App.css';
// bring in the required gooks and wallet states
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";

function App() {
  // current wallet status, connect and disconnect functions, available connections
  const { status, connect, disconnect, availableConnectTypes } = useWallet();

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
          </button>
        </div>
      );
    }
  };
  
  // take a look at starting states - logs wallet status and available connection types
  console.log("Wallet status is ", status);
  console.log("Available connection types: ", availableConnectTypes);
  
  
  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>💥 ENEMIES INBOUND 💥</h1>
          <p> Get ready for battle! </p>
        </div>

      </header>

      <div>
      <iframe src="https://giphy.com/embed/mXz3v0UdjrNTO" width="429" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/reaction-dragonball-z-mXz3v0UdjrNTO"></a></p>
        
      </div>
    </main>
  );
}

export default App;
