// ! /////////////////       1: we track the user and computer score 
let userScore = 0;
let compScore = 0;
let drawScore = 0;

// ! ////////////////        2: we access our choices
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const UserScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score")
const drawscorepara = document.querySelector("#draw-score");
// ! Draw game function
const drawGame = () => {

}

// ! show Winner function 
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        //!  //////////          9:we have to update our score board 
        userScore++;
        UserScorepara.innerText = userScore;
        msg.innerText = `win the Match 🥳 your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        //!  //////////          9:we have to update our score board 
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `lose the Match 😞 ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "yellow";
        msg.style.color = "black";

    }
}

// ! computer choice function
const genCompChoice = () => {
    const option = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

// ! play game function / user choice
//! //////////////////       4: hamare pass user choice hai ke user ne kise select kiya
const playGame = (userChoice) => {
    //                                                               generate computer choice
    //                                                               console.log("user choice =", userChoice);    //this is for output screen
    const compChoice = genCompChoice();
    //                                                                   console.log("compChoice =", compChoice);     // this is for output screen 

    // ! //////////`//``          6:we compare for game draw 
    if (userChoice === compChoice) {
        drawGame();
        msg.innerText = `🤞 draw - ${userChoice} and ${compChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "black";
        drawScore++;
        drawscorepara.innerText = drawScore;



        //!  /////////////////?   7:compare the computer choice and user choice we write if else stetement .
    } else {
        let userWin = true;                       
        if (userChoice === "rock") {        // !    1: rock
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;

        } else if (userChoice === "paper") {//!     2:paper
            // rock scissor
            userWin = compChoice === "scissor" ? false : true;

        } else {                              //!     3:scissor             
            // rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

//!                     3 :we add addEventListener for all choices

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("you click ",userChoice);    // for output screen
        playGame(userChoice);
    })
})
