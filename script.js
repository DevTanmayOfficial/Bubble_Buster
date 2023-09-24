function makebubble(){ 
  var carry ='';
  for (var i = 1; i <=144; i++) {
    let change = Math.floor(Math.random()*10)
    carry+=`<div class="circle">${change}</div>`;
    document.querySelector('.pbtm').innerHTML=carry;
    }
}
makebubble();


var timerv=60;
var score=0;
var hitrn=0;

function increse(){
  score+=10
  document.querySelector('#scoreval').textContent=score;
}

function timer(){
  setInterval(function(){
    if(timerv>0){
    timerv--;
    document.querySelector('#timervalue').textContent=timerv;
    }
    else{
      clearInterval(timerv)
      document.querySelector('.pbtm').innerHTML=`<h1 class='game'>Game Over</h1>`
    }
  },1000)
}
timer();

function newhit(){
  hitrn=Math.floor(Math.random()*10);
  document.querySelector('#hit').textContent=hitrn;
}
newhit();

////////////Event Bubbling///////////////////////
function clicked(){
  document.querySelector('.pbtm')
  .addEventListener("click",function(details){
    var clicknumber=Number(details.target.textContent);
    if(clicknumber===hitrn){
      increse();
      makebubble();
      newhit();
    }
  })
}
clicked();
