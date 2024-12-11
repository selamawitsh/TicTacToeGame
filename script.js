let boxes=document.querySelectorAll('.box')

let turn="X"
isGameOver=false;
boxes.forEach(e=>{
    e.innerHTML=""
    e.addEventListener('click',function(){
        if(!isGameOver && e.innerHTML===""){
            e.innerHTML=turn;
        } 
        checkWin()
        changeTurn()
        checkDraw()
        
    })
})

function changeTurn(){
    if(turn=="X"){
        turn="O"
        document.querySelector(".bg").style.left="94px";
    }
    else{
        turn="X"
        document.querySelector(".bg").style.left="0px";
    }
}

function checkWin(){
    let winCondition=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    for(let i=0;i<winCondition.length;i++){
        let r0=boxes[winCondition[i][0]].innerHTML
        let r1=boxes[winCondition[i][1]].innerHTML
        let r2=boxes[winCondition[i][2]].innerHTML

        if(r0!="" && r0===r1 && r0===r2){
            isGameOver=true
            document.querySelector("#result").innerHTML= turn + " win!";
            document.querySelector("#play-again").style.display='inline';

            for(j=0;j<3;j++){
                boxes[winCondition[i][j]].style.backgroundColor='#938da7'
                boxes[winCondition[i][j]].style.color='#7f5069'
            }
           
        }

    }
}

function checkDraw(){
    if(!isGameOver){
        let isDraw=true;
        boxes.forEach(e=>{
            if(e.innerHTML==="") isDraw=false
        })
        if(isDraw){
            isGameOver=true
            document.querySelector("#result").innerHTML= "Draw";
            document.querySelector("#play-again").style.display='inline';

            
        }
    }
}

document.querySelector("#play-again").addEventListener("click",function(){
    isGameOver=false
    turn="X"
    document.querySelector(".bg").style.left='0';
    document.querySelector("#result").innerHTML=''
    document.querySelector("#play-again").style.display='none'

    boxes.forEach(e=>{
        e.innerHTML=""
        e.style.removeProperty("background-color")
        e.style.color='white'
    })

})