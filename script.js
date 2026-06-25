let userscore = 0;
let compscore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const msg = document.querySelector(".msg");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        PlayGame(userChoice);
    });
});

PlayGame = (userChoice) => {
    let compChoice = genCompChoice();

    if (userChoice === compChoice) {
        gamedraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Won! ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";

    } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `Computer Won! ${compChoice} beats ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

gamedraw = () => {
    msg.innerText = "Game was Draw.Play Again!";
    msg.style.backgroundColor = "orange"

}


const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
    userscore = 0;
    compscore = 0;

    userScorePara.innerText = userscore;
    compScorePara.innerText = compscore;

    msg.innerText = "Play Your Move!";
    msg.style.backgroundColor = "green";

})