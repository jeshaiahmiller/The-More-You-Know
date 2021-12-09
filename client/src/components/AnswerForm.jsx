import React from "react";
import { useState } from "react";
import { postAnswer } from "../services";


export default function Form({ id, setToggle }) {
  const [author, setAuthor] = useState('')
  const [answers, setAnswers] = useState("");
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAnswer = {
      author,
      answers,
    };
    setAuthor('')
    setAnswers('')
    const response = await postAnswer(newAnswer, id);
    setToggle((prevToggle) => !prevToggle);
    return response
  };

  return (
    <div>
      <form className="ask" onSubmit={handleSubmit}>
        <input
          className="author-input"
          value={author}
          placeholder="Name"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className="ask-input"
          value={answers}
          placeholder="Write an Answer"
          onChange={(e) => setAnswers(e.target.value)}
        />
        <button className="ask-button" type="submit">
          Submit!
        </button>
      </form>
    </div>
  );
}
