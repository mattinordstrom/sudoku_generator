var MainGame = function() {
  this.greaterThanHandler;
};

MainGame.prototype.constructor = MainGame;

MainGame.prototype.init = function() {
  this.addCells();
  
  this.greaterThanHandler = new GreaterThanHandler();
  this.greaterThanHandler.setUI();
}

MainGame.prototype.addCells = function(sudokuArray) {
	var i,j;
	for(i=0; i < 9; i++){
    $('.sudokuContainer').append(
      '<tr id="row'+i+'"></tr>'
    );

		for(j=0; j < 9; j++){
			$('.sudokuContainer #row'+i).append(
        '<td id="cell'+j+'"></td>'
      );
		}
	}
}

MainGame.prototype.showAllNumbers = function(sudokuArray) {
	var i,j;
	for(i=0; i < 9; i++){
		for(j=0; j < 9; j++){
			$('#row' + i +' #cell'+j).text(sudokuArray[(i*9)+j]);
		}
	}
}

MainGame.prototype.hideAllNumbers = function() {
	var i,j;
	for(i=0; i < 9; i++){
		for(j=0; j < 9; j++){
			$('#row' + i +' #cell'+j).text('');
		}
	}
}
