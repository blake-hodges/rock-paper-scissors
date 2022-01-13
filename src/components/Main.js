import { React } from 'react';
import paper from '../assets/paper.png';
import rock from '../assets/rock.png';
import scissors from '../assets/scissors.png';

function Main() {
    return (
        <div className="main">
            <div className="gameCard">
                <h3>Player One</h3>
                <p>score: 0</p>
                <div className="icons">
                    <img src={rock} alt="rock icon" />
                    <img src={paper} alt="paper icon" />
                    <img src={scissors} alt="scissors icon" />
                </div>
                <p>Your choice: Rock</p>
            </div>
            <div className="gameMessage">
                <p>You won!</p>
                <button className="resetButton">Reset</button>
            </div>
            <div className="gameCard">
                <h3>Computer</h3>
                <p>score: 0</p>
                <div className="icons">
                    <img src={rock} alt="rock icon" />
                </div>
                <p>Computer choice: Rock</p>
            </div>
        </div>
    )
}

export default Main;
