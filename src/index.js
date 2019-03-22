module.exports = function solveSudoku(matrix) {
    solve(matrix);
    return matrix;
}
function solve(matrix) {
    var row = -1, col = -1, isEmpty = true;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j]===0) {
                row = i;
                col = j;
                isEmpty = false;
                break;
            }
        }
        if (!isEmpty) {
            break;
        }
    }

    if (isEmpty) {
        return true;
    }

    for (let num = 1; num <= matrix.length; num++) {
        if (norm(matrix, row, col, num)) {
            matrix[row][col] = num;
            if (solve(matrix, matrix.length)) {
                return true;
            } else {
                matrix[row][col] = 0;
            }
        }
    }
    return false;
}
function norm(matrix, row, col, num) {
    for (let d=0; d<matrix.length; d++) {
        if (matrix[row][d]===num) {
            return false;
        }
    }

    for (let r = 0; r < matrix.length; r++) {
        if (matrix[r][col]===num) {
            return false;
        }
    }
    let sqrt = Math.sqrt(matrix.length);
    let sqRowSt = row - row % sqrt;
    let sqColSt = col - col % sqrt;

    for (let r=sqRowSt; r < sqRowSt+sqrt; r++) {
        for (let d = sqColSt; d < sqColSt+sqrt; d++) {
            if (matrix[r][d] === num) {
                return false;
            }
        }
    }
    return true;
}
