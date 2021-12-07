import React from 'react'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { postQuestion } from '../services'
import {useNavigate} from 'react-router-dom'

export default function Form(props) {

  const [ask, setAsk] = useState('')
  const [askAuthor, setAskAuthor] = useState('')
  const [question, setQuestion] = useState('')
  const [author, setauthor] = useState('')
  const [toggle, setToggle] = useState(false)
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
          <input className="ask-input" value={ask} placeholder="Ask a Question" onChange={(e) => setAsk(e.target.value)} />
          <input className="ask-input" value={askAuthor} placeholder="Your Name" onChange={(e) => setAskAuthor(e.target.value)} />
          <button className="ask-button" type="submit">Submit!</button>
        

        </form>
      </div>
    )
  
}