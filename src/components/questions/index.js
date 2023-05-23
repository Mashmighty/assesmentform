import React from 'react'
import "./index.css"
import FormHeader from '../formHeader'
const Questions = ({labels,questions}) => {
   
    return (
    <div><FormHeader labels={labels}/>

    {questions.map((question, index)=>(
        <div className="question-body" key={index}>
           
<p className='question'>{question.questions}</p>
{question.points.map((point,index)=>(
    <div key={index}>
<label>
            <input
              type="radio"
              value={point}
            //   checked={this.state.selectedOption === point}
            //   onChange={this.onValueChange}
            />
        
          </label>
</div>
))}

</div>
    ))}
    <div className='question-footer'>
        <div>comments</div>
        <div>
        <textarea  rows={3}  />
        </div>
        
    </div>
    </div>
  )
}
export default Questions