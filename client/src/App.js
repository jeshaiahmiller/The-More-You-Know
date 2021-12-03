import './App.css';
import { useEffect, useState } from 'react'
import { getQuestions, }  from './services'
import Question from './components/Question'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {

  const [QA, setQA] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const grabQuestions = async () => {
      const res = await getQuestions()
      setQA(res)
      console.log(res)
    }
    grabQuestions()
  }, [toggle])
  if (QA.length === 0) {
    return (<h3>Loading...</h3>)
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>The More You Know</h1>} />
      </Routes>
      <Navbar />
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
