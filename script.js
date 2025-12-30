let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.getElementById("message");

const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");

//computer choice
const getComputerChoice = () =>{
    const options =["Rock","Paper","Scissors"];
    const gameIdx = Math.floor(Math.random() *3);
    return options[gameIdx];
};

//choices
const playGame = (userChoice) =>{
    console.log("userChoice =",userChoice);

    const compChoice = getComputerChoice();
    console.log("compChoice =",compChoice);

    if(userChoice === compChoice){
        // console.log("It's a tie(draw)!");
        msg.innerText = "It's a tie(draw).Play again! 🤝 ";
        msg.style.backgroundColor = "#E3D26F ";


    }else if((userChoice === "Rock" && compChoice === "Scissors") ||
            (userChoice === "Paper" && compChoice === "Rock") ||
            (userChoice === "Scissors" && compChoice === "Paper")){
        // console.log("You win!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `🎉You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#4F772D";
        
            }
            else{
                console.log("Computer wins!");
                compScore++;
                compScorePara.innerText = compScore;
                msg.innerText = `Computer wins! You Lose 😢 ${compChoice} beats ${userChoice}`;
                msg.style.backgroundColor = "#B23A48";
            }
};

//userschoice
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice clicked");
        playGame(userChoice);
    });
});

