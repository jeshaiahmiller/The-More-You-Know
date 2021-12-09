import {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getQuestion } from '../services'
import AnswerForm from './AnswerForm'


export default function QuestionDetail({setQuestion, setToggle, question, answers}) {

  const [questionAnswers, setQuestionAnswers] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  
  
  
  
  useEffect(() => {
    const grabQuestion = async () => {
      const res = await getQuestion(id);
      setQuestion(res);
    };
    grabQuestion();
  }, [id, setQuestion])

  useEffect(() => {
    const specificAnswers = answers.filter((ans) => {
      return ans?.fields?.questions[0] === id
    })
    setQuestionAnswers(specificAnswers)
  }, [answers, id])
  
  if (!question) return <h1>Loading...</h1>
  

  const handleClick = () => {
    navigate(<AnswerForm />)
  }

  return (
    <div>
    <div className="question-detail">
      <h3 className="single">{question.fields.question}</h3>
        <h4 className="single">By: {question.fields.author}</h4>
      </div>
      <button onClick={handleClick}>Answer!</button>
      <h2 className="Answertitle">Responses</h2>
      {questionAnswers.map((answer) => (
        
        <div key={answer.fields.answers} className="answer">
          <h3 key={answer.author} className="single">{answer.fields.author} said: </h3>
          <p key={answer.answers} className="single">{answer.fields.answers}</p>
        
          </div>
        
      ))}
      <AnswerForm id={id} setToggle={setToggle} />
      </div>
    
  )
}
