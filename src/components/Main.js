import React, { useState } from 'react';
import paper from '../assets/paper.png';
import rock from '../assets/rock.png';
import scissors from '../assets/scissors.png';
import computer from '../assets/computer.png';

function Main(props) {
    const [playerChoice, setPlayerChoice] = useState("rock");
    const [computerChoice, setComputerChoice] = useState("");
    const [computerIcon, setComputerIcon] = useState("");
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
        props.setGameRound(0);
    }

    const playGame = (playerChoice) => {
        props.setGameRound(props.gameRound + 1);
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
        setPlayerChoice(playerChoice);
        setActiveIcon(playerChoice);
        determineWinner(playerChoice, computerChoice)

    }
    const determineWinner = (player, computer) => {
        if (player === "rock" && computer === "paper") {
            setGameMessage("You lost this round!")
            setComputerScore(computerScore => computerScore + 1);
        }
        if (player === "rock" && computer === "scissors") {
            setGameMessage("You won this round!")
            setPlayerScore(playerScore => playerScore + 1);
        }
        if (player === "rock" && computer === "rock") {
            setGameMessage("It's a tie!")
        }
        if (player === "paper" && computer === "paper") {
            setGameMessage("It's a tie!")
        }
        if (player === "paper" && computer === "scissors") {
            setGameMessage("You lost this round!")
            setComputerScore(computerScore => computerScore + 1);
        }
        if (player === "paper" && computer === "rock") {
            setGameMessage("You won this round!")
            setPlayerScore(playerScore => playerScore + 1);
        }
        if (player === "scissors" && computer === "paper") {
            setGameMessage("You won this round!")
            setPlayerScore(playerScore => playerScore + 1);
        }
        if (player === "scissors" && computer === "scissors") {
            setGameMessage("It's a tie!")
        }
        if (player === "scissors" && computer === "rock") {
            setGameMessage("You lost this round!")
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
                        className={(activeIcon === "rock") ? 'activeIcon' : 'playerIcons'}
                        alt="rock icon"
                        onClick={() => playGame("rock")}
                    />
                    <img
                        src={paper}
                        className={(activeIcon === "paper") ? 'activeIcon' : 'playerIcons'}
                        alt="paper icon"
                        onClick={() => playGame("paper")}
                    />
                    <img
                        src={scissors}
                        className={(activeIcon === "scissors") ? 'activeIcon' : 'playerIcons'}
                        alt="scissors icon"
                        onClick={() => playGame("scissors")}
                    />
                </div>
                <p className="yourChoice">Your choice: {playerChoice}</p>
            </div>
            <div className="gameMessageWrapper">
                <p className="gameMessage">{gameMessage}</p>
                <button className="resetButton" onClick={() => resetGame()}>Reset</button>
            </div>
            <div className="gameCard">
                <h3>Computer</h3>
                <p>score: {computerScore}</p>
                <div className="icons">
                    <img className="computerIcon" src={computerChoice !== "" ? computerIcon : computer} alt="rock icon" />
                </div>
                <p className="computerChoice">Computer choice: {computerChoice}</p>
            </div>
        </div>
    )
}

export default Main;
