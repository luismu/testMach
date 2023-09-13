import "./styles.css";
import React, { useState } from "react";

function findPairsWithSum(numbers, targetSum) {
  const pairs = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        pairs.push([numbers[i], numbers[j]]);
      }
    }
  }

  return pairs;
}

function App() {
  const [numberList, setNumberList] = useState("");
  const [targetSum, setTargetSum] = useState(0);
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");

  const validateNumberList = (input) => {
    const regex = /^-?\d+(,-?\d+)*$/;
    return regex.test(input);
  };

  const findPairs = () => {
    if (!validateNumberList(numberList)) {
      setError(
        "Invalid input. Please enter a comma-separated list of integers."
      );
      return;
    }

    setError("");

    const numbers = numberList.split(",").map(Number);
    const pairs = findPairsWithSum(numbers, targetSum);
    setResult(pairs);
  };

  return (
    <div className="App">
      <h1>Find Pairs with Sum</h1>
      <div>
        <label htmlFor="numberList">
          Enter a comma-separated list of numbers:
        </label>
        <input
          type="text"
          id="numberList"
          value={numberList}
          onChange={(e) => setNumberList(e.target.value)}
          placeholder="1,9,5,0,20,-4,12,16,7"
        />
      </div>
      <div>
        <label htmlFor="targetSum">Enter the target sum:</label>
        <input
          type="number"
          id="targetSum"
          value={targetSum}
          onChange={(e) => setTargetSum(parseInt(e.target.value))}
          placeholder="12"
        />
      </div>
      <button onClick={findPairs}>Find Pairs</button>
      <div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <h2>Pairs that sum up to {targetSum}</h2>
        <ul>
          {result.map((pair, index) => (
            <li key={index}>
              + {pair[0]}, {pair[1]}
            </li>
          ))}
        </ul>
        {result.length === 0 && !error && <p>No pairs found.</p>}
      </div>
    </div>
  );
}

export default App;
