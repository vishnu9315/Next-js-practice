import { useState } from "react";
import "./styles.css";

export default function App() {
  const limit = 5;
  const [ratings, setRatings] = useState(2);

  const handleStar = (i) => {
    setRatings(i + 1);
  };
  return (
    <div className="App">
      {/*creates an array of undefined five times and map over it */}
      {[...Array(limit)].map((_, i) => (
        <span
          key={i}
          className={i < ratings ? "rated" : "Star"}
          onClick={() => handleStar(i)}
        >
          {i < ratings ? "★" : "✩"}
        </span>
      ))}
    </div>
  );
}
