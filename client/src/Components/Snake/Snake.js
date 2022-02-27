import React from 'react'

function Snake(props) {
  return (
    <div>
      {props.snake.map((dot, i) => {
        const style = {
          left: `${dot[0]}%`,
          top: `${dot[1]}%`,
          color:"red",
          
        }
        return (
          <div className="snake-dot" key={i} style={style}> </div>
        )
      })}
    </div>
  )
}

export default Snake