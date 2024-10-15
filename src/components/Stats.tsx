import '../styles/Stats.css';

interface IStats {
    level: any;
    score: any;
    highestScore: any;
    lose: any;
    averageHighestScore: any;
}


export default function Stats({level, score, highestScore, lose, averageHighestScore}: IStats) {
    
    return (
        <div id="stats">
            <h2>Tingkat: {level}</h2>
            <div>
                <h3>Nilai: {score}</h3>
                <h3>Nilai tertinggi: {highestScore}</h3>
                <h3>Kekalahan: {lose}</h3>
                <h3>Rata-rata nilai tertinggi: {averageHighestScore}</h3>
            </div>
            <hr/>
        </div>
    )
}