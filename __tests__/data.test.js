import SudArray from './../src/main';

describe('Creating and testing grid', () => {

  test('Ashould correctly create a arraySudoku object from inputNumber', () => {
    const arraySudoku = new SudArray(2);
    expect(arraySudoku.grid).toEqual(2);
  });
  test('Bshould correctly create a arraySudoku object from inputNumbers', () => {
    const arraySudoku = new SudArray([1,2,3,4,5,6,7,8,9]);
    expect(arraySudoku.grid).toEqual[1,2,3,4,5,6,7,8,9];
  });
  test('Cshould correctly find all the blanks', () => {
    const testArray = new SudArray([1,2,0,4,0,6,7,8,9,0])
    expect(testArray.findBlanks()).toEqual([2,4,9]);
  });
  test('Dshould build this.solution', () => {
    const testArray = new SudArray([1,2,0,4,0,6,7,8,9,0],[]);
    testArray.startSolution();
    expect(testArray.solution).toEqual([1,2,0,4,0,6,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  });

 test('Eshould identify the lowest missing number missing from a row', () => {
    const testArray = new SudArray([9,0,1,4,5,6,7,4],[]);
    testArray.startSolution();
    expect(testArray.checkRow(2,1)).toEqual(2);
  });
  test('Fshould identify the lowest missing number missing from a column', () => {
    const testArray = new SudArray([1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,4,3,3],[]);
    testArray.startSolution();
    expect(testArray.checkColumn(2,1)).toEqual(3);
  });
  test('Gshould find the blank and check for the lowest missing number in that row. It should then check the column and return the next lowest number in the column', () => {
    const testArray = new SudArray([1,2,0,5,5,6,7,8,9,1,2,3,4,5,6,7,8,9],[]);
    testArray.startSolution();
    expect(testArray.findNumberToTry(0,1)).toEqual([2,4]);
  });
  test('Hshould find the blank and check for the lowest missing number in that row. It should then check the column and return the next lowest number in the column. It should check that number in the row and then in the column until it finds an answer', () => {
    const testArray = new SudArray([1,2,0,4,7,7,7,8,9,1,2,3,4,5,6,7,8,9,1,2,5,4,5,6,7,8,9],[]);
    testArray.startSolution();
    expect(testArray.findNumberToTry(0,1)).toEqual([2,6]);
  });
  test('Ishould correctly create a arraySudoku object from inputNumber', () => {
    const arraySudoku = new SudArray(2,[0,1]);
    expect(arraySudoku.solution).toEqual([0,1]);
  });
  test('Jshould store result numbers in an array', () => {
    const testArray = new SudArray([1,2,0,4,7,7,7,8,9,1,2,3,4,5,6,7,8,9,1,2,5,4,5,6,7,8,9],[])
    expect(testArray.buildSolution()).toEqual([1,2,6,4,7,7,7,8,9,1,2,3,4,5,6,7,8,9,1,2,5,4,5,6,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  });
  test('Kshould store multiple result numbers in an array', () => {
    const testArray = new SudArray([0,2,0,4,7,7,7,7,9,1,2,3,4,5,6,7,8,9,1,2,5,4,5,6,7,8,9],[])
    expect(testArray.buildSolution()).toEqual([6,2,8,4,7,7,7,7,9,1,2,3,4,5,6,7,8,9,1,2,5,4,5,6,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[]);
  });
  test('Lshould take into account previous trials', () => {
    const testArray = new SudArray([0,2,0,4,1,7,7,8,9,1,2,4,4,5,6,7,8,9,1,2,5,4,5,6,7,8,9],[])
    expect(testArray.buildSolution()).toEqual([3,2,6,4,1,7,7,8,9,1,2,4,4,5,6,7,8,9,1,2,5,4,5,6,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  });
  test('Mif it gets to 9 and does not find a number, then an earlier number was incorrect. It should go back a previous trial and put in a higher number', () => {
    const testArray = new SudArray([0,2,0,4,1,5,0,8,9,1,2,4,4,5,6,7,8,9,1,2,5,4,5,6,7,8,9],[])
    expect(testArray.buildSolution()).toEqual([3,2,7,4,1,5,6,8,9,1,2,4,4,5,6,7,8,9,1,2,5,4,5,6,7,8,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[]);
  });
  test('Nmore complex', () => {
    const testArray = new SudArray([0,8,0,7,0,1,0,3,0,4,1,9,2,5,3,5,7,8],[])
    expect(testArray.buildSolution()).toEqual([2,8,5,7,4,1,6,3,9,4,1,9,2,5,3,5,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  });
  test('Oeven more complex', () => {
    const testArray = new SudArray([0,8,0,7,0,1,0,3,0,4,0,9,0,0,0,0,0,0],[])
    expect(testArray.buildSolution()).toEqual([2,8,5,7,4,1,6,3,9,4,1,9,2,3,6,5,7,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  });
  test('PFull Sudoko', () => {
    const testArray = new SudArray([2,8,6,7,4,1,9,3,5,4,1,9,0,0,0,0,0,0,0,5,0,0,6,0,4,1,8,7,0,0,0,0,9,0,0,0,8,0,0,6,1,0,5,0,0,0,3,5,0,0,0,0,2,9,0,6,0,4,0,7,0,9,0,1,0,0,0,0,8,0,0,4,0,2,0,0,5,0,0,7,0],[])
    testArray.startSolution();
    expect(testArray.buildSolution()).toEqual([2,8,6,7,4,1,9,3,5,4,1,9,3,8,5,7,6,2,3,5,7,9,6,2,4,1,8,7,4,1,5,2,9,3,8,6,8,9,2,6,1,3,5,4,7,6,3,5,8,7,4,1,2,9,5,6,8,4,3,7,2,9,1,1,7,3,2,9,8,6,5,4,9,2,4,1,5,6,8,7,3]);
  });
});

describe('Testing a manual fill', () => {
  test('QCorrectly recognise a repeat in a manual row', () => {
    const testArray = new SudArray([1,2,3,4,5,6,7,8,8],[]); 
    testArray.startSolution();
    expect(testArray.checkManualRow(7,8)).toEqual(2)
  });  
  test('RCorrectly recognise a repeat in a manual column from test function', () => {
    const testArray = new SudArray([1,2,3,4,5,6,7,8,9,1],[]); 
    expect(testArray.jestTest()).toEqual("Too many 1 in column 1")
  }); 
  test('SCorrectly recognise a repeat in a manual square from test function', () => {
    const testArray = new SudArray([1,2,3,4,5,6,7,8,9,2],[]); 
    expect(testArray.jestTest()).toEqual("Too many 2 in a square")
  }); 
  test('TCorrectly recognise a repeat from a full sudoku board', () => {
    const testArray = new SudArray([2,8,6,7,4,1,9,3,5,4,2,9,3,8,5,7,6,0,3,5,7,9,6,0,4,1,8,7,4,1,5,0,9,3,8,6,8,9,0,6,1,3,5,4,7,6,3,5,8,7,4,1,0,9,5,6,8,4,3,7,0,9,1,1,7,3,0,9,8,6,5,4,9,0,4,1,5,6,8,7,3],[]); 
    expect(testArray.jestTest()).toEqual("Too many 2 in a square")
  });
  test('UCorrectly recognise a repeat but ignore zeros', () => {
    const testArray = new SudArray([0,0,3,4,5,6,7,8,9,0,3],[]); 
    expect(testArray.jestTest()).toEqual("Too many 3 in a square")
  });
  test('VCorrectly recognise and clean out non number characters', () => {
    const manualArray = new SudArray([0,0,"3<br>",4,5,6,7,8,9,0,3],[]); 
    manualArray.lockForManualTest();
    manualArray.startSolution();
    expect(manualArray.solution).toEqual([0,0,3,4,5,6,7,8,9,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  }); 
  test('WCorrectly find a solution from manual fill', () => {
    const testArray = new SudArray(["1",0,0],[]); 
    testArray.lockForManualTest();
    testArray.buildSolution();
    expect(testArray.solution).toEqual([1,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  });  
  test('XCorrectly find a solution from one number', () => {
    const testArray = new SudArray([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[]); 
    expect(testArray.buildSolution()).toEqual([1,2,3,4,5,6,7,8,9,4,5,6,7,8,9,1,2,3,7,8,9,1,2,3,4,5,6,2,1,4,3,6,5,8,9,7,3,6,5,8,9,7,2,1,4,8,9,7,2,1,4,3,6,5,5,3,1,6,4,2,9,7,8,6,4,2,9,7,8,5,3,1,9,7,8,5,3,1,6,4,2]);
  }); 
  test('YCorrectly find a solution from one number', () => {
    const testArray = new SudArray([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[]); 
    testArray.startSolution();
    expect(testArray.solution).toEqual([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  });  
});
