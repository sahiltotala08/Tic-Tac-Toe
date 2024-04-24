let boxes= document.querySelectorAll(".btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let resetbtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newbtn")
let turnx=true;
let count=0;
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
];
boxes.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        if(turnx)
        {
            btn.innerText= "X";
            turnx=false;
        }
        else{
            btn.innerText= "O";
            turnx=true;
        }
        btn.disabled=true;
        count++;
        let iswinner=checkwin();
        if(count==9&&!iswinner)
        {
            gameDraw();
        }
    });
});
const resetGame= ()=>{
    turnx=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };

const enableBoxes = ()=>{
    for(let btn of boxes)
    {
        btn.disabled=false;
        btn.innerText="";
    }
};
const disableBoxes=()=>
{
    for(let btn of boxes)
    {
        btn.disabled=true;
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const checkwin = () => {
    for (let pattern of win) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
          showWinner(pos1Val);
          return true;
        }
      }
    }
  };
  newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);