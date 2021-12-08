import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getQuestion } from '../services'
import AnswerForm from './AnswerForm'

export default function QuestionDetail({setQuestion, setToggle, question, answers}) {

  const [questionAnswers, setQuestionAnswers] = useState([])
  const { id } = useParams()
  
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
  
  if(!question) return <h1>Loading...</h1>

  return (
    <div>
      <h1>{question.fields.question}</h1>
      <AnswerForm id={id} setToggle={setToggle}/>
      {questionAnswers.map((answer) => (
        <div>
          <p>{answer.fields.answers}</p>
        </div>
      ))}
    </div>
  )
}
