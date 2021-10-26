import React from 'react'

const CountButton = ({setCount, count, value}) => {
    const handleCount = () =>{
        setCount(count+value)
    }
    return (
      <button onClick={handleCount}>
          {value > 0?"+" : ""} {value}
      </button>
    )
}

export default CountButton
