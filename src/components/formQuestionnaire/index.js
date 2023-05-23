import React from 'react'
import Header from '../header'
import "./index.css"
import Questions from "../questions"

const FormQuestionnaire = () => {

  const allQuestions=[{
    questions:[{questions:"how are you?", points:[2,3,4,5,6]},{questions:"how are you again?", points:[2,3,4,5,6]}],
    labels :["","No day","One day"," Two days"," Three days","Above Three days"]
  ,},{
    questions:[{questions:"how are you?", points:[2,3,4,5,6]}],
    labels :["","No day","One day"," Two days"," Three days","Above Three days"]
  },{
    questions:[{questions:"how are you?", points:[2,3,4,5,6]},{questions:"how are you again?", points:[2,3,4,5,6]},{questions:"how are you again?", points:[2,3,4,5,6]}],
    labels :["","No day","One day"," Two days"," Three days","Above Three days"]
  }]

  return (
    <div className='form'>
       <Header title="CASH MANAGEMENT FORM" height="30px"/>
       {allQuestions.map((q,index)=>(  <Questions labels={q.labels} questions={q.questions} key={index}/>))}
     
 
       
  </div>
  )
}

export default FormQuestionnaire