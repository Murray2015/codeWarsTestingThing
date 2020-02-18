/*
Sudo-kool for School

Having secured a place on the School of Code bootcamp, you are certain that your dream job in the tech industry is finally within sight. Your coding knowledge has increased beyond your wildest expectations, and your upper thigh muscles have never felt better. However, one morning a strange email appears in your inbox. It reads as follows:

Dear Bootcamper,

The International Sudoku Arbitration Directorate has been watching your progress carefully. We are delighted to be able to write to you with an offer of employment. As I am sure you are aware, millions of sudoku puzzles are completed every day. It is our sworn duty to ensure that they are checked for accuracy. To this end, we always ensure the best and brightest in our society are given the opportunity to fulfil this important role. All the details are attached. We look forward to welcoming you to the team as soon as possible.

Yours faithfully
Mao Shoggett,
ISAD President

You feel lightheaded after reading the email, and the words hazily float on the screen in front of you. You realise that you never wanted to be a programmer at all. Your real dream is checking the accuracy of sudoku puzzles, now and for all time. All that is left to do is put the few coding skills you have learnt towards this one objective, and your life will be complete. 

Task: write a function that takes in a completed sudoku puzzle, and returns true or false depending on whether it has been filled in correctly or incorrectly. The completed puzzle is made up of an array which contains nine other arrays. Each of these nine arrays rep resents a completed row of the sudoku grid, from top to bottom. */

function checkNums(numsArray) {
  // console.log(numsArray);
  const sortedNums = numsArray.sort();
  for (let i = 0; i < sortedNums.length; i++) {
    if (i === 0) {
      if (sortedNums[i] !== 1) {
        // console.log("failed 0:", sortedNums[i]);
        return false;
      }
    } else {
      if (sortedNums[i] - sortedNums[i - 1] !== 1) {
        // console.log("failed sort:", sortedNums[i] - sortedNums[i - 1], i);
        return false;
      }
    }
  }
  return true;
}

function checkRows(sudokuSq) {
  // console.log("check rows", sudokuSq);
  for (let i = 0; i < 9; i++) {
    if (!checkNums(sudokuSq[i])) {
      return false;
    }
  }
  return true;
}

function checkCols(sudokuSq) {
  // console.log("check cols", sudokuSq);
  let colsArray = [];
  for (let i = 0; i < 9; i++) {
    let tempArray = [];
    for (let j = 0; j < 9; j++) {
      tempArray.push(sudokuSq[j][i]);
    }
    colsArray.push(tempArray);
  }
  return checkRows(colsArray);
}

function checkSqrs(sudokuSq) {
  // console.log("check sqs", sudokuSq);
  let output = [];
  var temp1 = [],
    temp2 = [],
    temp3 = [];
  for (let j = 0; j < 9; j++) {
    if (j % 3 === 0 && j > 0) {
      output.push(temp1);
      output.push(temp2);
      output.push(temp3);
      (temp1 = []), (temp2 = []), (temp3 = []);
    }
    temp1.push(...sudokuSq[j].slice(0, 3));
    temp2.push(...sudokuSq[j].slice(3, 6));
    temp3.push(...sudokuSq[j].slice(6, 9));
  }
  output.push(temp1);
  output.push(temp2);
  output.push(temp3);
  return checkRows(output);
}

function checkSudoku(grid) {
  // console.log(checkRows(grid.slice()));
  // console.log(checkSqrs(grid.slice()));
  // console.log(checkCols(grid.slice()));
  // return checkRows(grid) && checkCols(grid) && checkSqrs(grid);

  // console.log(checkRows(g1));
  // console.log(checkSqrs(g2));
  // console.log(checkCols(g3));
  console.log(checkRows(JSON.parse(JSON.stringify(grid))));
  console.log(checkSqrs(JSON.parse(JSON.stringify(grid))));
  console.log(checkCols(JSON.parse(JSON.stringify(grid))));
}

const sud = [
  [3, 4, 1, 2, 9, 8, 7, 6, 5],
  [9, 2, 5, 6, 7, 3, 4, 1, 8],
  [6, 8, 7, 4, 5, 1, 2, 3, 9],
  [4, 3, 8, 9, 1, 2, 5, 7, 6],
  [5, 9, 2, 7, 6, 4, 3, 8, 1],
  [1, 7, 6, 8, 3, 5, 9, 4, 2],
  [2, 5, 3, 1, 4, 6, 8, 9, 7],
  [8, 6, 9, 3, 2, 7, 1, 5, 4],
  [7, 1, 4, 5, 8, 9, 6, 2, 3]
];

const sud1 = sud;
const sud2 = sud;
const sud3 = sud;

// console.log(checkRows(sud));
// console.log(checkCols(sud));
// console.log(checkSqrs(sud));
// console.log(checkSudoku(sud));
console.log(checkSudoku(sud1, sud2, sud3));

module.exports = checkSudoku;
