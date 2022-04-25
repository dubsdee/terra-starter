import { Link } from 'react-router-dom';

const Guide = () => {
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
        <h3>How to play</h3>
        
        <div>
          <span className="help">
            The Saibamen have hatched! 

            Blast as many as you can within 15 seconds!
          </span>
        </div>
      </div>
    </main>
  );
};

export default Guide;