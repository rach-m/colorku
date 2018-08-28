// variables
const squares = document.querySelectorAll(".square");
const board = document.querySelector(".wrapper");
const palette = document.querySelectorAll(".palette");
let selectedColor;
let score = 0;
let timer;
let squareNumber = -1;
let rank = 0;
let s0 = document.querySelector(".s00");
let s1 = document.querySelector(".s01");
let s2 = document.querySelector(".s02");
let s3 = document.querySelector(".s03");
let s4 = document.querySelector(".s04");
let s5 = document.querySelector(".s05");
let s6 = document.querySelector(".s06");
let s7 = document.querySelector(".s07");
let s8 = document.querySelector(".s08");
let s9 = document.querySelector(".s09");
let s10 = document.querySelector(".s10");
let s11 = document.querySelector(".s11");
let s12 = document.querySelector(".s12");
let s13 = document.querySelector(".s13");
let s14 = document.querySelector(".s14");
let s15 = document.querySelector(".s15");
let s16 = document.querySelector(".s16");
let s17 = document.querySelector(".s17");
let s18 = document.querySelector(".s28");
let s19 = document.querySelector(".s19");
let s20 = document.querySelector(".s20");
let s21 = document.querySelector(".s21");
let s22 = document.querySelector(".s22");
let s23 = document.querySelector(".s23");
let s24 = document.querySelector(".s24");
let s25 = document.querySelector(".s25");
let s26 = document.querySelector(".s26");
let s27 = document.querySelector(".s27");
let s28 = document.querySelector(".s28");
let s29 = document.querySelector(".s29");
let s30 = document.querySelector(".s30");
let s31 = document.querySelector(".s31");
let s32 = document.querySelector(".s32");
let s33 = document.querySelector(".s33");
let s34 = document.querySelector(".s34");
let s35 = document.querySelector(".s35");
let s36 = document.querySelector(".s46");
let s37 = document.querySelector(".s37");
let s38 = document.querySelector(".s38");
let s39 = document.querySelector(".s39");
let s40 = document.querySelector(".s40");
let s41 = document.querySelector(".s41");
let s42 = document.querySelector(".s42");
let s43 = document.querySelector(".s43");
let s44 = document.querySelector(".s44");
let s45 = document.querySelector(".s45");
let s46 = document.querySelector(".s46");
let s47 = document.querySelector(".s47");
let s48 = document.querySelector(".s48");
let s49 = document.querySelector(".s49");
let s50 = document.querySelector(".s50");
let s51 = document.querySelector(".s51");
let s52 = document.querySelector(".s52");
let s53 = document.querySelector(".s53");
let s54 = document.querySelector(".s54");
let s55 = document.querySelector(".s55");
let s56 = document.querySelector(".s56");
let s57 = document.querySelector(".s57");
let s58 = document.querySelector(".s58");
let s59 = document.querySelector(".s59");
let s60 = document.querySelector(".s60");
let s61 = document.querySelector(".s61");
let s62 = document.querySelector(".s62");
let s63 = document.querySelector(".s63");
let s64 = document.querySelector(".s64");
let s65 = document.querySelector(".s65");
let s66 = document.querySelector(".s66");
let s67 = document.querySelector(".s67");
let s68 = document.querySelector(".s68");
let s69 = document.querySelector(".s69");
let s70 = document.querySelector(".s70");
let s71 = document.querySelector(".s71");
let s72 = document.querySelector(".s72");
let s73 = document.querySelector(".s73");
let s74 = document.querySelector(".s74");
let s75 = document.querySelector(".s75");
let s76 = document.querySelector(".s76");
let s77 = document.querySelector(".s77");
let s78 = document.querySelector(".s78");
let s79 = document.querySelector(".s79");
let s80 = document.querySelector(".s80");
const rowColumnSquareCombos = [
  [s0, s1, s2, s3, s4, s5, s6, s7, s8],
  [s9, s10, s11, s12, s13, s14, s15, s16, s17],
  [s18, s19, s20, s21, s22, s23, s24, s25, s26],
  [s27, s28, s29, s30, s31, s32, s33, s34, s35],
  [s36, s37, s38, s39, s40, s41, s42, s43, s44],
  [s45, s46, s47, s48, s49, s50, s51, s52, s53],
  [s54, s55, s56, s57, s58, s59, s60, s61, s62],
  [s63, s64, s65, s66, s67, s68, s69, s70, s71],
  [s72, s73, s74, s75, s76, s77, s78, s79, s80],

  [s0, s9, s18, s27, s36, s45, s54, s63, s72],
  [s1, s10, s19, s28, s37, s46, s55, s64, s73],
  [s2, s11, s20, s29, s38, s47, s56, s65, s74],
  [s3, s12, s21, s30, s39, s48, s57, s66, s75],
  [s4, s13, s22, s31, s40, s49, s58, s67, s76],
  [s5, s14, s23, s32, s41, s50, s59, s68, s77],
  [s6, s15, s24, s33, s42, s51, s60, s69, s78],
  [s7, s16, s25, s34, s43, s52, s61, s70, s79],
  [s8, s17, s26, s35, s44, s53, s62, s71, s80],

  [s0, s1, s2, s9, s10, s11, s18, s19, s20],
  [s3, s4, s5, s12, s13, s14, s21, s22, s23],
  [s6, s7, s8, s15, s16, s17, s24, s25, s26],
  [s27, s28, s29, s36, s37, s38, s45, s46, s47],
  [s30, s31, s32, s39, s40, s41, s48, s49, s50],
  [s33, s34, s35, s42, s43, s44, s51, s52, s53],
  [s54, s55, s56, s63, s64, s65, s72, s73, s74],
  [s57, s58, s59, s66, s67, s68, s75, s76, s77],
  [s60, s61, s62, s69, s70, s71, s78, s79, s80]
];

