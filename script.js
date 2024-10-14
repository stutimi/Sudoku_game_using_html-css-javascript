// Initialize empty Sudoku grid
let grid = Array(9).fill().map(() => Array(9).fill(0));

// Function to render the Sudoku grid
function renderGrid() {
    const sudokuGrid = document.getElementById('sudoku-grid');
    sudokuGrid.innerHTML = ''; // Clear previous grid

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('input');
            cell.className = 'sudoku-cell';
            cell.type = 'text';
            cell.maxLength = 1;
            cell.value = grid[i][j] === 0 ? '' : grid[i][j];
            cell.dataset.highlight = grid[i][j] !== 0;
            cell.oninput = () => validateInput(cell, i, j);
            sudokuGrid.appendChild(cell);
        }
    }
}

// Function to validate Sudoku input (numbers only 1-9)
function validateInput(cell, row, col) {
    const value = cell.value;
    if (value >= 1 && value <= 9) {
        grid[row][col] = parseInt(value);
    } else {
        cell.value = ''; // Clear invalid input
        grid[row][col] = 0;
    }
}

// Function to generate a random Sudoku grid
function generateSudoku() {
    // Reset grid to empty
    grid = Array(9).fill().map(() => Array(9).fill(0));

    // Simple random number filling (you can implement Sudoku puzzle generation logic here)
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (Math.random() > 0.7) {
                grid[i][j] = Math.floor(Math.random() * 9) + 1;
            }
        }
    }
    renderGrid();
}

// On page load, render an empty grid
window.onload = () => {
    generateSudoku();
};
