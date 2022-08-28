let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context ; 


let snakeX = blockSize * 6;
let snakeY = blockSize *6;


let foodX ;
let foodY;

let velocityX = 0; 
let velocityY = 0; 

let snakeBody = [];

let gameOver = false ;


window.onload = function(){
board = document.getElementById('board');
board.height = rows *blockSize;
board.width = cols * blockSize;
context = board.getContext('2d');



placeFood();
document.addEventListener('keyup',changeDirection);
setInterval(updapte,100);
}



function updapte(){
    if(gameOver){
        return;
    }


    context.fillStyle = 'black';
    context.fillRect(0,0,board.width , board.height)

    context.fillStyle = 'red';
    context.fillRect(foodX,foodY,blockSize,blockSize)

    if(snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX,foodY])
        placeFood();
    }
    for(let i = snakeBody.length-1; i > 0 ;i--){
        snakeBody[i] = snakeBody[i-1];
    }
    if(snakeBody.length){
        snakeBody[0]= [snakeX,snakeY];
    }



    context.fillStyle = 'green';
    snakeX += velocityX*blockSize;
    snakeY += velocityY*blockSize;
    context.fillRect(snakeX,snakeY,blockSize,blockSize)

    for(let i = 0 ; i < snakeBody.length; i++){
        context.fillRect(snakeBody[i][0],snakeBody[i][1] , blockSize, blockSize);
        
    }
    if(snakeX < 0 || snakeX > rows * blockSize || snakeY < 0 || snakeY > cols * blockSize){
        gameOver = true;
        alert('Game Over')
        location.reload();
    }

    
    
}


function changeDirection(e)
{
    if(e.keyCode == 90 && velocityY != 1){
        velocityX = 0;
        velocityY = -1;
    }

    else if(e.keyCode == 83 && velocityY != -1){
        velocityX = 0;
        velocityY = 1;
    }

    else if(e.keyCode == 81 && velocityX != 1){
        velocityX = -1;
        velocityY = 0;
    }

   else  if(e.keyCode == 68 && velocityX != -1){
        velocityX = 1;
        velocityY = 0;
    }


}

function placeFood(){

    foodX = Math.floor(Math.random()*rows)*blockSize;
    foodY = Math.floor(Math.random()*cols)*blockSize;
}