// events

// USE SOME AND EVERY TO CHECK


//starter boards

//SUDOKU GENERATOR TAKEN FROM - https://www.emanueleferonato.com/2015/06/23/pure-javascript-sudoku-generatorsolver/

// we start with an empty sudoku...
var sudoku = new Array(
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
);

// ... and we solve it!!
solve(sudoku);

// given a sudoku cell, returns the row
function returnRow(cell) {
  return Math.floor(cell / 9);
}

// given a sudoku cell, returns the column
function returnCol(cell) {
  return cell % 9;
}

// given a sudoku cell, returns the 3x3 block
function returnBlock(cell) {
  return Math.floor(returnRow(cell) / 3) * 3 + Math.floor(returnCol(cell) / 3);
}

// given a number, a row and a sudoku, returns true if the number can be placed in the row
function isPossibleRow(number, row, sudoku) {
  for (var i = 0; i <= 8; i++) {
    if (sudoku[row * 9 + i] == number) {
      return false;
    }
  }
  return true;
}

// given a number, a column and a sudoku, returns true if the number can be placed in the column
function isPossibleCol(number, col, sudoku) {
  for (var i = 0; i <= 8; i++) {
    if (sudoku[col + 9 * i] == number) {
      return false;
    }
  }
  return true;
}

// given a number, a 3x3 block and a sudoku, returns true if the number can be placed in the block
function isPossibleBlock(number, block, sudoku) {
  for (var i = 0; i <= 8; i++) {
    if (
      sudoku[
        Math.floor(block / 3) * 27 +
          (i % 3) +
          9 * Math.floor(i / 3) +
          3 * (block % 3)
      ] == number
    ) {
      return false;
    }
  }
  return true;
}

// given a cell, a number and a sudoku, returns true if the number can be placed in the cell
function isPossibleNumber(cell, number, sudoku) {
  var row = returnRow(cell);
  var col = returnCol(cell);
  var block = returnBlock(cell);
  return (
    isPossibleRow(number, row, sudoku) &&
    isPossibleCol(number, col, sudoku) &&
    isPossibleBlock(number, block, sudoku)
  );
}

