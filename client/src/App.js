import "./App.css";
import React, { useEffect, useState } from "react";
import { getQuestions, getAnswers } from "./services";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Guidelines from "./components/Guidelines";
import Form from "./components/Form";
import QuestionDetail from "./components/QuestionDetail";
import Questions from './components/Questions'

function App() {
  const [QA, setQA] = useState([]);
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState(null)
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const grabQuestions = async () => {
      const res = await getQuestions();
      const res2 = await getAnswers();
      setQA(res);
      setAnswers(res2)
    };
    grabQuestions();
  }, [toggle]);
  
  if (QA.length === 0) {
    return <h3 className="loading">Loading...</h3>;
  }

  return (
    <div className="App">
      <div className="header">
        
        <br />
        <Link to="/" className="title">
          The More You Know
        </Link>
      </div>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route
          path="/"
          element={<Questions QA={QA}/>}
        />
        <Route path="/ask" element={<Form setToggle={setToggle} />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/questions/:id" element={<QuestionDetail setQuestion={setQuestion} setToggle={setToggle} question={question} answers={answers}/>} />
      </Routes>
      <div>
      </div>
    </div>
  );
}

export default App;
