import React,{ useEffect, useState} from 'react'

function HocksEx() {
  const[count,setCount]=useState(0)  
  useEffect(()=>{
    document.title="HI";
    console.log({count})
  }

)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>ClickMe</button>
      <br></br>
      <button onClick={()=>{setCount(count-1)}}>ClickMe</button>
      <br></br>
      <button onClick={()=>{setCount(count+5)}}>ClickMe</button>
    </div>
  )
}

export default HocksEx