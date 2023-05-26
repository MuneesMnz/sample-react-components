import React, { useState } from 'react'

const ArrayLopInp = () => {

 const abv=[1,2]

  const [arr,setarr]=useState([
    {
      proj:"",
      com:"",
      tim:"",
    }
  ])


  const add=()=>{
    setarr([...arr , arr[arr.length-1]])

  }

  const abc=(data)=>{
      setarr(
        
      )
  }

    
  return (
    <div>
       <button type='button' onClick={add} >add</button>

       {
        arr.map((val,ind)=>{
          return (
<div key={ind}>
     <form onSubmit={()=>console.log(arr)}>
       
       <input type='text' value={val.proj} onChange={e=>setarr([{proj:e.target.value}])} />
      
       <button type='submit' >submit</button>
       </form>
     </div>
        )})
       }
     
    </div>
  )
}

export default ArrayLopInp
