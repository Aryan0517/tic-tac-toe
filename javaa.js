console.log("Welcome to tik tak toe");
let turn ="X"
let gameover = false;

//Function to change the turn
const changeTurn =()=>{
    return turn==="X"?"O":"X"
}

//function to cheak for a wini
const checkwin =()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText ===boxtext[e[1]].innerText && boxtext[e[1]].innerText ===boxtext[e[2]].innerText && boxtext[e[0]].innerText !== "")){
           document.querySelector('.Info').innerText = boxtext[e[0]].innerText +"won"  
           gameover=true;
           document.getElementById('imgbox').style.display='block'
        }
    })
}

// gamelogic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click",()=>{
        if(!gameover){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkwin();
            document.getElementsByClassName("Info")[0].innerText = "turn for " + turn;
            
            
        }

    })
})


reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = '';
    });
    turn = "X";
    gameover = false;
    document.querySelector(".Info").innerText = "Turn for " + turn; // Update turn indicator after reset
    document.getElementById('imgbox').style.display='none'
});
