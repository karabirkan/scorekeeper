import { useState } from "react";

export default function ScoreKeeper({ numPlayers = "3", target = "5" }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const increaseScore = (idx) => {
    setScores((prevScores) => {
      return prevScores.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      });
    });
  };
  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };
  return (
    <div>
      <p>Score Keeper </p>
      <ul>
        {scores.map((e, index) => (
          <li key={index}>
            Player {index + 1}: {e}
            <button onClick={() => increaseScore(index)}>+1</button>
            {e >= target && "Winner!"}
          </li>
        ))}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
