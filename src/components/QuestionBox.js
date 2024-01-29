import React, { useState } from "react";
import Result from "./Result";
import "../App.css";

export default function QuestionBox({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const [mode, setMode] = useState(false);

  return (
    <>
      {currentQuestion < questions.length ? (
        <div
          className="main-container"
          style={{ color: mode ? "white" : "black" , backgroundColor:mode?"black":"white" }}
        >
          <div className="flex top-section">
            <div></div>
            <h1>Quiz</h1>
            <label className="switch"> 
              <input type="checkbox"></input>
              <span className="slider " onClick={() => {setMode(!mode)}}></span>
            </label>
          </div>
          <div className="questionNoBox flex" style={{backgroundColor:mode?"#8435DE":"#D2E0FB",border:mode?"3px solid black":"3px solid white"}}>
            {currentQuestion + 1}/{questions.length}
          </div>
          <div className="sub-container" style={{backgroundColor:mode?"#8435DE":"#D2E0FB"}}>
            <h2 className="question" style={{ color: highlight ? "red" : (mode?"white":"black")}}>
              {questions[currentQuestion].text}
            </h2>
            <ul className="options-bx flex">
              {questions[currentQuestion].options.map((option) => (
                <li
                  className="options"
                  key={option.id}
                  style={{backgroundColor:mode?"#3B0F6E":"#8EACCD"}}
                  onClick={() => {
                    if (option.isCorrect) {
                      setScore(score + 1);
                    }
                    setCurrentQuestion(currentQuestion + 1);
                  }}
                >
                  {option.text}
                </li>
              ))}
            </ul>
            <div className="flex high-btn-box">
              <button style={{border:mode?"2px solid white":"3px solid black",color:mode?"white":"black",backgroundColor:mode?"#8435DE":"#D2E0FB"}} className="highlight-btn" onClick={() => setHighlight(true)}>Highlight</button>
              <button style={{border:mode?"2px solid white":"3px solid black",color:mode?"white":"black",backgroundColor:mode?"#8435DE":"#D2E0FB"}} className="highlight-btn" onClick={() => setHighlight(false)}>
                Remove Highlight
              </button>
            </div>
          </div>
        </div>
      ) : (
        <Result
          score={score}
          total={questions.length}
          mode={mode}
          handleRestart={() => {
            setCurrentQuestion(0);
            setScore(0);
          }}
        />
      )}
    </>
  );
}
