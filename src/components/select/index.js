import React from 'react'
import "./index.css"
const Select = ({options,label,placeHolder}) => {
  return (
    <div><label for={label} className='label'>{label}:</label>

    <select name={label} className='select' id={label} placeholder={placeHolder}>
    {options.map((item,index)=><option key={index} value={item.value}>{item.name}</option>)}
          </select></div>
  )
}

export default Select