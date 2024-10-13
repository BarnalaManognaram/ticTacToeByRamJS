let box=document.querySelectorAll(".box")
let resetBtn=document.querySelector("#reset_btn")
let winnerMsg=document.querySelector("#winner_msg")
let winnerCont=document.querySelector(".msg_container")
let playerA = true;
let playerB = false;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

box.forEach((box)=>
    box.addEventListener("click",()=>{
        console.log("box was clicked")
          if(playerA==true){
            box.innerText="X"
            playerA=false;
          }
          else{
            box.innerText="O"
            playerA=true;
          }
          box.disabled=true;
          checkWinner();
        
    })


)

function checkWinner(){
    for(let i=0;i<winPatterns.length;i++){
        let pattern=winPatterns[i];
       let val1=box[pattern[0]].innerText
       let val2=box[pattern[1]].innerText
       let val3=box[pattern[2]].innerText
       if(val1!=""&&val2!=""&&val3!=""){
         if(val1==val2 && val2 == val3){
            console.log("Winner"+val1)
            disableBoxes()
            winner(val1)
         }
       }
    }
}

function disableBoxes(){
    for(let i=0;i<box.length;i++){
       box[i].disabled=true
    }
}

function winner(winner){
    console.log(winner)
    winnerMsg.innerText="Winner is "+winner+""
    winnerCont.classList.remove("hide")
  
}


    resetBtn.addEventListener("click",enableAllBtn)

function enableAllBtn(){
    for(let i=0;i<box.length;i++){
        box[i].disabled=false
        box[i].innerText=""
     }
}

