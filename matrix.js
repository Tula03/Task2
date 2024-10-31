function maxMoves(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // dp[i][j] represents the maximum moves possible starting from cell (i, j)
    const dp = Array.from({ length: m }, () => Array(n).fill(0));

    for (let col = n - 2; col >= 0; col--) {
        for (let row = 0; row < m; row++) {
           
            const moves = [
                [row - 1, col + 1], // up-right
                [row, col + 1],     // right
                [row + 1, col + 1]  // down-right
            ];

            for (const [newRow, newCol] of moves) {
                if (
                    newRow >= 0 && newRow < m &&
                    grid[newRow][newCol] > grid[row][col]
                ) {
                    dp[row][col] = Math.max(dp[row][col], 1 + dp[newRow][newCol]);
                }
            }
        }
    }
    let maxPath = 0;
    for (let i = 0; i < m; i++) {
        maxPath = Math.max(maxPath, dp[i][0]);
    }

    return maxPath;
}

const grid = [
    [2, 4, 3, 5],
    [5, 4, 9, 3],
    [3, 4, 2, 11],
    [10,9,13,15]
];
console.log(maxMoves(grid)); 