import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';



function App() {
    const [gameRound, setGameRound] = useState(0);
    return (
    <div className="appWrapper">
        <Header gameRound={gameRound} />
        <Main gameRound={gameRound} setGameRound={setGameRound} />
    </div>
    );
}

export default App;
