import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import Stats from "./components/Stats";
import Cards from "./components/Cards";
import { useEffect } from "react";
import GameOver from "./components/Gameover";

let overlayStyle: {
  visibility?: string;
  opacity: string;
} = {
  visibility: "hidden",
  opacity: "0%",
};

let modalStyle = {
  transform: "translate(0%, 0%)",
};

function App() {
  const [level, setLevel] = useState(1);
  const [gameState, setGameState] = useState("");
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [lose, setLose] = useState(0);

  useEffect(() => {
    if (gameState === "next level") {
      setLevel(level + 1);
    }
    return () => {
      setGameState("");
    };
  }, [gameState, level]);

  useEffect(() => {
    if (gameState === "game over") {
      setLose(lose + 1);

      overlayStyle = {
        opacity: "100%",
      };
      modalStyle = {
        transform: "translate(0%, 50%)",
      };
    }

    return () => {
      overlayStyle = {
        visibility: "hidden",
        opacity: "0%",
      };

      modalStyle = {
        transform: "translate(0%, 0%)",
      };
    };
  }, [gameState]);

  useEffect(() => {
    if (score > highestScore) {
      setHighestScore(score);
    }
  }, [score, highestScore]);

  const resetGame = () => {
    setGameState("new game");
    setScore(0);
    setLevel(1);
  };

  return (
    <>
      <header>
        <Title />
        <Stats level={level} score={score} highestScore={highestScore} lose={lose} />
      </header>
      <main>
        <Cards
          level={level}
          gameState={gameState}
          setGameState={setGameState}
          setScore={setScore}
          score={score}
        />
      </main>
      <GameOver
        highestScore={highestScore}
        overlayStyle={overlayStyle}
        modalStyle={modalStyle}
        resetGame={resetGame}
      />
    </>
  );
}

export default App;
