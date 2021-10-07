const App = (() => {

    // set globals
    let board;
    let container;
    let square;

    let MAX = 1332;

    const applyBoardStyles = (width, height) => {
        board.setAttribute('class', 'board');
        board.style.width = width;
        board.style.height = height;
        board.style.backgroundColor = 'whitesmoke';
        board.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px';
        board.style.position = 'relative';
        board.style.top = '50px';
        board.style.margin = '0 auto';
    }

    const generateBoard = (boardWidth, boardHeight) => {
        board = document.createElement('div');
        container = document.createElement('div');
        container.setAttribute('class', 'container');
        applyBoardStyles(boardWidth, boardHeight);
        document.body.appendChild(board);
        board.appendChild(container);
    }

    const appendSquaresToTheBoard = () => {
        for (let i = 0; i < MAX; i++) {
            square = document.createElement('div');
            square.setAttribute('class', 'square');
            square.style.width = '16px';
            square.style.height = '16px';
            square.style.backgroundColor = 'white';
            container.appendChild(square);
        }
    }

    const draw = (color) => {
        document.addEventListener('mouseover', e => {
            if (e.target.classList.contains('square')) {
                e.target.style.backgroundColor = color;
            }
        });
    }

    const clearBoard = () => {
        const squares = Array.from(document.querySelectorAll('.square'));
        squares.forEach((square) => {
            square.style.backgroundColor = 'white';
        });
    }

    const applyMode = (target) => {
        const mode = target.target.dataset.value;
        if (mode === 'default') {
            draw('#333');
        } else if (mode === 'random') {
            const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            draw(randomColor);
        } else {
            clearBoard();
        }
    }

    return {
        generateBoard,
        appendSquaresToTheBoard,
        applyMode
    }

})();

App.generateBoard('600px', 'auto');

App.appendSquaresToTheBoard();

const optionBtns = Array.from(document.querySelectorAll('button'));

// apply color mode
optionBtns.forEach((btn) => {
    btn.addEventListener('click', e => {
        App.applyMode(e);
    });
});