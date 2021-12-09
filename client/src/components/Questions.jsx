import React from 'react'
import {Link} from 'react-router-dom'
import Question from '../components/Question'

export default function Questions({ QA }) {


  
  return (
    <div>
  
      {QA.map((question) => (
        <React.Fragment key={question.id}>
          <div className="map">
          <Link to={`/questions/${question.id}`}>
            <Question QA={question} />
          </Link>
          </div>
        </React.Fragment>
      ))}
    
    </div>


  )
}