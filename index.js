var x = Math.floor(Math.random()*6);
var y = Math.floor(Math.random()*6);
x += 1;
y += 1;
document.getElementById("img1").src = "images/dice"+x+".png";
document.getElementById("img2").src = "images/dice"+y+".png";
if(x > y)
  document.querySelector('h1').textContent = "Player 1 wins";
else
  document.querySelector('h1').textContent = "Player 2 wins";
