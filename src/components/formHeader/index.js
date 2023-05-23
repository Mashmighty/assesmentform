import React from 'react'
import "./index.css"
const FormHeader = ({labels}) => {
  return (
    <div className='form-header'>
       {labels.map((label, index)=><div key={index}>{label}</div>)}

       </div>
  )
}

export default FormHeader