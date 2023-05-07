import React from 'react'
import "./index.css"
const Tabs = ({tabs}) => {
  
  return (
    <div className='tabs-wrapper'><ul className='tabs'>
        {tabs.map((item,index)=><li className='tab' key={index}>{item.name}</li>)}
  </ul></div>
  )
}

export default Tabs