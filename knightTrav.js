function knightMoves (start, end) {
    //Global variable
    const boardSize = 8; //Using an 8x8 chessboard

    //Predefining all possible moves a knight can traverse
    const directions = [
        //X dominant movements
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        //Y dominant movements
        [1, 2], [-1, 2], [1, -2], [-1, -2]
    ];

    //Checking if the knight is within the board and not out of bounds
    function isValid(x,y) {
        if ((x >= 0) && (y >= 0) && (x < boardSize) && (y < boardSize)) {
            return true;
        }
        return false;
    }

    //Beginning of BFS
    const queue = [[start], []]; //This is [[[start], []]] because start input is [x,y]
    const visited = new Set();
    
    //Search for neighboring squares
    while (queue.length) {
        //Pop the first node from the graph
        const currentPath = queue.shift(); 

        //Add to visiited set of what we just dequeued
        visited.add(currentPath.join(","));

        //Check if we've reached the target
        if (currentPath[0] == end[0] && currentPath[1] == end[1]) {
            return visited;
        };

        //Calculate the neighboring nodes then check if they're valid, add to the queue if they are valid
        directions.forEach(direction => {
            let [deltaX, deltaY] = direction;

            neighborX = deltaX + currentPath[0];
            neighborY = deltaY + currentPath[1];

            if (isValid(neighborX, neighborY)) {
                const neighbor = [neighborX, neighborY];
                queue.push(neighbor)
            }
        });
    }
    
    return null; //No path exists
};

let start = [0,0];
let end = [7,7];
console.log(knightMoves(start, end));