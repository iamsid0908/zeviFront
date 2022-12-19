import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import "./Star.css"


function Star({rating}) {
    // let arr=[];
    // const fields = [];

    // arr.push(rating);
    
    // for(var i=0;i<arr.length;i++){
       
    // }
    const keys = [...Array(rating).keys()];
  return (
      <div className='repeat-star'>
          {keys.map((item) => (
          <div key={item}>{<StarIcon className='star-icon'/>}</div>
        ))}
        <p>(20)</p>

      </div>

  )
}

export default Star