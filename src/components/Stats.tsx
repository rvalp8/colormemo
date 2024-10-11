import '../styles/Stats.css';

interface IStats {
    level: any;
    score: any;
    highestScore: any;
}


export default function Stats({level, score, highestScore}: IStats) {
    
    return (
        <div id="stats">
            <h2>Tingkat: {level}</h2>
            <div>
                <h3>Nilai: {score}</h3>
                <h3>Nilai tertinggi: {highestScore}</h3>
            </div>
            <hr/>
        </div>
    )
}