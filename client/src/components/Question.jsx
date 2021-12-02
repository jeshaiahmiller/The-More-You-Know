import React from 'react'

export default function Question(props) {
  return (
    <div key={props.QA.fields?.question}>
      {props.QA && props.QA.fields?.question && props.QA.fields &&
        <>
        <h3>{props.QA.fields?.question}</h3>
      
      </>
      }
    </div>
  )
}
