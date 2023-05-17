import React from 'react'
import "./index.css"
const Select = ({options,label,placeHolder,onChange,value}) => {
  return (
    <div><label for={label} className='label'>{label}:</label>

    <select name={label} className='select' id={label} placeholder={placeHolder} onChange={onChange} value={value}>
    {options.map((item,index)=><option key={index} value={item.value}>{item.name}</option>)}
          </select></div>
  )
}

export default Select