var gameBorder=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
var status=1;
var id1;
var id2;
var blockColor;
let m=0;
var gameColor= [
        'class="blue game-block" data-i="1"',
        'class="yellow game-block" data-i="2"',
        'class="green game-block" data-i="3"',
        'class="black game-block" data-i="4"',
        'class="orange game-block" data-i="5"',
        'class="red game-block" data-i="6"',
        'class="aqua game-block" data-i="7"',
        'class="blueviolet game-block" data-i="8"',
        'class="blue game-block" data-i="1"',
        'class="yellow game-block"data-i="2"',
        'class="green game-block" data-i="3"',
        'class="black game-block" data-i="4"',
        'class="orange game-block" data-i="5"',
        'class="red game-block" data-i="6"',
        'class="aqua game-block" data-i="7"',
        'class="blueviolet game-block " data-i="8"'];

function draw() {
    let out='';


    let styleClass=shuffle(gameColor);
        for (let i=0;i<gameBorder.length;i++){
            let arr=gameBorder[i];
            for (let k=0;k<arr.length;k++){
                out+=`<div ${styleClass[m]} data-x="${k}" data-y="${i}" data-m="${m}" ></div>`;
                m++;
            }

        }

    document.querySelector('#lbl').innerHTML=out;
    document.querySelectorAll('.red,.blue,.yellow,.green,.black,.orange,.aqua,.blueviolet,.none-active').forEach(function (element) {
      element.onclick=gameStart;

    })
    document.querySelectorAll('.red,.blue,.yellow,.green,.black,.orange,.aqua,.blueviolet').forEach(function (element) {

        element.classList.add('white')
    })
    for (let i=0;i<gameBorder.length;i++){
        let arr=gameBorder[i];
        for (let k=0;k<arr.length;k++){
            out+=`<div ${styleClass[m]} data-x="${k}" data-y="${i}" data-m="${m}" ></div>`;
            m++;
        }
    }
}
draw();
function gameStart(){

    let x=this.dataset.x;
    let y=this.dataset.y;
    let i=this.dataset.i;
    document.querySelector(`.game-block[data-x="${+x}"][data-y="${+y}"]`).classList.remove('white');
    logicGame(x, y, i);
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
 function logicGame(pos1,pos2,color) {
     if (this.status == 1) {
         this.id1 = pos1;
         this.id2 = pos2;
         this.blockColor = color;
         console.log(this.id1+this.id2+this.blockColor);
         console.log(this.status);
         this.status =2;
         console.log(this.status);
         return;
     }
     if (this.status == 2) {
         console.log(pos1 + pos2 + color)
         if (this.blockColor==color){

                 document.querySelector(`.game-block[data-x="${pos1}"][data-y="${pos2}"]`).classList.remove('white');
                 document.querySelector(`.game-block[data-x="${this.id1}"][data-y="${this.id2}"]`).classList.remove('white');

         }
     else {
             setTimeout(function () {
                 document.querySelector(`.game-block[data-x="${pos1}"][data-y="${pos2}"]`).classList.add('white');
                 document.querySelector(`.game-block[data-x="${this.id1}"][data-y="${this.id2}"]`).classList.add('white');
             }, 500);
         }
         console.log(this.status);
         this.status = 1;
     }

 }