import './styles.css';

// TODO: CREATE GAME WIN OR TIE LOGIC, CREATE RESET BUTTON
//        THAT CLEARS THE BOARD, STYLE PAGE

// Module that creates the gameboard
const gameBoard = (() => {
  var board = ['', '', '',
                 '', '', '',
                 '', '', ''];
  return {
    board
  };
})();

// Factory that creates players
const playerFactory = (name, symbol, isTurn) => {
  return {name, symbol, isTurn};
};

// Module that displays players, turns, and symbols
const displayController = (() => {
  var players = ['Player 1', 'Player 2'];
  return {
    players
  };
})();

// Function that renders the player controller
const renderController = function() {
  var content = document.createElement('div');
  content.setAttribute('id', 'content');

  var controller = document.createElement('div');
  controller.setAttribute('id', 'controller');

  var player1 = document.createElement('div');
  player1.setAttribute('id', 'player1');
  player1.innerHTML = 'Player One (O)';

  player1.style.color = 'green';

  var player2 = document.createElement('div');
  player2.setAttribute('id', 'player2');
  player2.innerHTML = 'Player Two (X)';

  controller.append(player1, player2);
  content.appendChild(controller);
  document.body.appendChild(content);
}
renderController();

// Creates the two players
var player1 = playerFactory('Player 1', 'O', true);
var player2 = playerFactory('Player 2', 'X', false);


const isVictory = function (outcome) {
  if (outcome) {
    console.log('Victory')
  } else {
    console.log('Tie');
  }
}

// Function that controls clicking logic
const click = function() {
  // Logic that places either symbol for whichever player clicked
  if (this.innerHTML === '') {
    if (player1.isTurn) {
      this.innerHTML = player1.symbol;
      player1.isTurn = false;
      player2.isTurn = true;
    } else if (player2.isTurn) {
      this.innerHTML = player2.symbol;
      player2.isTurn = false;
      player1.isTurn = true;
    }
  }

  var playerOne = document.getElementById('player1');
  var playerTwo = document.getElementById('player2');

  // Displays whose turn it is
  if (player1.isTurn) {
    playerOne.style.color = 'green';
    playerTwo.style.color = 'black';
  } else if (player2.isTurn) {
    playerTwo.style.color = 'green';
    playerOne.style.color = 'black';
  }


}

// Function that renders the gameboard
const renderBoard = function (board) {
  var content = document.getElementById('content');

  var grid = document.createElement('div');
  grid.setAttribute('id', 'grid');

  for (var i = 0; i < board.length; i++) {
    var square = document.createElement('div');
    square.setAttribute('id', 'square' + i);
    square.setAttribute('class', 'square');
    square.innerHTML = board[i];
    grid.appendChild(square);
  };

  content.appendChild(grid);


  for (var i = 0; i < 9; i++) {
    var square = document.getElementById('square'+i);
    square.onclick = click;
  }
};

renderBoard(gameBoard.board);













