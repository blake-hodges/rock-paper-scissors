import { React } from 'react';

function Header(props) {
    return (
        <div className="header">
            <h1>Rock, Paper, Scissors</h1>
            <p>Round {props.gameRound}</p>
        </div>
    )
}

export default Header;
