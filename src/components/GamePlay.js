import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelect from './NumberSelect'
import RollDice from './RollDice'

const GamePlay = () => {
  const [score,setScore]=useState(0)
  const [selectednumber,setSelectedNumber]=useState()
  const [currentdice,setCurrentDice]=useState(1)
  const [error,setError]=useState("")

  const generateNumber=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min)
  }

  const rollDice=()=>{
    if(!selectednumber){
      setError("Please select a number")
      return
    }
    setError("")

    const number=generateNumber(1,7)
    setCurrentDice((prev)=>number)

   

    if(selectednumber===number){
      setScore((prev)=>prev+number)
    }else{
      setScore((prev)=>prev-2)
    }
  }

  const Resetscore=()=>{
    setScore(0)
  }

  

  return (
    <div>
      <TotalScore score={score}/>
      <NumberSelect setError={setError} error={error} selectednumber={selectednumber}
      setSelectedNumber={setSelectedNumber}/>
      <RollDice currentdice={currentdice} rollDice={rollDice}/>
      <div className='btns'>
        <button className='resetbutton' onClick={Resetscore}>Reset</button>
      </div>
    </div>
  )
}

export default GamePlay