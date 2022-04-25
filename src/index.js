import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';

// import wallet provider and util function
import { getChainOptions, WalletProvider } from '@terra-money/wallet-provider';

const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

//fetch available connection options
// import wallet provider objects from the library
// call the function to connect w/  Terra servers, check which chains and endpoints are available
getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <React.StrictMode>
      {/* WALLET PROVIDER BLOCK - set up React context provider
      context is a state across multiple parts of the app
      makes certain data available to all its children if they want access
      index is entry point of app - can access walletprovider everywhere
      */}
      <WalletProvider {...chainOptions}>
        <div className="App-header">
          {/* ROUTE - helps support different app paths? Not sure what, check docs later
          */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
            </Routes>
          </BrowserRouter>

          <div className="footer-container">
            <img
              alt="Twitter Logo"
              className="twitter-logo"
              src="/twitter-logo.svg"
            />
            <a
              className="footer-text"
              href={TWITTER_LINK}
              target="_blank"
              rel="noreferrer"
            >{`Made with @${TWITTER_HANDLE}`}</a>
          </div>
        </div>
      </WalletProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