// given a row and a sudoku, returns true if it's a legal row
function isCorrectRow(row, sudoku) {
  var rightSequence = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  var rowTemp = new Array();
  for (var i = 0; i <= 8; i++) {
    rowTemp[i] = sudoku[row * 9 + i];
  }
  rowTemp.sort();
  return rowTemp.join() == rightSequence.join();
}

// given a column and a sudoku, returns true if it's a legal column
function isCorrectCol(col, sudoku) {
  var rightSequence = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  var colTemp = new Array();
  for (var i = 0; i <= 8; i++) {
    colTemp[i] = sudoku[col + i * 9];
  }
  colTemp.sort();
  return colTemp.join() == rightSequence.join();
}

// given a 3x3 block and a sudoku, returns true if it's a legal block
function isCorrectBlock(block, sudoku) {
  var rightSequence = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  var blockTemp = new Array();
  for (var i = 0; i <= 8; i++) {
    blockTemp[i] =
      sudoku[
        Math.floor(block / 3) * 27 +
          (i % 3) +
          9 * Math.floor(i / 3) +
          3 * (block % 3)
      ];
  }
  blockTemp.sort();
  return blockTemp.join() == rightSequence.join();
}

// given a sudoku, returns true if the sudoku is solved
function isSolvedSudoku(sudoku) {
  for (var i = 0; i <= 8; i++) {
    if (
      !isCorrectBlock(i, sudoku) ||
      !isCorrectRow(i, sudoku) ||
      !isCorrectCol(i, sudoku)
    ) {
      return false;
    }
  }
  return true;
}

// given a cell and a sudoku, returns an array with all possible values we can write in the cell
function determinePossibleValues(cell, sudoku) {
  var possible = new Array();
  for (var i = 1; i <= 9; i++) {
    if (isPossibleNumber(cell, i, sudoku)) {
      possible.unshift(i);
    }
  }
  return possible;
}

// given an array of possible values assignable to a cell, returns a random value picked from the array
function determineRandomPossibleValue(possible, cell) {
  var randomPicked = Math.floor(Math.random() * possible[cell].length);
  return possible[cell][randomPicked];
}

// given a sudoku, returns a two dimension array with all possible values
function scanSudokuForUnique(sudoku) {
  var possible = new Array();
  for (var i = 0; i <= 80; i++) {
    if (sudoku[i] == 0) {
      possible[i] = new Array();
      possible[i] = determinePossibleValues(i, sudoku);
      if (possible[i].length == 0) {
        return false;
      }
    }
  }
  return possible;
}

// given an array and a number, removes the number from the array
function removeAttempt(attemptArray, number) {
  var newArray = new Array();
  for (var i = 0; i < attemptArray.length; i++) {
    if (attemptArray[i] != number) {
      newArray.unshift(attemptArray[i]);
    }
  }
  return newArray;
}

// given a two dimension array of possible values, returns the index of a cell where there are the less possible numbers to choose from
function nextRandom(possible) {
  var max = 9;
  var minChoices = 0;
  for (var i = 0; i <= 80; i++) {
    if (possible[i] != undefined) {
      if (possible[i].length <= max && possible[i].length > 0) {
        max = possible[i].length;
        minChoices = i;
      }
    }
  }
  return minChoices;
}

// given a sudoku, solves it
function solve(sudoku) {
  var saved = new Array();
  var savedSudoku = new Array();
  var i = 0;
  var nextMove;
  var whatToTry;
  var attempt;
  while (!isSolvedSudoku(sudoku)) {
    i++;
    nextMove = scanSudokuForUnique(sudoku);
    if (nextMove == false) {
      nextMove = saved.pop();
      sudoku = savedSudoku.pop();
    }
    whatToTry = nextRandom(nextMove);
    attempt = determineRandomPossibleValue(nextMove, whatToTry);
    if (nextMove[whatToTry].length > 1) {
      nextMove[whatToTry] = removeAttempt(nextMove[whatToTry], attempt);
      saved.push(nextMove.slice());
      savedSudoku.push(sudoku.slice());
    }
    sudoku[whatToTry] = attempt;
  }
  showSudoku(sudoku, i);
}

