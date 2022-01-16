import React from 'react'

// box for x and 0
const Square = (props) => {
    return (
        <button onClick={props.onClick}  name={props.name} className='Sqaures'>
            {props.value}
        </button>
    )
}
export default Square
