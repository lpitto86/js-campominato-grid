document.addEventListener('DOMContentLoaded', generateGrid);

function generateGrid() {
    const gridContainer = document.getElementById('gameGrid');

    // Genera le celle della griglia
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement('div');
        cell.className = 'grid-cell';
        cell.textContent = i;
        gridContainer.appendChild(cell);
    }
}