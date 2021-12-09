import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getQuestion } from '../services'
import AnswerForm from './AnswerForm'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FlagIcon from '@material-ui/icons/Flag'
import IconButton from "@material-ui/core/IconButton";

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
  
  if (!question) return <h1>Loading...</h1>
  

  return (
    <div>
    <div className="question-detail">
      <h3 className="single">{question.fields.question}</h3>
        <h4 className="single">{question.fields.author}</h4>
      
      </div>
      <div className="thumbicons">
        <IconButton>
      <ThumbUpIcon className="thumbup" style={{ color: 'white' }} />
        </IconButton>
        <IconButton>
        <ThumbDownIcon style={{ color: 'white' }} />
        </IconButton>
        </div>
        <div className="flag">
          <FlagIcon style={{ color: 'white' }}/>
      </div>
      
      <h2 className="Answertitle">Responses</h2>
      {questionAnswers.map((answer) => (
        <div>
        <div key={answer.fields.answers} className="answer">
          <h3 key={answer.author} className="single">{answer.fields.author}</h3>
          <p key={answer.answers} className="single">{answer.fields.answers}</p>
        </div>
        <div  className="thumbicons">
            <ThumbUpIcon className="thumbup" style={{ color: 'white' }}/>
            <ThumbDownIcon style={{ color: 'white' }} />
        </div>
        <div className="flag">
              <FlagIcon style={{ color: 'white' }}/>
          </div>
          </div>
        
      ))}
      <AnswerForm id={id} setToggle={setToggle} />
      
      </div>
    
  )
}
