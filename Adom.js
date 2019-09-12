


var reset = document.querySelector('#reset');
var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var para = document.querySelector('p');

var p1Display = document.querySelector('#p1Display');
var button2Display = document.querySelector('#p2Display');
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;

reset.addEventListener('click', function() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    para.textContent = 'First to 5 wins!';
    gameOver = true;
});





p1.addEventListener('click', function() {
    if(!gameOver) {
    
p1Score++;
p1Display.textContent = p1Score;
if(p1Score === winningScore){
    para.textContent = 'Player 1 Wins!';
    gameOver = true;
}
}   
});
p2.addEventListener('click', function() {
    if(!gameOver) {
    p2Score++;
    p2Display.textContent = p2Score;
    if (p2Score === winningScore){
        para.textContent = 'Player 2 wins!';
        gameOver = true;
    }
    }
});

 
