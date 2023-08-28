import React from 'react'

const NumberSelect = ({setError,error,selectednumber,setSelectedNumber}) => {
    
    const Numbers=[1,2,3,4,5,6]


    const setErrorHandler=(value)=>{
      setSelectedNumber(value)
      setError("")
    }

    
    
    //console.log(selectednumber)
    return (
    <div className="number-select">
      <p className='error'>{error}</p>
    {Numbers.map((value,i)=>(
    <div className='box' isselected={value===selectednumber} style={{background:`${(props)=>(props.isselected?"black":"white")}`}}key={i} onClick={()=>setErrorHandler(value)}>{value}</div>
    ))}

    </div>
  )
}

export default NumberSelect