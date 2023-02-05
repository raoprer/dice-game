//1st dice
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimg1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg1);

//2nd dice
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimg2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);

//title
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
