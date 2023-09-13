// 1. Define a function named 'findPairsWithSum' that takes two arguments: 'numbers' and 'targetSum'.
export function findPairsWithSum(numbers, targetSum) {
  // 2. Initialize an empty array 'pairs' to store the pairs of numbers that sum up to the target.
  const pairs = [];

  // 3. Outer loop (index 'i') to iterate through each number in the 'numbers' array.
  for (let i = 0; i < numbers.length; i++) {
    // 4. Inner loop (index 'j') to compare the current number with all subsequent numbers.
    for (let j = i + 1; j < numbers.length; j++) {
      // 5. Check if the sum of 'numbers[i]' and 'numbers[j]' equals the 'targetSum'.
      if (numbers[i] + numbers[j] === targetSum) {
        // 6. If a pair is found, add it to the 'pairs' array.
        pairs.push([numbers[i], numbers[j]]);
      }
    }
  }

  // 7. Return the 'pairs' array containing all pairs that sum up to the target.
  return pairs;
}

function myFunction() {
  const inputStr = "1,9,5,0,20,-4,12,16,7,-8";
  //const target = 12;

  //const inputNumbers = document.getElementById("numbers").value;
  const targetd = document.getElementById("target").value;
  const target = parseInt(targetd);
  console.log(target);

  // Split the input string into an array of numbers and call 'findPairsWithSum' function.
  const numbers = inputStr.split(",").map(Number);
  const pairs = findPairsWithSum(numbers, target);
  let str = "<ul>";
  // Output the pairs found or a message if no pairs are found.
  if (pairs.length > 0) {
    console.log(`Pairs that sum up to ${target}`);

    for (const pair of pairs) {
      console.log(`${pair[0]},${pair[1]}`);
    }
  } else {
    console.log("No pairs found.");
  }
}
