import React, {useState, useEffect, useMemo} from 'react'

const RockPaperScissors = () => {

    const choices = ["rock", "paper", "scissors"];

    const [playerChoice,
        setPlayerChoice] = useState("");
    const [computerChoice,
        setComputerChoice] = useState("");

    const setChoice = (e) => {
        console.log('player choice: ', e.target.dataset.id);
        setPlayerChoice(e.target.dataset.id);
        
        const selection = setInterval(() => {
            ComputerThinking()
        }, 3000);
        
        const done = setInterval(() => {
            result()
        }, 4000);

    };

    const ComputerThinking = () => {
        const computerChoiceIndex = Math.floor(Math.random() * choices.length);

        setComputerChoice(choices[computerChoiceIndex]);
        console.log('computer choice: ', choices[computerChoiceIndex]);
    }

    const result = () => {

        if (computerChoice === playerChoice) 
            console.log('tie');
        
        else if ((computerChoice === "rock" && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissors" && playerChoice === "paper")) 
            console.log('computer wins');
        
        else 
            console.log('player wins');
        }
    ;

    return (
        <div>
            <button data-id="rock" onClick={setChoice}>
                Rock
            </button>
            <button data-id="paper" onClick={setChoice}>
                Paper
            </button>
            <button data-id="scissors" onClick={setChoice}>
                Scissor
            </button>
            <button onClick={result}>
                Submit
            </button>
        </div>
    )
}

export default RockPaperScissors