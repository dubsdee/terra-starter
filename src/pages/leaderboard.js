import * as query from '../contract/query';
import { useConnectedWallet } from '@terra-money/wallet-provider';

const Leaderboard = () => {
    const connectedWallet = useConnectedWallet();

    const fetchScores = async () => {
        if (connectedWallet && connectedWallet.network.name === 'testnet') {
            console.log("Scores fetched", (await query.getScores(connectedWallet)).scores);
        }
    };

    fetchScores();

    return (
        <>
        </>
    );
};

export default Leaderboard;