import React from 'react'
import "./index.css"
const Header = ({title, height="60px"}) => {
  return (
    <div className='header'style={{height: `${height}`}}>
        <h3 className='title'>{title}</h3>
    </div>
  )
}

export default Header