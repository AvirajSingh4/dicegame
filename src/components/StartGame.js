import React from 'react'
import '../App.css'

const StartGame = ({toggle}) => {
  return (
    <div className='container'>
      <div className='image1'>
      <img className='image2' src='https://media.istockphoto.com/id/183819034/photo/two-dices.jpg?s=612x612&w=0&k=20&c=sawA-Q6tAlmzm37EiFViPCr9AT3f-PnwCM8qXrQzR2w=' alt=''/>
      </div>
      <div className='start'>
        <h1 className='hometext'>Dice Game</h1><br/>
        <button className='startbtn' onClick={toggle}>Start Game</button>
      </div>
    </div>
  )
}

export default StartGame
