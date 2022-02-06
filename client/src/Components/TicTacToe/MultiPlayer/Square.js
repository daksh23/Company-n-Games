import React from 'react'

// box for x and 0

const Square = (props) => {

    const color = props.Disable ? 'gray' : '#232323'

    const style = {
        backgroundColor: color,
        border: '0.5px solid black',
        color: 'white',
        fontSize: '50px',
        fontFamily: 'Mochiy Pop P One, sans-serif',
        margin:'1px',
        border:'none',
    }

    return (
        <button disabled={props.Disable} onClick={props.onClick}  name={props.name} style ={style}>
            {props.value}
        </button>
    )
}
export default Square
