import React, { useState } from 'react'

const Tour = ({id,image,info,price,name,removeTour}) => {
    const[readmore,setreadmore] = useState(true)

  return (
    <article className='single-tour'>
        <img src={image} alt={name}></img>
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className='tour-price'>${price}</h4>
            </div>
            <p>    
            {readmore ? info : `${info.Substring(0, 200)}...`}
            </p>
            <button onClick={()=>setreadmore(!readmore)}>
            {readmore ?'show less' : 'read more'}
            </button>
            <button className='delete-btn' onClick={()=>removeTour(id)}>
                not interested
            </button>
        </footer>
    </article>
  )
}

export default Tour