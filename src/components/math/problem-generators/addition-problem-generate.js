const randomInteger = require('../randoms/random-integer-in-a-range');

/**
 * 
 */
module.exports = (maxSum, numberOfAddends) => {
  try {

    let problem = "";
    let maxValue = 0;
    let minValue = 0;
    // const problem = "Math.floor(Math.random() * (max - min + 1)) + min";
    for (let i = 0; i < numberOfAddends; i++) {

      maxValue = Math.max(parseInt(maxSum), parseInt(problem));
      minValue = Math.max(parseInt(maxSum), parseInt(problem));
      problem += randomInteger(minValue);
    }

    return problem;
  }
  catch (e) {
    throw new Error(e);
  }
}