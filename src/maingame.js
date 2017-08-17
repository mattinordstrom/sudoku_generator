var MainGame = function(sudokuArray) {
  this.sudokuArray = sudokuArray;

  this.NUMBER_OF_ROWS = 9;
  this.NUMBER_OF_COLUMNS = 9;

  this.VERTICAL_LINE_CANVAS_HEIGHT = 40;
  this.VERTICAL_LINE_CANVAS_WIDTH = 12;

  this.HORIZONTAL_LINE_CANVAS_HEIGHT = this.VERTICAL_LINE_CANVAS_WIDTH;
  this.HORIZONTAL_LINE_CANVAS_WIDTH = this.VERTICAL_LINE_CANVAS_HEIGHT;

  this.CROSS_CANVAS_HEIGHT_WIDTH = this.VERTICAL_LINE_CANVAS_WIDTH;

  this.LINE_WIDTH_NORMAL = 2;
  this.LINE_WIDTH_THICK = 4;
  this.LINE_ARROW_SIZE = 4;

  this.greaterThanHandler = new GreaterThanHandler(sudokuArray);

};

MainGame.prototype.constructor = MainGame;

MainGame.prototype.init = function() {
  this.addCellsWithNumbers();
  this.addLines();
  this.addCrosses();
}

MainGame.prototype.addCellsWithNumbers = function() {
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
  var CENTER_POINT = this.VERTICAL_LINE_CANVAS_WIDTH / 2;
  var HEIGHT = this.VERTICAL_LINE_CANVAS_HEIGHT;
  var i,j;
	for(i=0; i < this.NUMBER_OF_ROWS; i++){
		for(j=0; j < this.NUMBER_OF_COLUMNS-1; j++){
      var c = document.getElementById("vertical_canvas"+i+"_"+j);
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(CENTER_POINT,0);
      ctx.lineTo(CENTER_POINT,HEIGHT*0.375);
      if(this.greaterThanHandler.isAdjacentGreater(i,j,false)){
        ctx.lineTo(CENTER_POINT-this.LINE_ARROW_SIZE,HEIGHT*0.5);
      } else {
        ctx.lineTo(CENTER_POINT+this.LINE_ARROW_SIZE,HEIGHT*0.5);
      }
      ctx.lineTo(CENTER_POINT,HEIGHT*0.625);
      ctx.lineTo(CENTER_POINT,HEIGHT);
      if(j == 2 || j == 5){
        ctx.lineWidth = this.LINE_WIDTH_THICK;
      } else {
        ctx.lineWidth = this.LINE_WIDTH_NORMAL;
      }
      ctx.stroke();
    }
  }
}

MainGame.prototype.addHorizontalLines = function() {
  var CENTER_POINT = this.HORIZONTAL_LINE_CANVAS_HEIGHT / 2;
  var WIDTH = this.HORIZONTAL_LINE_CANVAS_WIDTH;
  var i,j;
	for(i=0; i < this.NUMBER_OF_ROWS-1; i++){
		for(j=0; j < this.NUMBER_OF_COLUMNS; j++){
      var c = document.getElementById("horizontal_canvas"+i+"_"+j);
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(0,CENTER_POINT);
      ctx.lineTo(WIDTH*0.375,CENTER_POINT);
      if(this.greaterThanHandler.isAdjacentGreater(i,j,true)){
        ctx.lineTo(WIDTH*0.5,CENTER_POINT-this.LINE_ARROW_SIZE);
      } else {
        ctx.lineTo(WIDTH*0.5,CENTER_POINT+this.LINE_ARROW_SIZE);
      }
      ctx.lineTo(WIDTH*0.625,CENTER_POINT);
      ctx.lineTo(WIDTH,CENTER_POINT);
      if(i == 2 || i == 5){
        ctx.lineWidth = this.LINE_WIDTH_THICK;
      } else {
        ctx.lineWidth = this.LINE_WIDTH_NORMAL;
      }
      ctx.stroke();
    }
  }
}

MainGame.prototype.addCrosses = function() {
  var CENTER_POINT = this.CROSS_CANVAS_HEIGHT_WIDTH / 2;
  var i,j;
	for(i=0; i < this.NUMBER_OF_ROWS-1; i++){
		for(j=0; j < this.NUMBER_OF_COLUMNS-1; j++){
      var c = document.getElementById("cross"+i+"_"+j);
      var ctx = c.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(CENTER_POINT,0);
      ctx.lineTo(CENTER_POINT,this.CROSS_CANVAS_HEIGHT_WIDTH);

      if(j == 2 || j == 5){
        ctx.lineWidth = this.LINE_WIDTH_THICK;
      } else {
        ctx.lineWidth = this.LINE_WIDTH_NORMAL;
      }

      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0,CENTER_POINT);
      ctx.lineTo(this.CROSS_CANVAS_HEIGHT_WIDTH,CENTER_POINT);

      if(i == 2 || i == 5){
        ctx.lineWidth = this.LINE_WIDTH_THICK;
      } else {
        ctx.lineWidth = this.LINE_WIDTH_NORMAL;
      }

      ctx.stroke();
		}
	}
}

MainGame.prototype.showAllNumbers = function() {
	var i,j;
	for(i=0; i < this.NUMBER_OF_ROWS; i++){
		for(j=0; j < this.NUMBER_OF_COLUMNS; j++){
			$('#row' + i +' #cell'+j).text(this.sudokuArray[(i*9)+j]);
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
