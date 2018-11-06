// Função para criar o tabuleiro
const createBoard = (rows, columns) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, columns) => {
            return {
                row, // número da linha
                columns, // número da coluna
                opened: false, // se está aberto
                flagged: false, // se está com flag
                mined: false, // se está com mina
            }
        })
    })
}

// Distribui as minas pelo campo
const spreadMines = (board, minesAmount) => {
    const rows = board.length;
    const columns = board[0].length;
    let minesPlanted = 0;

    while(minesPlanted < minesAmount) {
        const rowSel = parseInt(Math.random() * rows, 10);
        const columnSel = parseInt(Math.random() * columns, 10);

        if(!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++;
        }
    }
}

// Cria uma tabuleiro já com as minas plantadas
const createMinedBoard = (row, columns, minesAmount) => {
    const board = createBoard(rows,columns);
    spreadMines(board, minesAmount)
    return board
}

export { createMinedBoard }