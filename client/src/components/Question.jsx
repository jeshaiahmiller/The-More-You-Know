import React from 'react'

export default function Question(props) {
  // console.log(props.QA)
  if (!props.QA) {
    return <p></p>
  }
  return (
    <div>
    <div key={props.QA.id}>
      {props.QA && props.QA.fields.question && props.QA.fields &&
          <>
          <div className="question">
          <h3>{props.QA.fields.question}</h3>
          <p>{props.QA.fields.author}</p>
          </div>
      </>
      }
      </div>
      </div>

  )
}

