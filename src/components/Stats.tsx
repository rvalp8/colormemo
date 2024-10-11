import '../styles/Stats.css';

interface IStats {
    level: any;
    score: any;
    highestScore: any;
}


export default function Stats({level, score, highestScore}: IStats) {
    
    return (
        <div id="stats">
            <h2>Level: {level}</h2>
            <div>
                <h3>Score: {score}</h3>
                <h3>Highest Score: {highestScore}</h3>
            </div>
            <hr/>
        </div>
    )
}