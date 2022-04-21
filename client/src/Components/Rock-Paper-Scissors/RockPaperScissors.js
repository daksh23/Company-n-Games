import React, {useState,} from 'react'
import {Button, Dialog} from '@mui/material'
import {ToastContainer, toast} from 'react-toastify';

const RockPaperScissors = ({open, handleClose}) => {

    const choices = ["rock", "paper", "scissors"];
   
    const [playerChoices,
        setPlayerChoice] = useState("");
    const [computerChoices,
        setComputerChoice] = useState("");

    

    const setChoice = (e) => {

        setPlayerChoice(e.target.dataset.id);
        const playerAns = e.target.dataset.id;
        
        const computerChoiceIndex = Math.floor(Math.random() * choices.length);
        const computerAns = choices[computerChoiceIndex];
        setComputerChoice(computerAns);
        
        const timer = setTimeout(() => {
            result(computerAns, playerAns);
            clearTimeout(timer);
          }, 1000);


    };

    const result = (computerChoice, playerChoice) => {

        if (computerChoice === playerChoice) {
            toast("Tie")
        } else if ((computerChoice === "rock" && playerChoice === "scissors") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissors" && playerChoice === "paper")) {
            toast("Computer wins")
        } else {
            toast("You win")
        }
    }

return (
        <Dialog open={open} onClose={handleClose}>
        <h5 className='rpsHeading'>
            Rock Paper Scissors
        </h5>
        <div className='rps'>
            <div className='FirstRps'>
                <Button
                    size="large"
                    sx={{
                    background: "black"
                }}
                    variant='contained'
                    className='rpsBtn'
                    data-id="rock"
                    onClick={setChoice}>
                    👊
                </Button>
                &nbsp; &nbsp; &nbsp;
                <Button
                    size="large"
                    sx={{
                    background: "black"
                }}
                    variant='contained'
                    className='rpsBtn'
                    data-id="paper"
                    onClick={setChoice}>
                    ✋
                </Button>
            </div>
            <div className='LastRps'>
                <Button
                    size="large"
                    sx={{
                    background: "black"
                }}
                    variant='contained'
                    className='rpsBtn'
                    data-id="scissors"
                    onClick={setChoice}>
                    ✌️
                </Button>
            </div>
            <div>
                    You : {playerChoices}
                    <br />
                    Computer : {computerChoices}
                    <br />
            </div>
        </div>
        <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={true}/>
    </Dialog>
)
}

export default RockPaperScissors