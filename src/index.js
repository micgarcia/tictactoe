import './styles.css';

// Module that creates the gameboard
const gameBoard = (() => {
  var board = ['X', 'X', 'O',
                 'X', 'X', 'O',
                 'O', 'O', 'X'];
  return {
    board
  };
})();

// Factory that creates players
const playerFactory = (name) => {
  return {name};
};

const displayController = (() => {
  var players = [];

  return {
    players
  };
})();


// Function that renders the gameboard
const renderBoard = function (board) {
  var content = document.createElement('div');
  content.setAttribute('id', 'content');

  var grid = document.createElement('div');
  grid.setAttribute('id', 'grid');

  for (var i = 0; i < board.length; i++) {
    var square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.innerHTML = board[i];
    grid.appendChild(square);
  };

  content.appendChild(grid);
  document.body.appendChild(content);

};

renderBoard(gameBoard.board);

const click = function() {

}
