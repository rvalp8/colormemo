import '../styles/GameOver.css';

interface IGameOver {
    highestScore: any;
    overlayStyle: any;
    modalStyle: any;
    resetGame: any;
}


export default function GameOver({highestScore, overlayStyle, modalStyle, resetGame}: IGameOver) {
    return (
        <div id="overlay" style={overlayStyle}>
            <div id="game-over-modal" style={modalStyle}>
                <h2>Game Berakhir:</h2>
                <h3>Nilai Tertinggi: {highestScore}</h3>
                <p>Anda telah memilih warna yang sama.</p>
                <button onClick={resetGame}>Coba Lagi</button>
            </div>
        </div>
    )
}