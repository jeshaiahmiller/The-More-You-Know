import React from 'react'
import { useState } from 'react'
import { postQuestion } from '../services'
import {useNavigate} from 'react-router-dom'

export default function Form(props) {


  const [question, setQuestion] = useState('')
  const [author, setAuthor] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newQuestion = {
      question,
      author
    }
    
    const response = await postQuestion(newQuestion)
    props.setToggle(prevToggle => !prevToggle)
    console.log(response)
      if (response) {
        navigate('/')
      }
    
  }
      
    return (
      <div>
        <form className="ask" onSubmit={handleSubmit}>
        <input className="author-input" value={author} placeholder="Your Name" onChange={(e) => setAuthor(e.target.value)} />
          <input className="ask-input" value={question} placeholder="Ask a Question" onChange={(e) => setQuestion(e.target.value)} />
          <button className="ask-button" type="submit">Submit!</button>
        

        </form>
      </div>
    )
  
}