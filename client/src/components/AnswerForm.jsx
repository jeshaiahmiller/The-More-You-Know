import React from "react";
import { useState } from "react";
import { postAnswer } from "../services";
// import { useNavigate } from "react-router-dom";

export default function Form({ id, setToggle }) {
  const [answers, setAnswers] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAnswer = {
      answers,
    };

    const response = await postAnswer(newAnswer, id);
    setToggle((prevToggle) => !prevToggle);
    // console.log(response);
    // if (response) {
    //   navigate(`/questions/${id}`);
    // }
  };

  return (
    <div>
      <form className="ask" onSubmit={handleSubmit}>
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
