import React, {useState} from 'react'
import {Box, Button} from '@mui/material';
import Board from './Board';

const Winner = (board) => {

    // winner combination
    const lines = [
        [
            0, 1, 2
        ],
        [
            3, 4, 5
        ],
        [
            6, 7, 8
        ],
        [
            0, 3, 6
        ],
        [
            1, 4, 7
        ],
        [
            2, 5, 8
        ],
        [
            0, 4, 8
        ],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        let [a,
            b,
            c] = lines[i];
        //console.log(board[a] === board[b] && board[a] === board[c])
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;

}

function SingleBox() {

    const [Disabled, setDisabled] = useState(true)


    // Starting point with empty board
    const [board,
        setBoard] = useState(Array(9).fill(""));

    // first player with 'x' Sign
    const [isPlayer,
        setIsPlayer] = useState("X")

    // restart game
    const refresh = () => {
        setBoard(Array(9).fill(""));
        setIsPlayer("X");
    }

    // Game Handler function
    const handleGame = (index) => {

        if (isPlayer === "" || board[index] !== "") {
            return;
        }

        const boardCopy = [...board]; // copy board from last state
        boardCopy[index] = isPlayer;

        setBoard(boardCopy); // updating board for current player

        if (Winner(boardCopy)) {

            console.log("Winner is " + isPlayer);
            setIsPlayer("");
            return;
        }

        if (boardCopy.indexOf("") === -1) {
            // if no more moves game is draw
            console.log("DRAW")
            setIsPlayer("");
        } else {
            let nextPlayer = (isPlayer === "X")
                ? "O"
                : "X"
            setIsPlayer(nextPlayer); // updating player
            console.log(`TURN: ${nextPlayer}`)
        }
    }

    return (
        <div className='TTTArea'>
            <Board onClick={handleGame} board={board}/>
            <br/>
            <Button
                style={{
                color: 'white',
                backgroundColor: 'black'
            }}
                variant='contained'
                size='large'>
                Start
            </Button>
            <br/>
            <Button
                style={{
                color: 'white',
                backgroundColor:`${Disabled ? 'gray' : 'black'}`
            }}
                variant='contained'
                size='large'
                onClick={refresh}
                disabled={Disabled}>
                Restart
            </Button>
        </div>
    )
}

export default SingleBox
