import React, { useState } from 'react';
import paper from '../assets/paper.png';
import rock from '../assets/rock.png';
import scissors from '../assets/scissors.png';

function Main() {
    const [playerChoice, setPlayerChoice] = useState("rock");
    const [computerChoice, setComputerChoice] = useState("");
    const [computerIcon, setComputerIcon] = useState(rock);
    const [gameMessage, setGameMessage] = useState("Ready to play?");
    const [activeIcon, setActiveIcon] = useState("")
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const resetGame = () => {
        setPlayerChoice("");
        setComputerChoice("");
        setGameMessage("Ready to play again?");
        setActiveIcon("");
        setPlayerScore(0);
        setComputerScore(0);
    }

    const playGame = () => {
        let choices = ["rock", "paper", "scissors"];
        let computerChoice = choices[Math.floor((Math.random() * 3))];
        if (computerChoice === "rock") {
            setComputerIcon(rock)
        } else if (computerChoice === "paper") {
            setComputerIcon(paper)
        } else {
            setComputerIcon(scissors)
        }
        setComputerChoice(computerChoice);
        determineWinner(playerChoice, computerChoice)

    }
    const determineWinner = (player, computer) => {
        if (player === "rock" && computer === "paper") {
            setGameMessage("You lost!")
            setComputerScore(computerScore => computerScore + 1);
        }
        if (player === "rock" && computer === "scissors") {
            setGameMessage("You won!")
            setPlayerScore(playerScore => playerScore + 1);
        }
        if (player === "rock" && computer === "rock") {
            setGameMessage("It's a tie!")
        }
        if (player === "paper" && computer === "paper") {
            setGameMessage("It's a tie!")
        }
        if (player === "paper" && computer === "scissors") {
            setGameMessage("You lost!")
            setComputerScore(computerScore => computerScore + 1);
        }
        if (player === "paper" && computer === "rock") {
            setGameMessage("You won!")
            setPlayerScore(playerScore => playerScore + 1);
        }
        if (player === "scissors" && computer === "paper") {
            setGameMessage("You won!")
            setComputerScore(playerScore => playerScore + 1);
        }
        if (player === "scissors" && computer === "scissors") {
            setGameMessage("It's a tie!")
        }
        if (player === "scissors" && computer === "rock") {
            setGameMessage("You lost!")
            setComputerScore(computerScore => computerScore + 1);
        }

    }
    return (
        <div className="main">
            <div className="gameCard">
                <h3>Player One</h3>
                <p>score: {playerScore}</p>
                <div className="icons">
                    <img
                        src={rock}
                        className={(activeIcon === "rock") ? 'activeIcon' : ''}
                        alt="rock icon"
                        onClick={() => {
                            setPlayerChoice("rock");
                            playGame();
                            setActiveIcon("rock");
                        }}
                    />
                    <img
                        src={paper}
                        className={(activeIcon === "paper") ? 'activeIcon' : ''}
                        alt="paper icon"
                        onClick={() => {
                            setPlayerChoice("paper")
                            playGame();
                            setActiveIcon("paper");
                        }}
                    />
                    <img
                        src={scissors}
                        className={(activeIcon === "scissors") ? 'activeIcon' : ''}
                        alt="scissors icon"
                        onClick={() => {
                            setPlayerChoice("scissors")
                            playGame();
                            setActiveIcon("scissors");
                        }}
                    />
                </div>
                <p className="yourChoice">Your choice: {playerChoice}</p>
            </div>
            <div className="gameMessage">
                <p>{gameMessage}</p>
                <button className="resetButton" onClick={() => resetGame()}>Reset</button>
            </div>
            <div className="gameCard">
                <h3>Computer</h3>
                <p>score: {computerScore}</p>
                <div className="icons">
                    <img src={computerIcon} alt="rock icon" />
                </div>
                <p className="computerChoice">Computer choice: {computerChoice}</p>
            </div>
        </div>
    )
}

export default Main;
