import React  from 'react'

const RollDice = ({currentdice,rollDice}) => {
  

 
  return (
    <div>
      <div className='dice' onClick={rollDice}>
        <img className='dice1' src={require(`./images/dice_${currentdice}.png`)} alt='dice1'/>
        <h2>Click to roll the dice</h2>
      </div>
      
    </div>
  )
}

export default RollDice