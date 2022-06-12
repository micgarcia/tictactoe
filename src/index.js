import './styles.css';


// Function to import font
const fontImport = function () {
  var font = document.createElement('style');
  font.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');";
  document.head.appendChild(font);
}

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


// Function that renders the player controller
const renderController = function() {
  var content = document.createElement('div');
  content.setAttribute('id', 'content');

  var controller = document.createElement('div');
  controller.setAttribute('id', 'controller');

  var player1 = document.createElement('div');
  player1.setAttribute('id', 'player1');
  player1.innerHTML = 'Player One (O)';

  player1.style.color = '#57837B';
  player1.style.fontWeight = 600;

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

const initializePlayers = function () {
  player1 = playerFactory('Player 1', 'O', true);
  player2 = playerFactory('Player 2', 'X', false);
}
initializePlayers();



// Function determines if victory or tie has happened
const isVictory = function () {
  var results = [];
  for (var i = 0; i < 9; i++) {
    var letter = document.getElementById('square' + i);
    results.push(letter.innerHTML);
  }

  if (results[0] !== '' && results[0] === results[1] && results[1] === results[2]) {
    if (results[0] === 'O') {
      declareEnd('Player One');
    } else {
      declareEnd('Player Two');
    }
  } else

  if (results[3] !== '' && results[3] === results[4] && results[4] === results[5]) {
    if (results[3] === 'O') {
      declareEnd('Player One');
    } else {
      declareEnd('Player Two');
    }
  } else

  if (results[6] !== '' && results[6] === results[7] && results[7] === results[8]) {
    if (results[6] === 'O') {
      declareEnd('Player One');
    } else {
      declareEnd('Player Two');
    }
  } else

  if (results[0] !== '' && results[0] === results[3] && results[3] === results[6]) {
    if (results[0] === 'O') {
      declareEnd('Player One');
    } else {
      declareEnd('Player Two');
    }
  } else

  if (results[1] !== '' && results[1] === results[4] && results[4] === results[7]) {
    if (results[1] === 'O') {
      declareEnd('Player One');
    } else {
      declareEnd('Player Two');
    }
  } else

  if (results[2] !== '' && results[2] === results[5] && results[5] === results[8]) {
    if (results[2] === 'O') {
      declareEnd('Player One');
    } else {
      declareEnd('Player Two');
    }
  } else

  if (results[0] !== '' && results[0] === results[4] && results[4] === results[8]) {
    if (results[0] === 'O') {
      declareEnd('Player One');
    } else {
      declareEnd('Player Two');
    }
  } else

  if (results[2] !== '' && results[2] === results[4] && results[4] === results[6]) {
    if (results[2] === 'O') {
      declareEnd('Player One');
    } else {
      declareEnd('Player Two');
    }
  } else

  if (!results.includes('')) {
    declareEnd();
  }
}


// Function declares victory or tie on DOM
const declareEnd = function (winner) {
  var winnerMsg = document.createElement('div');
  winnerMsg.setAttribute('id', 'winnerMsg');
  if (winner === undefined) {
    winnerMsg.innerHTML = 'Tie Game!';
  } else {
    winnerMsg.innerHTML = winner + ' Wins!';
  }
  content.appendChild(winnerMsg);
  reset();
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
    playerOne.style.color = '#57837B';
    playerOne.style.fontWeight = 600;
    playerTwo.style.color = 'black';
    playerTwo.style.fontWeight = 400;
  } else if (player2.isTurn) {
    playerTwo.style.color = '#57837B';
    playerTwo.style.fontWeight = 600;
    playerOne.style.color = 'black';
    playerOne.style.fontWeight = 400;
  }

  isVictory();
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

const reset = function() {
  var content = document.getElementById('content');

  var resetBtn = document.createElement('button');
  resetBtn.innerHTML = 'Reset Board';

  content.appendChild(resetBtn);

  resetBtn.onclick = function() {
    var msg = document.getElementById('winnerMsg');
    msg.remove();
    resetBtn.remove();

    for (var i = 0; i < 9; i++) {
      var square = document.getElementById('square' + i);
      square.innerHTML = '';
    }


  }
}












