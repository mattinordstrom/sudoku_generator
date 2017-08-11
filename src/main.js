//Test array
var sudokuArray = [
	8, 3, 1, 6, 5, 9, 7, 2, 4,
	9, 7, 5, 2, 1, 4, 6, 3, 8,
	2, 4, 6, 8, 7, 3, 1, 9, 5,
	7, 2, 9, 4, 3, 5, 8, 1, 6,
	5, 8, 3, 1, 9, 6, 2, 4, 7,
	1, 6, 4, 7, 2, 8, 3, 5, 9,
	4, 1, 2, 9, 6, 7, 5, 8, 3,
	3, 9, 7, 5, 8, 2, 4, 6, 1,
	6, 5, 8, 3, 4, 1, 9, 7, 2
];

function init() {
	//Temp var
	var debug = true;

	var mainGame = new MainGame();
	mainGame.init();

	if(debug) {
		mainGame.showAllNumbers(sudokuArray);
	}
}
