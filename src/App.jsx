import React from 'react'
import { useState } from 'react';

const App = () => {
  const colors = ["#17301C", "#379392", "#4FB0C6", "#4F86C6", "#744FC6"];  ;
  const defaultColor = '#ffffff';

  const [color , setColor] = useState(defaultColor)
  const [index,setIndex] = useState(0)

  const colorChange = ()=>{
    if(index >= colors.length){
      setColor(defaultColor)
      setIndex(0)
    }else{
      setColor(colors[index])
      setIndex(index + 1)
    }
  }
  return (
    <div className='container' style={{backgroundColor:color}}>
      <div className="main" style={{display:'flex' , flexDirection:"column" , justifyContent:"center" , alignItems:"center" , gap:"15px"}}>
        <h1 style={{fontFamily:"sans-serif", fontWeight:"500", fontSize:"24px", letterSpacing:"2px"}}>Click on Button to Change The Color of Background</h1>
        <button style={{padding:"10px 30px", fontSize:"14px" , fontFamily:"sans-serif", letterSpacing:"1px", backgroundColor:"black", color:"white" , border:"none"}} onClick={colorChange}>Colors</button>
      </div>
    </div>
  )
}

export default App