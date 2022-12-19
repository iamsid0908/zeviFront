import React, { useState } from 'react'
import "./Filter.css"

function Filter() {
  const[values,setValues]=useState(true);
    
  const handlefunction=()=>{
    setValues(!values);
  }
  return (
    <div>
    <button className='brand-filter' onClick={handlefunction}>Brands</button>
    {
      (values)?
      <div className='brand-list'>
        <div className='brand'>
          <input type='checkbox' className='box'></input>
          <label className='label'>H&M</label>
        </div>
        <div className='brand'>
          <input type='checkbox' className='box'></input>
          <label className='label'> Zara</label>
        </div>
        <p className='border'></p>
      </div>
   :(
    <div></div>
   )
    }
   
    </div>
  )
}

export default Filter