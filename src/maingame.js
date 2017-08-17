var MainGame = function() {
  this.NUMBER_OF_ROWS = 9;
  this.NUMBER_OF_COLUMNS = 9;

  this.VERTICAL_LINE_CANVAS_HEIGHT = 40;
  this.VERTICAL_LINE_CANVAS_WIDTH = 12;

  this.HORIZONTAL_LINE_CANVAS_HEIGHT = this.VERTICAL_LINE_CANVAS_WIDTH;
  this.HORIZONTAL_LINE_CANVAS_WIDTH = this.VERTICAL_LINE_CANVAS_HEIGHT;

  this.CROSS_CANVAS_HEIGHT_WIDTH = this.VERTICAL_LINE_CANVAS_WIDTH;

  this.greaterThanHandler;
};

MainGame.prototype.constructor = MainGame;

MainGame.prototype.init = function() {
  this.addCellsWithNumbers(sudokuArray);
  this.addLines();
  this.addCrosses();

  this.greaterThanHandler = new GreaterThanHandler();
  this.greaterThanHandler.setUI();
}

MainGame.prototype.addCellsWithNumbers = function(sudokuArray) {
	var i,j;
	for(i=0; i < this.NUMBER_OF_ROWS; i++){
    var containerElement = $('.sudokuContainer');
    containerElement.append(
      '<tr id="row'+i+'"></tr>'
    );

    if(i < (this.NUMBER_OF_ROWS - 1)){
      containerElement.append(
        '<tr id="lineRow'+i+'"></tr>'
      );
    }

		for(j=0; j < this.NUMBER_OF_COLUMNS; j++){
      var rowElement = $('.sudokuContainer #row'+i);
			rowElement.append(
        '<td class="numberCell" id="cell'+j+'"></td>'
      );

      if(j < (this.NUMBER_OF_COLUMNS - 1)){
        rowElement.append(
          '<td id="canvasLineVertical"><canvas id="vertical_canvas'+i+'_'+j+'" height="'+this.VERTICAL_LINE_CANVAS_HEIGHT+'" width="'+this.VERTICAL_LINE_CANVAS_WIDTH+'"></canvas></td>'
        );
      }

      var lineRowElement = $('.sudokuContainer #lineRow'+i);
      lineRowElement.append(
        '<td id="canvasLineHorizontal"><canvas id="horizontal_canvas'+i+'_'+j+'" height="'+this.HORIZONTAL_LINE_CANVAS_HEIGHT+'" width="'+this.HORIZONTAL_LINE_CANVAS_WIDTH+'"></canvas></td>'
      );
      if(j < (this.NUMBER_OF_COLUMNS - 1)){
        lineRowElement.append(
          '<td><canvas id="cross'+i+'_'+j+'" height="'+this.CROSS_CANVAS_HEIGHT_WIDTH+'" width="'+this.CROSS_CANVAS_HEIGHT_WIDTH+'"></canvas></td>'
        );
      }
		}
	}
}

MainGame.prototype.addLines = function() {
  this.addVerticalLines();
  this.addHorizontalLines();

}

MainGame.prototype.addVerticalLines = function() {
  var i,j;
	for(i=0; i < this.NUMBER_OF_ROWS; i++){
		for(j=0; j < this.NUMBER_OF_COLUMNS-1; j++){
      var c = document.getElementById("vertical_canvas"+i+"_"+j);
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(6,0);
      ctx.lineTo(6,15);
      if(i == 0 && j == 0){ //TODO: If adjacent is greater than current
        ctx.lineTo(2,20);
      } else {
        ctx.lineTo(10,20);
      }
      ctx.lineTo(6,25);
      ctx.lineTo(6,40);
      if(j == 2 || j == 5){
        ctx.lineWidth = 4;
      } else {
        ctx.lineWidth = 2;
      }
      ctx.stroke();
    }
  }
}

MainGame.prototype.addHorizontalLines = function() {
  var i,j;
	for(i=0; i < this.NUMBER_OF_ROWS-1; i++){
		for(j=0; j < this.NUMBER_OF_COLUMNS; j++){
      var c = document.getElementById("horizontal_canvas"+i+"_"+j);
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(0,6);
      ctx.lineTo(15,6);
      if(i == 0 && j == 0){ //TODO: If adjacent is greater than current
        ctx.lineTo(20,2);
      } else {
        ctx.lineTo(20,10);
      }
      ctx.lineTo(25,6);
      ctx.lineTo(40,6);
      if(i == 2 || i == 5){
        ctx.lineWidth = 4;
      } else {
        ctx.lineWidth = 2;
      }
      ctx.stroke();
    }
  }
}

MainGame.prototype.addCrosses = function() {
  var i,j;
	for(i=0; i < this.NUMBER_OF_ROWS-1; i++){
		for(j=0; j < this.NUMBER_OF_COLUMNS-1; j++){
      var c = document.getElementById("cross"+i+"_"+j);
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(6,0);
      ctx.lineTo(6,12);

      if(j == 2 || j == 5){
        ctx.lineWidth = 4;
      } else {
        ctx.lineWidth = 2;
      }

      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0,6);
      ctx.lineTo(12,6);

      if(i == 2 || i == 5){
        ctx.lineWidth = 4;
      } else {
        ctx.lineWidth = 2;
      }

      ctx.stroke();
		}
	}

}

MainGame.prototype.showAllNumbers = function(sudokuArray) {
	var i,j;
	for(i=0; i < this.NUMBER_OF_ROWS; i++){
		for(j=0; j < this.NUMBER_OF_COLUMNS; j++){
			$('#row' + i +' #cell'+j).text(sudokuArray[(i*9)+j]);
		}
	}
}

MainGame.prototype.hideAllNumbers = function() {
	var i,j;
	for(i=0; i < this.NUMBER_OF_ROWS; i++){
		for(j=0; j < this.NUMBER_OF_COLUMNS; j++){
			$('#row' + i +' #cell'+j).text('');
		}
	}
}
