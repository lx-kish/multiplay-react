const randomInteger = require('../randoms/random-integer-in-a-range');

////////////////////////
// Types of addition problems might be:
//
// up to 10 sum <up-to-10>
//
// single-digit addends <single-d-addends>
//
// single-digit addends big numbers only <single-d-addends-big>
//
// double-digit addends with sum of ones less than 10 <double-d-addends>
//
// double-digit addends with sum of ones more than 10 <double-d-addends-big>

/**
 * 
 */
module.exports = (problemType, numberOfAddends, numberOfProblems, maxSum) => {
  try {

    let problems = [];

    switch (problemType) {
      case 'up-to-10':
        /**
         * 1. Generate sum with limits min=0+numberOfAddends, max=10
         * 2. Loop with length <numberOfAddends>-1
         * 3. Generate addend with limits min=0, max=sum-problemsTotal
         * 4. Push addend into problems array
         */
        const sum = randomInteger(0+parseInt(numberOfAddends), 10);

        for (let i = 0; i < numberOfAddends-1; i++) {
          
          let problemsSum = 0; 
          let j = problems.length; 
          while(j--) problemsSum += parseInt(problems[j])

          problems.push(randomInteger(0+i, sum-problemsSum));
        }
        console.log('generated numbers from "addition problems generator" ===> ', problems);
        break;
      case 'single-d-addends':

        break;
      case 'sign':

        break;
      case 'input':

        break;

      default:
        break;
    }

    let problem = "";
    let maxValue = 0;
    let minValue = 0;
    // const problem = "Math.floor(Math.random() * (max - min + 1)) + min";
    for (let i = 0; i < numberOfAddends - 1; i++) {

      maxValue = Math.max(parseInt(maxSum), parseInt(problem));
      minValue = Math.max(parseInt(maxSum), parseInt(problem));
      problem += randomInteger(minValue);
    }

    return problems;
  }
  catch (e) {
    throw new Error(e);
  }
}