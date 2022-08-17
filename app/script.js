let score = document.getElementById("score");
let actualScore = 0;

let check1 = document.getElementById("check1");
check1.addEventListener("click",(e)=>{
    actualScore++;
    score.textContent="Score: "+actualScore;
});

let check2 = document.getElementById("check2");
check2.addEventListener("click",(e)=>{
    actualScore=actualScore+2;
    score.textContent="Score: "+actualScore;
});

let check3 = document.getElementById("check3");
check3.addEventListener("click",(e)=>{
    actualScore=actualScore+3;
    score.textContent="Score: "+actualScore;
});

let check4 = document.getElementById("check4");
check4.addEventListener("click",(e)=>{
    actualScore=actualScore+5;
    score.textContent="Score: "+actualScore;
});
