import React, {useState} from 'react'
import {Button} from '@mui/material';
import Board from './Board';
import {ToastContainer, toast} from 'react-toastify';

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

function MultiPlayerBox({PlayerName}) {

    // state for board and button
    const [Disabled,
        setDisabled] = useState(true)
    const [Visible, setVisible] = useState(false);

    // Starting point with empty board
    const [board,
        setBoard] = useState(Array(9).fill(""));

    // first player with 'x' Sign
    const [isPlayer,
        setIsPlayer] = useState("x")


    // Game Handler function
    const handleGame = (index) => {

        if (isPlayer === "" || board[index] !== "") {
            return;
        }

        const boardCopy = [...board]; // copy board from last state
        boardCopy[index] = isPlayer;

        setBoard(boardCopy); // updating board for current player

        if (Winner(boardCopy)) {

            const winnerName = isPlayer == 'x' ? PlayerName.x :PlayerName.o;

            toast.success("Winner is " + winnerName);
            setIsPlayer("");
            setVisible(true)
            setDisabled(true);
            
            return;
        }

        if (boardCopy.indexOf("") === -1) {
            // if no more moves game is draw
            toast.success("Game is Draw")
            setIsPlayer("");
            setVisible(true)
            setDisabled(true);
            } else {
            let nextPlayer = (isPlayer === "x")
                ? "o"
                : "x"
            setIsPlayer(nextPlayer); // updating player
        }
    }

    const HandleStart = () => {
        setDisabled(false)
        toast.success("Game Started")

    }

     // restart game
     const refresh = () => {
        setBoard(Array(9).fill(""));
        setIsPlayer("x");
        toast.success("Game Restarted")
    }

    const HandleClear = () => {
        setBoard(Array(9).fill(""));
        setIsPlayer("x");
        setVisible(false);


        toast.success("hit start button for new game..!")
    }


    return (
        <div className='TTTArea'>

            <Board onClick={handleGame} board={board} Disable={Disabled}/>

            <br/>
            <div className='tttBtnBox'>

                {
                    Visible ? (
                        <Button
                    disabled={Disabled
                    ? false
                    : true}
                    style={{
                    color: 'white',
                    backgroundColor: Disabled
                        ? 'black'
                        : 'darkgray'
                }}
                    variant='contained'
                    size='large'
                    onClick={HandleClear}>
                    clear
                </Button>
                     ) : (
                        <Button
                        disabled={Disabled
                        ? false
                        : true}
                        style={{
                        color: 'white',
                        backgroundColor: Disabled
                            ? 'black'
                            : 'darkgray'
                    }}
                        variant='contained'
                        size='large'
                        onClick={HandleStart}>
                        Start
                    </Button>
                     )
                }





                <span> &nbsp; </span>
                <Button
                    style={{
                    color: 'white',
                    backgroundColor: `${Disabled
                        ? 'gray'
                        : 'black'}`
                }}
                    variant='contained'
                    size='large'
                    onClick={refresh}
                    disabled={Disabled}>
                    Restart
                </Button>
            </div>

            <ToastContainer position="bottom-left" autoClose={2000} hideProgressBar={true}/>
        </div>
    )
}

export default MultiPlayerBox
