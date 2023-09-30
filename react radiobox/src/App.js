import { useState } from "react";
import "./styles.css";

export default function App() {
  const options = ["cricket", "football", "hockey"];
  const days = ["weekdays", "weekends"];
  const [game, setGame] = useState("");
  const [day, setDay] = useState("");
  return (
    <div className="App">
      <h1>Which Game</h1>
      {options.map((item) => (
        <div key={item}>
          <input
            type="radio"
            name="games"
            id={item}
            //if we use value = {game} and select a particular game all then value for all checkboxes would be same example football
            value={item}
            onChange={(e) => setGame(e.target.value)}
          />
          <label htmlFor={item}>{item}</label> <br />
        </div>
      ))}
      <h2>You Will Play </h2>
      {days.map((item) => (
        <div key={item}>
          <input
            type="radio"
            name="days"
            value={item}
            onChange={(e) => setDay(e.target.value)}
          />
          <label htmlFor={item}>{item}</label> <br />
        </div>
      ))}
      <p>
        You will play {game} on {day}{" "}
      </p>
    </div>
  );
}