// given a solved sudoku and the number of steps, prints out the sudoku
function showSudoku(sudoku, i) {
  var sudokuText = "";
  var solved = "\n\nSolved in " + i + " steps";
  for (var i = 0; i <= 8; i++) {
    for (var j = 0; j <= 8; j++) {
      sudokuText += " ";
      sudokuText += sudoku[i * 9 + j];
      sudokuText += " ";
      if (j != 8) {
        sudokuText += "|";
      }
    }
    if (i != 8) {
      sudokuText += "\n---+---+---+---+---+---+---+---+---\n";
    }
  }
  sudokuText += solved;
  generatePuzzle(sudoku);
  return sudoku;
}

//BACK TO MY ORIGINAL CODE

function generatePuzzle(sudoku) {
  let colorArray = [];
  let color;
  for (let i = 0; i <= sudoku.length; i++) {
    var expr = sudoku[i];
    switch (expr) {
      case 1:
        color = "crimson";
        break;
      case 2:
        color = "coral";
        break;
      case 3:
        color = "gold";
        break;
      case 4:
        color = "darkgreen";
        break;
      case 5:
        color = "lightgreen";
        break;
      case 6:
        color = "darkblue";
        break;
      case 7:
        color = "cyan";
        break;
      case 8:
        color = "darkviolet";
        break;
      case 9:
        color = "deeppink";
        break;
    }
    colorArray.push(color);
  }
  randomBoard(colorArray);
  //  return console.log(colorArray);
}

function randomBoard(colorArray) {
  let count = 0;
  while (count < 50) {
    let num = Math.floor(Math.random() * squares.length );
    // console.log(colorArray[num], num);
    squares[num].style.background = colorArray[num];
    count++;
  }
  //Click event for the color palette to select the color

  palette.forEach(element => {
    element.addEventListener("click", function(event) {
      selectedColor = event.target.style.background;
    });
  });

  //Click event for the board to deposit the chosen color on the board
  squares.forEach(element => {
    element.addEventListener("click", function() {
      event.target.style.background = selectedColor;
      checkBoard(event);
      if (selectedColor !== undefined) {
        element.classList.remove(
          "crimson",
          "coral",
          "gold",
          "lightgreen",
          "darkgreen",
          "darkblue",
          "cyan",
          "darkviolet",
          "deeppink"
        );
        event.target.classList.add(selectedColor);
        console.log(selectedColor + element.classList);
      }
    });
  });
}

checkBoard = () => {
  for (let i = 0; i < rowColumnSquareCombos.length; i++) {
    // console.log(" row " + i);
    array = [];
    rowColumnSquareCombos[i].forEach(square => {
      if (square.style.background !== "") {
        array.push(square.style.background);
        if (characterCount(array)) {
          return console.log("valid move");
        } else {
          event.target.style.background = "";
          return console.log("invalid move");
        }
      }
    });
    function characterCount(stringToCount) {
      let answer = {};
      for (let i = 0; i < array.length; i++) {
        let val = array[i];
        answer[val] = answer[val] ? answer[val] + 1 : 1;
      }
      for (let i = 0; i < Object.values(answer).length; i++) {
        if (Object.values(answer)[i] !== 1) {
          return false;
        } else {
          return true;
        }
      }
    }
  }
};

function winCheck (colorArray){
  board = []
  for (let i = 0; i < squares.length; i++) {
    board.push(squares[i].background.style)
  }
  if (board === colorArray){
    alert('Winner!!')
  }
}
