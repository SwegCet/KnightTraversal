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
    const queue = [[start, [start]]]; // [x,y] , [] (Path output) 

    //Search for neighboring squares
    while (queue.length) {
        //Pop the first node from the graph
        const currentPath = queue.shift(); // gets [x,y] and path
        const [currentPosition, currentPathTrail] = currentPath; //Destructuring it

        //Check if we've reached the target
        if (currentPosition[0] === end[0] && currentPosition[1] === end[1]) {
            return currentPathTrail;
        };
        //Calculate the neighboring nodes then check if they're valid, add to the queue if they are valid
        directions.forEach(direction => {
            let [deltaX, deltaY] = direction;

            let neighborX = deltaX + currentPosition[0];
            let neighborY = deltaY + currentPosition[1];

            //console.log(neighborX, neighborY);
            if (isValid(neighborX, neighborY)) {
                const neighbor = [neighborX, neighborY]; // Setting the neighbor squares
                const newPath = [...currentPathTrail, neighbor]; // Adding the path to given square
                queue.push([neighbor, newPath]); //Add the neighbor to the queue as well as the path
            }
        });
    }
    return null; //No path exists
};

let start = [0,0];
let end = [7,7];
console.log(knightMoves(start, end));