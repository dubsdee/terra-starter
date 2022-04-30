import { Link } from 'react-router-dom';
import * as query from '../contract/query';
import { useConnectedWallet } from '@terra-money/wallet-provider';
import { useState, useEffect } from 'react';
//importing wallet address 
import WalletAddress from "../components/WalletAddress"

const Leaderboard = () => {
    const [scores, setScores] = useState();
    const [loading, setLoading] = useState(true);
    const connectedWallet = useConnectedWallet();
    
    useEffect(() => {
        setLoading(true);
        const fetchScores = async () => {
            if (connectedWallet && connectedWallet.network.name === 'testnet') {
                // returning instead of logging
                return (await query.getScores(connectedWallet)).scores;
            }
        };

        fetchScores().then(scores => {
            // adding a state variable to store scores
            setScores(scores);
            setLoading(false);
        }); 
        // want to run this only when a wallet is connected
    }, [connectedWallet]);

    const renderScores = (scores) => {
        if (!scores || scores.length < 1) {
            return <div> No scores available, sorry fren.</div>;
        }
    
        return scores.map((score, index) => {
            return (
                <div key={index} className="score">
                    {/* Format is address: score */}
                    {/* Slice address to first 5 and last 4 digits so it looks like terra....a1b2 */}
                    <span>
                        {score[0].slice(0, 5) + '...' + score[0].slice(-4)}:{' '}
                        {score[1].toString().padStart(2, '0')}
                    </span>
                </div>
            );
        });
    };

    return (
        <main className="App">
            <header>
                <Link to="/" className="home-link">
                    <div className="header-titles">
                        <h1>💥 ENEMIES INBOUND 💥</h1>
                        <p> Get ready for battle! </p>
                    </div>
                </Link>
            </header>

            <div className="score-board-container">
                <h3>Scoreboard</h3>
                {/* If loading, show loading, else render */}
                {loading ? (
                    <div>Loading...</div>
                ) : (
                  renderScores(scores)
                )}
                <div></div>
            </div>
            <WalletAddress />
        </main>
    );
};

export default Leaderboard;