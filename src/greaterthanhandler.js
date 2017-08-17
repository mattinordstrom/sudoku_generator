var GreaterThanHandler = function(sudokuArray) {
  this.sudokuArray = sudokuArray;

  this.NUMBER_OF_ROWS = 9;
  this.NUMBER_OF_COLUMNS = 9;
  
  this.sudokuRowsArray = [];

  for(var i=0; i < this.NUMBER_OF_ROWS; i++){
    this.sudokuRowsArray.push(this.sudokuArray.slice((i*9),(i*9)+this.NUMBER_OF_COLUMNS));
  }
};

GreaterThanHandler.prototype.constructor = GreaterThanHandler;


GreaterThanHandler.prototype.isAdjacentGreater = function(lineRowId, lineColumnId, horizontal) {
  if(horizontal){
    var currentRowNumbers = this.sudokuRowsArray[lineRowId];
    var nextRowNumbers = this.sudokuRowsArray[lineRowId+1];

    return nextRowNumbers[lineColumnId] > currentRowNumbers[lineColumnId];
  }

  var currentRowNumbers = this.sudokuRowsArray[lineRowId];
  var numberToTheLeftOfCurrentLine = currentRowNumbers[lineColumnId];
  var numberToTheRightOfCurrentLine = currentRowNumbers[lineColumnId+1];

  return numberToTheRightOfCurrentLine > numberToTheLeftOfCurrentLine;
}
