let grid;

function setup(){
    createCanvas(400,400);
    grid = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ];
    console.table(grid);
    addNumber();
    addNumber();
    console.table(grid);
}

function addNumber(){
    let options = [];
    for(let i=0; i<4; i++){
        for(let j=o;j<4;j++){
            if(grid[i][j] === 0){
                options.push({
                    x: i,
                    y: j
                });
            }
        }        
    }
    if(options.lenght>0)
    let spot = random(options);
    grid[spot.x][spot.y] = r > 0.5 ? 2 : 4;
    
     

}

function draw(){
    background(0);
}