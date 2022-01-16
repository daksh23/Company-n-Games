import React from 'react'
import Square from './Square';

function Board(props) {
    return (
        <div className='Board'>
            {[...Array(9)].map((_, index) => <Square
                key={index}
                name={index}
                onClick={() => props.onClick(index)}
                value={props.board[index]}/>)}
        </div>
    )
}

export default Board;