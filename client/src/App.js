import './App.css';
import { useEffect, useState } from 'react'
import { getQuestions, }  from './services'
import Question from './components/Question'
function App() {

  const [QA, setQA] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const grabQuestions = async () => {
      const res = await getQuestions()
      setQA(res)
      // console.log(res)
    }
    grabQuestions()
  }, [toggle])

  return (
    <div className="App">
      <h1>The More You Know</h1>
      {QA.map((question) => (
            <>
            <Question QA={question} setToggle={setToggle} />
            </>
          ))} 
      <Question />
    </div>
  );
}

export default App;
