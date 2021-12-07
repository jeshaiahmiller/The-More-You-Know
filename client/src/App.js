import './App.css';
import { useEffect, useState } from 'react'
import { getQuestions, }  from './services'
import { Routes, Route, Link } from 'react-router-dom'
import Questions from './components/Questions'
import Navbar from './components/Navbar'
import Guidelines from './components/Guidelines'
import Form from './components/Form'
import Question from './components/Question'
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
      <div className="header"> <br />
        <Link to="/" className="title">The More You Know</Link>
        </div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={ QA.map((question) => (
            <>
            <Question QA={question} setToggle={setToggle} />
            </>
          ))}/>
        <Route path='/ask/:id' element={<Form setToggle={setToggle} />} />
        <Route path="/guidelines" element={<Guidelines />} />
      </Routes>
    <div>
  
    </div>
    </div>
  );
}

export default App;
