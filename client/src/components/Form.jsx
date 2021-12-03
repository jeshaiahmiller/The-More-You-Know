import React from 'react'
import { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'

export default function Form() {

  const [ask, setAsk] = useState('')
  const [askAuthor, setAskAuthor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
}


  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input value={ask} placeholder="Ask a Question" onChange={(e) => setAsk(e.target.value)} />
        <input value={askAuthor} placeholder="Your Name" onChange={(e) => setAskAuthor(e.target.value)} />
        <button type="submit">Submit!</button>
        

      </form>
    </div>
  )
}
